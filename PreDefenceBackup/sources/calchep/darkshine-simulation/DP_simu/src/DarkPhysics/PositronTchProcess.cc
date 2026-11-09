#include "DarkPhysics//PositronTchProcess.hh"
#include "DarkPhysics/DarkMatter.hh"
#include "G4ParticleChange.hh"
#include "DarkPhysics/DMParticleAPrime.hh"
#include "G4ProcessType.hh"
#include "G4EmProcessSubType.hh"
#include "G4SystemOfUnits.hh"
#include "Control/Control.h"
#include <string>


PositronTchProcess::PositronTchProcess(DarkPhotons *DarkMatterPointerIn, G4ParticleDefinition *theDMParticlePtrIn,
                                       G4double BiasSigmaFactorIn)
        : G4VDiscreteProcess("PositronAnnihilationTch", fElectromagnetic),  // fElectromagnetic
          theDMParticlePtr(theDMParticlePtrIn),
          myDarkMatter(DarkMatterPointerIn),
          BiasSigmaFactor(BiasSigmaFactorIn) {
//here I don't think what to define
    SetProcessSubType(500);
    //theDMParticlePtr->SetPDGLifeTime(CLHEP::hbar_Planck / (myDarkMatter->Width() * GeV));
}

G4bool PositronTchProcess::IsApplicable(const G4ParticleDefinition &pDef) {
    return ("e+" == pDef.GetParticleName());
    //return fModelPtr->IsApplicableToParticle(pDef);
}

//Here is not need for invisible decay, will be added in future 
G4double PositronTchProcess::GetMeanFreePath(const G4Track &aTrack, G4double, /*previousStepSize*/
                                        G4ForceCondition * /*condition*/ ) {

    G4double DensityMat = aTrack.GetMaterial()->GetDensity() / (g / cm3);
    G4double ekin = aTrack.GetKineticEnergy() / GeV;

    //std::cout << "[Dark Process] E_kin: " << ekin << ", DensityMat: " << DensityMat << std::endl;

    //Define if we can emission of Dark Matter/Dark Photon
    if (myDarkMatter->EmissionAllowed(ekin, DensityMat)) {
        // prevent the XMeanFreePath to be negative temperatory
        G4double XMeanFreePath = myDarkMatter->GetMeanFreePathFactor() / abs(myDarkMatter->GetSigmaTot(ekin));
        XMeanFreePath /= BiasSigmaFactor;
        if(XMeanFreePath<0) XMeanFreePath=abs(XMeanFreePath);
//        std::cout << "DMMeanFreePath = " << myDarkMatter->GetMeanFreePathFactor() << std::endl;
//        std::cout << "SigmaTotal = " << myDarkMatter->GetSigmaTot(ekin) << " [pb]" << std::endl;
//        std::cout << "XMeanFreePath = " << XMeanFreePath << std::endl;
        return XMeanFreePath;
    }
    //if not emit, nothing
    return DBL_MAX;
}

////////////////////////////////////////////////////////
void PositronTchProcess::LUTRandom() {
    TString file_name = dControl->signal_lookup_table;
    TString graph_name = std::to_string((int) dControl->signal_mass) + "MEV";
#ifdef DEBUG
    std::cout << graph_name << std::endl;
#endif
    if (!f || !Lut_hist) {
        f = new TFile(file_name, "READ");
        Lut_hist = (TH2F *) f->Get(graph_name);
        //std::cout<<"read done"<<std::endl;
    }
    Lut_hist->GetRandom2(energy, theta);
    //output energu and theta
    var_LUT[0] = energy;
    var_LUT[1] = theta;
    //delete f;
    //f= NULL;
}
///////////////////////////////////////////////////////

G4VParticleChange *PositronTchProcess::PostStepDoIt(const G4Track &aTrack, const G4Step &aStep) {
//    std::cout << "Dark Process!!" << std::endl;

    const G4double incidentE = aTrack.GetKineticEnergy();
    const G4double DMMass = theDMParticlePtr->GetPDGMass();
    const G4ThreeVector &incidentDir = aTrack.GetMomentumDirection();
    auto *gammaPtr = G4ParticleTable::fgParticleTable->FindParticle("gamma");

    G4double XAcc;
    //G4double angles[2], e_rec_angles[2];

    DM_Mom dark_photon;
    DM_Mom gamma;

    //if (XAcc > 0.00) myDarkMatter->EmissionSimulated();
    // Add look-up table --Xiang
    if (dControl->signal_use_LUT) {
        LUTRandom();
        //double temp_var[2] ={0,0};
        gamma.rec_theta = var_LUT[1];
        XAcc = 1 - var_LUT[0] / (dControl->beam_ene_mono / GeV);
#ifdef DEBUG
        std::cout << "This time XAcc : " << XAcc << std::endl;
#endif

        gamma.rec_phi = G4UniformRand() * 2. * M_PI;
        dark_photon.rec_phi = -gamma.rec_phi;
        dark_photon.rec_theta = 0;
    } else {
        // Angle is Dark Photon
        XAcc = myDarkMatter->SimulateEmissionWithAngle(incidentE / GeV, dark_photon);
        // gamma.rec_theta;
        gamma.rec_phi = -dark_photon.rec_phi;
    }
    gamma.E = incidentE * (1. - XAcc);
    dark_photon.E = incidentE * XAcc;


    // Initialize DM direction vector:
    G4ThreeVector DMDirection(0., 0., .1);
    {
        DMDirection.setMag(1.);
        DMDirection.setTheta(dark_photon.rec_theta);
        DMDirection.setPhi(dark_photon.rec_phi);
        DMDirection.rotateUz(incidentDir);
    }
    // Initialize new projectile particle direction vector:
    G4ThreeVector gammaDirection(0., 0., 1.);
    {
        gammaDirection.setMag(1.);
        gammaDirection.setTheta(gamma.rec_theta);
        gammaDirection.setPhi(gamma.rec_phi);
        gammaDirection.rotateUz(incidentDir);
    }

    auto *movingDM = new G4DynamicParticle(theDMParticlePtr, DMDirection, dark_photon.E - DMMass);
    auto *movingGamma = new G4DynamicParticle(gammaPtr, gammaDirection, gamma.E);
    aParticleChange.Initialize(aTrack);

    // Set DM & gamma:
    aParticleChange.SetNumberOfSecondaries(2);
    aParticleChange.AddSecondary(movingDM);
    aParticleChange.AddSecondary(movingGamma);
    
    //kill projectile:
    aParticleChange.ProposeEnergy(0.);
    aParticleChange.ProposeTrackStatus(fStopAndKill);

//    std::cout << "DM PDG ID = " << theDMParticlePtr->GetPDGEncoding()
//              << " emitted by " << aTrack.GetDefinition()->GetParticleName()
//              << " with energy = " << incidentE / GeV << " [GeV], DM energy = " << DME / GeV <<" [GeV]"<< std::endl;


    return G4VDiscreteProcess::PostStepDoIt(aTrack, aStep);
}
