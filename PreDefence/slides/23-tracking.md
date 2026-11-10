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
Track finding associates strip measurements with a common trajectory. The finder ranks circle candidates and removes accepted hits before continuing. Track fitting estimates momentum and covariance using the magnetic field, material, measurement errors, energy loss and multiple scattering.

The CDR plot shows relative momentum resolution versus beam energy for four to ten recoil-tracker layers. Multiple scattering worsens the resolution at low energies; small curvature and the available lever arm limit it at high energies. Six layers provide the Baseline 1 balance between tracking performance and material. The reconstructed momentum and track multiplicity enter the missing-momentum selection.
-->
