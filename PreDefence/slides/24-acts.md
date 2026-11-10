---
layout: default
class: content-slide slide-acts
transition: fade
clicks: 0
title: "ACTS integration in DarkSHINE"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# ACTS integration in DarkSHINE

<div class="acts-evidence"><section><div class="section-label gold">Reconstruction interfaces</div><FlowDiagram kind="actsCompact"/></section><section class="chart-stage tone-blue"><div class="section-label blue">Example output: track-parameter pull</div><div class="acts-pull"><Plot src="physics-output/acts-pull.png" caption="Truth-assisted fitter integration test, 2023"/></div><div class="pull-definition"><LaTeX formula="\mathrm{pull}=\frac{a_{\rm fit}-a_{\rm truth}}{\sigma_a}"/><span class="math-explanation">Fit residual relative to its estimated uncertainty</span></div></section></div>
<div class="takeaway">ACTS provides fitted states and covariance, vertex candidates, and track extrapolation to ECAL.</div>
<div class="source">My contributions: ACTS sequencer, geometry/field adapters and reconstruction interfaces.</div>

<!--
We convert the detector geometry into ACTS surfaces and strip-pair hits into measurements and source links. The sequencer runs truth-smeared seeding, combinatorial Kalman finding, track conversion and vertex reconstruction. Fitted tracks are extrapolated to the ECAL to provide impact positions.

The 2023 truth-assisted fitter test shows the track-parameter pull versus transverse momentum. The pull is the fitted-minus-truth residual divided by its estimated uncertainty. The distribution is concentrated near zero. My contributions are the ACTS sequencer and the geometry, magnetic-field and reconstruction interfaces.
-->
