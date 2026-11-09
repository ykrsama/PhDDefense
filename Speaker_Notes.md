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

## 08. SHINE facility and DarkSHINE beamline

SHINE (Shanghai High Repetition-Rate XFEL (X-ray Free-Electron Laser) and Extreme Light Facility) provides the accelerator for DarkSHINE. The electron programme uses a dedicated single-particle extraction branch alongside the FEL (Free-Electron Laser) beamlines. The reference beam energy is 8 GeV, and the benchmark exposure is 3 × 10¹⁴ incident particles. The nominal single-particle rate is 1 MHz. Actual running time depends on SHINE (Shanghai High Repetition-Rate XFEL (X-ray Free-Electron Laser) and Extreme Light Facility) operational inputs. A positron beamline is a proposed extension, and this study evaluates what it could add to the physics reach.

## 09. DarkSHINE detector concept

Following the beam through the detector, the tagging tracker measures the incoming momentum in the magnetic field. The particle then crosses a thin tungsten target, and the recoil tracker measures the outgoing charged particle. The ECAL (Electromagnetic Calorimeter) measures the remaining electromagnetic energy. The larger HCAL (Hadronic Calorimeter) provides enough material to detect penetrating hadrons and muons and reject those events. The trackers use strips, while the electromagnetic calorimeter uses a segmented crystal array. We use the simulation geometry to study their acceptance and response.

Click sequence: Tracking, ECAL (Electromagnetic Calorimeter), HCAL (Hadronic Calorimeter).

## 10. Detector requirements for a missing-energy search

These requirements come from the ways an ordinary interaction can look like missing energy. The tagging tracker needs a hit precision below 10 micrometres. Its reference simulation gives a momentum resolution below 2% at 8 GeV. The tungsten target is 0.1 radiation lengths thick to limit multiple scattering. The recoil tracker needs to measure soft tracks down to about 30 MeV, with acceptance extending to 2 GeV. The ECAL (Electromagnetic Calorimeter) contains electron and photon showers. Its digitised simulation gives a stochastic term below 2%; leakage into the low-energy tail needs a separate study. For the HCAL (Hadronic Calorimeter), the neutron-veto inefficiency target is below 10⁻⁵ above roughly 2 GeV and below 10⁻³ at lower energies. The event background also depends on the neutron spectrum and the other selection cuts.

## 11. Electron-mode signal and background rejection

In electron mode, dark bremsstrahlung produces a dark photon that decays invisibly, together with a recoil electron. The recoil electron usually carries only part of the beam energy. Ordinary bremsstrahlung can also leave a soft electron, but the photon normally deposits its energy in the ECAL (Electromagnetic Calorimeter). The cases of concern are rare processes that transfer this energy to hadrons or muons, or send it outside the detector acceptance. We use the measured momentum, electromagnetic energy and HCAL (Hadronic Calorimeter) veto together to reject these events. The simulation needs to describe both the usual electromagnetic response and the rare shower tails that pass the cuts.

## 12. Standard Model background hierarchy

Electronuclear interactions are one source of background. Another starts with hard bremsstrahlung, followed by pair conversion, a photonuclear interaction or muon-pair production. I show target and ECAL (Electromagnetic Calorimeter) interactions separately because the available veto material and the rates differ. The vertical scale gives approximate relative rates from the electron-mode study. The positron samples have their own normalisation. The small invisible electroweak contribution is shown separately from backgrounds caused by visible particles escaping detection. For the latter, we need enough simulated events in the rare branches and a way to recover their physical rates.

## 13. Event Simulation and Reconstruction in DarkSHINE

I will now describe our work on the simulation framework, from defining the detector and recording events to reducing the time needed to simulate rare backgrounds.

## 14. The DarkSHINE software framework

DSimu configures the detector and physics, runs the simulation, and writes events to ROOT files. DAna reads these files and runs digitisation, reconstruction and analysis in the chosen order. DEvent defines the collections shared between them, and DDis lets us inspect individual events. Our software work covers DSimu, the event model, rare-process biasing, staged filtering and ACTS (A Common Tracking Software) integration, as well as DAna, digitisation, the other tracking algorithms, calorimeter reconstruction and generator validation. With this common event interface, we can inspect an event at each stage. We can also rerun downstream algorithms without repeating transport, provided the files contain the information those algorithms need.

