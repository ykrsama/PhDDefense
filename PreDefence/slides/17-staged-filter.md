---
layout: default
class: content-slide slide-staged-filter
transition: fade
clicks: 0
title: "Generator-level filtering with staged transport"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Generator-level filtering with staged transport

<div class="method-graphic"><FlowDiagram kind="filter"/></div><div class="takeaway">Reject an event as soon as its production requirements fail, before transporting the full shower.</div>

<!--
The generator-level filter runs during particle transportation, before we write the full event to disk. At stage 0, we process only the primary track and keep its secondaries waiting. We can then check the primary interaction or energy loss. At stage 1, we process the relevant secondaries in the chosen region and check for the rare interaction we want. If the event passes, we transport the rest of the shower. We can also stop once the accumulated ECAL (Electromagnetic Calorimeter) energy exceeds an upper bound, because further deposits will only increase it. This saves time on events that we already know will fail the selection.
-->
