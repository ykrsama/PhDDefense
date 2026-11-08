---
layout: default
class: content-slide slide-tracking
transition: fade
clicks: 0
title: "Track finding and fitting"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Track finding and fitting

<div style="height:190px"><FlowDiagram kind="tracking" style="height:190px"/></div><div class="columns "><div><h2 class="blue">Finding</h2><p class="small">Associate hits across tracker layers.<br/>The legacy greedy finder ranks circle candidates and removes accepted hits.</p></div><div><h2 class="gold">Fitting</h2><p class="small">Estimate momentum and covariance with magnetic-field propagation, energy loss and multiple scattering.</p><p class="small muted">GenFit Kalman fitting and a Riemann alternative are available.</p></div></div><div class="takeaway">Momentum residuals must compare reconstructed and reference states at the same surface.</div>

<div class="source">Credit: Yifan Zhu</div>
<!--
Time: 55 seconds.

Track finding determines which hits belong together. The low-multiplicity legacy algorithm uses a fast circle pre-fit to rank candidates and removes accepted hits before finding the next track. The circle score is used for candidate ranking. A full fit then refines the track parameters using the magnetic field, material and measurement errors. The framework supports GenFit-based Kalman fitting and an analytical Riemann alternative. To assess momentum resolution, the fitted state and the reference state must be compared at the same surface. This also matters when comparing tagging and recoil momenta across the target.

Source context: Event simulation and reconstruction, supplied dissertation sources.
-->
