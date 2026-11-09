# Speaker notes

## 01. Design of DarkSHINE Simulation Framework and Prospective Study of Positron-Beam Mode

Good afternoon, professors. I am Xuliang Zhu. My dissertation covers the DarkSHINE simulation framework and a prospective search with a positron beam. I will begin with the physics motivation, explain our software work, and then discuss the positron analysis and its expected sensitivity.

## 02. Outline

I will start with the physics motivation and detector requirements, then introduce the simulation and reconstruction framework. I will then present our study of 3 production mechanisms with a positron beam. My focus is on the experimental work: simulating rare backgrounds efficiently, selecting signal events, and estimating the sensitivity. I will explain the theory assumptions where we need them.

## 03. Physics Motivation and DarkSHINE Experiment

Gravitational observations give us evidence for dark matter. To search for it in the laboratory, we need a model of how it interacts with ordinary matter.

## 04. Evidence for dark matter

We see evidence for dark matter over a wide range of scales, from galaxy rotation curves to cluster lensing and the cosmic microwave background. In merging clusters, the hot gas and the mass inferred from lensing can be spatially separated. Together, these observations give us information about the abundance and distribution of dark matter. Its particle identity and its coupling to ordinary matter remain unknown.

## 05. What observations constrain

The observations constrain different properties of dark matter. Its lifetime has to be long enough for it to survive until today, and its motion in the early Universe has to be consistent with the small-scale structure we observe. The phase-space bound applies to fermions. Thermal free-streaming bounds depend on the assumed early velocity distribution. BBN (Big Bang Nucleosynthesis) and the CMB (Cosmic Microwave Background) constrain new species in thermal contact with the Standard Model, as well as later energy injection. These constraints motivate searches for light dark matter, but they rely on different assumptions and do not give a single lower mass limit for every model. For this study, we use a vector-portal benchmark in the MeV to GeV range.

## 06. Complementary dark-matter searches

Direct detection looks for interactions of Galactic dark matter in a detector. It becomes difficult when the recoil energy is very small. Indirect detection looks for products of dark-matter annihilation or decay. At an accelerator, we try to produce dark matter in a controlled collision. We know the beam energy, so we can search for events with less visible energy than expected. This search does not depend on the local halo density. Relating the result to the cosmic abundance still requires a dark-sector model. The experimental challenge is to reject ordinary interactions in which visible particles escape detection.

## 07. The dark photon as a vector portal

This equation describes kinetic mixing between the photon and the dark photon. The parameter epsilon gives the dark photon a small coupling to the electromagnetic current. Its mass determines the kinematics, and epsilon squared approximately scales the production rate. We assume that the dark photon can decay to lighter dark-sector particles, with an invisible branching fraction close to 1. I therefore show the projected limits as a function of mediator mass and kinetic mixing. Later, when comparing with thermal relic targets, I will specify the dark coupling and the mass ratio. We do not need to choose a detailed ultraviolet model for this detector study.

Presenter cue: Start with production through kinetic mixing. Click once to introduce invisible decay and the benchmark assumptions.

## 08. SHINE facility and DarkSHINE beamline

SHINE stands for Shanghai High Repetition-Rate XFEL and Extreme Light Facility. We take an electron-beam design energy of 8 GeV and a design repetition rate of 1 MHz as inputs to the DarkSHINE conceptual design. The electron programme uses a dedicated extraction branch alongside the free-electron-laser beamlines. The benchmark count is three times ten to the fourteen incident electrons, expressed as EOT, or electrons on target. These are the design parameters and beam count used for the simulation study. Positron delivery is a proposed extension of this electron programme.

## 09. DarkSHINE detector conceptual design Baseline 1

This is the DarkSHINE detector conceptual design in the Baseline 1 configuration. Baseline 1 uses a non-staggered twenty by twenty by eleven LYSO ECAL and the original uniform-absorber HCAL. It is the common detector benchmark for the electron and positron sensitivity studies. The Baseline Design Report documents the experiment and detector studies.

Following the beam, the tagging tracker measures the incident electron momentum in the magnetic field. The electron crosses a thin tungsten target, and the recoil tracker measures the outgoing charged particle. The ECAL measures electromagnetic energy and its spatial distribution. The larger HCAL detects hadrons and penetrating muons so that we can reject their visible activity. The trackers use silicon strips, while the ECAL is a segmented crystal array.

Click sequence: Tracking, ECAL, HCAL.

## 10. Detector requirements for a missing-energy search

