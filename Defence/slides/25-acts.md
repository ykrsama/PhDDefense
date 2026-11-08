---
layout: default
class: content-slide slide-acts
transition: slide-left
clicks: 0
title: "ACTS integration in DarkSHINE"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# ACTS integration in DarkSHINE

<FlowDiagram kind="acts"/><div class="takeaway">The independent sequencer uses truth-smeared seeds in its reference configuration.</div>
<div class="source">Candidate contribution: ACTS sequencer, geometry/field adapters and reconstruction interfaces.</div>

<!--
Time: 70 seconds.

My ACTS integration provides an independent sequencer as well as optional adapters in the existing Tracking processor. The sequencer converts detector information into tracking surfaces and transforms strip-pair hits into ACTS measurements and source links. Geometry, momentum and field vectors use one consistent coordinate mapping. The reference chain starts with truth-smeared seeds, runs combinatorial Kalman track finding, converts the trajectories and performs vertex finding. Extrapolated recoil tracks can seed ECAL clustering. This is an integration and reconstruction study, not a measurement of fully hit-based seeding efficiency. The alternative space-point route requires completion and validation, and the later ACTS developments should not be attributed to the frozen positron-analysis production.

Source context: Candidate contribution: ACTS sequencer, geometry/field adapters and reconstruction interfaces.
-->
