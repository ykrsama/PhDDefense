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
The filter follows the physics of rare backgrounds. At stage zero, we track the primary particle and defer its secondaries. We inspect the primary energy loss and can require a hard bremsstrahlung photon. At stage one, we release secondaries from the selected longitudinal region. The process filter selects a photonuclear, electronuclear or muon-pair interaction and its energy transfer. The particle filter selects the secondary species and energy. Events passing these conditions proceed to stage two, where the remaining tracks are released. The ECAL veto stops an event as soon as its accumulated deposited energy exceeds the production bound.
-->