## 15. A common event model: DEvent

DEvent is a container of physics object collections. McParticle and DStep store truth information, and SimulatedHit stores energy deposits from transport. CalorimeterHit contains the detector response, while ReconstructedParticle holds reconstructed objects. AnaEvent is currently an alias of DEvent. We use truth information to understand how a background event was produced, and measured or reconstructed quantities to select events. Collection names identify detector regions and response variants. Changing the input collection can therefore change what a reconstructed energy means, even with the same algorithm. We record the event schema and output choices with each production configuration.

## 16. Geometry and event-record optimisation

We have 2 main optimisations compared with the original baseline 1 DarkSHINE software. The first is a BVH (Bounding Volume Hierarchy). It groups detector volumes so Geant4 can rule out a large region before testing individual cells. In this benchmark, the simulation time falls from 260 to 42 milliseconds per event, about a factor of 6.2. The second improves the event record and memory alignment. The reported file size falls from 60.1 to as little as 13.7 kilobytes per event for that configuration. These benchmarks and the optical study shown later use different configurations, so we cannot multiply their speed-up factors together or treat them as results from a single release.

## 17. Generator-level filtering with staged transport

The generator-level filter runs during particle transportation, before we write the full event to disk. At stage 0, we process only the primary track and keep its secondaries waiting. We can then check the primary interaction or energy loss. At stage 1, we process the relevant secondaries in the chosen region and check for the rare interaction we want. If the event passes, we transport the rest of the shower. We can also stop once the accumulated ECAL (Electromagnetic Calorimeter) energy exceeds an upper bound, because further deposits will only increase it. This saves time on events that we already know will fail the selection.

## 18. Rare-process biasing and physical normalisation

Biasing makes a chosen rare interaction happen more often in a specified region. We then correct the normalisation to recover the physical rate. For weighted event counting, the sum of weights gives the yield, and the sum of squared weights gives the Monte Carlo variance. A sample with many stored events can still have a much smaller effective event count. In the positron production, we use dedicated biasing studies and process cross sections for normalisation; we do not use the stored transport-weight field. Filtering also removes part of phase space. No weight can recover events we never generated, so the production cuts need to cover the phase space used in the analysis.

## 19. Filtering changes the production cost

This production example uses 4 GeV electrons and processes 10¹¹ incident particles on 12,800 cores. Filtering reduces the estimated elapsed time from about 4 days to 15 hours. Storage falls from roughly 3 petabytes to 2.5 terabytes, and the disk write rate also decreases. These are approximate figures for different resource costs. The general filters reject events with too much visible energy or too little missing momentum. Dedicated filters also check for a particular particle or interaction. We save the filter acceptance and retained phase-space range with the sample, since we need them to interpret the output.

## 20. Parallel event simulation

Geant4 can process several events in parallel within a single job. This required changes to thread-local allocation, singleton state, random-number handling and primary generation. In this benchmark, 1 job with 8 threads takes 15,328 seconds. Running 8 single-thread jobs takes 16,648 seconds. Both use 8 concurrent execution units, so the multi-thread job reduces elapsed time by about 8%. This is a comparison of job arrangements, rather than a scaling test from 1 core. We also compare inclusive and rare-process distributions to check that changing the worker count and scheduling preserves the physics.

## 21. Optical response with a lookup table

Tracking every optical photon takes time because a single interaction can produce many photons. The lookup table avoids repeating that transport. It stores the detection probability and transit-time distribution for the simulated optical response. In this study, an event takes about 200 seconds with full optical tracking, 4 seconds with the table and 2 seconds without optical photons. The detection efficiencies shown on the left agree within 5%. This tests the table for the geometry and optical properties used to build it. Electronics effects and changes to the geometry need their own checks. The optical-response and digitisation studies are collaboration contributions integrated into the framework.

## 22. Digitisation connects deposits to observables

Digitisation converts simulated energy deposits into detector signals. Light production and collection determine how many photons reach the sensor. The SiPM (Silicon Photomultiplier) response accounts for finite pixel occupancy and recovery. The electronics model then adds the waveform, noise, finite range and digitisation. We also have a parameterised response for samples that do not need full optical information. The production configuration records which model is used. In the positron analysis, we cut on both total energy and the largest cell deposit, so the response of individual cells near those thresholds matters.

