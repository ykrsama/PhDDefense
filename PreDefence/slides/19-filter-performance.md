---
layout: default
class: content-slide slide-filter-performance
transition: fade
clicks: 0
title: "What survives the production filter?"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# What survives the production filter?

<div class="sample-banner"><b>8 GeV electron development sample</b><span>Baseline 1.6 | 2 × 10⁹ EOT</span></div><div class="filter-outputs"><div class="chart-stage tone-blue"><Plot src="physics-output/filter-ecal.png" caption="Truth ECAL energy of the retained events"/></div><div class="chart-stage tone-gold"><Plot src="physics-output/filter-recoil.png" caption="Truth recoil momentum, before / after requiring a reconstructed recoil track"/></div><section class="method-panel tone-mint"><div class="panel-kicker">Physics retained</div><h2>Low visible energy</h2><p>Require the primary electron at ECAL entry and the ECAL deposit to stay below 4 GeV.</p><div class="rule"></div><p><span class="blue">Black:</span> all stored events<br/><span class="rose">Red:</span> recoil track reconstructed</p><p class="small">Recoil-region bremsstrahlung can move high-momentum events into the low-ECAL-energy sample.</p></section></div>
<!--
Here is the physics output of a filter-development sample with 8 GeV electrons and two billion incident events. In this study, events were stopped if the primary electron reached the ECAL with more than 4 GeV or if the ECAL deposit exceeded 4 GeV. The plots show the retained events, not the original inclusive distribution. Black includes every stored event; red requires a reconstructed recoil track. The difference between the curves shows where the recoil-track requirement removes stored events. The high-momentum component on the right also illustrates bremsstrahlung in the recoil region: energy can be lost after the reference recoil momentum is defined, leaving a smaller ECAL deposit. The filter therefore does more than reduce the file size: it makes the rare event topologies we need to inspect accessible for detector and reconstruction work. The resource benchmarks are retained in the backups.
-->
