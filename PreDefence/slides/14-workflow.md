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
Generation defines the beam or signal process. DSimu simulates the detector interactions with Geant4, DEvent stores truth and hit collections, and DAna performs digitisation and reconstruction. DDis displays individual events, and the analysis uses the reconstructed observables to select events and calculate limits.

The four plots show recoil kinematics from the 8 GeV CDR electron-mode simulation. Signal electrons have lower energies than the background concentrated near the beam energy. Transverse momentum provides further discrimination; that panel selects recoil energies between 50 MeV and 4 GeV. The recoil angle and transverse separation describe how the signal spreads across the tracking detector and how that spread changes with dark-photon mass.

My contributions are the general framework design, DSimu, DEvent, rare-process biasing and filtering, and ACTS integration.
-->
