---
layout: default
class: content-slide slide-optical-lut
transition: fade
clicks: 0
title: "Optical response with a lookup table"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Optical response with a lookup table

<div class="columns wide"><div class="chart-stage tone-mint"><div class="plot-large"><Plot src="figures/lut-eff.png" caption="LUT detection efficiency compared with full optical transport." /></div></div><div class="method-panel tone-mint"><h2 class="mint">Precompute photon transport</h2><p class="small">Sample detection efficiency and transit time as functions of emission position and direction.</p><table><tbody><tr><th>Response path</th><th>Time/event</th></tr><tr><td>Full optical tracking</td><td>~200 s</td></tr><tr><td>LUT optical response</td><td class="gold">~4 s</td></tr><tr><td>No optical photons</td><td>~2 s</td></tr></tbody></table><p class="small">Detection efficiencies agree within 5% for the tested optical configuration.</p></div></div><div class="takeaway">About 50× faster than full optical tracking for the cited complete-event benchmark.</div>
<div class="source">Credit: Qibin Liu</div>

<!--
Tracking every optical photon takes time because a single interaction can produce many photons. The lookup table avoids repeating that transport. It stores the detection probability and transit-time distribution for the simulated optical response. In this study, an event takes about 200 seconds with full optical tracking, 4 seconds with the table and 2 seconds without optical photons. The detection efficiencies shown on the left agree within 5%. This tests the table for the geometry and optical properties used to build it. Electronics effects and changes to the geometry need their own checks. The optical-response and digitisation studies are collaboration contributions integrated into the framework.
-->
