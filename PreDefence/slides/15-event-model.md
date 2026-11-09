---
layout: default
class: content-slide slide-event-model
transition: fade
clicks: 0
title: "A common event model: DEvent"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# A common event model: DEvent

<FlowDiagram kind="model"/><div class="takeaway">Collection types distinguish Monte Carlo truth, detector deposits, response and reconstructed objects.</div>

<!--
DEvent is a container of physics object collections. McParticle and DStep store truth information, and SimulatedHit stores energy deposits from transport. CalorimeterHit contains the detector response, while ReconstructedParticle holds reconstructed objects. AnaEvent is currently an alias of DEvent. We use truth information to understand how a background event was produced, and measured or reconstructed quantities to select events. Collection names identify detector regions and response variants. Changing the input collection can therefore change what a reconstructed energy means, even with the same algorithm. We record the event schema and output choices with each production configuration.
-->
