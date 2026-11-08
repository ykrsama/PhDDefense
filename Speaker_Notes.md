# Speaker notes

## 01. Design of DarkSHINE Simulation Framework and Prospective Study of Positron-Beam Mode

Time: 30 seconds.

Good afternoon, professors. I am Xuliang Zhu. My dissertation covers the DarkSHINE simulation framework and a prospective search using a positron beam. I will first introduce the experimental motivation, then describe the software contributions, and finally discuss the detector-level analysis and its sensitivity.

Source context: PhD Dissertation Defence, supplied dissertation sources.

## 02. Outline

Time: 35 seconds.

I will start with the physics motivation and detector requirements, then describe the simulation and reconstruction framework. The positron analysis uses this framework to combine three production mechanisms in exclusive reconstructed categories. Throughout the talk, I will focus on the experimental questions: how to simulate rare backgrounds efficiently and how to interpret the selected events. I will introduce the theory assumptions needed for that interpretation.

Source context: PhD Dissertation Defence, supplied dissertation sources.

## 03. Physics Motivation and DarkSHINE Experiment

Time: 15 seconds.

Gravitational observations motivate an unseen matter component. To search for it in the laboratory, we need to specify how it interacts with ordinary matter.

Source context: Physics motivation and DarkSHINE, supplied dissertation sources.

## 04. Evidence for dark matter

Time: 60 seconds.

Three independent observations establish the gravitational evidence: rotation curves on galaxy scales, lensing and gas separation in clusters, and the cosmic microwave background. These data constrain the abundance and distribution of dark matter, while its particle identity and laboratory coupling remain open.

## 05. What observations constrain

Time: 60 seconds.

Some requirements are general; numerical bounds depend on the model. Dark matter must survive long enough and must not erase the observed small-scale structure. A phase-space bound applies to fermions, while a thermal free-streaming bound assumes a particular early velocity distribution. BBN and the CMB constrain new species in thermal contact with the Standard Model and any subsequent energy injection. These bounds motivate searches for light dark matter. Because they rely on different assumptions, they do not give a universal lower mass limit. For the remainder of the talk I use a vector-portal benchmark in the MeV to GeV range.

Source context: Cosmological and particle constraints summarized in the dissertation; model assumptions retained.

## 06. Complementary dark-matter searches

Time: 55 seconds.

Direct detection samples the existing Galactic population and becomes experimentally challenging when the recoil energy is very small. Indirect detection looks for products of annihilation or decay. Accelerator searches create the state in a controlled collision. The known beam energy provides a reference, and a deficit in the measured visible energy becomes the observable. This interpretation does not require the local halo density, although relating the result to the cosmic abundance still requires a dark-sector model. We must then reject ordinary interactions in which visible particles go undetected.

Source context: Physics motivation and DarkSHINE, supplied dissertation sources.

## 07. The dark photon as a vector portal

Time: 70 seconds.

This is the low-energy form of the kinetic-mixing interaction. The small parameter epsilon induces a coupling of the dark photon to the electromagnetic current. The mass controls the available kinematics, while epsilon squared approximately rescales the production rate. I assume that the mediator can decay to lighter dark-sector particles and that the invisible branching fraction is close to one. I therefore express the projected limit in mediator mass and kinetic mixing. For the comparison with thermal relic targets later in the talk, I will also specify a mass ratio and dark coupling. The detector-level study does not require a detailed ultraviolet model.

Source context: Vector-portal benchmark and invisible-decay assumptions in the dissertation.

## 08. SHINE facility and DarkSHINE beamline

Time: 55 seconds.

SHINE provides the accelerator setting for DarkSHINE. The electron programme uses a dedicated single-particle extraction branch alongside the FEL beamlines. I use the eight GeV reference beam energy and an exposure of three times ten to the fourteen incident particles. The nominal single-particle rate is ten MHz. At this rate the benchmark corresponds approximately to a full calendar year of continuous delivery. Actual running time and duty factor remain separate operational inputs. The positron beamline remains a proposed extension. This analysis evaluates its potential physics benefit.

