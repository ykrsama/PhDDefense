---
layout: default
class: content-slide slide-background-tail
transition: slide-left
clicks: 0
title: "Residual-background extrapolation"
---

<div class="eyebrow">Positron-beam-mode analysis</div>

# Residual-background extrapolation

<div class="columns"><div><div class="plot-short"><Plot src="figures/sr1-tail.svg" caption="SR1: dedicated PN ECAL survival fit." /></div></div><div><div class="plot-short"><Plot src="figures/sr3-tail.svg" caption="SR3: joint ECAL survival surface." /></div></div></div><table class="compact-table"><tbody><tr><th>Region</th><th>Tail construction</th><th>Nominal events</th></tr><tr><td>SR1</td><td>EN + PN, total ECAL threshold</td><td class="blue">0.03</td></tr><tr><td>SR2</td><td>PN, total ECAL threshold</td><td class="gold">1.3×10⁻⁴</td></tr><tr><td>SR3</td><td>PN, two ECAL thresholds</td><td class="rose">1.6×10⁻⁴</td></tr></tbody></table><div class="takeaway">The nominal backgrounds rely on continuation from populated sidebands into empty tails.</div>
<div class="source">Dedicated tail estimates at 3×10¹⁴ POT. SR3 surface is a fit, not a selection boundary.</div>

<!--
Time: 75 seconds.

For SR1 and SR2 the dedicated survival curves are fitted as a power law in the numerical total-ECAL threshold in MeV. The resulting nominal backgrounds are zero point zero three events for SR1 and one point three times ten to the minus four for SR2. SR3 needs a two-dimensional continuation because the total and maximum-cell energies are related. Its nominal yield is one point six times ten to the minus four. These are extrapolated predictions. Fit-function dependence, limited tail statistics and components omitted after zero survivors remain limitations. The inclusive one-dimensional comparison uses a different exponential form and does not establish quantitative closure at the final thresholds.

Source context: Dedicated tail estimates at 3×10¹⁴ POT. SR3 surface is a fit, not a selection boundary.
-->
