# Speaker-note review: main slides 09–45

Reference edit: Xuliang Zhu's `60118bc` (`remove defensive words in speaker notes`). Reviewed each source slide, its displayed components and figure captions, and the associated notes. Figure provenance and software-output interpretation were checked against `PHYSICS_OUTPUT_SOURCES.md`; the ACTS pull image and CDR recoil-tracker source were also inspected directly.

The reference edit removes pre-emptive objections, repeated scope statements, presentation directions, and explanations that do not advance the physics. This review follows that choice. Numerical selections, sample definitions, model parameters, normalisation and the statistical construction remain where they explain the displayed result. Slides, figures, references and achievements were not edited. Human edits on slides 01–08 were left intact and copied into the aggregate notes and manifest.

| Page | Decision / change |
|---|---|
| 09 | Explain the detector functions; remove repeated common-benchmark/report narration and click instructions. |
| 10 | Keep the numerical design requirements; remove the generic sentence about the design papers. |
| 11 | Keep signal/background physics and the combined measurements; remove presenter instructions. |
| 12 | Keep the process hierarchy, HCAL rejection and dedicated-sample motivation; remove the repeated transition into the framework. |
| 13 | Keep: chapter introduction matches the software section. |
| 14 | Follow the actual Generation → DSimu → DEvent → DAna chain, DDis and analysis; explain the four recoil observables and keep the pT-panel energy condition. Remove repeated motivation and transition. |
| 15 | Keep the event content and particle-to-shower interpretation; remove the generic ending about choosing collections for each study. |
| 16 | Keep stored quantities, the tracker-step condition and both benchmarks; remove the ending that warns the numbers refer to different configurations. |
| 17 | Keep the three tracking stages and physics decisions; remove the trailing separation from later reconstruction. |
| 18 | Keep 0.0014%, 0.11%, and 6 / 2×10⁷ EOT with their denominators; remove generic interpretation and the next-slide transition. |
| 19 | Keep process biasing, saturation and physical-rate recovery; remove click instructions and the aside about the positron campaign. |
| 20 | Keep worker-local physics, collection merging and measured runtimes; remove the generic shared-interface conclusion and unspecified historical checks. |
| 21 | Keep probability, timing, efficiency comparison, runtime and Qibin Liu credit; remove the late-bin uncertainty aside. |
| 22 | Keep the pulse-to-waveform-to-energy physics and Qibin Liu credit; remove the configuration-record aside. |
| 23 | Explain the CDR resolution curve's low/high-energy behaviour and six-layer choice; remove the generic detector-study label and unshown alternative fit implementations. |
| 24 | Keep the ACTS interface chain, truth-assisted 2023 test, pull definition and contributions; remove the comparison with later developments and the frozen positron reconstruction. |
| 25 | Shorten the section introduction; remove the explanation about keeping the same detector for comparison. |
| 26 | Keep the three production mechanisms and 90.4 MeV scale; remove the sensitivity checklist and presenter directions. |
| 27 | Keep production kinematics and the 90 MeV scale; replace the bound-electron-motion statement with off-shell dark-photon exchange at the candidate’s request; remove the on-shell/off-shell scope disclaimer and the later-selection transition. |
| 28 | Keep signal-grid counts, production chain and background definitions; remove the warning about not adding inclusive counts into the prediction. |
| 29 | Match every table threshold, adding SR1 ECAL <2.5 GeV and HCAL total <100 MeV; remove the unneeded process-label negation. |
| 30 | Explain momentum rejection and the soft-photon endpoint; remove the generic final sentence about acceptance. |
| 31 | Keep the zero-track calorimeter physics and exact SR2/SR3 split; remove the benchmark-response qualification and unshown generic deposit-summing statement. |
| 32 | Keep efficiency normalisation and the physical causes of migration; remove the backup-page advertisement and next-page transition. |
| 33 | State the reference coupling/POT and expected selected counts directly; remove the negative definition about raw simulation counts. |
| 34 | Explain the actual unweighted PN-ECAL cutflow and extrapolation; remove the pre-emptive warning that finite samples do not prove zero background. |
| 35 | Keep the effective-POT normalisation and sideband comparison; remove the generation-attempt aside and repeated cross-check/transition statements. |
| 36 | Keep fits, correlations and all three predicted yields; clarify that yields sum process contributions and remove repeated extrapolation wording. |
| 37 | Keep the common signal strength, exclusive regions, profiling, CLs and explicit bin-uncorrelation choice; remove presenter directions and the speculative detector-correlation aside. |
| 38 | Keep: mechanism comparison matches the plot/table, including use of all regions and the same background model. |
| 39 | Give the beam count and sensitivity directly; remove the closing paragraph of assumptions and the generic exclusion/projection legend description. |
| 40 | Keep the mass ratio, coupling, y conversion and thermal-target physics; remove the unchanged-efficiencies reassurance and the ending about other possible models. |
| 41 | State the completed results and concrete extensions; remove repeated assurances of benchmark completion. |
| 42 | Keep: short introduction to summary/outlook. |
| 43 | Keep: contributions, numerical result and electron/positron comparison match the slide. |
| 44 | Keep detector measurements, rare-background sampling and beam-energy physics; remove the generic opening and repeated closing about extending the benchmark. |
| 45 | Keep: publication status, authorship and closing match the achievements slide. |

Verification: all 45 source-slide notes are synchronised with `Speaker_Notes.md` and the manifest. Source-slide bodies/frontmatter are unchanged. Static web builds are regenerated; no commit or deployment is part of this review.

## Spoken numerical precision

Long measured counts and fitted results use approximate values in the notes: roughly a quarter of a million stored events; about one event in seventy thousand; about 4.3 versus 4.6 hours; sensitivity near five times ten to the minus thirteen; zero-track backgrounds of order ten to the minus four events. The source slide figures, tables and formulas keep their exact values. Selection thresholds, sample-reference coupling/POT and short model parameters remain precise. Backup normalisation/counting examples use rounded spoken values as well.