Source context: SHINE layout: supplied collaboration assets. Rate updated to 10 MHz for this defence.

## 09. DarkSHINE detector concept

Time: 65 seconds.

The detector follows the beam from left to right. The upstream tracker measures the incident momentum in the magnet. A thin tungsten target provides the interaction material, followed by the recoil tracker. The electromagnetic calorimeter measures the remaining electromagnetic energy, and the larger hadronic calorimeter rejects escaping hadrons and muons. Its large volume provides containment for penetrating particles. The tracker uses strip measurements, and the ECAL uses a segmented crystal array. Their acceptance and response are evaluated with the configured simulation geometry.

Source context: DarkSHINE collaboration detector concept and geometry.

## 10. Detector requirements for a missing-energy search

Time: 60 seconds.

Background rejection sets the detector requirements. A thin target limits multiple scattering while retaining sufficient production probability. Precise strip measurements determine the incident and recoil momenta. A soft recoil can curl in a strong field, so the recoil-field profile and acceptance matter together. The ECAL must measure the electromagnetic energy, and the HCAL must catch energy carried by neutral hadrons or muons. Subsystem hardware development is collaboration work. My contribution is the software framework and analysis that propagate the detector response into selected yields. The analysis thresholds are performance assumptions that still need to be demonstrated at the system level.

Source context: DarkSHINE detector design and collaboration subsystem studies.

## 11. Electron-mode signal and background rejection

Time: 65 seconds.

In the baseline electron mode, dark bremsstrahlung produces an invisible dark photon and a visible recoil electron. The recoil tends to carry only part of the original beam energy. Ordinary bremsstrahlung can create a similar soft electron, but the photon should deposit its energy in the ECAL. The dangerous cases are the rare subsequent processes that move this energy into hadrons or muons, or beyond acceptance. This motivates the joint use of momentum, ECAL energy and HCAL vetoes. The simulation must describe the rare shower tails that survive all these requirements, as well as the average electromagnetic response.

Source context: J. Chen et al., Sci. China Phys. Mech. Astron. 66, 211062 (2023).

## 12. Standard Model background hierarchy

Time: 55 seconds.

Electronuclear interactions form one branch of the background hierarchy. Hard bremsstrahlung forms the other, followed by ordinary pair conversion, photonuclear interactions or conversion to muon pairs. Target and ECAL interactions are shown separately because they encounter different veto material and have different rates. The vertical scale gives approximate relative rates in the reference electron study. The positron samples use a separate normalisation. The extremely small invisible electroweak contribution is separated from the visible leakage backgrounds. We need to sample these rare visible branches efficiently and retain their physical normalisation.

Source context: DarkSHINE collaboration: electron-mode background hierarchy.

## 13. Why a positron beam?

Time: 70 seconds.

A positron keeps the nuclear bremsstrahlung process and adds annihilation on atomic electrons. The non-resonant process produces a photon together with the dark photon. Resonant annihilation can produce the dark photon without an accompanying visible hard particle. For an electron initially at rest, an eight GeV positron gives a centre-of-mass energy of about ninety MeV. This creates a characteristic mass scale that is absent from the electron bremsstrahlung channel. To calculate the sensitivity gain, we also need the visible topology, detector efficiency, migration and positron-specific backgrounds. I will first describe the software used to make that comparison.

Source context: X. Zhu et al., arXiv:2609.05900. Radiative diagram shows one representative tree topology.

## 14. Event Simulation and Reconstruction in DarkSHINE

Time: 15 seconds.

I will now describe my software contributions: connecting the detector definition to the analysis and reducing the cost of rare-process simulation within the collaboration framework.

Source context: Event simulation and reconstruction, supplied dissertation sources.

## 15. The DarkSHINE software framework

Time: 65 seconds.

