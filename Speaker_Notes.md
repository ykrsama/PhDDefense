# DarkSHINE PhD Dissertation Defence

Total planned time: 45:00.

## 01. Design of DarkSHINE Simulation Framework and Prospective Study of Positron-Beam Mode (30 s)

Good afternoon, professors. I am Xuliang Zhu. My dissertation connects the development of the DarkSHINE simulation framework with a prospective search using a positron beam. I will first introduce the experimental motivation, then describe the software contributions, and finally discuss the detector-level analysis and its sensitivity.

## 02. Outline (35 s)

The central question is how a rare missing-energy signal can be studied with a reliable and affordable simulation. The first part sets the detector requirements. The second explains how the framework turns these requirements into simulated and reconstructed events. The third combines three positron production mechanisms in exclusive reconstructed categories. I will keep theoretical details to the assumptions needed to interpret the experiment.

## 03. Physics Motivation and DarkSHINE Experiment (15 s)

I begin with the physical motivation. The cluster animation illustrates why gravitational evidence motivates an unseen matter component, while the laboratory search still requires a specified interaction model.

## 04. Evidence for dark matter (60 s)

The Bullet Cluster is a particularly useful example because the hot gas, which contains much of the ordinary matter, is spatially displaced from the gravitational mass inferred through lensing. Rotation curves and the CMB provide independent evidence on very different scales. The common conclusion is an additional gravitating component, roughly five times as abundant as baryonic matter. These observations do not determine a coupling to electrons or the mass of a new mediator. Those are the quantities an accelerator experiment can test within a benchmark interaction model.

## 05. What observations constrain (60 s)

It is useful to distinguish general requirements from model-dependent numerical bounds. Dark matter must survive long enough and must not erase the observed small-scale structure. A phase-space bound applies to fermions, while a thermal free-streaming bound assumes a particular early velocity distribution. BBN and the CMB constrain new species in thermal contact with the Standard Model and any subsequent energy injection. These bounds motivate the light-dark-matter programme, but they should not be combined into a universal exclusion of every particle below one mass. For the remainder of the talk I use a vector-portal benchmark in the MeV to GeV range.

## 06. Complementary dark-matter searches (55 s)

The three approaches probe complementary aspects of the interaction. Direct detection samples the existing Galactic population and becomes experimentally challenging when the recoil energy is very small. Indirect detection looks for products of annihilation or decay. An accelerator instead creates the state in a controlled collision. The known beam energy provides a reference, and a deficit in the measured visible energy becomes the observable. This interpretation does not require the local halo density, although relating the result to the cosmic abundance still requires a dark-sector model. The central experimental challenge is to reject ordinary interactions with unobserved visible particles.

## 07. The dark photon as a vector portal (70 s)

This is the low-energy form of the kinetic-mixing interaction. The small parameter epsilon induces a coupling of the dark photon to the electromagnetic current. The mass controls the available kinematics, while epsilon squared approximately rescales the production rate. I assume that the mediator can decay to lighter dark-sector particles and that the invisible branching fraction is close to one. The projected limit is therefore presented first in mediator mass and kinetic mixing. Only later will I impose a mass ratio and dark coupling to compare with thermal relic targets. No detailed ultraviolet model is required for the detector-level study.

## 08. SHINE facility and DarkSHINE beamline (55 s)

SHINE provides the accelerator setting for DarkSHINE. The electron programme uses a dedicated single-particle extraction branch alongside the FEL beamlines. I use the eight GeV reference beam energy and an exposure of three times ten to the fourteen incident particles. The nominal rate shown here is ten MHz, as adopted for this defence, rather than the one MHz value in the older text. At this rate the benchmark corresponds approximately to a full calendar year of continuous delivery. Actual running time and duty factor remain separate operational inputs. The positron analysis studies the physics benefit of an extension; it does not demonstrate an implemented positron beamline.

## 09. DarkSHINE detector concept (65 s)

The detector follows the beam from left to right. The upstream tracker measures the incident momentum in the magnet. A thin tungsten target provides the interaction material, followed by the recoil tracker. The electromagnetic calorimeter measures the remaining electromagnetic energy, and the larger hadronic calorimeter rejects escaping hadrons and muons. The large HCAL volume is required to contain penetrating particles. The tracker uses strip measurements, and the ECAL uses a segmented crystal array. Their acceptance and response are evaluated with the configured simulation geometry.

