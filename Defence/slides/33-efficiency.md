---
layout: default
class: content-slide slide-efficiency
transition: fade
clicks: 0
title: "Signal efficiency across the mass scan"
---

<div class="eyebrow">Positron-beam-mode analysis</div>

# Signal efficiency across the mass scan

<div class="columns thirds"><div><div class="plot-mid"><Plot src="figures/efficiency_brem_bremCut.svg" caption="Bremsstrahlung → SR1" /></div></div><div><div class="plot-mid"><Plot src="figures/efficiency_tch_tchCut.svg" caption="Non-resonant annihilation → SR2" /></div></div><div><div class="plot-mid"><Plot src="figures/efficiency_sch_schCut.svg" caption="Resonant annihilation → SR3" /></div></div></div><div class="formula-band"><LaTeX formula="\eta_{ic}=\frac{N_{\mathrm{selected\ in\ SR}\ i,c}}{N_{\mathrm{generated},c}}" /></div><div class="takeaway">All nine channel-to-region efficiencies enter the signal prediction.</div>


<!--
Time: 70 seconds.

The three panels show the cutflow efficiency of each mechanism in its primary region. Each curve uses its own generated channel and mass as the denominator, so these are selection fractions rather than a physical mixture. All nine channel-to-region curves are included in the separate backup booklet. The expected visible remnant may be lost: a recoil can fail reconstruction, and a photon can escape acceptance or remain below threshold. Such events can migrate into another signal region and remain useful. For example, bremsstrahlung contributes to zero-track regions, with substantial low-activity efficiency toward the upper end of its mass grid. The complete response matrix is therefore needed.

Source context: Channel-to-region efficiencies from the baseline 1 positron simulation.
-->