The Baseline 1 requirements follow from the missing-energy measurement. The tagging tracker needs a hit precision below 10 micrometres and a momentum resolution below 2 percent at 8 GeV. The tungsten target is 0.1 radiation lengths thick to limit multiple scattering. The recoil tracker measures soft charged particles, with the quoted acceptance extending from about 30 MeV to 2 GeV. The ECAL needs high granularity and precise energy measurement to identify localised electromagnetic deposits and events with low visible energy. The HCAL requirements are driven by the neutron background: veto inefficiency below ten to the minus five above roughly 2 GeV, and below ten to the minus three at lower energies. The ECAL and HCAL design papers are collaborative research contributions supporting these subsystem studies.

## 11. Electron-mode signal and background rejection

In electron mode, dark bremsstrahlung produces a dark photon that decays invisibly, together with a recoil electron. The recoil electron usually carries only part of the beam energy. Ordinary bremsstrahlung can also leave a soft electron, but the photon normally deposits its energy in the ECAL (Electromagnetic Calorimeter). The cases of concern are rare processes that transfer this energy to hadrons or muons, or send it outside the detector acceptance. We use the measured momentum, electromagnetic energy and HCAL (Hadronic Calorimeter) veto together to reject these events. The simulation needs to describe both the usual electromagnetic response and the rare shower tails that pass the cuts.

Presenter cue: Start with the signal diagram. Click once to introduce the combined detector requirements and backgrounds.

## 12. Standard Model background hierarchy

Most beam electrons pass through the thin target. Hard bremsstrahlung produces a recoil electron and an energetic photon. Electron–positron conversion is frequent, and tracking and the ECAL can identify those particles. The rarer photonuclear and muon-pair branches put energy into hadrons or muons, making the HCAL veto essential. Electronuclear reactions provide another hadronic source.

After applying the veto, the paper finds muon pairs effectively rejected by HCAL. PN and EN require residual-background estimates in the signal region. This is where the low-energy tails matter and inclusive statistics become insufficient. We therefore simulate six dedicated samples: PN, EN and muon-pair production, each in the target and ECAL, alongside 2.5 billion inclusive events. The rare-process samples are normalised by their branching ratios and used to study rejection and extrapolate the nuclear-background tails. This motivates a framework that can populate and inspect these rare sub-processes efficiently.

## 13. Event Simulation and Reconstruction in DarkSHINE

I will now describe our work on the simulation framework, from defining the detector and recording events to reducing the time needed to simulate rare backgrounds.

## 14. The DarkSHINE software framework

The framework connects the incident beam to a physics prediction. DSimu generates particles and simulates their detector interactions. DEvent carries the truth and hit collections. DAna runs digitisation, reconstruction and analysis, and DDis lets us inspect individual events.

The four plots on the right are physical outputs from the CDR electron-mode simulation. The coloured curves correspond to different dark-photon masses. The dark distributions in the energy, transverse-momentum and angle panels show the inclusive background. The recoil-energy plot separates the softer signal electrons from the background concentrated near the beam energy. The transverse-momentum plot gives a complementary discriminant; this panel requires recoil energy between 50 MeV and 4 GeV. Larger recoil angles and the transverse separation at the detector surface connect these kinematics to the tracker acceptance. The separation panel shows the signal mass dependence. These are the observables we need the framework to produce for detector design and event selection.

I contributed to the general framework design and developed the simulation software, DSimu, the event data structure, DEvent, rare-process biasing and filtering, and ACTS integration. I will now explain how we made large simulation samples more practical to produce and store.

## 15. A common event model: DEvent

DEvent carries several views of the same physical event. Truth particles and steps tell us the momenta, energies, origins and interaction history. Simulated hits record deposited energy, positions, times and detector cell identifiers. Detector-response collections and reconstructed objects then provide cell signals, fitted tracks and clusters. The event display on the right shows why the associations matter: we can follow a particle into a shower and ask which deposits it produced. For a background that enters the signal region, we can trace its origin, inspect the veto activity and check whether reconstruction missed a track or cluster. Named collections also let us rerun response or reconstruction algorithms from stored Geant4 particle and hit records. We choose the persisted collections according to the study that needs them.

## 16. Geometry navigation and event-record optimisation

