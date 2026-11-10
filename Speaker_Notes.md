# Speaker notes

## 01. Design of DarkSHINE Simulation Framework and Prospective Study of Positron-Beam Mode

Good morning, professors. I am Xuliang Zhu. My dissertation covers the DarkSHINE simulation framework and a prospective search with a positron beam. I will begin with the physics motivation, explain our software work, and then discuss the positron analysis and its expected sensitivity.

## 02. Outline

I will start with the physics motivation and detector requirements, then introduce the simulation and reconstruction framework. I will then present our study of 3 production mechanisms with a positron beam. My focus is on:simulating rare backgrounds efficiently, selecting signal events, and estimating the sensitivity.

## 03. Physics Motivation and DarkSHINE Experiment

Gravitational observations give us evidence for dark matter. To search for it in the laboratory, we need a model of how it interacts with ordinary matter.

## 04. Evidence for dark matter

We see evidence for dark matter on very different scales.

The rotation curves indicate an extended mass distribution beyond the visible stellar disc.

In the Bullet Cluster, the hot gas and the mass inferred from gravitational lensing are spatially separated after the collision.

CMB (cosmic microwave background) observations require a substantial non-baryonic matter component.

Together, these observations constrain dark matter's abundance and distribution.

## 05. What observations constrain

However, the particle identity of dark matter and its coupling to ordinary matter remain unknown.

The candidate masses span about 10⁻²¹ eV to PeV. Ultralight candidates behave as coherent fields; their wavelength must fit inside the galactic halos we observe. For heavier particle candidates, the relic abundance depends on how they were produced. WIMPs freeze out from thermal equilibrium when annihilation becomes too slow. Freeze-in candidates are produced through interactions too weak to establish equilibrium.

## 06. Complementary dark-matter searches

Direct detection looks for interactions of Galactic dark matter in a detector. It becomes difficult when the recoil energy is very small. Indirect detection looks for products of dark-matter annihilation or decay. At an accelerator, we try to produce dark matter in collision.

## 07. The dark photon as a vector portal

This lagrangian describes kinetic mixing between the photon and the dark photon. The parameter epsilon gives the dark photon a small coupling to the electromagnetic current. Its mass determines the kinematics, and epsilon squared approximately scales the production rate. We assume that the dark photon can decay to lighter dark-sector particles, with an invisible decay branching ratio close to 1.

## 08. SHINE facility and DarkSHINE beamline

We will have high-repetition-rate electron beam delivered by SHINE (Shanghai High Repetition-Rate XFEL and Extreme Light Facility). We take an electron-beam design energy of 8 GeV and a design repetition rate of 1 MHz as inputs to the DarkSHINE conceptual design. We have a dedicated electron extraction branch alongside the free-electron-laser beamlines. The benchmark count is three times ten to the fourteen incident electrons, expressed as EOT (electrons on target).

## 09. DarkSHINE detector conceptual design Baseline 1

This is the DarkSHINE detector design in the Baseline 1 configuration. Following the beam, the tagging tracker measures the incident electron momentum in the magnetic field. The electron crosses a thin tungsten target, and the recoil tracker measures the outgoing charged particle. The ECAL measures electromagnetic energy and its spatial distribution. The larger HCAL detects hadrons and penetrating muons for background rejection. The trackers use silicon strips, while the ECAL is a segmented LYSO crystal array.

## 10. Detector requirements for a missing-energy search

The detector requirements follow from the missing-energy measurement. The tagging tracker needs a hit precision below 10 micrometres and a momentum resolution below 2 percent at 8 GeV. The tungsten target is 0.1 radiation lengths thick to limit multiple scattering. The recoil tracker needs to measure charged particles from about 30 MeV to 2 GeV. The ECAL needs high granularity and precise energy measurement to resolve localised electromagnetic deposits. The HCAL requirements are driven by the neutron background: veto inefficiency below ten to the minus five above roughly 2 GeV, and below ten to the minus three at lower energies.

## 11. Electron-mode signal and background rejection

