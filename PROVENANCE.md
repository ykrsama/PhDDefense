# Implementation and asset provenance

Reference: [AvencastF/EveNet-Presentation — CCNU_Seminar](https://github.com/AvencastF/EveNet-Presentation/tree/main/CCNU_Seminar), commit `0243210202d8d299822faf3db36e9b80724a9218`.

The reference repository was cloned and its implementation files copied into this project. The design is not a visual approximation built from an unrelated template.

| Local implementation | Reference and treatment |
|---|---|
| `Defence/styles/local.css` | Copied byte-for-byte from CCNU_Seminar. SHA-256 `6d461cf5f3ad502b2c7cf772c0530fa6e298f34a307cf8faa0f165cfea797250`. |
| `Defence/styles/graphite.css` | Copied byte-for-byte. SHA-256 `b89e7d432eb6253428580c049843a92a47edd07df9f6ae304688bda8e917b2c6`. |
| `Defence/styles/chapters.css` | Copied byte-for-byte. SHA-256 `71e590e6fd08965df17d05afec01bde2e75de69d7ff036865b2eee3871e48969`. |
| `Defence/assets/fonts/DM-Sans-variable.ttf` | Exact bundled CCNU typeface; served locally. |
| `shared/styles/` and `shared/slidev-addon-evenet/` | Copied upstream design system, page numbers, animation utilities and shared components. KaTeX CSS is imported locally and remote web-font loading is disabled. |
| `Defence/components/NJUPlot.vue` | Copied CCNU scientific-figure modal, keyboard controls and base-path handling. |
| `Defence/components/NJUChapter.vue` | Original CCNU chapter component retained. |
| `Defence/components/ChapterRail.vue` | Adapted CCNU chapter-rail markup and classes, with the four defence section labels. |
| `Defence/components/PhysicsScene.vue` | Adapted the CCNU chapter-scene projection, canvas layering and lifecycle approach. New metre-based detector geometry and particle paths, cluster merger, and conceptual tungsten atom. Anime.js drives time and camera state. |
| `Defence/components/FlowDiagram.vue` | Adapted the Anime.js ambient-cycle and animated path-dash pattern from `NJUAnimatedEveNet.vue`. All nodes are visible on entry. |
| `tools/`, package dependencies | Copied upstream multi-deck tooling; new local-only dev wrapper and portable-site packager added. |
| `Defence/styles/defence.css` | Defence-specific typography, grids, plot mats and tested content spacing, layered after the copied styles. |

Anime.js: [juliangarnier/anime](https://github.com/juliangarnier/anime), package version 4.5.0. The chapter scenes are projected 3D coordinates drawn on Canvas with continuously animated Anime.js state; they are not static background SVGs. The cover and outline share one persistent canvas, so the camera interpolates rather than rebuilding the scene.

## Supplied assets

- SJTU logo: `Refs/assets/refs/DSS_716/media/DSS-063.png`.
- DarkSHINE logo: `Refs/assets/refs/DSS_716/media/DSS-058.png`.
- Detector proportions: `Refs/assets/refs/ZhiyuZhao_dessertation_defense_v8/media/DEF-373.png` plus the supplied detector dimensions. Tracker planes show a single strip direction; only ECAL uses a two-dimensional segmentation grid.
- Background topology: `DEF-374.png` in the same directory. Electronuclear and hard-bremsstrahlung branches, pair conversion, PN and muon-pair processes, and target/ECAL locations are preserved. Rates are schematic orders of magnitude, not positron sample weights.
- Bullet Cluster, facility and other reference images: supplied media directory; figure mappings are in `scripts/write_deck.py`.
- Scientific plots: `PhDThesis/figures/`, enumerated in `asset-manifest.json`. Each source PDF is retained beside its vector SVG display derivative. `pdftocairo -f 1 -l 1 -svg` selects an explicit page and avoids the blank output caused by multi-page ROOT PDFs. Nine individual efficiency PDFs provide the complete response matrix.
- Software-performance values: supplied `Refs/DSS_716.pptx` and simulation/reconstruction text.

Original physics axes, curves, normalisation labels and benchmark assumptions were retained. Reconstructed tables and diagrams are separately described in `CONTENT_NOTES.md`. The copied upstream files retain their source attribution; no new licence for upstream or collaboration assets is asserted.
