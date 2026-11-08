---
layout: default
class: content-slide slide-requirements
transition: fade
clicks: 0
title: "Detector requirements for a missing-energy search"
---

<div class="eyebrow">Physics motivation and DarkSHINE</div>

# Detector requirements for a missing-energy search

<div class="columns "><div><table><tbody><tr><th>Subsystem</th><th>Experimental role</th></tr><tr><td class="blue">Tagging tracker</td><td>One incident track and a momentum reference</td></tr><tr><td class="rose">Tungsten target</td><td><LaTeX formula="0.1X_0\simeq350\,\mu\mathrm m" /></td></tr><tr><td class="blue">Recoil tracker</td><td>Soft-track acceptance and multiplicity</td></tr><tr><td class="mint">LYSO ECAL</td><td>Contain electromagnetic showers</td></tr><tr><td class="violet">Fe/scintillator HCAL</td><td>Reject penetrating visible particles</td></tr></tbody></table></div><div><div class="plot-mid"><PhysicsScene compact narrow labels/></div></div></div><div class="takeaway">Tracking and calorimeter vetoes address different ways for ordinary events to imitate missing energy.</div>

<!--
Time: 60 seconds.

Background rejection sets the detector requirements. A thin target limits multiple scattering while retaining sufficient production probability. Precise strip measurements determine the incident and recoil momenta. A soft recoil can curl in a strong field, so the recoil-field profile and acceptance matter together. The ECAL must measure the electromagnetic energy, and the HCAL must catch energy carried by neutral hadrons or muons. Subsystem hardware development is collaboration work. My contribution is the software framework and analysis that propagate the detector response into selected yields. The analysis thresholds are performance assumptions that still need to be demonstrated at the system level.

Source context: DarkSHINE detector design and collaboration subsystem studies.
-->
