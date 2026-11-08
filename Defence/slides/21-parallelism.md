---
layout: default
class: content-slide slide-parallelism
transition: slide-left
clicks: 0
title: "Parallel event simulation"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Parallel event simulation

<div class="columns"><div><h2 class="blue">Geant4 multi-threading</h2><ul><li>G4MTRunManager</li><li>Thread-local allocators and singleton state</li><li>Thread-safe primary generation and random-number handling</li><li>Inclusive and rare-process validation</li></ul></div><div><table><tbody><tr><th>Configuration</th><th>Elapsed time</th><th>CPU usage</th></tr><tr><td>8 threads, 1 job</td><td class="gold">15,328 s</td><td>785%</td></tr><tr><td>1 thread, 8 jobs</td><td>16,648 s</td><td>646%</td></tr></tbody></table><div class="big-number" style="margin-top:25px">~8%</div><p class="small">Lower elapsed time for the reported multi-thread comparison.</p></div></div><div class="takeaway">Parallelism complements reduced event cost and selective generation.</div>
<div class="source">DSS_716, slide 15, INPAC cluster benchmark. Relative time reduction calculated from reported times.</div>

<!--
Time: 55 seconds.

Geant4 multi-threading allows several events to be processed within one job. The engineering work includes thread-local allocation and singleton state, as well as random-number and primary-generation handling. In the cited comparison, one eight-thread job takes fifteen thousand three hundred and twenty-eight seconds, compared with sixteen thousand six hundred and forty-eight seconds for eight single-thread jobs. This is an improvement of approximately eight percent in elapsed time for that comparison. It is not a measurement of eight-fold scaling from one core. The validation includes inclusive and rare-process distributions. The physics content must remain consistent as the scheduling and number of workers change.

Source context: DSS_716, slide 15, INPAC cluster benchmark. Relative time reduction calculated from reported times.
-->
