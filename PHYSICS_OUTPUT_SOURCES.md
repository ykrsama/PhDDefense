# Physics output in the simulation and reconstruction chapter

The chapter was revised to put the physical information and output beside the software method. Original plot axes and data are retained; PDF plots are rendered to SVG, and slides from older reports are cropped without redrawing their data.

| Slide | Asset | Source and interpretation |
| --- | --- | --- |
| 14 | `recoil-energy.svg`, `recoil-pt.svg` | `Works/DarkSHINE_CDR_Physics_Detector/SignalBackground/Figures/dp_electron_energy_cdr.pdf` and `dp_electron_pt_draft_cdr.pdf`; 8 GeV electron-mode simulation. The pT plot includes 50 MeV ≤ Ee ≤ 4 GeV. Original PDFs accompany the SVGs. |
| 15 | `event-display.png` | `Documents/DarkSHINE-Slides/DSS_716.pdf`, page 18, web event-display viewport. |
| 16 | Physics-field table | Simulation `CHANGELOG`, 2022-04-06; `Utility/Object/include/Object/versions/DParticle_b1_5.h`, active `DHit_b1_4.h`, `SimulatedHit_b1_5.h`. The recorded quantities include momentum, energy, mass, vertices/endpoints, hit energy/time/position and detector/cell IDs. Historical tracker-step restriction is documented separately from current configurable step recording. |
| 16 | `transport-geometry.png` | Thesis `figures/ch04_simu_reco/XLZ-dsimu-geo.png`; detailed simulation geometry. The geometry itself is not a BVH illustration. CPU/storage benchmarks are from DSS_716 pages 7 and 11. |
| 17 | Staged flow and physics conditions | `DP_simu/src/UserAction/StackingAction.cc`, `SteppingAction.cc`, `DP_simu/src/Bias_Filter/FilterParticle.cc`, `FilterProcess.cc`, `FilterManager.cc`; thesis `contents/simu_reco.tex`. Parent-step energy transfer and secondary-particle energy are distinct filter inputs. |
| 18 | `bias-gmm-ecal.png` | Existing backup figure `PreDefenceBackup/public/qa/gmm-ecal.png`, historical muon-pair conversion probability scan. Used to illustrate sampling and physical-rate recovery. |
| 19 | `filter-ecal.png`, `filter-recoil.png` | `Documents/DarkSHINE-Slides/low_E_filter.pdf`, page 4. Baseline 1.6, 8 GeV electrons, 2×10^9 EOT. Black means all stored filtered events; red requires a reconstructed recoil track. Page 2 defines the 4 GeV primary-entry-energy / ECAL-deposit vetoes. Original report copied as `filter-study.pdf`. |
| 20 | `figures/DSS-065.png` | Existing DSS_716 thread-scaling chart. It shows resource scaling, not a comparison of physics distributions. |
| 21 | `optical-efficiency.png`, `optical-timing.png` | Thesis `QBL-optical-eff-val.png` and `QBL-optical-timing-val.png`. Five-percent agreement applies to detection efficiency; the timing plot has larger uncertainties in the late bins. Credit: Qibin Liu. |
| 22 | `single-pe-pulse.png`, existing waveform | Thesis `QBL-digitization-pulse.png` and `QBL-digitization-p1.pdf`. Single-photoelectron response and cell waveforms. Credit: Qibin Liu. |
| 23 | `track-momentum.png` | Thesis `YFZ-track-fitting.png`: reconstructed momentum spectra for Riemann / GenFit implementations and truth. This is a spectrum comparison, not a resolution plot. Credit: Yifan Zhu. |
| 24 | `acts-pull.png` | `Documents/DarkSHINE-Slides/ACTS-DSS.pdf`, page 3; 17 October 2023 truth-assisted fitter integration test. Current sequencer flow is documented in thesis `contents/acts_reconstruction.tex`. The historical plot illustrates a fit diagnostic, not a current CKF seeding-efficiency measurement. Original report copied as `acts-fitter-study.pdf`. |
| 25 | Existing cross-section / energy distributions | Existing Xiang Chen generator-study assets, retained. |

New assets are under `PreDefence/public/physics-output/`.

## Background sub-processes and sample motivation (slide 12)

Source: `Works/Science_China.pdf`, J. Chen et al., Sci. China Phys. Mech. Astron. 66, 211062 (2023). Read against the supplied full text:

- PDF pp. 5–7, Secs. 4, 4.2 and 5, Fig. 8 and Table 2: 8 GeV electron-mode backgrounds; frequent electron-pair conversion identified by tracker/ECAL; PN, EN and gamma-to-muon-pair processes; six dedicated target/ECAL samples alongside 2.5 billion inclusive events; HCAL rejection of hadronic and muonic activity.
- PDF pp. 8–10, Sec. 6 and Sec. 6.1: limited inclusive statistics in the low-ECAL-energy region; high-statistics dedicated samples, branching-ratio normalisation and process-specific extrapolation. The article finds GMM effectively rejected by HCAL and treats PN/EN residuals separately.

The revised slide and notes paraphrase these passages. They do not attribute a biasing algorithm to this article, which does not describe one explicitly. No numerical branching ratios or final background yields were added to the slide.
