---
layout: default
class: content-slide slide-workflow
transition: fade
clicks: 0
title: "The DarkSHINE software framework"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# The DarkSHINE software framework

<div class="workflow-evidence"><div><div class="section-label gold">From a beam particle to an analysis sample</div><FlowDiagram kind="workflowCompact"/></div><div><div class="beam-parameters"><b>8 GeV e⁻ beam</b></div><div class="physics-pair"><div class="chart-stage tone-blue"><Plot src="physics-output/recoil-energy.svg"/></div><div class="chart-stage tone-gold"><Plot src="physics-output/recoil-pt.svg"/></div></div></div></div>
<div class="takeaway"><span class="gold">My contributions:</span> General design of software framework, DSimu, DEvent, rare-process biasing and filtering, and ACTS integration.</div>
<div class="source">DSS software framework; X. Zhu, Nucl. Part. Phys. Proc. 346 (2024) 57.</div>

<!--
The framework connects the incident beam to a physics prediction. DSimu generates particles and simulates their interactions in the detector, DEvent carries the truth and hit collections, and DAna runs digitisation, reconstruction and analysis. DDis lets us inspect individual events. The plots on the right are electron-mode simulation examples from the CDR. The recoil-energy distribution separates the lower-energy signal from the background concentrated near the beam energy. Transverse momentum gives another handle; the plotted pT distribution already requires recoil energy between 50 MeV and 4 GeV. These distributions show the physics questions the software must answer: where signal and background populate phase space, and which detector measurements can distinguish them. I designed the overall software framework and worked on the simulation software, DSimu, the event data structure, DEvent, rare-process biasing and filtering, and ACTS integration.
-->
