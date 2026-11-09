# Physics output in the simulation and reconstruction chapter

The chapter was revised to put the physical information and output beside the software method. Original plot axes and data are unchanged; PDF plots are rendered to SVG, and slides from older reports are cropped without redrawing their data.

| Slide | Asset | Source and interpretation |
| --- | --- | --- |
| 14 | `recoil-energy.svg`, `recoil-pt.svg` | `Works/DarkSHINE_CDR_Physics_Detector/SignalBackground/Figures/dp_electron_energy_cdr.pdf` and `dp_electron_pt_draft_cdr.pdf`; 8 GeV electron-mode simulation. The pT plot includes 50 MeV ≤ Ee ≤ 4 GeV. Original PDFs accompany the SVGs. |
| 15 | `event-display.png` | `Documents/DarkSHINE-Slides/DSS_716.pdf`, page 18, web event-display viewport. |
| 16 | Physics-field table | Simulation `CHANGELOG`, 2022-04-06; `Utility/Object/include/Object/versions/DParticle_b1_5.h`, active `DHit_b1_4.h`, `SimulatedHit_b1_5.h`. The recorded quantities include momentum, energy, mass, vertices/endpoints, hit energy/time/position and detector/cell IDs. Historical tracker-step restriction is documented separately from current configurable step recording. |
| 16 | `transport-geometry.png` | Thesis `figures/ch04_simu_reco/XLZ-dsimu-geo.png`; detailed simulation geometry. The geometry itself is not a BVH illustration. CPU/storage benchmarks are from DSS_716 pages 7 and 11. |
| 17 | Staged flow and physics conditions | `DP_simu/src/UserAction/StackingAction.cc`, `SteppingAction.cc`, `DP_simu/src/Bias_Filter/FilterParticle.cc`, `FilterProcess.cc`, `FilterManager.cc`; thesis `contents/simu_reco.tex`. Parent-step energy transfer and secondary-particle energy are distinct filter inputs. |
| 18 | `generator-filter-ecal-cut.png`, `generator-filter-tracker-missing-p-cut.png` | `Documents/DarkSHINE-Slides/inclusive_filter.key`, slides 2 and 5, and the two supplied PNGs. ECAL 0.11% is conditional on the preceding generator filter and `RecTrk2_e[0] > 0`. Tracker blue: reconstructed missing momentum > 4 GeV and one track; red adds truth ECAL energy < 4 GeV. The six red entries below truth missing momentum 4 GeV correspond to 2×10^7 original EOT. Both plot denominators confirmed by Xuliang Zhu. The main production result is 270,310 stored events / 2×10^10 EOT = 0.00135155% ≈ 0.0014% (Keynote slide 5), corresponding to ≈73,990 times fewer event records, or 4.87 orders of magnitude. Xuliang Zhu specified this storage-stage gain as the emphasis of the slide. Original PNGs copied without modification. |
| 19 | `bias-gmm-ecal.png` | Existing backup figure `PreDefenceBackup/public/qa/gmm-ecal.png`, historical muon-pair conversion probability scan. Used to illustrate sampling and physical-rate recovery. |
| 20 | `figures/DSS-065.png` | Existing DSS_716 thread-scaling chart. It shows resource scaling, not a comparison of physics distributions. |
| 21 | `optical-efficiency.png`, `optical-timing.png` | Thesis `QBL-optical-eff-val.png` and `QBL-optical-timing-val.png`. Five-percent agreement applies to detection efficiency; the timing plot has larger uncertainties in the late bins. Credit: Qibin Liu. |
| 22 | `single-pe-pulse.png`, existing waveform | Thesis `QBL-digitization-pulse.png` and `QBL-digitization-p1.pdf`. Single-photoelectron response and cell waveforms. Credit: Qibin Liu. |
| 23 | `track-momentum.png` | Thesis `YFZ-track-fitting.png`: reconstructed momentum spectra for Riemann / GenFit implementations and truth. This is a spectrum comparison, not a resolution plot. Credit: Yifan Zhu. |
| 24 | `acts-pull.png` | `Documents/DarkSHINE-Slides/ACTS-DSS.pdf`, page 3; 17 October 2023 truth-assisted fitter integration test. Current sequencer flow is documented in thesis `contents/acts_reconstruction.tex`. The historical plot illustrates a fit diagnostic, not a current CKF seeding-efficiency measurement. Original report copied as `acts-fitter-study.pdf`. |

New assets are under `PreDefence/public/physics-output/`.

## Background sub-processes and sample motivation (slide 12)

Source: `Works/Science_China.pdf`, J. Chen et al., Sci. China Phys. Mech. Astron. 66, 211062 (2023). Read against the supplied full text:

- PDF pp. 5–7, Secs. 4, 4.2 and 5, Fig. 8 and Table 2: 8 GeV electron-mode backgrounds; frequent electron-pair conversion identified by tracker/ECAL; PN, EN and gamma-to-muon-pair processes; six dedicated target/ECAL samples alongside 2.5 billion inclusive events; HCAL rejection of hadronic and muonic activity.
- PDF pp. 8–10, Sec. 6 and Sec. 6.1: limited inclusive statistics in the low-ECAL-energy region; high-statistics dedicated samples, branching-ratio normalisation and process-specific extrapolation. The article finds GMM effectively rejected by HCAL and treats PN/EN residuals separately.

The revised slide and notes paraphrase these passages. They do not attribute a biasing algorithm to this article, which does not describe one explicitly. No numerical branching ratios or final background yields were added to the slide.