In electron mode, dark bremsstrahlung produces a dark photon that decays invisibly, together with a recoil electron carrying only part of the beam energy. Ordinary bremsstrahlung can also leave a soft electron, but the photon normally deposits its energy in the ECAL. Rare photonuclear and muon-pair processes can transfer that energy to hadrons or muons, or send it outside the detector acceptance. We combine the measured momentum, electromagnetic energy and HCAL veto to reject these events.

## 12. Standard Model background hierarchy

Most beam electrons pass through the thin target with bremstrulung process. Hard bremsstrahlung produces a recoil electron and an energetic photon. The rarer photonuclear and muon-pair branches put energy into hadrons or muons, making the HCAL veto essential.

Muon pairs are effectively rejected by HCAL. The surviving PN and EN tails determine the main background in the signal region.

## 13. Event Simulation and Reconstruction in DarkSHINE

I will now describe our work on the simulation framework, from defining the detector and recording events to reducing the time needed to simulate rare backgrounds.

## 14. The DarkSHINE software framework

Generation defines the beam or signal process. DSimu simulates the detector interactions with Geant4, DEvent stores truth and hit collections, and DAna performs digitisation and reconstruction. DDis displays individual events, and the analysis uses the reconstructed observables to select events and calculate limits.

The four plots show recoil kinematics from the 8 GeV CDR electron-mode simulation. Signal electrons have lower energies than the background concentrated near the beam energy. Transverse momentum provides further discrimination; that panel selects recoil energies between 50 MeV and 4 GeV. The recoil angle and transverse separation describe how the signal spreads across the tracking detector and how that spread changes with dark-photon mass.

My contributions are the general framework design, DSimu, DEvent, rare-process biasing and filtering, and ACTS integration.

## 15. A common event model: DEvent

DEvent carries several views of the same physical event. Truth particles and steps record momenta, energies, origins and interaction history. Simulated hits record deposited energy, positions, times and detector cell identifiers. Detector-response collections and reconstructed objects provide cell signals, fitted tracks and clusters. The event display shows the link between a particle trajectory and the shower it produces. For a background entering the signal region, we can trace its origin, inspect veto activity and identify missed tracks or clusters. Stored particle and hit records also let us rerun digitisation and reconstruction.

## 16. Geometry navigation and event-record optimisation

We optimised the event records and Geant4 geometry navigation for large simulation samples. Particle records store momentum components, energy, mass, production vertices and endpoints. Hits store deposited energy, time, position and cell identifiers. We use float precision for these fields and remove duplicated quantities: momentum magnitude is calculated from its components, and PDG identifiers replace repeated particle-name strings. The event-record benchmark stores primary-electron step histories in the tracker region. These changes reduce the event size from about sixty to fourteen kilobytes.

A bounding volume hierarchy reduces the number of individual detector volumes checked at each Geant4 step. The navigation benchmark improves from about a quarter of a second to forty milliseconds per event.

## 17. Generator-level filtering with staged Geant4 tracking

The filter follows the physics of rare backgrounds. At stage zero, we track the primary particle and defer its secondaries. We inspect the primary energy loss and can require a hard bremsstrahlung photon. At stage one, we release secondaries from the selected longitudinal region. The process filter selects a photonuclear, electronuclear or muon-pair interaction and its energy transfer. The particle filter selects the secondary species and energy. Events passing these conditions proceed to stage two, where the remaining tracks are released. The ECAL veto stops an event as soon as its accumulated deposited energy exceeds the production bound.

## 18. Generator-level filter performance

In the inclusive production test, we saved roughly a quarter of a million events from twenty billion incident electrons. That is about one saved event per seventy thousand beam electrons, or roughly five orders of magnitude fewer stored records.

On the left, only about a tenth of a percent of the prefiltered sample with a reconstructed recoil track has ECAL energy below 4 GeV. On the right, the blue histogram selects one reconstructed recoil track and reconstructed missing momentum above 4 GeV. The horizontal axis is truth missing momentum. Adding truth ECAL energy below 4 GeV leaves six threshold-migration events in twenty million incident electrons.

