---
layout: default
class: content-slide slide-filter-performance
transition: fade
clicks: 0
title: "Filtering changes the production cost"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Filtering changes the production cost

<div class="eyebrow">Historical production example: 4 GeV electrons, 10¹¹ incident events, 12,800 cores</div><table><tbody><tr><th>Metric</th><th>Without truth filter</th><th>With truth filter</th><th>Change</th></tr><tr><td>Elapsed time</td><td>~4 days</td><td class="gold">~15 hours</td><td>~6.4× shorter</td></tr><tr><td>Disk write rate</td><td>~9 GB/s</td><td class="blue">~0.23 GB/s</td><td>~39× lower</td></tr><tr><td>Total storage</td><td>~3 PB</td><td class="mint">~2.5 TB</td><td>~1,200× smaller</td></tr></tbody></table><div class="columns" style="margin-top:22px"><div><h2>General filters</h2><p class="small">Early ECAL-energy and missing-momentum vetoes.</p></div><div><h2>Process-specific filters</h2><p class="small">Particle or process requirements in selected volumes and energy intervals.</p></div></div><div class="takeaway">Early rejection reduces transport time, output rate and storage.</div>


<!--
This production example uses 4 GeV electrons and processes 10¹¹ incident particles on 12,800 cores. Filtering reduces the estimated elapsed time from about 4 days to 15 hours. Storage falls from roughly 3 petabytes to 2.5 terabytes, and the disk write rate also decreases. These are approximate figures for different resource costs. The general filters reject events with too much visible energy or too little missing momentum. Dedicated filters also check for a particular particle or interaction. We save the filter acceptance and retained phase-space range with the sample, since we need them to interpret the output.
-->
