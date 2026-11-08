---
layout: default
class: content-slide slide-digitisation
transition: fade
clicks: 0
title: "Digitisation connects deposits to observables"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Digitisation connects deposits to observables

<div style="height:145px;overflow:hidden"><FlowDiagram kind="digit" style="height:145px;margin-top:-3px"/></div><div class="columns "><div><h2 class="violet">Response effects</h2><p class="small">Scintillation, collection efficiency, SiPM saturation and recovery, electronic noise, finite dynamic range and ADC sampling.</p><p class="small muted">Detailed optical and parameterised response paths serve different production needs.</p></div><div><div class="plot-short"><Plot src="figures/waveform.svg" caption="Digitised signals in representative ECAL cells." /></div></div></div><div class="takeaway">The selected response collection and calibration define the meaning of reconstructed cell energy.</div>
<div class="source">Credit: Qibin Liu</div>

<!--
Time: 60 seconds.

The digitisation chain turns transported energy into the quantities that reconstruction uses. Light production and collection determine how many photons reach the sensor. The SiPM response includes finite pixel occupancy and recovery. Electronics then add the waveform, noise, finite range and digitisation. The framework also provides a parameterised response for campaigns that do not need full optical information. Each production configuration specifies which response model is enabled. Since the positron selection uses both total energy and maximum-cell energy, we need to understand the per-cell response near the selection thresholds.

Source context: DarkSHINE digitisation and waveform study; collaboration contribution.
-->
