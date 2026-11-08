---
layout: default
class: content-slide slide-filter-performance
transition: fade
clicks: 0
title: "Filtering changes the production cost"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Filtering changes the production cost

<div class="eyebrow">Historical production example: 4 GeV electrons, 10¹¹ incident events, 12,800 cores</div><table><tbody><tr><th>Metric</th><th>Without truth filter</th><th>With truth filter</th><th>Change</th></tr><tr><td>Elapsed time</td><td>~4 days</td><td class="gold">~15 hours</td><td>~6.4× shorter</td></tr><tr><td>Disk write rate</td><td>~9 GB/s</td><td class="blue">~0.23 GB/s</td><td>~39× lower</td></tr><tr><td>Total storage</td><td>~3 PB</td><td class="mint">~2.5 TB</td><td>~1,200× smaller</td></tr></tbody></table><div class="columns" style="margin-top:22px"><div><h2>General filters</h2><p class="small">Early ECAL-energy and missing-momentum vetoes.</p></div><div><h2>Process-specific filters</h2><p class="small">Particle or process requirements in selected volumes and energy intervals.</p></div></div><div class="takeaway">The largest saving comes from avoiding events and information that the target analysis does not need.</div>


<!--
Time: 65 seconds.

This table illustrates the practical effect at production scale. For ten to the eleven four GeV incident electrons on twelve thousand eight hundred cores, the cited estimate changes from around four days to fifteen hours. The storage changes from roughly three petabytes to two point five terabytes, while the quoted disk write rate also falls. These approximate figures describe different resource measures and should be read independently. The general filters reject events with excessive visible energy or insufficient missing momentum. Dedicated filters additionally require the relevant particle or interaction. The filter is part of the sample definition, so the retained phase-space range and acceptance must accompany the output.

Source context: DSS_716, slide 13. Historical example; quoted values are approximate.
-->
