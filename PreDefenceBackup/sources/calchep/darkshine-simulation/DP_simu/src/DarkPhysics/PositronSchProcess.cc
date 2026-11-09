#include "DarkPhysics//PositronSchProcess.hh"
#include "DarkPhysics/DarkMatter.hh"
#include "G4ParticleChange.hh"
#include "DarkPhysics/DMParticleAPrime.hh"
#include "G4ProcessType.hh"
#include "G4EmProcessSubType.hh"
#include "G4SystemOfUnits.hh"
#include "Control/Control.h"
#include <string>


PositronSchProcess::PositronSchProcess(DarkPhotons *DarkMatterPointerIn, G4ParticleDefinition *theDMParticlePtrIn,
                                       G4double BiasSigmaFactorIn)
        : G4VDiscreteProcess("PositronAnnihilationSch", fElectromagnetic),  // fElectromagnetic
          theDMParticlePtr(theDMParticlePtrIn),
          myDarkMatter(DarkMatterPointerIn),
          BiasSigmaFactor(BiasSigmaFactorIn) {
//here I don't think what to define
    SetProcessSubType(500);
    //theDMParticlePtr->SetPDGLifeTime(CLHEP::hbar_Planck / (myDarkMatter->Width() * GeV));
}

G4bool PositronSchProcess::IsApplicable(const G4ParticleDefinition &pDef) {
    return ("e+" == pDef.GetParticleName());
    //return fModelPtr->IsApplicableToParticle(pDef);
}

//Here is not need for invisible decay, will be added in future 
G4double PositronSchProcess::GetMeanFreePath(const G4Track &aTrack, G4double, /*previousStepSize*/
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
void PositronSchProcess::LUTRandom() {
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

G4VParticleChange *PositronSchProcess::PostStepDoIt(const G4Track &aTrack, const G4Step &aStep) {
//    std::cout << "Dark Process!!" << std::endl;

    const G4double incidentE = aTrack.GetKineticEnergy();
    const G4double DMMass = theDMParticlePtr->GetPDGMass();
    const G4ThreeVector &incidentDir = aTrack.GetMomentumDirection();


    // Do not simulate the decay:
    G4ThreeVector DMDirection = incidentDir;

    auto *movingDM = new G4DynamicParticle(theDMParticlePtr, DMDirection, incidentE - DMMass);
    aParticleChange.Initialize(aTrack);

    // Set DM:
    aParticleChange.SetNumberOfSecondaries(1);
    aParticleChange.AddSecondary(movingDM);
    
    //kill projectile:
    aParticleChange.ProposeEnergy(0.);
    aParticleChange.ProposeTrackStatus(fStopAndKill);

//    std::cout << "DM PDG ID = " << theDMParticlePtr->GetPDGEncoding()
//              << " emitted by " << aTrack.GetDefinition()->GetParticleName()
//              << " with energy = " << incidentE / GeV << " [GeV], DM energy = " << DME / GeV <<" [GeV]"<< std::endl;


    return G4VDiscreteProcess::PostStepDoIt(aTrack, aStep);
}
