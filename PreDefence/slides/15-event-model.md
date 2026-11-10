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
DEvent carries several views of the same physical event. Truth particles and steps record momenta, energies, origins and interaction history. Simulated hits record deposited energy, positions, times and detector cell identifiers. Detector-response collections and reconstructed objects provide cell signals, fitted tracks and clusters. The event display shows the link between a particle trajectory and the shower it produces. For a background entering the signal region, we can trace its origin, inspect veto activity and identify missed tracks or clusters. Stored particle and hit records also let us rerun digitisation and reconstruction.
-->
