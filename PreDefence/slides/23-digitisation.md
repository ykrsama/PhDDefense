---
layout: default
class: content-slide slide-digitisation
transition: fade
clicks: 0
title: "Digitisation connects deposits to observables"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Digitisation connects deposits to observables

<div style="height:145px;overflow:hidden"><FlowDiagram kind="digit" style="height:145px;margin-top:-3px"/></div><div class="columns "><div><h2 class="violet">Response effects</h2><p class="small">Scintillation, collection efficiency, SiPM saturation and recovery, electronic noise, finite dynamic range and ADC sampling.</p><p class="small muted">The production configuration selects the detailed optical or parameterised response.</p></div><div><div class="plot-short"><Plot src="figures/waveform.svg" caption="Digitised signals in representative ECAL cells." /></div></div></div><div class="takeaway">The selected response collection and calibration define the meaning of reconstructed cell energy.</div>
<div class="source">Credit: Qibin Liu</div>

<!--
Digitisation converts simulated energy deposits into detector signals. Light production and collection determine how many photons reach the sensor. The SiPM (Silicon Photomultiplier) response accounts for finite pixel occupancy and recovery. The electronics model then adds the waveform, noise, finite range and digitisation. We also have a parameterised response for samples that do not need full optical information. The production configuration records which model is used. In the positron analysis, we cut on both total energy and the largest cell deposit, so the response of individual cells near those thresholds matters.
-->
