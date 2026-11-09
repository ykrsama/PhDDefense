---
layout: default
class: content-slide slide-digitisation
transition: fade
clicks: 0
title: "Digitisation connects deposits to observables"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Digitisation connects deposits to observables

<div class="digit-flow"><FlowDiagram kind="digitCompact"/></div><div class="digit-results"><section class="method-panel tone-violet"><div class="panel-kicker">Physics response model</div><h2>From photons to cell energy</h2><p>SiPM saturation and recovery, electronic noise, finite dynamic range and ADC sampling.</p><div class="observable-tags"><span>Pulse amplitude / integral</span><span>Cell energy</span><span>Timing</span></div><p class="small">Cell energies feed the ECAL total-energy and maximum-cell selections.</p></section><div class="chart-stage tone-mint"><Plot src="physics-output/single-pe-pulse.png" caption="Single-photoelectron response"/></div><div class="chart-stage tone-gold"><Plot src="figures/waveform.svg" caption="Digitised waveforms in ECAL cells"/></div></div>
<div class="source">Credit: Qibin Liu</div>

<!--
Digitisation converts simulated deposits into measurable signals. After scintillation and light collection, each detected photon contributes a single-photoelectron pulse, shown in the middle. The time sum of those pulses forms the cell waveform on the right. The model includes SiPM saturation and recovery, electronic noise, the available dynamic range and ADC sampling. Calibration then converts the chosen response estimator into cell energy. This matters directly for our analysis: summing the cell energies gives the visible ECAL energy, while the largest cell response defines the maximum-cell observable. The configuration records which optical or parameterised response produced those quantities. These studies are Qibin Liu's collaboration contribution.
-->
