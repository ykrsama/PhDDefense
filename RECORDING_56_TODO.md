# Recording 56: presentation revision

Source: `../output/audio/New_Recording_56/录音转写稿.md` (29:46).

## Already implemented: keep the implementation

- [x] Feynman highlights follow particle arrows, with one stream per continuous particle line.
- [x] Positron mechanisms are grouped at the start of the positron chapter, with a grouped reveal.
- [x] The background page explains PN, EN and muon-pair sub-processes and cites Science China.
- [x] The software framework page includes physics output and the general-design contribution.
- [x] Optimisation pages identify the saved physical quantities and specific software changes.
- [x] Generator-filter efficiency, EOT/POT wording and the 1 MHz choice reflect subsequent discussion.

## Revision checklist

- [x] **#8, beam design** (24:00–27:00): label 8 GeV and 1 MHz as design values; define incident electrons / EOT. Add no commissioning-rate or annual-data claim.
- [x] **#9–12, Baseline 1** (03:00–12:00): define the common detector configuration, use a distinct Baseline 1 label, and cite the Baseline Design Report with its arXiv link.
- [x] **#14 and #16, physical output and optimisation** (12:00–21:00): explain coloured signal-mass curves and the black background curve; allow more time for the plots; introduce subsequent work as software optimisation.
- [x] **#41, analysis conclusion** (21:00–24:00): describe accomplished work and further refinements without implying that the reported analysis awaits validation.
- [x] **#43, Summary**: connect the candidate's completed software contributions to the completed positron analysis and quantitative result.
- [x] **#44, Outlook** (21:00–24:00): state concrete extensions and optimisation directions, rather than prerequisites for accepting the existing result.
- [x] **#45, research achievements** (00:00–03:00): move the Baseline Design Report to collaborative reports; identify the in-preparation collaboration with Prof. Kim-Siang Khaw accurately.
- [x] **First-use publication cards** (user addition): trace each achievement's figures/conclusions to its first use; add a compact floating card with a verified link. Ask for any required missing arXiv link; do not substitute another source.
- [x] **#23–24, CDR figures** (user addition): establish whether the current tracking/ACTS figures occur in CDR; keep matches and replace other figures with the corresponding CDR originals. Ask if required CDR material is missing.
- [x] **Consistency and QA**: synchronise notes, metadata and timing; build and inspect affected pages and click states.

## Verified sources and boundaries

- Baseline Design Report: J. Chen et al. (DarkSHINE Collaboration), *DarkSHINE Baseline Design Report: Physics Prospects and Detector Technologies*, **arXiv:2411.09345**; `PhDThesis/refs.bib`, entry `DarkSHINE:BDR2024`.
- Baseline 1: non-staggered **20 × 20 × 11 LYSO ECAL** and original **uniform-absorber HCAL**, shared by the electron and positron benchmarks. Sources: `PhDThesis/contents/darkshine_detector.tex` and `positron_analysis.tex`. Later master geometry must not be labelled Baseline 1.
- The manuscript author list verifies **Prof. Kim-Siang Khaw** as a corresponding co-author. It is a multi-author manuscript. The 2024 conference paper remains sole-authored by Xuliang Zhu. Sources: `PhDThesis/contents/achievements.tex` and the local simulation/reconstruction manuscript.
- Keep actual method conditions: extrapolated backgrounds, the assumed detector thresholds and the stated statistical construction. Do not invent completed noise/pileup studies or pseudo-experiment validation. Avoid repeating these conditions as an unfinished-work list in Summary and Outlook.
- Keep **1 MHz**. Do not infer present-day commissioning energy/rate from unclear transcript passages or add a running-year conversion.

No commit until the user explicitly requests one.

## Confirmed decisions, 10 November 2026

- Science China uses its verified DOI link. The candidate also approved the software-proceedings DOI, then explicitly requested removal of that publication card from slide 14.
- Slide 10 states **high granularity and precise e/γ energy measurement**. The evolved ECAL stochastic term is removed from the page and notes.
- Slide 23 uses the CDR recoil-tracker momentum-resolution plot, with its matching interpretation and report credit. Slide 24 keeps the ACTS integration-test figure, by explicit instruction.
- Slide 14 uses all four CDR `dp_*.pdf` distributions: energy, transverse momentum, angle and transverse separation. The flowchart keeps its node positions, links and typography; its SVG scales uniformly in the narrower left column.
- The additional “Non-staggered…” and “Acceptance gaps…” footers on slides 9 and 10 are removed. Baseline identification, research cards and source links remain.
- The framework-output discussion receives more speaking time. The revised timing is **45 slides / 44:30**.

## First-use research cards

| Slide | Research achievement | Link |
|---|---|---|
| 9 | DarkSHINE Baseline Design Report | https://arxiv.org/abs/2411.09345 |
| 10 | LYSO ECAL design study | https://arxiv.org/abs/2407.17800 |
| 10 | HCAL design study | https://arxiv.org/abs/2311.01780 |
| 11 | Electron-beam physics prospects, Science China | https://doi.org/10.1007/s11433-022-1983-8 |
| 26 | Positron-beam prospects | https://arxiv.org/abs/2609.05900 |

The CEPC paper has no figure or scientific conclusion in the preceding DarkSHINE slides; it remains on Research Achievements without an invented earlier association. The software manuscript is labelled in preparation and is not assigned a publication link.

Final label styling: slide 9 places **Baseline 1** after the title, at the same type size and in gold. Slides 10–12 keep the existing small badge size/position and use gold.

Final layout after footer removal: slide 9 expands the detector view and moves the subsystem descriptions down; slide 10 uses taller table rows with the detector view centred beside the table. Text sizes remain unchanged.

Validation completed: production web build; all affected visual pages inspected; revised pages rechecked after each layout change; publication-card links/bounds; four detector click states; grouped reveals; four plot zooms; authorship placement; unchanged flowchart definitions and ACTS source; source/manifest/notes consistency. Current deck: 45 slides, 2670 seconds (44:30). No commit or deployment.

- [x] Follow-up layout on slides 15–17: larger event-display/geometry areas, more table and field spacing, aligned performance strips, and a more evenly distributed staged-filter diagram and explanations. Authored text sizes and flow definitions are unchanged.

- [x] Slide 14 exception: remove the DarkSHINE simulation-framework publication-link card. Keep the flowchart, four CDR plots, contribution statement and presenter notes.
