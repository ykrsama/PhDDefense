---
layout: default
class: content-slide slide-parallelism
transition: fade
clicks: 0
title: "Parallel event simulation"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Parallel event simulation

<div class="columns wide"><div class="chart-stage tone-blue plot-large"><Plot src="figures/DSS-065.png" caption="Thread-scaling study on the INPAC cluster"/></div><div class="method-panel tone-mint copy"><div class="panel-kicker">Production benchmark</div><h2 class="blue">10⁶ simulated events</h2><p>8 threads, 1 job<br/><strong>15,328 s | 785% CPU</strong></p><p>1 thread, 8 jobs<br/><strong>16,648 s | 646% CPU</strong></p><div class="big-number">~8%</div><p class="small">Lower elapsed time with the same eight concurrent execution units.</p></div></div>
<!--
Geant4 can process several events in parallel within a single job. This required changes to thread-local allocation, singleton state, random-number handling and primary generation. In this benchmark, 1 job with 8 threads takes 15,328 seconds. Running 8 single-thread jobs takes 16,648 seconds. Both use 8 concurrent execution units, so the multi-thread job reduces elapsed time by about 8%. This is a comparison of job arrangements, rather than a scaling test from 1 core. We also compare inclusive and rare-process distributions to check that changing the worker count and scheduling preserves the physics.
-->