The workflow separates transport from reconstruction through ROOT event files. DSimu configures the detector and physics and records the simulated event. DEvent defines the shared collections. DAna applies digitisation, reconstruction and analysis processors in the configured order, and DDis provides event inspection. I led the work on DSimu, the event model, rare-process biasing and staged filtering, and ACTS integration. DAna, digitisation, the other tracking algorithms, calorimeter reconstruction and generator-validation studies are collaboration contributions. A common event interface lets us follow one event through these stages and change downstream algorithms without repeating transport when the required information has been retained.

Source context: DSS software framework; X. Zhu, Nucl. Part. Phys. Proc. 346 (2024) 57.

## 16. A common event model: DEvent

Time: 55 seconds.

DEvent carries named collections with explicit roles. McParticle and DStep contain truth information. SimulatedHit records transport deposits, CalorimeterHit describes the detector response, and ReconstructedParticle represents inferred objects. The current AnaEvent name is an alias of DEvent. Truth information helps us understand a background. Experimental selections use measured or reconstructed quantities. Collection names also identify the detector region or response variant, so a change of input collection can change the meaning of a reconstructed energy even when the algorithm is unchanged. The production record should therefore include the event schema and output choices.

Source context: Event simulation and reconstruction, supplied dissertation sources.

## 17. Geometry and event-record optimisation

Time: 65 seconds.

Two optimisations address different costs. The bounding volume hierarchy groups detector volumes so Geant4 can reject larger spatial regions before testing individual cells. In the cited software benchmark the time changes from two hundred and sixty to forty-two milliseconds per event, a ratio of about six point two. Event-record optimisation and memory alignment reduce the reported example from sixty point one to a minimum of thirteen point seven kilobytes per event. The storage reduction applies to that event-record configuration. These historical software benchmarks use different configurations from the optical study shown later, so their speed-up factors cannot be multiplied or assigned to a single release.

Source context: DSS_716, slides 7 and 11. Ratios calculated from the reported values; benchmark configurations differ.

## 18. Generator-level filtering with staged transport

Time: 70 seconds.

The generator-level filter acts during transport, before the complete event is written to disk. At stage zero, only the primary track is urgent and its secondaries wait. This allows the primary interaction or energy-loss condition to be tested first. Stage one processes relevant secondaries in the region of interest, where the required rare interaction is checked. Only an accepted event releases the rest of the shower. An accumulated ECAL energy above an upper bound also permits early termination, since further deposits cannot bring the sum back down. This order avoids processing secondaries that cannot change a rejection decision.

Source context: Event simulation and reconstruction, supplied dissertation sources.

## 19. Rare-process biasing and physical normalisation

Time: 65 seconds.

Biasing increases the frequency of a selected rare interaction in a specified region. To recover the physical rate after this importance sampling, we apply the normalisation appropriate to the sample. In generic weighted counting, the sum of weights gives the yield and the sum of squared weights gives its Monte Carlo variance. The effective event count can be substantially smaller than the number of stored events. The positron campaign uses dedicated biasing studies and process cross sections for normalisation rather than the stored transport-weight field. Filters remove phase space. Weighting cannot recover events outside the generated support, so the production cuts must retain the phase space needed by the analysis.

Source context: Event simulation and reconstruction, supplied dissertation sources.

## 20. Filtering changes the production cost

Time: 65 seconds.

The cited production example uses four GeV electrons, with ten to the eleven incident particles processed on twelve thousand eight hundred cores. Filtering reduces the estimated elapsed time from around four days to fifteen hours. The storage changes from roughly three petabytes to two point five terabytes, while the quoted disk write rate also falls. Elapsed time, write rate and storage are separate resource measures; the quoted reductions are approximate. The general filters reject events with excessive visible energy or insufficient missing momentum. Dedicated filters also require the relevant particle or interaction. The filter is part of the sample definition, so the retained phase-space range and acceptance must accompany the output.

Source context: DSS_716, slide 13. Historical example; quoted values are approximate.

## 21. Parallel event simulation

Time: 55 seconds.

