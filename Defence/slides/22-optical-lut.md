---
layout: default
class: content-slide slide-optical-lut
transition: fade
clicks: 0
title: "Optical response with a lookup table"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Optical response with a lookup table

<div class="columns wide"><div><div class="plot-large"><Plot src="figures/lut-eff.png" caption="LUT detection efficiency compared with full optical transport." /></div></div><div><h2 class="mint">Precompute the expensive transport</h2><p class="small">Sample detection efficiency and transit time as functions of emission position and direction.</p><table><tbody><tr><th>Response path</th><th>Time/event</th></tr><tr><td>Full optical tracking</td><td>~200 s</td></tr><tr><td>LUT optical response</td><td class="gold">~4 s</td></tr><tr><td>No optical photons</td><td>~2 s</td></tr></tbody></table><p class="small">Efficiency agreement within 5% in the stated validation.</p></div></div><div class="takeaway">About 50× faster than full optical tracking for the cited complete-event benchmark.</div>
<div class="source">Credit: Qibin Liu</div>

<!--
Time: 65 seconds.

Full optical transport is expensive because a single interaction can generate a very large number of photons. The lookup table replaces repeated scintillation-photon propagation with a conditional response. It stores both a detection probability and a transit-time distribution. In the cited study, the full event takes about two hundred seconds with optical tracking, four seconds with the table, and two seconds without optical photons. The comparison on the left tests detection efficiency and agrees within five percent. This validates the table for the optical geometry and properties used to construct it. It does not automatically validate later electronics effects or a different detector geometry. The digitisation and optical studies are collaboration contributions integrated into the common framework.

Source context: DarkSHINE optical-response study. Single-core Intel Xeon E5-2680v4 benchmark.
-->