## 23. Track finding and fitting

Track finding decides which hits belong to the same track. The legacy algorithm for low-multiplicity events uses a quick circle pre-fit to rank candidates. Once it accepts a track, it removes those hits before looking for another. A full fit then calculates the track parameters using the magnetic field, material and measurement errors. The framework supports Kalman fitting with GenFit and an analytical Riemann fit. When checking momentum resolution, we compare the fitted and reference states at the same surface. We also use this convention when comparing tagging and recoil momenta across the target.

## 24. ACTS integration in DarkSHINE

We integrated ACTS (A Common Tracking Software) through an independent sequencer and optional adapters in the existing Tracking processor. The sequencer converts the detector geometry into tracking surfaces and strip-pair hits into measurements and source links. The geometry, momenta and magnetic field all use the same coordinate mapping. The reference chain starts with truth-smeared seeds, runs combinatorial Kalman track finding, converts the trajectories and finds vertices. We can extrapolate recoil tracks to seed ECAL (Electromagnetic Calorimeter) clusters. Since the seeds use truth information, this chain does not give the efficiency of seeding from hits alone. The alternative space-point route still needs work and validation. These later tracking developments were not included in the frozen positron-analysis production.

## 25. Signal generation and validation

In the generator study by Xiang Chen, we compared the production cross section across mediator masses and the recoil-electron energy distributions. The cross section sets the expected rate, while the kinematics affect detector acceptance. When predicting selected events, we use a consistent production and detector-response configuration.

## 26. Positron-Beam-Mode Analysis

I will now use this simulation chain to study positron running. I will start with the additional production mechanisms and then follow them through the detector selection. We keep the baseline 1 detector so that we can compare with the published electron-beam projection using the same detector design.

## 27. Why a positron beam?

A positron can undergo nuclear bremsstrahlung, just like an electron, and it can also annihilate with an atomic electron. Non-resonant annihilation produces a photon and a dark photon. In resonant annihilation, the electron and positron produce a dark photon that decays to a dark-matter pair, with no accompanying hard visible particle. For an electron initially at rest, an 8 GeV positron gives a centre-of-mass energy of about 90 MeV. This provides a mass scale that we do not have in the electron bremsstrahlung channel. To find the sensitivity gain, we also need to account for the visible final state, detector efficiency, migration between selections and positron backgrounds. I will compare the production rates and detector-level selections for these 3 mechanisms.

## 28. Production mechanisms at 8 GeV

Nuclear bremsstrahlung covers a broad range of mediator masses. Non-resonant annihilation is limited by the available centre-of-mass energy, and resonant production is enhanced near that energy. An 8 GeV positron annihilating with an electron at rest has a centre-of-mass energy of 90.4 MeV. Bound electrons are moving, which broadens this picture and allows the resonant samples to extend above the stationary-electron value. We generate on-shell mediators in this study. We do not include a separate off-shell dark-matter-pair calculation. We then apply the detector selection to find the accepted yield for each mechanism.

## 29. Signal and background samples

We simulate 30 bremsstrahlung mass points, 18 non-resonant points and 23 resonant points, with 100,000 events at each point. We calculate efficiencies from these equal-sized samples and apply the physical rates afterwards. For backgrounds, we generate dedicated biased samples of photonuclear, positron-nuclear and muon-pair processes. Production in the target or tracker is separate from production in the ECAL (Electromagnetic Calorimeter). The EN (Electronuclear) label is retained for the positron-nuclear sample in this campaign. We also generate ordinary annihilation in the target. An independent inclusive sample contains the equivalent of 2.5 × 10⁹ incident positrons. We use it to check the dedicated predictions without adding it to the background total. All sensitivity results use baseline 1.

## 30. Three exclusive signal regions

We assign events to reconstructed categories without using the generated process label. Every category requires exactly 1 tagging track. SR1 (Signal Region 1) requires 1 recoil track and missing momentum above 4 GeV. SR2 (Signal Region 2) and SR3 (Signal Region 3) require 0 recoil tracks and total ECAL (Electromagnetic Calorimeter) energy below 2 GeV. We divide these samples at a maximum-cell energy of 1 MeV, with events on the boundary assigned to region 2. Every region also requires low total HCAL (Hadronic Calorimeter) energy and no cell above 1 MeV. The selections do not overlap. Events with additional tracks or a failed veto are rejected.

