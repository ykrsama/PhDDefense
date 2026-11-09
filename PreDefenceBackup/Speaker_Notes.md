# Backup speaker notes

## 01. Questions and supporting material

I can use this index to open the supporting material for each question.

## 02. Reference detector and evolved software geometry

The positron analysis uses the same baseline detector as the published electron comparison. Later geometry developments use a separate software configuration.

## 10. SR3: joint ECAL-threshold extrapolation

We evaluate the fit at x = 1 and y = 2000. The 2-dimensional fit accounts for the correlation between total energy and maximum-cell energy. Multiplying independent 1-dimensional efficiencies would miss this correlation.

## 11. Inclusive comparisons and tail-model dependence

The annotation in the inclusive SR2 (Signal Region 2) figure does not give the nominal background at the 2 GeV cut. We use the dedicated-sample estimates for that input.

## 15. Why is the bias factor not an event weight?

We scale the rare-process cross section by a bias factor b. The probability of that process happening also depends on competing interactions and the distance available in the material. This 1-dimensional model assumes constant effective cross sections along that distance. We fit the scan and evaluate the probability at b = 1. The pool is the set of eligible particles above the bias-energy cut. The pool fraction then converts the conditional probability into a rate per incident particle. This rate-calibration method is separate from Geant4 track-weight bookkeeping.

## 16. Which events enter the biasing normalisation?

We count incident events, eligible events and rare interactions separately. Only some rare events pass the output filters. In this study, we allow at most 1 biased interaction per event and record the counters in truth_cutflow. We fit the rare-to-pool ratio before interpreting the final-state acceptance. A fit made after a truth trigger describes a conditional selected sample, so it cannot simply be read as the unfiltered process rate.

## 17. Does the finite target thickness matter?

These are the original GMM (photon conversion to a muon pair) scans from the 2024 study. The upper panels show the rare-to-pool probability and the lower panels show the simulation-to-fit ratio. In the target, an eligible photon can escape before interacting. In the ECAL (Electromagnetic Calorimeter), it has more material to cross. This explains why a branching-ratio approximation works differently in the 2 regions. The displayed fit parameters and uncertainties belong to this historical configuration; they are not the positron-campaign calibration.

## 18. What does the photonuclear scan test?

PN (photonuclear) interactions show the same rise and saturation. We compare the conditional interaction probability across the bias scan with the fitted model. Agreement here does not by itself validate all secondary-particle spectra or the final background tail. We also compare dedicated samples with inclusive production where there are enough events. The rates on these plots belong to the 2024 study and are not substituted for the positron sample normalisations.

## 19. How well did the early rate comparison agree?

The original rate table is useful because it also shows the discrepancies. GMM (photon conversion to a muon pair), PN (photonuclear) and EN (electronuclear) rates were compared with an inclusive sample of about 10⁷ events. Some ratios differ substantially from 1. A zero observed count in the rarest sample does not measure a zero rate. We do not turn these historical ratios into a systematic uncertainty for the later positron campaign. The campaign uses its own normalisation and inclusive checks, shown in the main report and the other backups.

## 20. How is a biased sample normalised to POT?

For PN (photonuclear) production in the ECAL (Electromagnetic Calorimeter), the campaign convention gives 1.48 × 10¹¹ effective POT (Positrons On Target). We obtain it from 10⁸ generation attempts, an acceptance of 0.2738 and a process branching ratio of 1.85 × 10⁻⁴. The 3 × 10¹⁴ POT benchmark is about 2,030 times this effective POT. The POT normalisation factor scales the selected prediction. It does not recover a tail from a sample with no surviving events, and it is not the cross-section bias factor. The full process table is on backup 3.

## 21. Does zero survival prove a background-free search?

No surviving simulated event is not enough to claim a background-free search. As a simple counting illustration, 0 observed events corresponds to an upper Poisson mean of 2.30 at 90% confidence. Scaling from 2.5 × 10⁹ to 3 × 10¹⁴ POT gives a very weak bound of about 2.76 × 10⁵ events. This calculation assumes an ideal unweighted Poisson sample with known equivalent POT. It is not a substitute for the profile-likelihood construction or a bound to apply blindly to weighted samples. It explains why the study uses sideband extrapolation for its nominal prediction.