Geant4 multi-threading allows several events to be processed within one job. The engineering work includes thread-local allocation and singleton state, as well as random-number and primary-generation handling. In the cited comparison, one eight-thread job takes fifteen thousand three hundred and twenty-eight seconds, compared with sixteen thousand six hundred and forty-eight seconds for eight single-thread jobs. Both cases use eight concurrent execution units, giving an elapsed-time reduction of approximately eight percent. This comparison does not measure scaling from one core. The validation uses inclusive and rare-process distributions to check that changes in scheduling and worker count preserve the physics.

Source context: DSS_716, slide 15, INPAC cluster benchmark. Relative time reduction calculated from reported times.

## 22. Optical response with a lookup table

Time: 65 seconds.

Full optical transport is expensive because a single interaction can generate a very large number of photons. The lookup table replaces repeated scintillation-photon propagation with a conditional response. It stores both a detection probability and a transit-time distribution. In the cited study, the full event takes about two hundred seconds with optical tracking, four seconds with the table, and two seconds without optical photons. The comparison on the left tests detection efficiency and agrees within five percent. This check validates the table for the optical geometry and properties used to construct it. Electronics effects and other detector geometries need separate validation. The digitisation and optical studies are collaboration contributions integrated into the common framework.

Source context: DarkSHINE optical-response study. Single-core Intel Xeon E5-2680v4 benchmark.

## 23. Digitisation connects deposits to observables

Time: 60 seconds.

The digitisation chain turns transported energy into the quantities that reconstruction uses. Light production and collection determine how many photons reach the sensor. The SiPM response includes finite pixel occupancy and recovery. Electronics then add the waveform, noise, finite range and digitisation. The framework also provides a parameterised response for campaigns that do not need full optical information. Each production configuration specifies which response model is enabled. Since the positron selection uses both total energy and maximum-cell energy, we need to understand the per-cell response near the selection thresholds.

Source context: DarkSHINE digitisation and waveform study; collaboration contribution.

## 24. Track finding and fitting

Time: 55 seconds.

Track finding determines which hits belong together. The low-multiplicity legacy algorithm uses a fast circle pre-fit to rank candidates and removes accepted hits before finding the next track. The circle score is used for candidate ranking. A full fit then refines the track parameters using the magnetic field, material and measurement errors. The framework supports GenFit-based Kalman fitting and an analytical Riemann alternative. To assess momentum resolution, the fitted state and the reference state must be compared at the same surface. This also matters when comparing tagging and recoil momenta across the target.

Source context: Event simulation and reconstruction, supplied dissertation sources.

## 25. ACTS integration in DarkSHINE

Time: 70 seconds.

My ACTS integration provides an independent sequencer as well as optional adapters in the existing Tracking processor. The sequencer converts detector information into tracking surfaces and transforms strip-pair hits into ACTS measurements and source links. Geometry, momentum and field vectors use one consistent coordinate mapping. The reference chain starts with truth-smeared seeds, runs combinatorial Kalman track finding, converts the trajectories and performs vertex finding. Extrapolated recoil tracks can seed ECAL clustering. Because this reference chain uses truth-smeared seeds, it does not measure fully hit-based seeding efficiency. The alternative space-point route still needs completion and validation. These later ACTS developments were not part of the frozen positron-analysis production.

Source context: Candidate contribution: ACTS sequencer, geometry/field adapters and reconstruction interfaces.

## 26. Signal generation and validation

Time: 60 seconds.

Xiang Chen performed these generator-level checks: the production cross section as a function of mediator mass, and recoil-electron energy distributions. Rates set the expected event yield, while kinematics determine detector acceptance. The selected-event prediction must use the same production and response configuration.

## 27. Positron-Beam-Mode Analysis

Time: 15 seconds.

I now use the simulation chain to evaluate the positron option. The analysis retains the baseline one detector for a common comparison with the published electron-beam projection.

Source context: Positron-beam-mode analysis, supplied dissertation sources.

## 28. Production mechanisms at 8 GeV

Time: 70 seconds.

