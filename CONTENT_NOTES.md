# Content and interpretation notes

The scientific source is the supplied dissertation and collaboration material. Main slides intentionally do not display dissertation chapter references. The formal report is 45 minutes; questions are outside that duration. Research Achievements is the final main slide. The backup deck is independent.

## Adopted beam and exposure convention

The candidate explicitly selected **10 MHz** to match the nominal **3 × 10^14 incident particles** exposure. At one particle per delivery this is 3 × 10^7 seconds, approximately a calendar year of continuous operation. It is an exposure benchmark, with operational duty factor separate. EOT refers to electrons and POT to positrons. The original 1 MHz versus annual-exposure inconsistency is not propagated into the presentation.

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
- Reported expected limits use background-only asymptotic CLs at 90% confidence and profile likelihood. Low-count coverage, tail continuation and the HCAL threshold under noise/pileup require further validation.
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