## 19. Rare-process biasing and physical normalisation

Biasing increases the statistics for rare photonuclear, electronuclear and muon-pair final states. We select the process, material region and energy threshold, then enhance its interaction cross section. Geant4 simulates the secondary interactions, energy deposits and leakage.

The ECAL muon-pair scan shows the interaction probability increasing with the bias factor and eventually saturating. We fit this dependence and evaluate the physical probability at bias factor one. Multiplying by the fraction of beam events containing an eligible particle gives the process rate per incident particle, which sets the expected event count at a given EOT or POT.

## 20. Parallel event simulation

Beam events are independent, so each worker runs a complete event: primary generation, Geant4 particle tracking and event filling. This required worker-local event storage, random-number handling and changes to shared framework state. The particle and detector-hit collections from the workers are merged for reconstruction and analysis.

The plot shows throughput increasing with worker count. For one million events and eight concurrent units, one eight-thread job takes about 4.3 hours, compared with about 4.6 hours for eight single-thread jobs.

## 21. Optical response with a lookup table

The lookup table replaces repeated optical-photon propagation. It is indexed by emission position and direction and provides the detection probability and photon transit-time distribution. These determine the collected light and its arrival time at the sensor.

The detection-efficiency comparison with full optical tracking agrees within five percent over the tested depth and angle range. The right plot compares the transit-time spectra. The complete-event runtime decreases from about 200 seconds to four seconds. This optical-response work was contributed by Qibin Liu.

## 22. Digitisation connects deposits to observables

Digitisation converts simulated deposits into measurable signals. After scintillation and light collection, each detected photon contributes a single-photoelectron pulse. Summing these pulses in time gives the cell waveform. The model includes SiPM saturation and recovery, electronic noise, finite dynamic range and ADC sampling. Calibration converts the pulse response into cell energy. Summing the cells gives the ECAL total energy, while the largest cell energy defines the maximum-cell observable. These studies were contributed by Qibin Liu.

## 23. Track finding and fitting

Track finding associates strip measurements with a common trajectory. The finder ranks circle candidates and removes accepted hits before continuing. Track fitting estimates momentum and covariance using the magnetic field, material, measurement errors, energy loss and multiple scattering.

The CDR plot shows relative momentum resolution versus beam energy for four to ten recoil-tracker layers. Multiple scattering worsens the resolution at low energies; small curvature and the available lever arm limit it at high energies. Six layers provide the Baseline 1 balance between tracking performance and material. The reconstructed momentum and track multiplicity enter the missing-momentum selection.

## 24. ACTS integration in DarkSHINE

We convert the detector geometry into ACTS surfaces and strip-pair hits into measurements and source links. The sequencer runs truth-smeared seeding, combinatorial Kalman finding, track conversion and vertex reconstruction. Fitted tracks are extrapolated to the ECAL to provide impact positions.

The 2023 truth-assisted fitter test shows the track-parameter pull versus transverse momentum. The pull is the fitted-minus-truth residual divided by its estimated uncertainty. The distribution is concentrated near zero. My contributions are the ACTS sequencer and the geometry, magnetic-field and reconstruction interfaces.

## 25. Positron-Beam-Mode Analysis

The positron study uses the Baseline 1 detector. I will introduce its additional production mechanisms, event selection and expected sensitivity.

## 26. Why a positron beam?

A positron can undergo dark bremsstrahlung and annihilate with an atomic electron. Non-resonant annihilation produces a photon and a dark photon. Resonant annihilation produces a dark photon that decays to a dark-matter pair, with no accompanying hard visible particle. For an electron initially at rest, an 8 GeV positron gives a centre-of-mass energy of about ninety MeV. This sets the characteristic mass scale for annihilation production.

## 27. Production mechanisms at 8 GeV

Nuclear bremsstrahlung covers a broad range of mediator masses. Non-resonant annihilation is limited by the available centre-of-mass energy, and resonant production is enhanced near that energy. An 8 GeV positron annihilating with an electron at rest has a centre-of-mass energy of about ninety MeV. Off-shell dark-photon exchange extends the annihilation contribution above this mass scale.

