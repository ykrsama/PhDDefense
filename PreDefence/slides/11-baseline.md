---
layout: default
class: content-slide slide-baseline
transition: fade
clicks: 1
title: "Electron-mode signal and background rejection"
---

<div class="eyebrow">Physics motivation and DarkSHINE <BaselineBadge/></div>

# Electron-mode signal and background rejection

<div class="columns "><div class="method-panel tone-blue"><div class="panel-kicker"><span class="ordinal">Signal</span>Electron beam</div><FeynmanDiagram mode="brem" charge="-"/><div class="formula-band"><LaTeX formula="e^-N\to e^-NA^{\prime},\quad A^{\prime}\to\chi\bar\chi" /></div><p class="small">One soft recoil electron with substantial missing energy and momentum.</p></div><div class="method-panel tone-gold" v-click="1"><div class="panel-kicker"><span class="ordinal">Selection</span>Visible vetoes</div><h2 class="gold">Measurements used together</h2><ul><li>Exactly one incident particle</li><li>A recoil carrying less momentum</li><li>Low electromagnetic energy</li><li>No significant hadronic or muon activity</li></ul><div class="rule"></div><p class="small muted">Hard bremsstrahlung is abundant. Rare photonuclear, electronuclear and muon-pair processes can leave poorly measured energy.</p></div></div><div class="takeaway">The sensitivity is controlled by the rare surviving tails of Standard Model interactions.</div>
<ResearchCallout :works="['prospects']"/>

<!--
In electron mode, dark bremsstrahlung produces a dark photon that decays invisibly, together with a recoil electron. The recoil electron usually carries only part of the beam energy. Ordinary bremsstrahlung can also leave a soft electron, but the photon normally deposits its energy in the ECAL (Electromagnetic Calorimeter). The cases of concern are rare processes that transfer this energy to hadrons or muons, or send it outside the detector acceptance. We use the measured momentum, electromagnetic energy and HCAL (Hadronic Calorimeter) veto together to reject these events. The simulation needs to describe both the usual electromagnetic response and the rare shower tails that pass the cuts.

Presenter cue: Start with the signal diagram. Click once to introduce the combined detector requirements and backgrounds.
-->
