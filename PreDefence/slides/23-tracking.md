---
layout: default
class: content-slide slide-tracking
transition: fade
clicks: 0
title: "Track finding and fitting"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Track finding and fitting

<div class="tracking-results"><section><div class="section-label blue">From strip measurements to a momentum estimate</div><div class="tracking-step tone-blue"><b>01 | Find the track</b><p>Associate hits across layers; rank circle candidates and remove accepted hits.</p></div><div class="tracking-step tone-gold"><b>02 | Fit the trajectory</b><p>Propagate through the field and material with measurement errors, energy loss and multiple scattering.</p></div><div class="tracking-step tone-violet"><b>03 | Evaluate tracking performance</b><p>Momentum resolution versus beam energy and layer count constrains the recoil measurement.</p></div></section><div class="chart-stage tone-gold"><Plot src="physics-output/cdr-recoil-momentum-resolution.svg" caption="CDR recoil tracker: momentum resolution for 4–10 layers"/></div></div>
<div class="source">DarkSHINE Collaboration, Baseline Design Report, <a href="https://arxiv.org/abs/2411.09345" target="_blank" rel="noopener noreferrer">arXiv:2411.09345</a></div>

<!--
Track finding identifies which strip measurements belong to a common trajectory. The legacy finder ranks circle candidates and removes accepted hits before continuing. Track fitting estimates momentum and covariance while accounting for the magnetic field, material, measurement errors, energy loss and multiple scattering.

The CDR plot shows the recoil tracker's relative momentum resolution as a function of beam energy, for four to ten tracker layers. It is a detector-performance study. At low energies, multiple scattering affects the measurement; at high energies, the small curvature and available lever arm limit the resolution. Six layers provide the Baseline 1 balance between tracking information and material. The reconstructed momentum and track multiplicity then enter the missing-momentum selection. The framework also supports the GenFit and Riemann fitting implementations described in the software study.
-->