## 28. Signal and background samples

We simulate 30 bremsstrahlung mass points, 18 non-resonant points and 23 resonant points, with a hundred thousand events at each channel–mass point. CalcHEP provides the signal kinematics, followed by Geant4 detector simulation. These samples determine the selection efficiencies; cross sections set the relative production rates.

Dedicated background samples cover photonuclear, positron-nuclear and muon-pair processes in the target or tracker and in the ECAL, plus ordinary target annihilation. The positron-nuclear sample uses the EN label. An independent inclusive sample contains 2.5 billion POT for background validation. The sensitivity benchmark is 8 GeV, 3 × 10¹⁴ POT and Baseline 1.

## 29. Three exclusive signal regions

Every signal region requires exactly one tagging track. SR1 requires one recoil track, missing momentum above 4 GeV and total ECAL energy below 2.5 GeV. SR2 and SR3 require no recoil track and total ECAL energy below 2 GeV. A maximum-cell energy of at least 1 MeV defines SR2; below 1 MeV defines SR3. All three regions require HCAL total energy below 100 MeV and maximum-cell energy below 1 MeV. These selections form three exclusive categories.

## 30. Momentum and total-energy discrimination

The missing-momentum distribution separates soft-recoil signal events from background. The background sample passes a loose production filter at 1 GeV; the final SR1 selection requires more than 4 GeV. For non-resonant annihilation, the accompanying photon becomes soft near the mediator-mass endpoint. This produces the low total-ECAL-energy signal distribution near 90 MeV.

## 31. Maximum-cell energy separates the zero-track sample

For events with no recoil track, the largest ECAL cell distinguishes a photon deposit from a nearly empty calorimeter. The non-resonant distribution changes with mediator mass because the accompanying photon kinematics change. Resonant annihilation usually leaves little activity, with some deposits from interactions in the tracker material. A maximum-cell energy of at least 1 MeV selects SR2; below 1 MeV selects SR3.

## 32. Signal efficiency across the mass scan

These curves show the cutflow efficiencies for each production mechanism in its primary signal region, normalised to the generated sample. We combine the efficiencies with production cross sections to predict the signal yields.

Track reconstruction and photon detection can move events between regions. A missed recoil track can put a bremsstrahlung event into a zero-track category; a soft or undetected photon can put a non-resonant event into the low-activity category. All nine channel-to-region efficiencies enter the signal prediction.

## 33. Signal migration at 90 MeV

At a mediator mass of 90 MeV, epsilon squared of 10⁻¹² and 3 × 10¹⁴ POT, the matrix gives the expected selected event counts. Non-resonant annihilation supplies about 95 percent of SR2, and resonant annihilation supplies about 84 percent of SR3. Bremsstrahlung contributes very little at this mass. The off-diagonal entries show migration between the production mechanisms' primary regions.

## 34. Background rejection in the available simulation

This cutflow shows cumulative simulated counts for photonuclear interactions in the ECAL. The recoil-track requirement separates the one-track and zero-track categories. SR1 then requires missing momentum above 4 GeV. SR2 requires an ECAL maximum-cell energy of at least 1 MeV, while SR3 requires total ECAL energy below 2 GeV. All three regions apply the HCAL total-energy and maximum-cell vetoes. The last step requires ECAL total energy below 2.5 GeV in SR1, below 2 GeV in SR2, and maximum-cell energy below 1 MeV in SR3. No simulated events survive the full selection. We estimate the residual background by extrapolating the survival distributions.

## 35. Normalisation checked in populated sidebands

We normalise each dedicated sample to its equivalent unbiased POT using the generation attempts, generator acceptance and physical branching ratio. The plot compares the sum of these normalised samples, including target annihilation, with the independent inclusive sample. Their survival trends agree in the populated sidebands, validating the dedicated-sample normalisation used for background estimation.

## 36. Residual-background extrapolation

