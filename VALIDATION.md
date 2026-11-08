# Validation record

Validated locally on 8 November 2026.

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

- Main: 46 pages, 29,047,830 bytes; SHA-256 `6fd4b64562abe919cbb001777fecdb6b9a01b1e29eb694d5b939882bfb3fde10`.
- Backup: 14 pages, 7,327,583 bytes; SHA-256 `077c371ec04f264b966932081664eedf0176440cf630439142cb15c75c2c0ae3`.
- Page dimensions: approximately 735 × 414 points (16:9 landscape).
- Text and scientific SVG graphics retain vector output. Canvas 3D scenes are frozen high-resolution frames; animation is available in the web version. The cover title uses a solid amber accent in PDF to avoid Chromium gradient-text printing artifacts.

Machine-readable evidence is retained in `output/main-layout-report.json`, `output/interaction-report.json`, `output/static-report.json`, and `output/pdf-report.json`. The working directory also retains page renders under `output/pdf-render/` and browser captures under `output/qa*/`; these large intermediate files are not part of the source archive.

The content conventions and substantive limitations of the prospective physics projection are documented in `CONTENT_NOTES.md` and on the relevant report pages. These are interpretation limits of the supplied study, not export defects.
