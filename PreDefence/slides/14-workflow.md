---
layout: default
class: content-slide slide-workflow
transition: fade
clicks: 0
title: "The DarkSHINE software framework"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# The DarkSHINE software framework

<div class="workflow-evidence"><div><div class="section-label gold">From a beam particle to an analysis sample</div><FlowDiagram kind="workflowCompact"/></div><div><div class="beam-parameters"><b>8 GeV e⁻ beam</b></div><div class="physics-quartet"><div class="chart-stage tone-blue"><Plot src="physics-output/recoil-energy.svg"/></div><div class="chart-stage tone-gold"><Plot src="physics-output/recoil-pt.svg"/></div><div class="chart-stage tone-mint"><Plot src="physics-output/recoil-angle.svg"/></div><div class="chart-stage tone-violet"><Plot src="physics-output/recoil-separation.svg"/></div></div></div></div>
<div class="takeaway"><span class="gold">My contributions:</span> General design of software framework, DSimu, DEvent, rare-process biasing and filtering, and ACTS integration.</div>


<!--
The framework connects the incident beam to a physics prediction. DSimu generates particles and simulates their detector interactions. DEvent carries the truth and hit collections. DAna runs digitisation, reconstruction and analysis, and DDis lets us inspect individual events.

The four plots on the right are physical outputs from the CDR electron-mode simulation. The coloured curves correspond to different dark-photon masses. The dark distributions in the energy, transverse-momentum and angle panels show the inclusive background. The recoil-energy plot separates the softer signal electrons from the background concentrated near the beam energy. The transverse-momentum plot gives a complementary discriminant; this panel requires recoil energy between 50 MeV and 4 GeV. Larger recoil angles and the transverse separation at the detector surface connect these kinematics to the tracker acceptance. The separation panel shows the signal mass dependence. These are the observables we need the framework to produce for detector design and event selection.

I contributed to the general framework design and developed the simulation software, DSimu, the event data structure, DEvent, rare-process biasing and filtering, and ACTS integration. I will now explain how we made large simulation samples more practical to produce and store.
-->
