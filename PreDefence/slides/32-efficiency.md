---
layout: default
class: content-slide slide-efficiency
transition: fade
clicks: 0
title: "Signal efficiency across the mass scan"
---

<div class="eyebrow">Positron-beam-mode analysis</div>

# Signal efficiency across the mass scan

<div class="columns thirds"><div class="chart-stage tone-blue"><div class="plot-mid"><Plot src="figures/efficiency_brem_bremCut.svg" caption="Bremsstrahlung → SR1" /></div></div><div class="chart-stage tone-gold"><div class="plot-mid"><Plot src="figures/efficiency_tch_tchCut.svg" caption="Non-resonant annihilation → SR2" /></div></div><div class="chart-stage tone-rose"><div class="plot-mid"><Plot src="figures/efficiency_sch_schCut.svg" caption="Resonant annihilation → SR3" /></div></div></div><div class="formula-band"><LaTeX formula="\eta_{ic}=\frac{N_{\mathrm{selected\ in\ SR}\ i,c}}{N_{\mathrm{generated},c}}" /></div><div class="takeaway">All nine channel-to-region efficiencies enter the signal prediction.</div>


<!--
These curves show the cutflow efficiencies for each production mechanism in its primary signal region, normalised to the generated sample. We combine the efficiencies with production cross sections to predict the signal yields.

Track reconstruction and photon detection can move events between regions. A missed recoil track can put a bremsstrahlung event into a zero-track category; a soft or undetected photon can put a non-resonant event into the low-activity category. All nine channel-to-region efficiencies enter the signal prediction.
-->
