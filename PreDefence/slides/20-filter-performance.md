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
Time: 65 seconds.

The cited production example uses four GeV electrons, with ten to the eleven incident particles processed on twelve thousand eight hundred cores. Filtering reduces the estimated elapsed time from around four days to fifteen hours. The storage changes from roughly three petabytes to two point five terabytes, while the quoted disk write rate also falls. Elapsed time, write rate and storage are separate resource measures; the quoted reductions are approximate. The general filters reject events with excessive visible energy or insufficient missing momentum. Dedicated filters also require the relevant particle or interaction. The filter is part of the sample definition, so the retained phase-space range and acceptance must accompany the output.

Source context: DSS_716, slide 13. Historical example; quoted values are approximate.
-->
