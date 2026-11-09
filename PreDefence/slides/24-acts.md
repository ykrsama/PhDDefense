---
layout: default
class: content-slide slide-acts
transition: fade
clicks: 0
title: "ACTS integration in DarkSHINE"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# ACTS integration in DarkSHINE

<FlowDiagram kind="acts"/><div class="takeaway">The independent sequencer uses truth-smeared seeds in its reference configuration.</div>
<div class="source">My contributions: ACTS sequencer, geometry/field adapters and reconstruction interfaces.</div>

<!--
We integrated ACTS (A Common Tracking Software) through an independent sequencer and optional adapters in the existing Tracking processor. The sequencer converts the detector geometry into tracking surfaces and strip-pair hits into measurements and source links. The geometry, momenta and magnetic field all use the same coordinate mapping. The reference chain starts with truth-smeared seeds, runs combinatorial Kalman track finding, converts the trajectories and finds vertices. We can extrapolate recoil tracks to seed ECAL (Electromagnetic Calorimeter) clusters. Since the seeds use truth information, this chain does not give the efficiency of seeding from hits alone. The alternative space-point route still needs work and validation. These later tracking developments were not included in the frozen positron-analysis production.
-->
