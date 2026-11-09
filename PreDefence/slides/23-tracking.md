---
layout: default
class: content-slide slide-tracking
transition: fade
clicks: 0
title: "Track finding and fitting"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Track finding and fitting

<div style="height:190px"><FlowDiagram kind="tracking" style="height:190px"/></div><div class="columns "><div class="method-panel tone-blue"><div class="panel-kicker"><span class="ordinal">01</span>Associate hits</div><h2 class="blue">Finding</h2><p class="small">Associate hits across tracker layers.<br/>The legacy greedy finder ranks circle candidates and removes accepted hits.</p></div><div class="method-panel tone-gold"><div class="panel-kicker"><span class="ordinal">02</span>Estimate track parameters</div><h2 class="gold">Fitting</h2><p class="small">Estimate momentum and covariance with magnetic-field propagation, energy loss and multiple scattering.</p><p class="small muted">GenFit Kalman fitting and a Riemann alternative are available.</p></div></div><div class="takeaway">Momentum residuals must compare reconstructed and reference states at the same surface.</div>

<div class="source">Credit: Yifan Zhu</div>
<!--
Track finding decides which hits belong to the same track. The legacy algorithm for low-multiplicity events uses a quick circle pre-fit to rank candidates. Once it accepts a track, it removes those hits before looking for another. A full fit then calculates the track parameters using the magnetic field, material and measurement errors. The framework supports Kalman fitting with GenFit and an analytical Riemann fit. When checking momentum resolution, we compare the fitted and reference states at the same surface. We also use this convention when comparing tagging and recoil momenta across the target.
-->
