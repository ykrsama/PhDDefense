---
layout: default
class: content-slide slide-requirements
transition: fade
clicks: 0
title: "Detector requirements for a missing-energy search"
---

<div class="eyebrow">Physics motivation and DarkSHINE</div>

# Detector requirements for a missing-energy search

<div class="columns"><div class=""><table class="detector-requirements-table"><tbody><tr><th>Subsystem</th><th>Requirement / benchmark</th></tr><tr><td class="blue">Tagging tracker</td><td>Hit resolution <LaTeX formula="&lt;10\,\mu\mathrm{m}" />; momentum resolution <LaTeX formula="&lt;2\%" /> at 8 GeV</td></tr><tr><td class="rose">Tungsten target</td><td><LaTeX formula="0.1X_0\simeq350\,\mu\mathrm{m}" />; limit multiple scattering</td></tr><tr><td class="blue">Recoil tracker</td><td>Accept recoils from <LaTeX formula="\sim30\,\mathrm{MeV}" /> to 2 GeV; hit resolution <LaTeX formula="&lt;10\,\mu\mathrm{m}" /></td></tr><tr><td class="mint">LYSO ECAL</td><td>Contain e/γ showers; stochastic term <LaTeX formula="&lt;2\%" /> after digitisation</td></tr><tr><td class="violet">Fe/scintillator HCAL</td><td>Neutron veto inefficiency <LaTeX formula="&lt;10^{-5}" /> for <LaTeX formula="E_n\gtrsim2\,\mathrm{GeV}" />; <LaTeX formula="&lt;10^{-3}" /> at lower energies</td></tr></tbody></table></div><div class="chart-stage tone-violet"><div class="plot-mid"><PhysicsScene compact narrow labels/></div></div></div><div class="takeaway">Acceptance gaps and calorimeter leakage can turn visible interactions into apparent missing energy.</div>
<div class="source">Tracker momentum resolution and the ECAL stochastic term are simulation benchmarks; HCAL inefficiencies are neutron-veto design targets.</div>

<!--
These requirements come from the ways an ordinary interaction can look like missing energy. The tagging tracker needs a hit precision below 10 micrometres. Its reference simulation gives a momentum resolution below 2% at 8 GeV. The tungsten target is 0.1 radiation lengths thick to limit multiple scattering. The recoil tracker needs to measure soft tracks down to about 30 MeV, with acceptance extending to 2 GeV. The ECAL (Electromagnetic Calorimeter) contains electron and photon showers. Its digitised simulation gives a stochastic term below 2%; leakage into the low-energy tail needs a separate study. For the HCAL (Hadronic Calorimeter), the neutron-veto inefficiency target is below 10⁻⁵ above roughly 2 GeV and below 10⁻³ at lower energies. The event background also depends on the neutron spectrum and the other selection cuts.
-->