## 10. Detector requirements for a missing-energy search (60 s)

The detector requirements are tied to the background problem. A thin target limits multiple scattering while retaining sufficient production probability. Precise strip measurements determine the incident and recoil momenta. A soft recoil can curl in a strong field, so the recoil-field profile and acceptance matter together. The ECAL must measure the electromagnetic energy, and the HCAL must catch energy carried by neutral hadrons or muons. Hardware developments shown here are collaboration work. My contribution is the software framework and analysis that propagate the detector response into selected yields. In particular, a threshold used in the prospective analysis must be distinguished from a demonstrated system-level performance.

## 11. Electron-mode signal and background rejection (65 s)

In the baseline electron mode, dark bremsstrahlung produces an invisible dark photon and a visible recoil electron. The recoil tends to carry only part of the original beam energy. Ordinary bremsstrahlung can create a similar soft electron, but the photon should deposit its energy in the ECAL. The dangerous cases are the rare subsequent processes that move this energy into hadrons or muons, or beyond acceptance. This motivates the joint use of momentum, ECAL energy and HCAL vetoes. It also explains why describing average electromagnetic showers is insufficient: the analysis is sensitive to the exceptionally small fraction that survives every requirement.

## 12. Standard Model background hierarchy (55 s)

This diagram preserves the branching hierarchy of the supplied reference. Electronuclear interactions form one branch. Hard bremsstrahlung forms the other, followed by ordinary pair conversion, photonuclear interactions or conversion to muon pairs. Target and ECAL interactions are shown separately because they encounter different veto material and have different rates. The vertical scale is an approximate relative-rate hierarchy from the reference electron study, not the sample-normalisation table for the positron analysis. The extremely small invisible electroweak contribution is separated from the visible leakage backgrounds. The computational challenge is to sample the visible rare branches efficiently without losing their physical normalisation.

## 13. Why a positron beam? (70 s)

A positron keeps the nuclear bremsstrahlung process and adds annihilation on atomic electrons. The non-resonant process produces a photon together with the dark photon. Resonant annihilation can produce the dark photon without an accompanying visible hard particle. For an electron initially at rest, an eight GeV positron gives a centre-of-mass energy of about ninety MeV. This creates a characteristic mass scale that is absent from the electron bremsstrahlung channel. However, larger production rates alone do not establish an improvement. The visible topology, detector efficiency, migration and positron-specific backgrounds all have to be included. The following software section explains the infrastructure that makes that comparison possible.

## 14. Event Simulation and Reconstruction in DarkSHINE (15 s)

The framework must connect the detector definition to the analysis while keeping rare-process production computationally manageable. This section presents my software contributions within the collaboration environment.

## 15. The DarkSHINE software framework (65 s)

The workflow separates transport from reconstruction through ROOT event files. DSimu configures the detector and physics and records the simulated event. DEvent defines the shared collections. DAna applies digitisation, reconstruction and analysis processors in the configured order, and DDis provides event inspection. My work led DSimu, the event model, rare-process biasing and staged filtering, and the ACTS integration. DAna, digitisation, the other tracking algorithms, calorimeter reconstruction and generator-validation studies are collaboration contributions. A common event interface lets us follow one event through these stages and change downstream algorithms without repeating transport when the required information has been retained.

## 16. A common event model: DEvent (55 s)

DEvent carries named collections with explicit roles. McParticle and DStep contain truth information. SimulatedHit records transport deposits, CalorimeterHit describes the detector response, and ReconstructedParticle represents inferred objects. The current AnaEvent name is an alias of DEvent. This separation matters physically: truth is useful for explaining a background, but an experimental selection must use measured or reconstructed quantities. Collection names also identify the detector region or response variant, so a change of input collection can change the meaning of a reconstructed energy even when the algorithm is unchanged. The event schema and output choices therefore belong in the production record.

## 17. Geometry and event-record optimisation (65 s)