## 31. Momentum and total-energy discrimination

On the left is missing momentum. The background sample already passes the loose production filter at 1 GeV; the final analysis cut is 4 GeV. On the right is the total ECAL (Electromagnetic Calorimeter) energy for non-resonant annihilation. Near the mediator-mass endpoint, the accompanying photon is soft. The 90 MeV signal can therefore pass a low-energy cut even though a photon is produced. The detector response and acceptance determine the fraction that passes.

## 32. Maximum-cell energy separates the zero-track sample

For events with no recoil track, the largest ECAL (Electromagnetic Calorimeter) cell helps distinguish a photon deposit from a nearly empty calorimeter. The non-resonant distribution changes with mediator mass because the photon kinematics change. Resonant annihilation usually leaves little activity, although interactions in the tracker material can produce deposits. We also cut on total energy because many small deposits can add up. The 1 MeV cuts assume that the detector can operate at those thresholds; they are not measured noise levels. The campaign does not fully digitise HCAL (Hadronic Calorimeter) noise and pileup, so detector measurements are needed to test this assumption.

## 33. Signal efficiency across the mass scan

These curves show the cutflow efficiency for each production mechanism in its primary region. Each curve is normalised to the generated sample. We apply the cross sections later to obtain the expected mixture of processes. The backups contain all 9 channel-to-region efficiency curves. An event can enter a different region if its recoil track is not reconstructed, or if its photon escapes detection or falls below threshold. For example, bremsstrahlung can enter the regions with no recoil track. Its efficiency in the low-activity region becomes substantial toward the upper end of the mass grid. We include these migrations when predicting the signal. The next slide gives the expected yields at 90 MeV.

## 34. Signal migration at 90 MeV

At 90 MeV, non-resonant annihilation supplies about 95% of SR2 (Signal Region 2), and resonant annihilation supplies about 84% of SR3 (Signal Region 3). Bremsstrahlung contributes very little at this mass. The matrix includes events that migrate away from the primary region of their production mechanism. The entries are expected event counts at a fixed reference coupling, after applying the rates and efficiencies. They are not raw simulation counts.

## 35. Background rejection in the available simulation

This cutflow follows photonuclear interactions in the ECAL (Electromagnetic Calorimeter). The recoil-track cut first divides events into categories with 1 or 0 recoil tracks. The next cut uses momentum in SR1 (Signal Region 1), the maximum-cell lower bound in SR2 (Signal Region 2) and total electromagnetic energy in SR3 (Signal Region 3). The HCAL (Hadronic Calorimeter) veto reduces the samples further, and the final electromagnetic-energy cut removes the remaining simulated events. These bars are unweighted simulation counts, before scaling to the benchmark exposure. No event in the inclusive or dedicated samples passes a complete region selection. Because the samples are finite, this does not imply that the physical background is 0.

## 36. Normalisation checked in populated sidebands

We normalise each dedicated sample to its equivalent unbiased exposure using the number of generation attempts, generator acceptance and physical branching ratio. The number of attempts differs from the number of stored events, so we keep track of both. We then compare the sum of the dedicated samples, including target annihilation, with the independent inclusive sample where enough events are available. This checks the rates and shapes in that region. It does not test the much smaller tails at the final cuts. We use the inclusive sample for this cross-check only, since adding it to the dedicated samples would count the same background twice.

## 37. Residual-background extrapolation

For SR1 (Signal Region 1) and SR2 (Signal Region 2), we fit the dedicated survival curves with a power law in the total-ECAL (Electromagnetic Calorimeter) threshold, expressed in MeV. The nominal predictions are 0.03 events for region 1 and 1.3 × 10⁻⁴ for region 2. SR3 (Signal Region 3) needs a 2-dimensional fit because total energy and maximum-cell energy are correlated. Its nominal prediction is 1.6 × 10⁻⁴ events. These estimates depend on the chosen fit function and the limited tail statistics. They also omit components with no surviving simulated events. The inclusive 1-dimensional comparison uses an exponential fit, so it does not provide a quantitative closure test at the final thresholds.

