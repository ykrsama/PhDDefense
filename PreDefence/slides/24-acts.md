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
ACTS needs the detector information in its own tracking representation. We convert the geometry into surfaces and strip-pair hits into measurements and source links, with consistent coordinates for the field and momentum. The reference sequencer then uses truth-smeared seeds, combinatorial Kalman finding, trajectory conversion and vertex reconstruction. Its outputs include fitted states and covariance, track quality information and impact states extrapolated to the ECAL. The plot is an earlier truth-assisted fitter integration test. It shows a track-parameter pull versus transverse momentum: the fitted-minus-truth residual divided by its estimated uncertainty. This illustrates how the integration produces a physical performance diagnostic, alongside the track objects needed by the analysis. My contributions are the sequencer and geometry, field and reconstruction interfaces. The later ACTS developments are separate from the frozen reconstruction used in the positron study.
-->