After obtaining these physics outputs, we optimised the software for large event production. The changes target event records and Geant4 geometry navigation. The storage optimisation starts from the physics information we need. Particle records store momentum components, energy, mass, production vertices and endpoints. Hits store deposited energy, time, position and detector or cell identifiers. These floating-point fields use float rather than double. We also remove duplicated quantities: the momentum magnitude can be calculated from its components, and the PDG identifier replaces a repeated particle-name string. The historical optimisation restricted step histories to the initial electron in the tracker region, where its trajectory is needed. Together with record and memory-layout changes, the reported event size falls from 60.1 to as little as 13.7 kilobytes. Separately, a bounding volume hierarchy speeds navigation through the segmented detector. It reduces the number of individual volumes Geant4 has to test; the benchmark falls from 260 to 42 milliseconds per event. The two numbers describe different optimisations and configurations.

## 17. Generator-level filtering with staged Geant4 tracking

The filter is organised around the physics of rare backgrounds. At stage zero, we run Geant4 tracking for the primary particle and defer its secondaries. We can inspect the primary energy loss and require a hard bremsstrahlung photon. At stage one, we release secondaries from the chosen longitudinal region. A process filter can require a photonuclear, electronuclear or muon-pair interaction and an energy transfer in the parent step. A particle filter instead checks the secondary species and its energy. Only when the requested conditions are met do we release the remaining tracks. There is also an early ECAL veto: once the accumulated deposited energy exceeds the production upper bound, subsequent shower development cannot reduce that accumulated energy. These decisions use Geant4 particle and energy-deposit information and define the generated sample. Reconstructed momentum and calibrated calorimeter selections are applied later.

## 18. Generator-level filter performance

The main gain from this filter is at the storage stage. In the inclusive production test, we saved 270,310 events from twenty billion incident electrons. The filter efficiency, defined here as the fraction of beam events saved, is 0.0014 percent. We therefore write about 74,000 times fewer event records at the same simulated EOT: a storage-efficiency improvement of roughly five orders of magnitude. This makes background production at high EOT practical to store and analyse. The two plots show the physics behind the selection. On the left, only 0.11 percent of the prefiltered sample with a reconstructed recoil track has ECAL energy below 4 GeV. On the right, the blue histogram contains events with one reconstructed recoil track and reconstructed missing momentum above 4 GeV, plotted against truth missing momentum. Adding truth ECAL energy below 4 GeV leaves only six threshold-migration events in twenty million incident electrons. These distributions guide the production cuts. Next, rare-process biasing provides the statistics needed for specific background final states.

## 19. Rare-process biasing and physical normalisation

Biasing lets us study final states that are too rare to populate efficiently in inclusive simulation. We choose the interaction, the material region and an energy threshold, then enhance that interaction cross section. Geant4 then tracks the secondary particles and simulates their interactions, so we can study hadronic activity, muon tracks and leakage. Click once to show a muon-pair conversion scan in the ECAL. The interaction probability increases with the bias factor and eventually saturates. We fit this dependence and evaluate the physical probability at bias factor one. Multiplying by the fraction of incident events with an eligible particle gives the process rate per beam particle. This gives the expected rare-process event count for a specified EOT or POT. The positron analysis uses its dedicated process-rate normalisations.

Presenter cue: Explain which rare final states are enriched, then click once to connect sampling to the physical rate.

## 20. Parallel event simulation

Beam events are independent, so the natural unit of parallel work is a complete event. Each worker generates the primary, simulates its particle trajectories and interactions with Geant4 and fills its particle and detector-hit collections. Implementing this required worker-local event storage, random-number handling and changes to shared framework state. The output still uses the same collections, so the downstream reconstruction and analysis can read the merged sample. The chart shows the measured throughput as the worker count changes. In the eight-unit benchmark, one eight-thread job takes 15,328 seconds, compared with 16,648 seconds for eight single-thread jobs. The practical gain is larger production samples through a shared physics interface. The historical development also reported inclusive-process checks.

## 21. Optical response with a lookup table

The LUT replaces repeated optical-photon propagation with a detector-response model. It is indexed by the photon emission position and direction. We need two outputs: the detection probability, which controls the collected light, and the transit-time distribution, which controls when it reaches the sensor. The middle plot compares the LUT detection efficiency with full optical-photon tracking over depth and angle; the difference stays within five percent in the tested configuration. The right plot compares the transit-time spectra. Most populated bins lie near one, while late photons have larger statistical uncertainty. In the complete-event benchmark, this reduces the time from about 200 seconds to four seconds. This optical-response work is Qibin Liu's collaboration contribution, integrated into the framework.

## 22. Digitisation connects deposits to observables