Two optimisations address different costs. The bounding volume hierarchy groups detector volumes so Geant4 can reject larger spatial regions before testing individual cells. In the cited software benchmark the time changes from two hundred and sixty to forty-two milliseconds per event, a ratio of about six point two. Event-record optimisation and memory alignment reduce the reported example from sixty point one to a minimum of thirteen point seven kilobytes per event. This factor describes storage for that configuration, not every possible event record. These are historical benchmark results from the software presentation. They should not be multiplied with the optical benchmark or presented as measurements of a single frozen release.

## 18. Generator-level filtering with staged transport (70 s)

The generator-level filter acts during transport rather than waiting for a complete event on disk. At stage zero, only the primary track is urgent and its secondaries wait. This allows the primary interaction or energy-loss condition to be tested first. Stage one processes relevant secondaries in the region of interest, where the required rare interaction is checked. Only an accepted event releases the rest of the shower. An accumulated ECAL energy above an upper bound also permits early termination, since further deposits cannot bring the sum back down. The order of the decisions lets the simulation reject an event before processing secondaries that cannot affect its acceptance.

## 19. Rare-process biasing and physical normalisation (65 s)

Biasing increases the frequency of a selected rare interaction in a specified region. This is an importance-sampling operation, so the physical rate must be recovered with the normalisation appropriate to the sample. In generic weighted counting, the sum of weights gives the yield and the sum of squared weights gives its Monte Carlo variance. The effective event count can be substantially smaller than the number of stored events. The positron campaign uses dedicated biasing studies and process cross sections for normalisation rather than the stored transport-weight field. A filter has a different role: it removes phase space. No weight can restore events outside the generated support, so production cuts must remain compatible with the analysis.

## 20. Filtering changes the production cost (65 s)

This table illustrates the practical effect at production scale. For ten to the eleven four GeV incident electrons on twelve thousand eight hundred cores, the cited estimate changes from around four days to fifteen hours. The storage changes from roughly three petabytes to two point five terabytes, while the quoted disk write rate also falls. These approximate figures describe different resource measures and should be read independently. The general filters reject events with excessive visible energy or insufficient missing momentum. Dedicated filters additionally require the relevant particle or interaction. The filter is part of the sample definition, so the retained phase-space range and acceptance must accompany the output.

## 21. Parallel event simulation (55 s)

Geant4 multi-threading allows several events to be processed within one job. The engineering work includes thread-local allocation and singleton state, as well as random-number and primary-generation handling. In the cited comparison, one eight-thread job takes fifteen thousand three hundred and twenty-eight seconds, compared with sixteen thousand six hundred and forty-eight seconds for eight single-thread jobs. This is an improvement of approximately eight percent in elapsed time for that comparison. It is not a measurement of eight-fold scaling from one core. The validation includes inclusive and rare-process distributions. The physics content must remain consistent as the scheduling and number of workers change.

## 22. Optical response with a lookup table (65 s)

Full optical transport is expensive because a single interaction can generate a very large number of photons. The lookup table replaces repeated scintillation-photon propagation with a conditional response. It stores both a detection probability and a transit-time distribution. In the cited study, the full event takes about two hundred seconds with optical tracking, four seconds with the table, and two seconds without optical photons. The comparison on the left tests detection efficiency and agrees within five percent. This validates the table for the optical geometry and properties used to construct it. It does not automatically validate later electronics effects or a different detector geometry. The digitisation and optical studies are collaboration contributions integrated into the common framework.

## 23. Digitisation connects deposits to observables (60 s)

The digitisation chain turns transported energy into the quantities that reconstruction uses. Light production and collection determine how many photons reach the sensor. The SiPM response includes finite pixel occupancy and recovery. Electronics then add the waveform, noise, finite range and digitisation. The framework also provides a parameterised response for campaigns that do not need full optical information. These paths should not be conflated. A response model available in the software is not necessarily enabled in a particular physics sample. Since the positron selection uses both total energy and maximum-cell energy, the per-cell response and its threshold behaviour are especially important.

## 24. Track finding and fitting (55 s)

