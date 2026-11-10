---
layout: default
class: content-slide slide-requirements
transition: fade
clicks: 0
title: "Detector requirements for a missing-energy search"
---

<div class="eyebrow">Physics motivation and DarkSHINE <BaselineBadge/></div>

# Detector requirements for a missing-energy search

<div class="columns"><div class=""><table class="detector-requirements-table"><tbody><tr><th>Subsystem</th><th>Requirement / benchmark</th></tr><tr><td class="blue">Tagging tracker</td><td>Hit resolution <LaTeX formula="&lt;10\,\mu\mathrm{m}" />; momentum resolution <LaTeX formula="&lt;2\%" /> at 8 GeV</td></tr><tr><td class="rose">Tungsten target</td><td><LaTeX formula="0.1X_0\simeq350\,\mu\mathrm{m}" />; limit multiple scattering</td></tr><tr><td class="blue">Recoil tracker</td><td>Accept recoils from <LaTeX formula="\sim30\,\mathrm{MeV}" /> to 2 GeV; hit resolution <LaTeX formula="&lt;10\,\mu\mathrm{m}" /></td></tr><tr><td class="mint">LYSO ECAL</td><td>High granularity; precise e/γ energy measurement</td></tr><tr><td class="violet">Fe/scintillator HCAL</td><td>Neutron veto inefficiency <LaTeX formula="&lt;10^{-5}" /> for <LaTeX formula="E_n\gtrsim2\,\mathrm{GeV}" />; <LaTeX formula="&lt;10^{-3}" /> at lower energies</td></tr></tbody></table></div><div class="chart-stage tone-violet"><div class="plot-mid"><PhysicsScene compact narrow labels/></div></div></div>
<ResearchCallout :works="['ecal','hcal']"/>

<!--
The detector requirements follow from the missing-energy measurement. The tagging tracker needs a hit precision below 10 micrometres and a momentum resolution below 2 percent at 8 GeV. The tungsten target is 0.1 radiation lengths thick to limit multiple scattering. The recoil tracker needs to measure charged particles from about 30 MeV to 2 GeV. The ECAL needs high granularity and precise energy measurement to resolve localised electromagnetic deposits. The HCAL requirements are driven by the neutron background: veto inefficiency below ten to the minus five above roughly 2 GeV, and below ten to the minus three at lower energies.
-->
