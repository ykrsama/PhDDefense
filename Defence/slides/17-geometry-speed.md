---
layout: default
class: content-slide slide-geometry-speed
transition: fade
clicks: 0
title: "Geometry and event-record optimisation"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Geometry and event-record optimisation

<div class="columns "><div><div class="eyebrow">Geometry navigation</div><h2 class="blue">Bounding volume hierarchy</h2><p class="small">Group detector volumes into nested bounding volumes to reduce navigation work.</p><div class="statline"><div><b>260 → 42</b><span>ms per event, without / with BVH</span></div></div><div class="big-number" style="margin-top:20px">6.2×</div><p class="small muted">Measured speed-up in the cited benchmark.</p></div><div><div class="eyebrow">Persistent event data</div><h2 class="gold">Record and memory layout</h2><p class="small">Optimise the stored data structure and memory alignment.</p><div class="statline"><div><b>60.1 → 13.7</b><span>KB per event, reported minimum</span></div></div><div class="big-number" style="margin-top:20px">4.4×</div><p class="small muted">Reduction for the cited event-record example.</p></div></div><div class="takeaway">Reduce work per transported event before increasing the scale of production.</div>


<!--
Time: 65 seconds.

Two optimisations address different costs. The bounding volume hierarchy groups detector volumes so Geant4 can reject larger spatial regions before testing individual cells. In the cited software benchmark the time changes from two hundred and sixty to forty-two milliseconds per event, a ratio of about six point two. Event-record optimisation and memory alignment reduce the reported example from sixty point one to a minimum of thirteen point seven kilobytes per event. This factor describes storage for that configuration, not every possible event record. These are historical benchmark results from the software presentation. They should not be multiplied with the optical benchmark or presented as measurements of a single frozen release.

Source context: DSS_716, slides 7 and 11. Ratios calculated from the reported values; benchmark configurations differ.
-->