Track finding and fitting are distinct tasks. Finding determines which hits belong together. The low-multiplicity legacy algorithm uses a fast circle pre-fit to rank candidates and removes accepted hits before finding the next track. Fitting then refines the track parameters with a model of the magnetic field, material and measurement errors. A circle-ranking score is not a complete track-fit likelihood. The framework supports GenFit-based Kalman fitting and an analytical Riemann alternative. To assess momentum resolution, the fitted state and the reference state must be compared at the same surface. This also matters when comparing tagging and recoil momenta across the target.

## 25. ACTS integration in DarkSHINE (70 s)

My ACTS integration provides an independent sequencer as well as optional adapters in the existing Tracking processor. The sequencer converts detector information into tracking surfaces and transforms strip-pair hits into ACTS measurements and source links. Geometry, momentum and field vectors use one consistent coordinate mapping. The reference chain starts with truth-smeared seeds, runs combinatorial Kalman track finding, converts the trajectories and performs vertex finding. Extrapolated recoil tracks can seed ECAL clustering. This is an integration and reconstruction study, not a measurement of fully hit-based seeding efficiency. The alternative space-point route requires completion and validation, and the later ACTS developments should not be attributed to the frozen positron-analysis production.

## 26. Signal generation and validation (60 s)

The software supports external hard-process kinematics and a transport-native dark-photon process. The external route uses matrix-element generators and passes the resulting particles into detector transport. The native route integrates production with Geant4. Generator validation checks the cross section and several recoil distributions. Comparing only the integrated cross section would miss a kinematic disagreement that changes detector acceptance. Conversely, normalised shape agreement does not establish the absolute rate. The beam, target, mass, coupling convention and generation cuts must match in a meaningful comparison. These validation studies are collaboration results that establish the interfaces used by the framework and analysis.

## 27. Positron-Beam-Mode Analysis (15 s)

I now use the simulation chain to evaluate the positron option. The analysis retains the baseline one detector for a common comparison with the published electron-beam projection.

## 28. Production mechanisms at 8 GeV (70 s)

The production curves show why the positron mode is interesting. Nuclear bremsstrahlung remains available over a broad mediator-mass range. Non-resonant annihilation is kinematically limited by the centre-of-mass energy, and resonant production is enhanced around the corresponding scale. For an eight GeV positron annihilating with a stationary electron, this is ninety point four MeV. Motion of bound electrons broadens that ideal picture, and the resonant samples extend beyond the stationary value. This study uses on-shell mediator samples rather than a separate off-shell dark-matter-pair calculation. The next step is to ask how much of each production mechanism survives the actual detector selection.

## 29. Signal and background samples (65 s)

The signal grid contains thirty bremsstrahlung masses, eighteen non-resonant masses and twenty-three resonant masses, with one hundred thousand generated events at each point. Equal sample sizes separate the efficiency calculation from the relative physical rates. Background production uses dedicated biased samples for photonuclear, positron-nuclear and muon-pair processes, with target or tracker production separated from ECAL production. The retained EN label denotes the positron-nuclear sample in this campaign. An additional target-annihilation sample accounts for ordinary annihilation topologies. The independent inclusive sample represents two point five billion incident positrons and is used for cross-checking, rather than added to the dedicated predictions. All sensitivity results use baseline one.

## 30. Three exclusive signal regions (90 s)

These selections define reconstructed categories independently of the generated process. Every category requires exactly one tagging track. SR1 has one recoil track and a scalar tagging-minus-recoil momentum difference above four GeV. SR2 and SR3 have zero recoil tracks. Their total ECAL energy must be below two GeV, and complementary maximum-cell conditions divide the samples at one MeV. An event at the boundary enters SR2. Every region also requires low total HCAL energy and no cell above one MeV. Consequently an event can enter at most one region. The regions do not cover all events: additional tracks or failure of any veto removes the event from the analysis.

## 31. Momentum and total-energy discrimination (65 s)

The left panel shows the tagging-to-recoil momentum difference for the recoil topology. The background curve already satisfies the loose production filter at one GeV, while the final analysis uses four GeV. Confusing those two thresholds would misstate the signal region. The right panel shows total ECAL energy for the non-resonant channel. Near the mediator endpoint, the accompanying photon becomes soft and the ninety MeV signal can satisfy a low visible-energy condition. This is why an annihilation process with a photon can still improve a missing-energy search. The detector response and acceptance determine the selected distribution, so the cut cannot be understood from the production rate alone.