Digitisation converts simulated deposits into measurable signals. After scintillation and light collection, each detected photon contributes a single-photoelectron pulse, shown in the middle. The time sum of those pulses forms the cell waveform on the right. The model includes SiPM saturation and recovery, electronic noise, the available dynamic range and ADC sampling. Calibration then converts the chosen response estimator into cell energy. This matters directly for our analysis: summing the cell energies gives the visible ECAL energy, while the largest cell response defines the maximum-cell observable. The configuration records which optical or parameterised response produced those quantities. These studies are Qibin Liu's collaboration contribution.

## 23. Track finding and fitting

Track finding identifies which strip measurements belong to a common trajectory. The legacy finder ranks circle candidates and removes accepted hits before continuing. Track fitting estimates momentum and covariance while accounting for the magnetic field, material, measurement errors, energy loss and multiple scattering.

The CDR plot shows the recoil tracker's relative momentum resolution as a function of beam energy, for four to ten tracker layers. It is a detector-performance study. At low energies, multiple scattering affects the measurement; at high energies, the small curvature and available lever arm limit the resolution. Six layers provide the Baseline 1 balance between tracking information and material. The reconstructed momentum and track multiplicity then enter the missing-momentum selection. The framework also supports the GenFit and Riemann fitting implementations described in the software study.

## 24. ACTS integration in DarkSHINE

ACTS needs the detector information in its own tracking representation. We convert the geometry into surfaces and strip-pair hits into measurements and source links, with consistent coordinates for the field and momentum. The reference sequencer then uses truth-smeared seeds, combinatorial Kalman finding, trajectory conversion and vertex reconstruction. Its outputs include fitted states and covariance, track quality information and impact states extrapolated to the ECAL. The plot is an earlier truth-assisted fitter integration test. It shows a track-parameter pull versus transverse momentum: the fitted-minus-truth residual divided by its estimated uncertainty. This illustrates how the integration produces a physical performance diagnostic, alongside the track objects needed by the analysis. My contributions are the sequencer and geometry, field and reconstruction interfaces. The later ACTS developments are separate from the frozen reconstruction used in the positron study.

## 25. Positron-Beam-Mode Analysis

I will now use this simulation chain to study positron running. I will start with the additional production mechanisms and then follow them through the detector selection. We keep the baseline 1 detector so that we can compare with the published electron-beam projection using the same detector design.

## 26. Why a positron beam?

A positron can undergo nuclear bremsstrahlung, just like an electron, and it can also annihilate with an atomic electron. Non-resonant annihilation produces a photon and a dark photon. In resonant annihilation, the electron and positron produce a dark photon that decays to a dark-matter pair, with no accompanying hard visible particle. For an electron initially at rest, an 8 GeV positron gives a centre-of-mass energy of about 90 MeV. This provides a mass scale that we do not have in the electron bremsstrahlung channel. To find the sensitivity gain, we also need to account for the visible final state, detector efficiency, migration between selections and positron backgrounds. I will compare the production rates and detector-level selections for these 3 mechanisms.

Presenter cue: Click 0: introduce dark bremsstrahlung, which also occurs with an electron beam. Click 1: introduce non-resonant and resonant annihilation together, then explain the 90.4 MeV scale.

## 27. Production mechanisms at 8 GeV

Nuclear bremsstrahlung covers a broad range of mediator masses. Non-resonant annihilation is limited by the available centre-of-mass energy, and resonant production is enhanced near that energy. An 8 GeV positron annihilating with an electron at rest has a centre-of-mass energy of 90.4 MeV. Bound electrons are moving, which broadens this picture and allows the resonant samples to extend above the stationary-electron value. We generate on-shell mediators in this study. We do not include a separate off-shell dark-matter-pair calculation. We then apply the detector selection to find the accepted yield for each mechanism.

## 28. Signal and background samples

We simulate 30 bremsstrahlung mass points, 18 non-resonant points and 23 resonant points, with 100,000 events at each point. We calculate efficiencies from these equal-sized samples and apply the physical rates afterwards. For backgrounds, we generate dedicated biased samples of photonuclear, positron-nuclear and muon-pair processes. Production in the target or tracker is separate from production in the ECAL (Electromagnetic Calorimeter). We use the EN (Electronuclear) label for the positron-nuclear sample in this campaign. We also generate ordinary annihilation in the target. POT denotes positrons on target. An independent inclusive sample contains the equivalent of 2.5 × 10⁹ incident positrons. We use it to check the dedicated predictions without adding it to the background total. All sensitivity results use baseline 1.

## 29. Three exclusive signal regions

