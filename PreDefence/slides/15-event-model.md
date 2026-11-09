---
layout: default
class: content-slide slide-event-model
transition: fade
clicks: 0
title: "A common event model: DEvent"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# A common event model: DEvent

<div class="event-observables"><section><div class="section-label gold">What a stored event lets us study</div><div class="event-field"><b class="blue">Truth particles + steps</b><span>Momentum, energy, origin, endpoint and ancestry</span><em>Trace the interaction that produced a background</em></div><div class="event-field"><b class="violet">Simulated hits</b><span>Deposited energy, position, time and cell ID</span><em>Study shower topology and detector response</em></div><div class="event-field"><b class="mint">Response + reconstructed objects</b><span>Cell signals, fitted tracks and clusters</span><em>Build visible energy, recoil momentum and vetoes</em></div></section><section class="chart-stage tone-blue"><div class="event-display"><Plot src="physics-output/event-display.png" caption="Event display: particle trajectories and the resulting shower" plain/></div><div class="event-readout"><b>One event, linked views</b><p>Follow the particle history into detector deposits, then compare with reconstructed tracks and calorimeter response.</p></div></section></div>

<!--
DEvent carries several views of the same physical event. Truth particles and steps tell us the momenta, energies, origins and interaction history. Simulated hits record deposited energy, positions, times and detector cell identifiers. Detector-response collections and reconstructed objects then provide cell signals, fitted tracks and clusters. The event display on the right shows why the associations matter: we can follow a particle into a shower and ask which deposits it produced. For a background that enters the signal region, we can trace its origin, inspect the veto activity and check whether reconstruction missed a track or cluster. Named collections also let us rerun response or reconstruction algorithms from stored Geant4 particle and hit records. We choose the persisted collections according to the study that needs them.
-->