## 22. Can the production filters remove useful events?

The production energy and momentum cuts are looser than the final analysis cuts. That is useful, but it is not by itself a proof that the filters have no effect. A truth quantity can differ from its reconstructed counterpart, and the 0-track categories need their own bookkeeping. We check the actual production definitions and the response near the boundaries. We also keep the filter acceptance with the sample. Any excluded phase space is absent from the prediction and cannot be recovered by reweighting.

## 23. Why is the gain concentrated near 90 MeV?

For an 8 GeV positron and an electron at rest, the centre-of-mass energy is about 90.4 MeV. The photon energy in the centre-of-mass frame tends to 0 as the mediator mass approaches this value. This helps non-resonant annihilation pass a low-visible-energy selection. The detector-level efficiencies still determine the accepted yield. Bound-electron motion changes the ideal stationary-electron picture; the specific implementation should be checked against the production configuration rather than inferred from the illustration.

## 24. Do nuclei and electrons have the same luminosity?

We use the number of scattering centres per unit target area. Nuclear bremsstrahlung uses nuclei; annihilation uses atomic electrons. For the same foil, the electron areal density is Z times the nuclear one. We include this factor once, according to how the cross section is defined. We then multiply the rate by the invisible branching fraction and the channel-to-region efficiency. The 10⁵ generated events per mass point determine that efficiency, not the physical event count. Electron-versus-positron comparisons use the same beam count and target. No running-year conversion is needed.

## 25. What supports the 1 MeV cell thresholds?

The ECAL (Electromagnetic Calorimeter) high-gain model gives an equivalent electronic noise of about 2.7 keV per channel. That provides context for a 1 MeV cut, but it does not determine the full probability of a noise-induced veto across many channels. The HCAL (Hadronic Calorimeter) threshold is an assumed performance in this campaign, which does not include complete noise and pileup digitisation. We would test the thresholds with prototype data and propagate the measured response into signal efficiency and background rejection.

## 26. When does the signal scale with epsilon squared?

At fixed mass and with the invisible branching fraction close to 1, the benchmark production rates scale approximately with epsilon squared. We can therefore use a common signal-strength parameter. For the thermal comparison, we choose alpha D = 0.5 and a mediator-to-dark-matter mass ratio of 3, which gives y equal to epsilon squared divided by 162. These are benchmark assumptions. A change in the decay branching fraction or lifetime can change the visible signature and the acceptance. A separate off-shell model should not be inferred from the on-shell efficiency samples.

## 27. Can the software speed-up factors be multiplied?

We quote these benchmarks separately because they measure different costs and use different configurations. Geometry navigation changes the Geant4 simulation time per event. Event-record optimisation changes storage. Filtering changes the number of costly events that we finish and write. The thread comparison uses 8 execution units on both sides, so it does not measure scaling from 1 core. The optical result compares full tracking with a lookup table. We can assess the total production cost only with an end-to-end benchmark under a common setup.

## 28. CalcHEP inputs and detector production

I can show the archived batch settings and the corresponding output headers. We found 8 GeV bremsstrahlung and radiative-annihilation batches requesting 10⁵ events. The calcHEP directory also has an 8 GeV multi-process batch containing a dark-matter-pair process, but it requests only 10 events. The diagramC example is a 4 GeV test. These records verify what those files specify. For detector production, we use the baseline 1, 8 GeV configurations in condor-script. The next page shows how each signal channel is implemented in Geant4.

## 29. Signal implementation in Geant4

I can show an independent 8 GeV job configuration for the resonant channel at 60 MeV. It enables the resonant process, disables the LUT (Lookup Table), and disables visible decay. In this Geant4 process implementation, we create an invisible dark photon along the incoming direction and terminate the positron. Although the class contains a lookup-table reader, the final-state function does not call it. The bremsstrahlung and radiative-annihilation templates use separate 8 GeV tables. The production configurations are stored in condor-script. The CalcHEP rate-test batches and the Geant4 detector simulation have different roles.