Nuclear bremsstrahlung remains available over a broad mediator-mass range. Non-resonant annihilation is kinematically limited by the centre-of-mass energy, and resonant production is enhanced around the corresponding scale. For an eight GeV positron annihilating with a stationary electron, this is ninety point four MeV. Motion of bound electrons broadens that ideal picture, and the resonant samples extend beyond the stationary value. This study uses on-shell mediator samples rather than a separate off-shell dark-matter-pair calculation. We then apply the detector selection to determine the accepted yield from each mechanism.

Source context: X. Zhu et al., arXiv:2609.05900. Original cross-section plot.

## 29. Signal and background samples

Time: 65 seconds.

The signal grid contains thirty bremsstrahlung masses, eighteen non-resonant masses and twenty-three resonant masses, with one hundred thousand generated events at each point. Equal sample sizes separate the efficiency calculation from the relative physical rates. Background production uses dedicated biased samples for photonuclear, positron-nuclear and muon-pair processes, with target or tracker production separated from ECAL production. The retained EN label denotes the positron-nuclear sample in this campaign. An additional target-annihilation sample accounts for ordinary annihilation topologies. The independent inclusive sample represents two point five billion incident positrons. We use it to cross-check the dedicated predictions and keep it separate when calculating the total background. All sensitivity results use baseline one.

Source context: Positron campaign sample definitions and mass grids; arXiv:2609.05900.

## 30. Three exclusive signal regions

Time: 90 seconds.

These selections define reconstructed categories independently of the generated process. Every category requires exactly one tagging track. SR1 has one recoil track and a scalar tagging-minus-recoil momentum difference above four GeV. SR2 and SR3 have zero recoil tracks. Their total ECAL energy must be below two GeV, and complementary maximum-cell conditions divide the samples at one MeV. An event at the boundary enters SR2. Every region also requires low total HCAL energy and no cell above one MeV. An event can therefore enter at most one region. Events with additional tracks or a failed veto are excluded.

Source context: Fixed working points for the baseline 1 positron projection.

## 31. Momentum and total-energy discrimination

Time: 65 seconds.

The left panel shows the tagging-to-recoil momentum difference for the recoil topology. The background curve already satisfies the loose production filter at one GeV, while the final analysis uses four GeV. The right panel shows total ECAL energy for the non-resonant channel. Near the mediator endpoint, the accompanying photon becomes soft and the ninety MeV signal can satisfy a low visible-energy condition. Even with an accompanying photon, this channel can contribute to the missing-energy search. Detector response and acceptance determine how many events pass the cut.

Source context: Original detector-level distributions; arXiv:2609.05900.

## 32. Maximum-cell energy separates the zero-track sample

Time: 60 seconds.

Within the zero-recoil-track sample, the largest ECAL cell distinguishes a photon-like deposit from a nearly empty calorimeter. The non-resonant channel changes with mass because the photon kinematics change. Resonant annihilation mostly produces low activity, though interactions in tracking material can leave deposits. The total-energy requirement remains necessary in addition to the largest-cell condition: many small deposits can have a sizeable sum. The one MeV cuts assume that the detector can operate at those thresholds. They are not measurements of the noise level. HCAL noise and pileup are not fully digitised in this campaign, so that assumption still needs experimental validation.

Source context: Original maximum-cell distributions; threshold interpretation follows the production assumptions.

## 33. Signal efficiency across the mass scan

Time: 70 seconds.

The three panels show the cutflow efficiency of each mechanism in its primary region. Each curve is normalised to the generated sample for that channel and mass. It gives a selection fraction; cross sections are needed to form the physical mixture. All nine channel-to-region curves are included in the separate backup booklet. The expected visible remnant may be lost: a recoil can fail reconstruction, and a photon can escape acceptance or remain below threshold. These events can enter another signal region and contribute to the sensitivity. For example, bremsstrahlung contributes to zero-track regions, with substantial low-activity efficiency toward the upper end of its mass grid. We include these migrations in the full channel-to-region response matrix. The next slide shows how this enters the expected signal yield at 90 MeV.

