---
layout: default
class: content-slide slide-geometry-speed
transition: fade
clicks: 0
title: "Geometry and event-record optimisation"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Geometry and event-record optimisation

<div class="columns "><div class="method-panel tone-blue"><div class="panel-kicker"><span class="ordinal">CPU</span>Geometry navigation</div><h2 class="blue">Bounding volume hierarchy</h2><p class="small">Group detector volumes into nested bounding volumes to reduce navigation work.</p><div class="statline"><div><b>260 → 42</b><span>ms per event, without / with BVH</span></div></div><div class="big-number" style="margin-top:20px">6.2×</div><p class="small muted">Measured speed-up in the cited benchmark.</p></div><div class="method-panel tone-gold"><div class="panel-kicker"><span class="ordinal">Storage</span>Persistent event data</div><h2 class="gold">Record and memory layout</h2><p class="small">Optimise the stored data structure and memory alignment.</p><div class="statline"><div><b>60.1 → 13.7</b><span>KB per event, reported minimum</span></div></div><div class="big-number" style="margin-top:20px">4.4×</div><p class="small muted">Reduction for the cited event-record example.</p></div></div><div class="takeaway">Geometry navigation and event-record optimisation reduce CPU and storage costs.</div>


<!--
We have 2 main optimisations compared with the original baseline 1 DarkSHINE software. The first is a BVH (Bounding Volume Hierarchy). It groups detector volumes so Geant4 can rule out a large region before testing individual cells. In this benchmark, the simulation time falls from 260 to 42 milliseconds per event, about a factor of 6.2. The second improves the event record and memory alignment. The reported file size falls from 60.1 to as little as 13.7 kilobytes per event for that configuration. These benchmarks and the optical study shown later use different configurations, so we cannot multiply their speed-up factors together or treat them as results from a single release.
-->
