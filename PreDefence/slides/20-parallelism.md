---
layout: default
class: content-slide slide-parallelism
transition: fade
clicks: 0
title: "Parallel event simulation"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Parallel event simulation

<div class="columns wide"><div class="chart-stage tone-blue plot-large"><Plot src="figures/DSS-065.png" caption="Event throughput versus worker count on the INPAC cluster"/></div><section class="method-panel tone-mint parallel-physics"><div class="panel-kicker">Independent beam events</div><h2>One physics chain per worker</h2><p>Each worker runs generation, Geant4 transport and event filling with its own random and event state.</p><div class="observable-tags"><span>Particles + ancestry</span><span>Tracker hits</span><span>ECAL / HCAL deposits</span></div><p>Merge the same named collections for reconstruction and analysis.</p><div class="rule"></div><p class="small">10⁶ events, eight concurrent units:<br/><b>8-thread job: 15,328 s</b><br/>8 single-thread jobs: 16,648 s</p></section></div>

<!--
Beam events are independent, so the natural unit of parallel work is a complete event. Each worker generates the primary, runs its Geant4 transport and fills its particle and detector-hit collections. Implementing this required worker-local event storage, random-number handling and changes to shared framework state. The output still uses the same collections, so the downstream reconstruction and analysis can read the merged sample. The chart shows the measured throughput as the worker count changes. In the eight-unit benchmark, one eight-thread job takes 15,328 seconds, compared with 16,648 seconds for eight single-thread jobs. The practical gain is larger production samples through a shared physics interface. The historical development also reported inclusive-process checks.
-->