Source context: Channel-to-region efficiencies from the baseline 1 positron simulation.

## 34. Signal migration at 90 MeV

Time: 40 seconds.

Here is the channel-to-region matrix at 90 MeV. Each row is a production mechanism, and each column is a reconstructed signal region. Non-resonant annihilation supplies about 95 percent of SR2, while resonant annihilation supplies about 84 percent of SR3. Bremsstrahlung is negligible at this benchmark. We retain the off-diagonal contributions in the prediction. The matrix gives expected event counts at a fixed reference coupling. Raw simulation counts and efficiencies are separate quantities.

Source context: Dissertation table tab:benchmark_yields, 90 MeV benchmark.

## 35. Background rejection in the available simulation

Time: 65 seconds.

This cutflow follows photonuclear production in the ECAL through the selections. The recoil requirement already separates the one-track and zero-track categories. Their next cuts differ: momentum for SR1, the maximum-cell lower bound for SR2 and total ECAL energy for SR3. The HCAL veto then reduces the sample further, and the final ECAL condition removes all remaining simulated events. The bars show unweighted simulated counts; they have not been scaled to the benchmark exposure. No inclusive or dedicated sample survives a complete region selection. The finite sample size still allows a nonzero physical background.

Source context: Cumulative PN ECAL cutflow from the positron study. Effective exposure: 1.48×10¹¹ POT.

## 36. Normalisation checked in populated sidebands

Time: 65 seconds.

The dedicated samples are normalised to their equivalent unbiased exposure using the generation attempts, generator acceptance and physical branching ratio. Generation attempts and stored events have different meanings in this normalisation. After normalisation, their sum can be compared with an unbiased inclusive sample in the populated region. Target annihilation is included in this check. Agreement tests rates and distributions in the populated region. The much smaller tail probability at the final working points remains untested by this comparison. Since inclusive and dedicated routes represent the same physical processes, combining them by simply adding their yields would double count the background.

Source context: Inclusive exposure: 2.5×10⁹ POT. Dedicated sample normalisation follows the campaign convention.

## 37. Residual-background extrapolation

Time: 75 seconds.

For SR1 and SR2 the dedicated survival curves are fitted as a power law in the numerical total-ECAL threshold in MeV. The resulting nominal backgrounds are zero point zero three events for SR1 and one point three times ten to the minus four for SR2. SR3 needs a two-dimensional continuation because the total and maximum-cell energies are related. Its nominal yield is one point six times ten to the minus four. These predictions depend on the extrapolation function and limited tail statistics. They also omit components with zero surviving simulated events. The inclusive one-dimensional comparison uses a different exponential form and does not establish quantitative closure at the final thresholds.

Source context: Dedicated tail estimates at 3×10¹⁴ POT. SR3 surface is a fit, not a selection boundary.

## 38. Combined statistical interpretation

Time: 70 seconds.

At each mass the signal prediction sums all three production mechanisms in every region. One common signal strength scales those contributions because the same kinetic mixing controls their rates. The analysis uses a binned profile likelihood with nuisance parameters and obtains expected ninety-percent confidence-level limits with CLs under the background-only hypothesis. Shape uncertainties are treated as uncorrelated between bins in the reported construction, and the background normalisation uses its stated Poisson prescription. Exclusive regions prevent event double counting. Detector uncertainties can still be correlated across regions. The asymptotic method is used well below one expected background event, and its coverage has not yet been checked with pseudo-experiments.

Source context: Statistical prescription reported in arXiv:2609.05900; limitations retained.

## 39. Annihilation drives the gain near 90 MeV

Time: 75 seconds.

This comparison retains one production mechanism at a time while keeping all three measured regions and the same background model. It therefore includes migration even in the individual curves. At ninety MeV, non-resonant annihilation gives the strongest individual projected limit, about seven point three times ten to the minus thirteen in epsilon squared. Resonant annihilation also contributes, and the combination reaches five point three three times ten to the minus thirteen. Much of the gain comes from non-resonant annihilation near the radiative endpoint and the selection efficiency of the associated photon category.

