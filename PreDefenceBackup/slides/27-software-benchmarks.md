---
layout: default
class: backup-slide qa-slide
transition: fade
clicks: 0
title: "Can the software speed-up factors be multiplied?"
---

<div class="eyebrow">Questions / supporting evidence</div>

# Can the software speed-up factors be multiplied?

<table class="compact-table"><thead><tr><th>Optimisation</th><th>Reported benchmark</th><th>What it measures</th></tr></thead><tbody><tr><td>Geometry navigation</td><td>260 → 42 ms/event</td><td>≈6.2× in that configuration</td></tr><tr><td>Event record</td><td>60.1 → 13.7 KB/event</td><td>Storage per stored event</td></tr><tr><td>Production filtering</td><td>≈4 days → 15 hours</td><td>4 GeV campaign, 12,800 cores</td></tr><tr><td>Parallel execution</td><td>16,648 → 15,328 s</td><td>8 single-thread jobs vs 1 job / 8 threads</td></tr><tr><td>Optical lookup table</td><td>≈200 → 4 s/event</td><td>Full optical tracking vs table response</td></tr></tbody></table><div class="takeaway">These measurements use different configurations and denominators. There is no single combined speed-up factor.</div>

<div class="source">DSS_716, pp. 7, 11, 13, 15; optical study by Qibin Liu.</div>

<!--
We quote these benchmarks separately because they measure different costs and use different configurations. Geometry navigation changes the transport time per event. Event-record optimisation changes storage. Filtering changes the number of costly events that we finish and write. The thread comparison uses 8 execution units on both sides, so it does not measure scaling from 1 core. The optical result compares full tracking with a lookup table. We can assess the total production cost only with an end-to-end benchmark under a common setup.
-->