We assign events to reconstructed categories without using the generated process label. Every category requires exactly 1 tagging track. SR1 (Signal Region 1) requires 1 recoil track and missing momentum above 4 GeV. SR2 (Signal Region 2) and SR3 (Signal Region 3) require 0 recoil tracks and total ECAL (Electromagnetic Calorimeter) energy below 2 GeV. We divide these samples at a maximum-cell energy of 1 MeV, with events on the boundary assigned to region 2. Every region also requires low total HCAL (Hadronic Calorimeter) energy and no cell above 1 MeV. The selections do not overlap. Events with additional tracks or a failed veto are rejected.

## 30. Momentum and total-energy discrimination

On the left is missing momentum. The background sample already passes the loose production filter at 1 GeV; the final analysis cut is 4 GeV. On the right is the total ECAL (Electromagnetic Calorimeter) energy for non-resonant annihilation. Near the mediator-mass endpoint, the accompanying photon is soft. The 90 MeV signal can therefore pass a low-energy cut even though a photon is produced. The detector response and acceptance determine the fraction that passes.

## 31. Maximum-cell energy separates the zero-track sample

For events with no recoil track, the largest ECAL (Electromagnetic Calorimeter) cell helps distinguish a photon deposit from a nearly empty calorimeter. The non-resonant distribution changes with mediator mass because the photon kinematics change. Resonant annihilation usually leaves little activity, although interactions in the tracker material can produce deposits. We also cut on total energy because many small deposits can add up. The 1 MeV values are selection thresholds in the benchmark detector-response model.

## 32. Signal efficiency across the mass scan

These curves show the cutflow efficiency for each production mechanism in its primary region. Each curve is normalised to the generated sample. We apply the cross sections later to obtain the expected mixture of processes. The backups contain all 9 channel-to-region efficiency curves. An event can enter a different region if its recoil track is not reconstructed, or if its photon escapes detection or falls below threshold. For example, bremsstrahlung can enter the regions with no recoil track. Its efficiency in the low-activity region becomes substantial toward the upper end of the mass grid. We include these migrations when predicting the signal. The next slide gives the expected yields at 90 MeV.

## 33. Signal migration at 90 MeV

At 90 MeV, non-resonant annihilation supplies about 95% of SR2 (Signal Region 2), and resonant annihilation supplies about 84% of SR3 (Signal Region 3). Bremsstrahlung contributes very little at this mass. The matrix includes events that migrate away from the primary region of their production mechanism. The entries are expected event counts at a fixed reference coupling, after applying the rates and efficiencies. They are not raw simulation counts.

## 34. Background rejection in the available simulation

This cutflow follows photonuclear interactions in the ECAL (Electromagnetic Calorimeter). The recoil-track cut first divides events into categories with 1 or 0 recoil tracks. The next cut uses momentum in SR1 (Signal Region 1), the maximum-cell lower bound in SR2 (Signal Region 2) and total electromagnetic energy in SR3 (Signal Region 3). The HCAL (Hadronic Calorimeter) veto reduces the samples further, and the final electromagnetic-energy cut removes the remaining simulated events. These bars are unweighted simulation counts, before scaling to the 3 × 10¹⁴ POT benchmark. No event in the inclusive or dedicated samples passes a complete region selection. Because the samples are finite, this does not imply that the physical background is 0.

## 35. Normalisation checked in populated sidebands

We normalise each dedicated sample to its equivalent unbiased POT using the number of generation attempts, generator acceptance and physical branching ratio. The number of attempts differs from the number of stored events, so we keep track of both. We then compare the sum of the dedicated samples, including target annihilation, with the independent inclusive sample where enough events are available. This comparison checks the normalisation and shapes in the populated sidebands. The dedicated samples provide the residual-background prediction through the extrapolation on the next page. The inclusive sample remains an independent cross-check of that prediction.

## 36. Residual-background extrapolation

For SR1 (Signal Region 1) and SR2 (Signal Region 2), we fit the dedicated survival curves with a power law in the total-ECAL (Electromagnetic Calorimeter) threshold, expressed in MeV. The nominal predictions are 0.03 events for region 1 and 1.3 × 10⁻⁴ for region 2. SR3 (Signal Region 3) needs a 2-dimensional fit because total energy and maximum-cell energy are correlated. Its nominal prediction is 1.6 × 10⁻⁴ events. These are predictions from fitted survival trends, extrapolated from populated sidebands to the final ECAL thresholds. The joint fit in SR3 includes the correlation between the two ECAL observables.

