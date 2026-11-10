---
layout: default
class: content-slide slide-parallelism
transition: fade
clicks: 0
title: "Parallel event simulation"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Parallel event simulation

<div class="columns wide"><div class="chart-stage tone-blue plot-large"><Plot src="figures/DSS-065.png" caption="Event throughput versus worker count on the INPAC cluster"/></div><section class="method-panel tone-mint parallel-physics"><div class="panel-kicker">Independent beam events</div><h2>One physics chain per worker</h2><p>Each worker runs generation, particle tracking in Geant4 and event filling with its own random and event state.</p><div class="observable-tags"><span>Particles + ancestry</span><span>Tracker hits</span><span>ECAL / HCAL deposits</span></div><p>Merge the same named collections for reconstruction and analysis.</p><div class="rule"></div><p class="small">10⁶ events, eight concurrent units:<br/><b>8-thread job: 15,328 s</b><br/>8 single-thread jobs: 16,648 s</p></section></div>

<!--
Beam events are independent, so each worker runs a complete event: primary generation, Geant4 particle tracking and event filling. This required worker-local event storage, random-number handling and changes to shared framework state. The particle and detector-hit collections from the workers are merged for reconstruction and analysis.

The plot shows throughput increasing with worker count. For one million events and eight concurrent units, one eight-thread job takes about 4.3 hours, compared with about 4.6 hours for eight single-thread jobs.
-->
