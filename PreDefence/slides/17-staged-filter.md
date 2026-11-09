---
layout: default
class: content-slide slide-staged-filter
transition: fade
clicks: 0
title: "Generator-level filtering with staged Geant4 tracking"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Generator-level filtering with staged Geant4 tracking

<div class="filter-flow"><FlowDiagram kind="filterCompact"/></div><div class="physics-decisions"><section class="tone-blue"><div class="section-label blue">Primary interaction</div><h2>Was enough energy transferred?</h2><p>Check the primary energy loss and, when requested, a hard bremsstrahlung photon.</p></section><section class="tone-gold"><div class="section-label gold">Rare secondary process</div><h2>Did the required interaction occur?</h2><p>Select process or particle type, longitudinal region and energy interval.</p></section><section class="tone-mint"><div class="section-label mint">Visible shower energy</div><h2>Can this event still pass?</h2><p>Stop once accumulated truth ECAL energy exceeds the production bound.</p></section></div>

<!--
The filter is organised around the physics of rare backgrounds. At stage zero, we run Geant4 tracking for the primary particle and defer its secondaries. We can inspect the primary energy loss and require a hard bremsstrahlung photon. At stage one, we release secondaries from the chosen longitudinal region. A process filter can require a photonuclear, electronuclear or muon-pair interaction and an energy transfer in the parent step. A particle filter instead checks the secondary species and its energy. Only when the requested conditions are met do we release the remaining tracks. There is also an early ECAL veto: once the accumulated deposited energy exceeds the production upper bound, subsequent shower development cannot reduce that accumulated energy. These decisions use Geant4 particle and energy-deposit information and define the generated sample. Reconstructed momentum and calibrated calorimeter selections are applied later.
-->
