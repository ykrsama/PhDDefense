---
layout: default
class: content-slide slide-tracking
transition: fade
clicks: 0
title: "Track finding and fitting"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Track finding and fitting

<div class="tracking-results"><section><div class="section-label blue">From strip measurements to a momentum estimate</div><div class="tracking-step tone-blue"><b>01 | Find the track</b><p>Associate hits across layers; rank circle candidates and remove accepted hits.</p></div><div class="tracking-step tone-gold"><b>02 | Fit the trajectory</b><p>Propagate through the field and material with measurement errors, energy loss and multiple scattering.</p></div><div class="tracking-step tone-violet"><b>03 | Compare physics output</b><p>GenFit Kalman and Riemann fits produce momentum spectra for comparison with truth.</p></div></section><div class="chart-stage tone-gold"><Plot src="physics-output/track-momentum.png" caption="Truth and reconstructed momentum spectra for the implemented fitting chains"/></div></div>
<div class="takeaway">Track multiplicity and recoil momentum connect strip measurements to the missing-momentum selection.</div>
<div class="source">Credit: Yifan Zhu</div>

<!--
Track finding identifies which strip measurements belong to a common trajectory. The legacy finder ranks quick circle candidates and removes accepted hits before continuing. Track fitting then estimates momentum and covariance while accounting for field, material, measurement errors, energy loss and scattering. The framework provides a GenFit Kalman fit and Riemann alternatives. The plot compares their reconstructed momentum spectra with truth. We can see both the beam peak and the broad lower-momentum population, which is relevant to recoil studies. This is a spectrum comparison; detailed resolution studies compare fitted and truth states at the same reference surface. The outputs used by the analysis include track multiplicity and recoil momentum. This tracking work is credited to Yifan Zhu.
-->