Source context: Expected 90% CL projection at 3×10¹⁴ POT; original mechanism-comparison plot.

## 40. Projected reach in mediator mass and kinetic mixing

Time: 80 seconds.

The full comparison places the combined positron projection alongside the earlier electron-beam projection and external constraints and prospects. Near ninety MeV the gain is about two orders of magnitude in epsilon squared at matching integrated luminosity. The sharp feature follows the annihilation kinematics, with the gain concentrated near that mass scale. At lower masses bremsstrahlung remains relevant. The comparison includes both existing exclusions and future projections. Our curve is an expected detector-level sensitivity for the stated exposure, baseline detector and background model; it is not an observed exclusion.

Source context: Original comparison figure from the positron study; external curves retain source assumptions and exposure labels.

## 41. Interpretation relative to thermal targets

Time: 65 seconds.

To relate the mediator search to light-dark-matter thermal targets, I now add a mass ratio of three and a dark coupling alpha D of zero point five. These assumptions define the vertical variable y and map a ninety MeV mediator to a thirty MeV dark-matter particle. For this benchmark y is epsilon squared divided by one hundred and sixty-two. The simulated event categories and efficiencies stay the same under this change of coordinates. Scalar, Majorana and pseudo-Dirac thermal targets depend on their own spin and annihilation assumptions. The comparison applies to these specified benchmarks; other dark-sector models at the same mass can give different predictions.

Source context: Original thermal-target plot with mA′/mχ=3 and αD=0.5.

## 42. Scope of the positron projection

Time: 60 seconds.

The analysis establishes the detector-level efficiency and migration of the three mechanisms for the benchmark setup, and it connects them to exclusive reconstructed categories and a combined projection. The main limitations lie in the very small background tails and in the assumed veto response. Larger rare-process samples are needed to constrain extrapolation and omitted components. Prototype measurements must establish threshold performance with realistic noise and pileup. Pseudo-experiments are needed to test the low-count statistical construction. Each of these checks is needed before the projected sensitivity can support an experimental search.

Source context: Positron-beam-mode analysis, supplied dissertation sources.

## 43. Summary and Outlook

Time: 15 seconds.

I will finish with the software and physics results, followed by the work still needed for an experimental search.

Source context: Summary and outlook, supplied dissertation sources.

## 44. Main results

Time: 65 seconds.

The software result is a configurable framework and event model that connect transport, detector response and reconstructed observables. Geometry and record optimisation reduce per-event cost; biasing and staged filters focus resources on rare backgrounds; parallel execution increases production capacity. ACTS integration extends the reconstruction environment. The physics result is a prospective positron search with three exclusive categories and all migrations retained. At ninety MeV, the combined expected limit reaches five point three three times ten to the minus thirteen in epsilon squared at the benchmark exposure. The improvement is driven by annihilation, particularly the non-resonant contribution near its endpoint, under the assumptions already discussed.

Source context: Summary and outlook, supplied dissertation sources.

## 45. Outlook

Time: 55 seconds.

Detector data can constrain the response and veto thresholds. Larger rare-process samples can constrain the tails and help quantify model dependence. Pseudo-experiments can test the statistical approximation where expected backgrounds are extremely small. Finally, varying the beam energy moves the characteristic annihilation mass approximately with the square root of the energy. A beam-energy scan could therefore probe other masses. Each energy needs its own kinematics, acceptance and background study, using the eight GeV result and simulation framework as a starting point.

Source context: Summary and outlook, supplied dissertation sources.

## 46. Research Achievements

Time: 45 seconds.

My lead-author works cover the positron study and the simulation framework. The remaining publications and reports are collaborative contributions, including the CEPC exotic-Higgs study, DarkSHINE physics prospects and calorimeter design. The simulation and reconstruction manuscript remains in preparation, and the baseline design report is preliminary. Thank you for your attention. I welcome your questions.

Source context: Publication status reproduced from the supplied List of Research Achievements.
