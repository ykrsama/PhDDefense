---
layout: default
class: content-slide slide-background-tail
transition: fade
clicks: 0
title: "Residual-background extrapolation"
---

<div class="eyebrow">Positron-beam-mode analysis</div>

# Residual-background extrapolation

<div class="columns"><div class="chart-stage tone-blue"><div class="plot-short"><Plot src="figures/sr1-tail.svg" caption="SR1: dedicated PN ECAL survival fit." /></div></div><div class="chart-stage tone-rose"><div class="plot-short"><Plot src="figures/sr3-tail.svg" caption="SR3: joint ECAL survival surface." /></div></div></div><table class="compact-table"><tbody><tr><th>Region</th><th>Extrapolation method</th><th>Nominal events</th></tr><tr><td>SR1</td><td>EN + PN, total ECAL threshold</td><td class="blue">0.03</td></tr><tr><td>SR2</td><td>PN, total ECAL threshold</td><td class="gold">1.3×10⁻⁴</td></tr><tr><td>SR3</td><td>PN, two ECAL thresholds</td><td class="rose">1.6×10⁻⁴</td></tr></tbody></table><div class="takeaway">Background yields are extrapolated from populated sidebands to the final selection thresholds.</div>


<!--
For SR1 and SR2, we fit the dedicated survival curves with a power law in the total-ECAL-energy threshold. SR3 uses a two-dimensional fit to account for the correlation between total energy and maximum-cell energy. Summing the process contributions gives about three hundredths of an event in SR1, and of order ten to the minus four events in each zero-track region. These fits extrapolate the populated sidebands to the final selection thresholds.
-->