For SR1 and SR2, we fit the dedicated survival curves with a power law in the total-ECAL-energy threshold. SR3 uses a two-dimensional fit to account for the correlation between total energy and maximum-cell energy. Summing the process contributions gives about three hundredths of an event in SR1, and of order ten to the minus four events in each zero-track region. These fits extrapolate the populated sidebands to the final selection thresholds.

## 37. Combined statistical interpretation

At each mass, we sum all three production mechanisms in every signal region, including migration. A common signal-strength parameter scales their rates through the kinetic mixing. We combine the three exclusive regions in a binned profile likelihood and profile the nuisance parameters. The expected 90 percent confidence-level limit uses CLs and the asymptotic profile likelihood under the background-only hypothesis. Background-shape uncertainties are uncorrelated between bins.

## 38. Annihilation drives the gain near 90 MeV

Each individual curve keeps 1 production mechanism but uses all 3 regions and the same background model. It therefore includes migration between regions. At 90 MeV, non-resonant annihilation gives the strongest individual expected limit, roughly seven times ten to the minus thirteen in epsilon squared. Resonant annihilation also contributes, and the combined limit is about five times ten to the minus thirteen. Much of the gain comes from non-resonant annihilation near the radiative endpoint, where the accompanying photon can pass the selection.

## 39. Projected reach in mediator mass and kinetic mixing

At 8 GeV and 3 × 10¹⁴ POT, the combined positron projection reaches epsilon squared of about five times ten to the minus thirteen near a mediator mass of 90 MeV. This improves on the earlier electron-beam projection by about two orders of magnitude at matched integrated luminosity. Annihilation produces the sharp gain near 90 MeV, while bremsstrahlung provides sensitivity at lower masses.

## 40. Interpretation relative to thermal targets

For the thermal-target comparison, we use a mediator-to-dark-matter mass ratio of three and alpha D of 0.5. A 90 MeV mediator corresponds to a 30 MeV dark-matter particle, and y is approximately epsilon squared divided by one hundred and sixty. The scalar, Majorana and pseudo-Dirac candidates have different spin and annihilation properties, giving the distinct thermal targets shown in the plot.

## 41. Positron study: results and refinements

The positron analysis evaluates three production mechanisms in every reconstructed category, includes migration, estimates the background and combines the three exclusive regions. It finds a sensitivity gain from annihilation, especially near 90 MeV.

Further studies can use detector measurements to refine response inputs, increase rare-background statistics and extend the uncertainty models for new detector and beam configurations.

## 42. Summary and Outlook

I will finish with the main software and physics results, then discuss the next steps toward an experimental search.

## 43. Main results

My software contributions cover the general framework design, the development of DSimu and DEvent, rare-process biasing and filtering, production optimisation, and ACTS integration. Together with the collaboration's response and reconstruction work, these components connect simulated interactions to the observables used in the physics analysis.

I used this framework to complete a detector-level positron-beam study with three production mechanisms and three exclusive signal regions. The signal calculation includes migration between all channel and region combinations. Combining the regions gives an expected 90 percent confidence-level limit of about five times ten to the minus thirteen in epsilon squared at a mediator mass of 90 MeV and three times ten to the fourteen POT. At the same detector benchmark and matching integrated luminosity, annihilation improves the reach near this mass by about two orders of magnitude relative to the earlier electron-beam projection.

## 44. Outlook

Prototype and beam-test measurements can tune digitisation, calibration and veto selections. Improved rare-process sampling can increase background statistics and support more detailed uncertainty models.

Varying the positron beam energy shifts the characteristic annihilation mass as the square root of the beam energy. Additional beam energies can probe other mediator masses, with selections optimised for their recoil and photon kinematics.

## 45. Research Achievements

The first two entries are my lead-author publications on the positron study and the simulation framework. The simulation and reconstruction manuscript is collaborative work with Professor Kim-Siang Khaw and the other authors, and is in preparation. The publications and report on the right are collaborative contributions, including the CEPC study, DarkSHINE physics prospects, calorimeter design and the Baseline Design Report. Thank you for your attention. I welcome your questions.
