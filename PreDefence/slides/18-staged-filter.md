---
layout: default
class: content-slide slide-staged-filter
transition: fade
clicks: 0
title: "Generator-level filtering with staged transport"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Generator-level filtering with staged transport

<FlowDiagram kind="filter"/><div class="takeaway">Reject an event as soon as its production requirements fail, before transporting the full shower.</div>

<!--
Time: 70 seconds.

The generator-level filter acts during transport, before the complete event is written to disk. At stage zero, only the primary track is urgent and its secondaries wait. This allows the primary interaction or energy-loss condition to be tested first. Stage one processes relevant secondaries in the region of interest, where the required rare interaction is checked. Only an accepted event releases the rest of the shower. An accumulated ECAL energy above an upper bound also permits early termination, since further deposits cannot bring the sum back down. This order avoids processing secondaries that cannot change a rejection decision.

Source context: Event simulation and reconstruction, supplied dissertation sources.
-->
