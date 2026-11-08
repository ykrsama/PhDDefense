---
layout: default
class: content-slide slide-rejection
transition: slide-left
clicks: 0
title: "Background rejection in the available simulation"
---

<div class="eyebrow">Positron-beam-mode analysis</div>

# Background rejection in the available simulation

<div class="eyebrow">PN ECAL example: cumulative, unweighted simulated counts</div><table><tbody><tr><th>Selection stage</th><th>SR1</th><th>SR2</th><th>SR3</th></tr><tr><td>One tagging track</td><td>5,794,358</td><td>5,794,358</td><td>5,794,358</td></tr><tr><td>Recoil category</td><td>4,641,895</td><td>138,513</td><td>138,513</td></tr><tr><td>Topology-specific pre-veto cut</td><td>3,114,535</td><td>138,513</td><td>120,147</td></tr><tr><td>HCAL total-energy veto</td><td>272,207</td><td>8,051</td><td>3,922</td></tr><tr><td>HCAL maximum-cell veto</td><td>88,871</td><td>2,552</td><td>1,096</td></tr><tr><td>Final ECAL requirement</td><td class="gold">0</td><td class="gold">0</td><td class="gold">0</td></tr></tbody></table><p class="tiny muted">Pre-veto cut: momentum in SR1; ECAL maximum-cell lower bound in SR2; ECAL total energy in SR3.</p><div class="takeaway">Zero simulated survivors establish rejection in the sample. Residual physical rates require an extrapolation.</div>
<div class="source">Cumulative PN ECAL cutflow from the positron study. Effective exposure: 1.48×10¹¹ POT.</div>

<!--
Time: 65 seconds.

The cumulative cutflow shows where rejection occurs in one important background, photonuclear production in the ECAL. The recoil requirement already separates the one-track and zero-track categories. Their next cuts differ: momentum for SR1, the maximum-cell lower bound for SR2 and total ECAL energy for SR3. The HCAL veto then reduces the sample further, and the final ECAL condition removes all remaining simulated events. These are unweighted counts, not yields at the benchmark exposure. No inclusive or dedicated sample survives a complete region selection. This is strong rejection in the available simulation, but it is not evidence that the physical background is exactly zero.

Source context: Cumulative PN ECAL cutflow from the positron study. Effective exposure: 1.48×10¹¹ POT.
-->