## 32. Maximum-cell energy separates the zero-track sample (60 s)

Within the zero-recoil-track sample, the largest ECAL cell distinguishes a photon-like deposit from a nearly empty calorimeter. The non-resonant channel changes with mass because the photon kinematics change. Resonant annihilation mostly produces low activity, though interactions in tracking material can leave deposits. The total-energy requirement remains necessary in addition to the largest-cell condition: many small deposits can have a sizeable sum. The one MeV values are selection thresholds, not measured noise levels. In particular, the HCAL noise and pileup response is not fully digitised in this prospective campaign, so the HCAL threshold must be treated as an assumed achievable performance.

## 33. Signal efficiency across the mass scan (70 s)

The three panels show the cutflow efficiency of each mechanism in its primary region. Each curve uses its own generated channel and mass as the denominator, so these are selection fractions rather than a physical mixture. All nine channel-to-region curves are included in the separate backup booklet. The expected visible remnant may be lost: a recoil can fail reconstruction, and a photon can escape acceptance or remain below threshold. Such events can migrate into another signal region and remain useful. For example, bremsstrahlung contributes to zero-track regions, with substantial low-activity efficiency toward the upper end of its mass grid. The complete response matrix is therefore needed.

## 34. Migration contributes to the selected signal (70 s)

At ninety MeV the table makes the migration explicit. Non-resonant annihilation produces about one point nine six events at the illustrative kinetic mixing and contributes primarily to SR2, but it also populates SR1 and SR3. Resonant production mostly enters SR3 and also contributes to SR2. The small bremsstrahlung yield is retained in every category. Summing the contributions gives approximately zero point zero four events in SR1, one point eight two in SR2 and zero point seven one five in SR3. The likelihood uses the individual region predictions. It does not assign an observed candidate to a generator-level origin. Totals are calculated before rounding.

## 35. Background rejection in the available simulation (65 s)

The cumulative cutflow shows where rejection occurs in one important background, photonuclear production in the ECAL. The recoil requirement already separates the one-track and zero-track categories. Their next cuts differ: momentum for SR1, the maximum-cell lower bound for SR2 and total ECAL energy for SR3. The HCAL veto then reduces the sample further, and the final ECAL condition removes all remaining simulated events. These are unweighted counts, not yields at the benchmark exposure. No inclusive or dedicated sample survives a complete region selection. This is strong rejection in the available simulation, but it is not evidence that the physical background is exactly zero.

## 36. Normalisation checked in populated sidebands (65 s)

The dedicated samples are normalised to their equivalent unbiased exposure using the generation attempts, generator acceptance and physical branching ratio. This convention distinguishes attempts from stored events. After normalisation, their sum can be compared with an unbiased inclusive sample in the populated region. Target annihilation is included in this check. Agreement tests the rates and distributions where there are simulated events. It cannot directly test the much smaller tail probability at the final working points. Since inclusive and dedicated routes represent the same physical processes, combining them by simply adding their yields would double count the background.

## 37. Residual-background extrapolation (75 s)

For SR1 and SR2 the dedicated survival curves are fitted as a power law in the numerical total-ECAL threshold in MeV. The resulting nominal backgrounds are zero point zero three events for SR1 and one point three times ten to the minus four for SR2. SR3 needs a two-dimensional continuation because the total and maximum-cell energies are related. Its nominal yield is one point six times ten to the minus four. These are extrapolated predictions. Fit-function dependence, limited tail statistics and components omitted after zero survivors remain limitations. The inclusive one-dimensional comparison uses a different exponential form and does not establish quantitative closure at the final thresholds.

## 38. Combined statistical interpretation (70 s)

At each mass the signal prediction sums all three production mechanisms in every region. One common signal strength scales those contributions because the same kinetic mixing controls their rates. The analysis uses a binned profile likelihood with nuisance parameters and obtains expected ninety-percent confidence-level limits with CLs under the background-only hypothesis. Shape uncertainties are treated as uncorrelated between bins in the reported construction, and the background normalisation uses its stated Poisson prescription. Region exclusivity prevents double counting of events but does not by itself imply that detector uncertainties are independent. The asymptotic method is used well below one expected background event, and its coverage has not yet been checked with pseudo-experiments.