## 37. Combined statistical interpretation

At each mass, we sum the contributions from all 3 production mechanisms in every region. A common signal-strength parameter scales them because their rates depend on the same kinetic mixing. We use a binned profile likelihood with nuisance parameters to obtain expected 90% CL (Confidence Level) limits using CLs (the modified frequentist confidence-level method) under the background-only hypothesis. The reported construction treats shape uncertainties as uncorrelated between bins and uses a Poisson prescription for background normalisation. The regions do not share events, although detector uncertainties can be correlated between them.

Presenter cue: Build the signal prediction and region model first. Click once to show the expected-limit construction.

## 38. Annihilation drives the gain near 90 MeV

Each individual curve keeps 1 production mechanism but uses all 3 regions and the same background model. It therefore includes migration between regions. At 90 MeV, non-resonant annihilation gives the strongest individual expected limit, about 7.3 × 10⁻¹³ in epsilon squared. Resonant annihilation also contributes, and the combined limit is 5.33 × 10⁻¹³. Much of the gain comes from non-resonant annihilation near the radiative endpoint, where the accompanying photon can pass the selection.

## 39. Projected reach in mediator mass and kinetic mixing

Here I compare the combined positron projection with the earlier electron-beam projection and other searches. Near 90 MeV, the expected limit on epsilon squared improves by about 2 orders of magnitude at matched integrated luminosity. The annihilation kinematics produce the sharp feature near this mass. Bremsstrahlung remains relevant at lower masses. The figure includes existing exclusions and future projections. Our curve is an expected detector-level sensitivity for the assumed 3 × 10¹⁴ POT, baseline detector and background model.

## 40. Interpretation relative to thermal targets

To compare with thermal dark-matter targets, we use a mediator-to-dark-matter mass ratio of 3 and a dark coupling alpha D of 0.5. A 90 MeV mediator then corresponds to a 30 MeV dark-matter particle. With these choices, the variable y equals epsilon squared divided by 162. This changes the coordinates of the result; the simulated selections and efficiencies stay the same. The scalar, Majorana and pseudo-Dirac targets use different spin and annihilation assumptions. Other models can give different predictions even at the same mass.

## 41. Positron study: results and refinements

The positron analysis is complete for the 8 GeV Baseline 1 benchmark. We evaluated each production mechanism in every reconstructed category, included migration, obtained the background predictions and combined the three exclusive regions. The result demonstrates the sensitivity gain from annihilation, especially near 90 MeV.

Further studies can refine the detector-response inputs using measurements, increase the statistics available for rare-background studies, and extend the uncertainty models as new detector and beam configurations are explored. These are directions for developing the analysis beyond the completed benchmark.

## 42. Summary and Outlook

I will finish with the main software and physics results, then discuss the next steps toward an experimental search.

## 43. Main results

My software contributions cover the general framework design, the development of DSimu and DEvent, rare-process biasing and filtering, production optimisation, and ACTS integration. Together with the collaboration's response and reconstruction work, these components connect simulated interactions to the observables used in the physics analysis.

I used this framework to complete a detector-level positron-beam study with three production mechanisms and three exclusive signal regions. The signal calculation includes migration between all channel and region combinations. Combining the regions gives an expected 90 percent confidence-level limit of 5.33 times ten to the minus thirteen in epsilon squared at a mediator mass of 90 MeV and three times ten to the fourteen POT. At the same detector benchmark and matching integrated luminosity, annihilation improves the reach near this mass by about two orders of magnitude relative to the earlier electron-beam projection.

## 44. Outlook

The completed framework and 8 GeV study support several extensions. Prototype and beam-test measurements can provide more detailed response inputs for digitisation, calibration and veto optimisation. Improved rare-process sampling can increase the statistics available for background studies and support more detailed uncertainty models.

A further physics direction is to vary the positron design energy. The characteristic annihilation mass scales approximately as the square root of the beam energy. Studies at additional energies can therefore explore other mediator masses, with selections optimised for the corresponding recoil and photon kinematics. This extends the physics coverage beyond the 8 GeV benchmark.

## 45. Research Achievements

The first two entries are my lead-author publications on the positron study and the simulation framework. The simulation and reconstruction manuscript is collaborative work with Professor Kim-Siang Khaw and the other authors, and is in preparation. The publications and report on the right are collaborative contributions, including the CEPC study, DarkSHINE physics prospects, calorimeter design and the Baseline Design Report. Thank you for your attention. I welcome your questions.