## 38. Combined statistical interpretation

At each mass, we sum the contributions from all 3 production mechanisms in every region. A common signal-strength parameter scales them because their rates depend on the same kinetic mixing. We use a binned profile likelihood with nuisance parameters to obtain expected 90% CL (Confidence Level) limits using CLs (the modified frequentist confidence-level method) under the background-only hypothesis. The reported construction treats shape uncertainties as uncorrelated between bins and uses a Poisson prescription for background normalisation. The regions do not share events, although detector uncertainties can be correlated between them.

## 39. Annihilation drives the gain near 90 MeV

Each individual curve keeps 1 production mechanism but uses all 3 regions and the same background model. It therefore includes migration between regions. At 90 MeV, non-resonant annihilation gives the strongest individual expected limit, about 7.3 × 10⁻¹³ in epsilon squared. Resonant annihilation also contributes, and the combined limit is 5.33 × 10⁻¹³. Much of the gain comes from non-resonant annihilation near the radiative endpoint, where the accompanying photon can pass the selection.

## 40. Projected reach in mediator mass and kinetic mixing

Here I compare the combined positron projection with the earlier electron-beam projection and other searches. Near 90 MeV, the expected limit on epsilon squared improves by about 2 orders of magnitude at matched integrated luminosity. The annihilation kinematics produce the sharp feature near this mass. Bremsstrahlung remains relevant at lower masses. The figure includes existing exclusions and future projections. Our curve is an expected detector-level sensitivity for the chosen exposure, baseline detector and background model.

## 41. Interpretation relative to thermal targets

To compare with thermal dark-matter targets, we use a mediator-to-dark-matter mass ratio of 3 and a dark coupling alpha D of 0.5. A 90 MeV mediator then corresponds to a 30 MeV dark-matter particle. With these choices, the variable y equals epsilon squared divided by 162. This changes the coordinates of the result; the simulated selections and efficiencies stay the same. The scalar, Majorana and pseudo-Dirac targets use different spin and annihilation assumptions. Other models can give different predictions even at the same mass.

## 42. Scope of the positron projection

This study gives detector-level efficiencies and migration between regions for the 3 production mechanisms in the benchmark setup. We use them to obtain the combined sensitivity. The largest remaining uncertainties are the small background tails and the assumed veto response. Larger rare-process samples would help constrain the extrapolation and the omitted components. Prototype measurements can test the thresholds with realistic noise and pileup. We also need toy Monte Carlo to check the statistical treatment at very low event counts. These studies will help assess how closely an experimental search can reach the projection.

## 43. Summary and Outlook

I will finish with the main software and physics results, then discuss the next steps toward an experimental search.

## 44. Main results

We developed a configurable simulation framework and event model that connect transport to detector response and reconstruction. Geometry and event-record optimisation reduce the cost per event. Biasing and staged filters make rare-background production more practical, and parallel processing increases the production capacity. We also integrated ACTS (A Common Tracking Software) into the reconstruction framework. Using this simulation chain, we studied positron running with 3 exclusive regions and included migration between them. At 90 MeV, the combined expected limit is 5.33 × 10⁻¹³ in epsilon squared at the benchmark exposure. Annihilation gives most of the improvement, especially the non-resonant contribution near its endpoint, under the assumptions discussed earlier.

## 45. Outlook

Detector measurements will help constrain the response and veto thresholds. Larger rare-process samples will improve our estimate of the background tails and their dependence on the fit model. Toy Monte Carlo can test the statistical approximation when expected backgrounds are small. Another option is to vary the beam energy. The characteristic annihilation mass changes approximately with the square root of the beam energy, so an energy scan could probe other masses. Each energy would need a study of its kinematics, acceptance and backgrounds. The 8 GeV analysis and the simulation framework provide a starting point.

## 46. Research Achievements

Our work covers the positron study and the simulation framework. We also contributed to collaborative publications and reports on the CEPC (Circular Electron Positron Collider) exotic-Higgs study, DarkSHINE physics prospects and calorimeter design. The simulation and reconstruction manuscript is in preparation, and the baseline design report is preliminary. Thank you for your attention. I welcome your questions.
