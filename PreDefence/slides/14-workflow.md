---
layout: default
class: content-slide slide-workflow
transition: fade
clicks: 0
title: "The DarkSHINE software framework"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# The DarkSHINE software framework

<div class="method-graphic"><FlowDiagram kind="workflow"/></div><div class="takeaway"><span class="gold">My contributions:</span> DSimu, DEvent, rare-process biasing and filtering, and ACTS integration.</div>
<div class="source">DSS software framework; X. Zhu, Nucl. Part. Phys. Proc. 346 (2024) 57.</div>

<!--
DSimu configures the detector and physics, runs the simulation, and writes events to ROOT files. DAna reads these files and runs digitisation, reconstruction and analysis in the chosen order. DEvent defines the collections shared between them, and DDis lets us inspect individual events. Our software work covers DSimu, the event model, rare-process biasing, staged filtering and ACTS (A Common Tracking Software) integration, as well as DAna, digitisation, the other tracking algorithms, calorimeter reconstruction and generator validation. With this common event interface, we can inspect an event at each stage. We can also rerun downstream algorithms without repeating transport, provided the files contain the information those algorithms need.
-->
