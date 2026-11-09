# Content and interpretation notes

The scientific source is the supplied dissertation and collaboration material. Main slides intentionally do not display dissertation chapter references. The formal report is 45 minutes; questions are outside that duration. Research Achievements is the final main slide. The backup deck is independent.

## Adopted beam rate and EOT/POT benchmarks

The candidate confirmed **1 MHz** as the design repetition rate. The sensitivity benchmark uses **3 × 10^14 EOT/POT**. EOT refers to electrons and POT to positrons. Running-time estimates depend on the beam rate and operational duty factor.

## Detector and signal interpretation

- The positron production uses **baseline 1** (20 × 20 × 11 non-staggered ECAL), matched to the earlier electron benchmark. Evolved master-branch geometry is described separately in backup.
- The signal sample includes dark bremsstrahlung, non-resonant radiative annihilation and resonant annihilation, with 30, 18 and 23 mass points respectively; 10^5 generated events per channel–mass point.
- The stationary-electron reference at 8 GeV is sqrt(s) = 90.4 MeV. Bound-electron motion broadens this picture. The simulated projection uses on-shell signals.
- The three selected regions are exclusive reconstructed categories. Every production channel contributes to every region through its own efficiency. The main deck shows the three primary efficiencies and a numerical migration example; backup contains all nine efficiency curves.
- SR1: one tag, one recoil, momentum difference > 4 GeV, total ECAL < 2.5 GeV. SR2: one tag, no recoil, total ECAL < 2 GeV and max cell ≥ 1 MeV. SR3: one tag, no recoil, total ECAL < 2 GeV and max cell < 1 MeV. All require total HCAL < 100 MeV and maximum HCAL cell < 1 MeV.
- The production filter (momentum difference > 1 GeV and total ECAL < 7 GeV) is distinct from final selections.

## Background and statistics

- Seven dedicated background processes are compared with an inclusive 2.5 × 10^9 POT sample. Effective POT = attempted events × generator acceptance / branching fraction. Stored cutflow counts and attempted events differ.
- Nominal dedicated residual backgrounds at 3 × 10^14 POT: 0.03, 1.3 × 10^-4 and 1.6 × 10^-4 events for SR1–3. Zero simulated survivors do not imply zero physical rate.
- Dedicated 1D tails use exp(a + b ln x); inclusive comparisons use exp(a + bx), with x numerically in MeV. These forms are not interchangeable.
- SR3 uses a joint two-threshold extrapolation; total and maximum-cell energies are correlated.
- Reported expected limits use background-only asymptotic CLs at 90% confidence and profile likelihood. The main talk reports the completed benchmark analysis. Detector-response assumptions and extrapolation choices are explained with the method; detailed statistical and detector refinements are supporting questions rather than a prerequisite list in Summary and Outlook.
- At m(A′) = 90 MeV, epsilon² limits are 1.34 × 10^-9 (bremsstrahlung), 7.29 × 10^-13 (non-resonant), 1.97 × 10^-12 (resonant), and 5.33 × 10^-13 combined. Non-resonant annihilation is the strongest individual mechanism at this point.
- The thermal-target representation additionally assumes m(A′) = 3m(χ) and alpha_D = 0.5, giving y = epsilon²/162.

## Software-performance and ownership

- Candidate-led: DSimu and DEvent development, rare-process biasing/staged filtering, ACTS integration and the positron-mode analysis. Digitisation, optical response, other tracking and generator-comparison results are identified as collaboration contributions.
- Event-record benchmark: 60.1 → 13.7 KB; geometry navigation: 260 → 42 ms. These are separate benchmarks and are not multiplied.
- Filter benchmark: ~4 days → ~15 hours; 9 → 0.23 GB/s; ~3 PB → ~2.5 TB. Source configurations are retained in notes.
- Eight-thread versus eight single-thread-job benchmark: 15,328 versus 16,648 seconds, approximately 8% shorter, not an eightfold speedup.
- Optical benchmark: full tracking ~200 s/event; LUT ~4 s; no optical photons ~2 s. ~50× refers specifically to full optical versus LUT; reported efficiency agreement is within 5%.
- ACTS reference sequence uses truth-smeared seeds; the optional hit-based adapter and independent sequencer are not described as one fully validated chain.

Publication status and all eight achievements reproduce the supplied List of Research Achievements. No claim of a newer publication status was inferred.

## 90 MeV matrix audit

The nine cells and published totals match `PhDThesis/contents/positron_analysis.tex`, table `tab:benchmark_yields`. They are expected yields at epsilon squared = 1e-12 and 3e14 POT, not integer Monte Carlo counts. Column percentages are computed from the displayed channel entries, not the independently rounded published total. The dominant components are non-resonant annihilation in SR2 (~95%) and resonant annihilation in SR3 (~84%). Nonzero entries do not imply comparable contributions. The revised takeaway explicitly states annihilation dominance and cross-feed.

## Added 50 MeV migration benchmark

The new preceding matrix uses the 50 MeV block of the same thesis table. SR2 receives 0.00439 expected events from non-resonant annihilation and 0.00438 from resonant annihilation; the composition percentages from the displayed entries are 47.6% and 47.5%. Conditions are typeset as math with vertical-bar separators. Across the report and backup, CSS preserves authored case so MeV, GeV and epsilon cannot be uppercased.

## Baseline 1 model envelope

The detector illustration now uses the original HCAL transverse envelope 4 x 4 m and a nominal active depth of 4.02 m, derived from 80 iron plates at 3 cm plus 162 scintillator layers at 1 cm. The source is darkshine_detector.tex, Reference Conceptual Design. ECAL and tracking dimensions are unchanged. This replaces the earlier compact 1.5 x 1.5 x 2.5 m artistic envelope. Displayed layer strokes are schematic subdivisions, not a literal layer count.

## Recording 56 revision

Baseline 1 is identified on the detector/setup pages, using the non-staggered 20 × 20 × 11 LYSO ECAL and original uniform-absorber HCAL. The ECAL row on slide 10 states qualitative granularity and energy-precision requirements; it does not attribute the evolved ECAL stochastic term to Baseline 1. First-use research cards link the BDR, ECAL/HCAL design papers, electron prospects and positron paper to the corresponding presentation material. DOI links for Science China and the software proceedings were explicitly approved by the candidate. No earlier CEPC result appears in the DarkSHINE talk, so that publication remains on Research Achievements. The in-preparation software manuscript is identified as collaborative work with Prof. Kim-Siang Khaw and colleagues; the 2024 proceedings remains sole-authored.

By the candidate’s subsequent instruction, slide 14 has no simulation-framework publication-link card. Its scientific output and contribution statement are unchanged.
