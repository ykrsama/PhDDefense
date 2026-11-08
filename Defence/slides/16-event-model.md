---
layout: default
class: content-slide slide-event-model
transition: slide-left
clicks: 0
title: "A common event model: DEvent"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# A common event model: DEvent

<FlowDiagram kind="model"/><div class="takeaway">Collection types distinguish Monte Carlo truth, detector deposits, response and reconstructed objects.</div>

<!--
Time: 55 seconds.

DEvent carries named collections with explicit roles. McParticle and DStep contain truth information. SimulatedHit records transport deposits, CalorimeterHit describes the detector response, and ReconstructedParticle represents inferred objects. The current AnaEvent name is an alias of DEvent. This separation matters physically: truth is useful for explaining a background, but an experimental selection must use measured or reconstructed quantities. Collection names also identify the detector region or response variant, so a change of input collection can change the meaning of a reconstructed energy even when the algorithm is unchanged. The event schema and output choices therefore belong in the production record.

Source context: Event simulation and reconstruction, supplied dissertation sources.
-->
