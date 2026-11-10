---
layout: default
class: content-slide slide-geometry-speed
transition: fade
clicks: 0
title: "Geometry navigation and event-record optimisation"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Geometry navigation and event-record optimisation

<div class="record-optimisation"><section class="method-panel tone-gold"><div class="panel-kicker">Store the quantities needed for physics</div><h2>Smaller records, explicit content</h2><table class="observable-table"><thead><tr><th>Information</th><th>Stored quantities / change</th></tr></thead><tbody><tr><td>Particle kinematics</td><td>p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>, E, m → float</td></tr><tr><td>Origin and trajectory</td><td>Vertex and endpoint x, y, z → float</td></tr><tr><td>Detector hits</td><td>Energy, time, x, y, z → float; compact cell IDs</td></tr><tr><td>Remove duplication</td><td>Calculate |p| from components; identify particles by PDG ID</td></tr><tr><td>Step history</td><td>Record primary-electron steps in the tracker region</td></tr></tbody></table><div class="result-strip"><b>60.1 → 13.7 KB/event</b><span>Event-record benchmark</span></div></section><section class="method-panel tone-blue"><div class="panel-kicker">Navigate a finely segmented detector</div><h2>Bounding volume hierarchy</h2><div class="geometry-snapshot"><Plot src="physics-output/transport-geometry.png" plain/></div><p>Nested bounding volumes reduce volume checks at each Geant4 step.</p><div class="result-strip"><b>260 → 42 ms/event</b><span>Navigation benchmark</span></div></section></div>

<!--
We optimised the event records and Geant4 geometry navigation for large simulation samples. Particle records store momentum components, energy, mass, production vertices and endpoints. Hits store deposited energy, time, position and cell identifiers. We use float precision for these fields and remove duplicated quantities: momentum magnitude is calculated from its components, and PDG identifiers replace repeated particle-name strings. The event-record benchmark stores primary-electron step histories in the tracker region. These changes reduce the event size from about sixty to fourteen kilobytes.

A bounding volume hierarchy reduces the number of individual detector volumes checked at each Geant4 step. The navigation benchmark improves from about a quarter of a second to forty milliseconds per event.
-->