## 39. Annihilation drives the gain near 90 MeV (75 s)

This comparison retains one production mechanism at a time while keeping all three measured regions and the same background model. It therefore includes migration even in the individual curves. At ninety MeV, non-resonant annihilation gives the strongest individual projected limit, about seven point three times ten to the minus thirteen in epsilon squared. Resonant annihilation also contributes, and the combination reaches five point three three times ten to the minus thirteen. It would be misleading to attribute the entire improvement simply to the resonant channel. The radiative endpoint and the detector efficiency of the associated photon category make a major contribution.

## 40. Projected reach in mediator mass and kinetic mixing (80 s)

The full comparison places the combined positron projection alongside the earlier electron-beam projection and external constraints and prospects. Near ninety MeV the gain is about two orders of magnitude in epsilon squared at matching integrated luminosity. The sharp feature follows the annihilation kinematics; it is not a uniform improvement over the entire mass range. At lower masses bremsstrahlung remains relevant. Existing exclusions and future projections have different experimental status even when they are drawn on the same plane. This result is a prospective detector-level study under a specified exposure, baseline detector and background model, rather than an observed exclusion.

## 41. Interpretation relative to thermal targets (65 s)

To relate the mediator search to light-dark-matter thermal targets, I now add a mass ratio of three and a dark coupling alpha D of zero point five. These assumptions define the vertical variable y and map a ninety MeV mediator to a thirty MeV dark-matter particle. For this benchmark y is epsilon squared divided by one hundred and sixty-two. The transformation changes the coordinates, not the simulated event categories or efficiency. Scalar, Majorana and pseudo-Dirac thermal targets depend on their own spin and annihilation assumptions. The result tests those specified benchmarks. It should not be interpreted as a universal exclusion of every dark-sector model at the same mass.

## 42. Scope of the positron projection (60 s)

The analysis establishes the detector-level efficiency and migration of the three mechanisms for the benchmark setup, and it connects them to exclusive reconstructed categories and a combined projection. The main limitations lie in the very small background tails and in the assumed veto response. Larger rare-process samples are needed to constrain extrapolation and omitted components. Prototype measurements must establish threshold performance with realistic noise and pileup. Pseudo-experiments are needed to test the low-count statistical construction. These are distinct validation tasks: success in one does not establish the others. Keeping them explicit defines what is needed to turn the prospective sensitivity into an experimentally supported search.

## 43. Summary and Outlook (15 s)

I close by connecting the software and physics results and identifying the next steps.

## 44. Main results (65 s)

The software result is a configurable framework and event model that connect transport, detector response and reconstructed observables. Geometry and record optimisation reduce per-event cost; biasing and staged filters focus resources on rare backgrounds; parallel execution increases production capacity. ACTS integration extends the reconstruction environment. The physics result is a prospective positron search with three exclusive categories and all migrations retained. At ninety MeV, the combined expected limit reaches five point three three times ten to the minus thirteen in epsilon squared at the benchmark exposure. The improvement is driven by annihilation, particularly the non-resonant contribution near its endpoint, under the assumptions already discussed.

## 45. Outlook (55 s)

The next work follows directly from the limitations. Detector data can constrain the response and veto thresholds. Larger rare-process samples can support the tails and help quantify model dependence. Pseudo-experiments can test the statistical approximation where expected backgrounds are extremely small. Finally, varying the beam energy moves the characteristic annihilation mass approximately with the square root of the energy. This suggests a way to investigate other masses, but each energy needs its own kinematics, acceptance and background study. The present result establishes the eight GeV benchmark and supplies a framework in which those extensions can be carried out.

## 46. Research Achievements (45 s)

These are the research achievements listed in my dissertation. The first two entries are my lead-author works on the positron study and the simulation framework. The remaining publications and reports are collaborative contributions, including the CEPC exotic-Higgs study, DarkSHINE physics prospects and calorimeter design. The simulation and reconstruction manuscript remains in preparation, and the baseline design report is preliminary. Thank you for your attention. I welcome your questions.