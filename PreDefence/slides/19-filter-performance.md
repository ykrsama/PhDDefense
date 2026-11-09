---
layout: default
class: content-slide slide-filter-performance
transition: fade
clicks: 0
title: "Filtering changes the production cost"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Filtering changes the production cost

<div class="eyebrow">Historical production example: 4 GeV electrons, 10¹¹ incident events, 12,800 cores</div><div class="comparison-legend">Without truth filter <span>→</span> <strong>With truth filter</strong></div><div class="performance-grid"><section class="method-panel performance-metric tone-gold"><h2>Elapsed time</h2><div class="metric-before">~4 days</div><div class="metric-after">~15 hours</div><div class="metric-ratio">~6.4× shorter</div></section><section class="method-panel performance-metric tone-blue"><h2>Disk write rate</h2><div class="metric-before">~9 GB/s</div><div class="metric-after">~0.23 GB/s</div><div class="metric-ratio">~39× lower</div></section><section class="method-panel performance-metric tone-mint"><h2>Total storage</h2><div class="metric-before">~3 PB</div><div class="metric-after">~2.5 TB</div><div class="metric-ratio">~1,200× smaller</div></section></div><div class="filter-types"><div><h2 class="blue">General filters</h2><p class="small">Early ECAL-energy and missing-momentum vetoes.</p></div><div><h2 class="gold">Process-specific filters</h2><p class="small">Particle or process requirements in selected volumes and energy intervals.</p></div></div><div class="takeaway">Early rejection reduces transport time, output rate and storage.</div>


<!--
This production example uses 4 GeV electrons and processes 10¹¹ incident particles on 12,800 cores. Filtering reduces the estimated elapsed time from about 4 days to 15 hours. Storage falls from roughly 3 petabytes to 2.5 terabytes, and the disk write rate also decreases. These are approximate figures for different resource costs. The general filters reject events with too much visible energy or too little missing momentum. Dedicated filters also check for a particular particle or interaction. We save the filter acceptance and retained phase-space range with the sample, since we need them to interpret the output.
-->
