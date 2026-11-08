# Validation record

Validated locally on 9 November 2026.

- Main report: 47 pages, 2700 seconds (45 minutes), final page Research Achievements.
- Independent backup: 14 pages.
- Production builds succeeded. All 61 browser pages were checked for image loading, math errors, content bounds and conclusion-band overlaps; no issues remained. Computed uppercase transforms: zero on every page.
- Both final PDFs were rendered with Poppler and reviewed; final chapter crops were re-rendered after repositioning. Every page has selectable text.
- New page 34 uses the thesis 50 MeV benchmark. Page 35 retains the 90 MeV benchmark. Matrix hover values and composition percentages checked against the supplied table. Benchmark conditions use case-preserving math and vertical separators.
- HCAL is 4 x 4 m transverse with a 4.02 m nominal active-stack depth. ECAL and trackers retain their dimensions. Calorimeter segmentation is drawn only on camera-facing faces; every shower branch begins at the recoil endpoint.
- Compact slides 9 and 10 retain fixed entry cameras and unrotated models. Cover/chapter detector models retain the 90-degree beam-axis rotation. The establishing move is centred on ECAL, with final chapter anchor (720,275), zoom 1.40, yaw -0.58 and roll 0.72; HCAL extends beyond the frame by design. Outline anchor is (750,265), zoom 1.70. Camera movement stops after 2.8 seconds.
- Main and backup build with relative paths. A clean-source build without output/ or deliverables/ previously passed; the workflow exports PDFs during deployment. Workflow main count is updated to 47.
- output/ and deliverables/ remain ignored and absent from Git history. No push or deployment was run.

## PDF files

- DarkSHINE_PhD_Defence.pdf: 47 pages, 41,303,753 bytes; SHA-256 `15159fb977d6c76dd11d9726d6497d340f2afcf3ffc0eff06b4dbfaede1ea87b`.
- DarkSHINE_PhD_Defence_Backup.pdf: 14 pages, 7,402,773 bytes; SHA-256 `1a93cb2aa67814d8c1d6ad28c4f54180416db0928fedecaf6ec83a816c288827`.

Tracker geometry refinement: tagging planes end at x=-0.82 m; target x=-0.78 m; recoil planes span -0.74 to +0.12 m; ECAL begins at +0.18 m. Recoil trajectory ends on that entrance plane and all shower branches start there. Outline retains particle paths and retains the assembled model with the original rotation and close-up camera move.
