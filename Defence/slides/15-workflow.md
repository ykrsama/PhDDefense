---
layout: default
class: content-slide slide-workflow
transition: fade
clicks: 0
title: "The DarkSHINE software framework"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# The DarkSHINE software framework

<FlowDiagram kind="workflow"/><div class="takeaway"><span class="gold">Candidate-led:</span> DSimu, DEvent, rare-process biasing and filtering, and ACTS integration.</div>
<div class="source">DSS software framework; X. Zhu, Nucl. Part. Phys. Proc. 346 (2024) 57.</div>

<!--
Time: 65 seconds.

The workflow separates transport from reconstruction through ROOT event files. DSimu configures the detector and physics and records the simulated event. DEvent defines the shared collections. DAna applies digitisation, reconstruction and analysis processors in the configured order, and DDis provides event inspection. My work led DSimu, the event model, rare-process biasing and staged filtering, and the ACTS integration. DAna, digitisation, the other tracking algorithms, calorimeter reconstruction and generator-validation studies are collaboration contributions. A common event interface lets us follow one event through these stages and change downstream algorithms without repeating transport when the required information has been retained.

Source context: DSS software framework; X. Zhu, Nucl. Part. Phys. Proc. 346 (2024) 57.
-->
