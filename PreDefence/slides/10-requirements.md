---
layout: default
class: content-slide slide-requirements
transition: fade
clicks: 0
title: "Detector requirements for a missing-energy search"
---

<div class="eyebrow">Physics motivation and DarkSHINE</div>

# Detector requirements for a missing-energy search

<div class="columns"><div><table class="detector-requirements-table"><tbody><tr><th>Subsystem</th><th>Requirement / benchmark</th></tr><tr><td class="blue">Tagging tracker</td><td>Hit resolution <LaTeX formula="&lt;10\,\mu\mathrm{m}" />; momentum resolution <LaTeX formula="&lt;2\%" /> at 8 GeV</td></tr><tr><td class="rose">Tungsten target</td><td><LaTeX formula="0.1X_0\simeq350\,\mu\mathrm{m}" />; limit multiple scattering</td></tr><tr><td class="blue">Recoil tracker</td><td>Accept recoils from <LaTeX formula="\sim30\,\mathrm{MeV}" /> to 2 GeV; hit resolution <LaTeX formula="&lt;10\,\mu\mathrm{m}" /></td></tr><tr><td class="mint">LYSO ECAL</td><td>Contain e/γ showers; stochastic term <LaTeX formula="&lt;2\%" /> after digitisation</td></tr><tr><td class="violet">Fe/scintillator HCAL</td><td>Neutron veto inefficiency <LaTeX formula="&lt;10^{-5}" /> for <LaTeX formula="E_n\gtrsim2\,\mathrm{GeV}" />; <LaTeX formula="&lt;10^{-3}" /> at lower energies</td></tr></tbody></table></div><div><div class="plot-mid"><PhysicsScene compact narrow labels/></div></div></div><div class="takeaway">Acceptance gaps and calorimeter leakage can turn visible interactions into apparent missing energy.</div>
<div class="source">Tracker momentum resolution and the ECAL stochastic term are simulation benchmarks; HCAL inefficiencies are neutron-veto design targets.</div>

<!--
Time: 60 seconds.

These requirements follow from the ways a visible interaction can imitate missing energy. The tagging tracker needs hit precision below ten micrometres; its reference simulation gives momentum resolution below two percent at eight GeV. The tungsten target is only one tenth of a radiation length to limit multiple scattering. Downstream, the recoil tracker must retain soft tracks down to about thirty MeV, with acceptance extending to two GeV. The ECAL must contain electron and photon showers. Its digitised simulation gives a stochastic term below two percent, while leakage into the low-energy tail must be studied separately. For the HCAL, the neutron-veto inefficiency target is below ten to the minus five above roughly two GeV, and below ten to the minus three at lower energies. Those are neutron-veto targets; the event background also depends on the neutron spectrum and the combined selection.

Source context: PhDThesis/contents/darkshine_detector.tex; Works/DarkSHINE_CDR_Physics_Detector/Detectors/Tracking, ECAL and HCAL. Tracking acceptance follows the dissertation reference study; the CDR also studies recoil momenta down to 50 MeV.
-->
