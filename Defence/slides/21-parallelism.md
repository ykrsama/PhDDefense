---
layout: default
class: content-slide slide-parallelism
transition: fade
clicks: 0
title: "Parallel event simulation"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Parallel event simulation

<div class="columns wide"><div class="plot-large"><Plot src="figures/DSS-065.png" caption="Thread-scaling study on the INPAC cluster"/></div><div class="copy"><h2 class="blue">10⁶ simulated events</h2><p>8 threads, 1 job<br/><strong>15,328 s | 785% CPU</strong></p><p>1 thread, 8 jobs<br/><strong>16,648 s | 646% CPU</strong></p><div class="big-number">~8%</div><p class="small">Lower elapsed time with the same eight concurrent execution units.</p></div></div>
<!--
Time: 55 seconds.

Geant4 multi-threading allows several events to be processed within one job. The engineering work includes thread-local allocation and singleton state, as well as random-number and primary-generation handling. In the cited comparison, one eight-thread job takes fifteen thousand three hundred and twenty-eight seconds, compared with sixteen thousand six hundred and forty-eight seconds for eight single-thread jobs. This is an improvement of approximately eight percent in elapsed time for that comparison. It is not a measurement of eight-fold scaling from one core. The validation includes inclusive and rare-process distributions. The physics content must remain consistent as the scheduling and number of workers change.

Source context: DSS_716, slide 15, INPAC cluster benchmark. Relative time reduction calculated from reported times.
-->
