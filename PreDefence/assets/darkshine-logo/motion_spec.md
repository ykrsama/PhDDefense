# DarkSHINE logo motion

Workflow: [Pixel2Motion](https://github.com/nolangz/pixel2motion), downloaded 2026-11-10. The presentation cover keeps the larger logo. From page 2 onward, a compact 24 px version sits immediately to the right of the TDLI/SJTU header logo; the website entrance remains unchanged.

Source: `public/branding/darkshine.png`, 470 × 450 RGBA. The PNG already has transparency; the visible white tile is CSS on `.brandbar .dark-logo`. Ink is near black, SHINE is blue (#4372F7), and particle holes are white negative space. The silhouette consists of a rounded open left frame, two smooth right lobes separated by an S-shaped channel, a two-line condensed wordmark, and small particle holes.

Personality: precise, flowing, restrained. Context: a small cover identity, with a 1.8 s reveal on entry/replay followed by one quiet particle travelling along the S channel every 6 s. No deformation or bounce. Reduced motion shows the final logo immediately.

Geometry plan: a few cubic curves for frame and lobes; measured circles/ellipses for holes; compact fitted glyph outlines to preserve the original letterforms. Start with analytic paths and only add knots where an overlay proves a mismatch. Source and final vector use identical coordinates. The vector has no white background rectangle.

Choreography: establish the frame, reveal upper/lower lobes with overlapping mask wipes, introduce DARK then SHINE, and complete the particle cutouts. All entrance actions share an 1800 ms clock. The last pose equals the static SVG. Slow in/out uses literal cubic-bezier values inside keyframes; no elastic easing.

| Part | Anticipation / main action / follow-through |
|---|---|
| Frame | Hold 0–180 ms; draw 180–1080 ms; hold |
| Upper lobe | Hold 0–360 ms; wipe 360–1260 ms; hold |
| Lower lobe | Hold 0–540 ms; wipe 540–1440 ms; hold |
| DARK | Hold 0–900 ms; reveal 900–1440 ms; hold |
| SHINE | Hold 0–1080 ms; reveal 1080–1620 ms; settle to 1800 ms |
| Particle cutouts | Complete 1260–1800 ms |

Principles: staging (frame → mark → wordmark), slow in/out (measured curves), timing (short cover reveal), overlapping action (different start/settle times), follow-through (SHINE/particles settle last), solid drawing (unchanged geometry), appeal (one ambient dot, with no glow or white tile).

QA evidence and resumable fitting parameters live under ignored `output/darkshine-logo/`. The standalone showcase is generated with Pixel2Motion's `animate_svg_showcase.py`; only its verified SVG/CSS and the small cover integration ship in the deck.

## Static fitting result

Two iterations: 01 analytic centerline frame (IoU 0.9536); 02 fitted outer/inner frame boundaries (IoU 0.9635, 1852 source-only pixels, 862 render-only pixels, measured at 470 × 450). The source was composited onto white before the Pixel2Motion comparison because the overlay helper otherwise treats transparent black RGB values as ink. No fixed numerical acceptance threshold was used.

The fitted mark has seven cubic segments in its upper lobe and ten in its lower lobe. Their audits find no short-segment warnings; angle warnings occur at the original sharp tips and rectangular cut ends. Text is outlined from individually scaled DIN Condensed Bold glyphs matched to the source letter boxes, with the original inter-letter positions. Residuals are concentrated around the rasterized letter edges and one-pixel contour boundaries. Smoothness, spacing and the S-channel silhouette pass visual inspection. The first centerline frame was rejected because the overlay showed a slightly different inner corner profile; the fitted filled frame removes that mismatch.

The PNG's original white particle dots become actual transparent holes in an SVG luminance mask. The cover integration removes the CSS tile and supplies theme colors through `--ds-ink` and `--ds-blue`. The idle traveller is separate from the original mark, has a transparent default/final pose, and appears only after the entrance has completed. Clicking the logo replays the entrance without advancing the slide.

## Motion QA

Pixel2Motion's generated standalone showcase exposes its standard Replay/Slow/Speed controls and `?t=` / `?static=1` hooks. Twelve deterministic frames were captured at 0–1800 ms and assembled into `output/darkshine-logo/motion_strip.png`. The applied frame-draw easing was probed at 450 / 630 / 900 ms: dash offsets 0.632704 / 0.224439 / 0.0247325, confirming the intended non-linear pacing. The same-browser static and t=1800 captures match exactly (0 pixel difference). The reference image was also rendered at 2× for smoothness inspection. Cover integration checks include both themes, a transparent button/background, replay, and reduced-motion behavior.

Cross-scale static-render comparison (470 px source render resampled to the 330 × 316 showcase capture): mean absolute RGB difference 4.9571 / 255, with 6235 pixels exceeding a 12-level maximum-channel difference. This is resampling/antialias residue; the decisive same-pipeline final/static check is exactly equal. Runtime preference changes explicitly cancel the Web Animations playback handles in addition to the reduced-motion CSS, so a previously replayed animation cannot continue after the user enables reduced motion.

Each inline instance namespaces its SVG ids and mask URLs, while semantic part classes share the same choreography. This keeps the cached cover and persistent header from referencing each other’s masks. The compact header logo is 24 px high, matching the TDLI/SJTU graphic; its animation continues across page changes instead of restarting on every slide.
