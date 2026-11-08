# Validation record

Revised and validated locally on 9 November 2026.

| Check | Result |
|---|---|
| Main structure | 46 pages; final page is Research Achievements. |
| Formal-report timing | 2,700 seconds = 45:00. Cover/outline 1:05; physics 10:30; simulation/reconstruction 12:45; positron analysis 17:40; summary/achievements 3:00. |
| Backup structure | 14 pages in a separate Slidev deck and PDF. |
| Source-tool tests | 8 applicable upstream deck-tooling tests passed. |
| Production builds | Main and backup built successfully with relative base paths. |
| Browser layout | All 60 pages rendered; image loading, KaTeX errors, slide bounds and conclusion-band overlaps checked. Dense pages corrected and rechecked. |
| PDF review | All 46 + 14 exported PDF pages rasterised with Poppler and visually reviewed. Final files contain selectable text on every page. |
| Cover camera | Animated detector canvas remains the same DOM canvas across the cover-to-outline transition. Camera rotation and zoom verified. |
| Flow animation | The complete graph is visible on entry; path highlight offset changes over time. |
| Figure interaction | Scientific figure zoom opens on click and closes with Escape. |
| Static nested-path test | Main and backup tested under `/site/defence/` and `/site/backup/`, with external network requests blocked. 14 representative routes passed; no missing images, page errors, HTTP errors or external requests. |
| Branding | Local SJTU and DarkSHINE source images; local SJTU favicon. |
| Source-style comparison | All three copied CCNU stylesheet SHA-256 values match the reference checkout exactly. |
| Deployment | No Git push or deployment performed. Manual workflow is supplied. |

## PDF properties

- Main: 46 pages, 34,671,492 bytes; SHA-256 `0b32699faed436cbf6f16c99ff1b52f619d9e181f7a643dd152556bf1a7e4981`.
- Backup: 14 pages, 7,296,014 bytes; SHA-256 `5a2a258914a2ee6bc0435cba81d096529188f1f7c898838177af3c6952054d6c`.
- Page dimensions: approximately 735 × 414 points (16:9 landscape).
- Text and scientific SVG graphics retain vector output. Canvas 3D scenes are frozen high-resolution frames; animation is available in the web version. The cover title uses a solid amber accent in PDF to avoid Chromium gradient-text printing artifacts.

Machine-readable evidence is retained in `output/main-layout-report.json`, `output/interaction-report.json`, `output/static-report.json`, and `output/pdf-report.json`. The working directory also retains page renders under `output/pdf-render/` and browser captures under `output/qa*/`; these large intermediate files are not part of the source archive.

The content conventions and substantive limitations of the prospective physics projection are documented in `CONTENT_NOTES.md` and on the relevant report pages. These are interpretation limits of the supplied study, not export defects.

## Revision verification

- Main: all 46 browser pages checked, with targeted rechecks after changes; no image, script, math, boundary or conclusion-band errors. Backup: 14 pages checked without errors.
- All 60 final PDF pages rendered with Poppler and reviewed. Main page 10 retains all five subsystem rows, page 24 contains Yifan Zhu credit, and page 46 remains Research Achievements.
- All transitions use fade. The 45-minute timing remains 2,700 seconds.
- Matrix hover exposes 1.74 selected / 1.96 produced in the tested cell; histogram region selection dims the other 12 bars.
- Follow-up corrections verified on pages 1–4, 9, 10, 14 and 43: corrected perspective direction, preserved blue star-filled cluster identity with slowed motion, no white mats on page 4, restored table/image page 10.
- The reference presentation was inspected through its full 27-page overview as well as the requested detailed layout pages.

## Camera and interpretation follow-up

Final camera: chapter hero settles at yaw -0.58 rad, roll 0.72 rad and zoom 1.05 after a 2.8-second establishing move. Slides 9 and 10 retain identical camera states at entry and after 3.2 seconds. Browser rechecks of all changed pages and Poppler renders of the nine replaced PDF pages passed.

Slide 34 values were checked against the dissertation benchmark-yield table; relative channel composition is now explicit. Slide 35 includes the unweighted-event axis title. Atom-scene guide and A-prime label remain visible throughout the cycle.

Git history excludes output/ and deliverables/; local artifacts remain available. Deployment workflow generates PDFs from the static site instead of requiring versioned PDF outputs. No push or deployment was run.

A clean `git archive HEAD` checkout with neither generated directory successfully built both decks and the portable site. Missing local PDFs are allowed during this first build; the workflow then exports both PDFs before uploading Pages.
