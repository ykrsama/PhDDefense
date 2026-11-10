---
layout: default
class: content-slide slide-biasing
transition: fade
clicks: 1
title: "Rare-process biasing and physical normalisation"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Rare-process biasing and physical normalisation

<div class="bias-physics"><section class="method-panel tone-gold"><div class="panel-kicker">01 | Enrich the physics of interest</div><h2>Choose process, material and energy</h2><ul><li>PN, EN or muon-pair production in the target / ECAL</li><li>Increase the selected interaction cross section above an energy threshold</li><li>Simulate secondary interactions, energy deposits and leakage</li></ul><div class="formula-band"><LaTeX formula="\sigma_{\rm rare}\rightarrow b\sigma_{\rm rare}"/></div></section><section class="chart-stage tone-blue" v-click="1"><div class="section-label blue">02 | Measure the rate dependence on bias</div><div class="bias-scan"><Plot src="physics-output/bias-gmm-ecal.png" caption="Muon-pair conversion in ECAL: probability and fit ratio" plain/></div><div class="bias-normalisation"><LaTeX formula="R_{\rm rare}=\frac{N_{\rm pool}}{N_{\rm total}}P(b=1)"/><span class="math-explanation">Eligible beam events × physical interaction probability</span></div></section></div>
<div class="takeaway">Enrich rare final states for detector studies; recover their rate from the production normalisation.</div>

<!--
Biasing increases the statistics for rare photonuclear, electronuclear and muon-pair final states. We select the process, material region and energy threshold, then enhance its interaction cross section. Geant4 simulates the secondary interactions, energy deposits and leakage.

The ECAL muon-pair scan shows the interaction probability increasing with the bias factor and eventually saturating. We fit this dependence and evaluate the physical probability at bias factor one. Multiplying by the fraction of beam events containing an eligible particle gives the process rate per incident particle, which sets the expected event count at a given EOT or POT.
-->
