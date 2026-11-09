# TDLI presentation branding

Official sources:
- Logo downloads: https://tdli.sjtu.edu.cn/service-guide/downloads
- Blue PPT template: https://tdli.sjtu.edu.cn/storage/tdli/web/webcn/file/2024/11/fe4757a0f42d865bf37483b165ac3f0d.pptx

Only the template colors were used; its layouts and typefaces were not copied. Color counts and the mapping are saved in `PreDefence/branding-source/template-colors.json`.

| Template color | Role |
|---|---|
| #004098 | Main SJTU / TDLI blue; repeatedly used directly on slides |
| #C9151E | Red institutional accent |
| #768395 | Secondary gray |
| #F26B43 | Supporting orange |
| #CEAB6E | Gold in the custom theme override |
| #F3F4F8 / #FFFFFF | Light neutral surfaces |

The dark version uses navy surfaces and lighter blue/red accents for text contrast. Its neutral text colors keep the previous soft whites (#F0F1F3, #BCC2CB, #AEB6C1). Animated background glows appear only in dark mode; light mode disables both polygon glows and the radial wash, including during slide transitions. The light version uses official blue headings, white surfaces, dark text and a darker gold for legibility. The original scientific figures and their series colors are unchanged. Authored flowcharts, Feynman diagrams, detector scenes, matrices and histograms use the coordinated TDLI palette.

The official white/blue horizontal logo combines the SJTU seal with TDLI's Chinese and English names. Every slide in both main and backup decks shows this identity, Xuliang Zhu, and PhD Dissertation Pre-Defence. The dark/light button uses Slidev's native `useDarkMode` state; the native bottom-toolbar control is also enabled with `colorSchema: auto`. New visitors start in light mode, independent of the operating-system theme. The chosen mode then persists through Slidev's standard storage.

Regenerate light CSS after changing authored theme colors: `node scripts/build-tdli-light.cjs`. Original PDF/SVG image assets are excluded from this conversion.
