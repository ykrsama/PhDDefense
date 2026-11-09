---
layout: default
class: content-slide slide-background-hierarchy
transition: fade
clicks: 0
title: "Standard Model background hierarchy"
---

<div class="eyebrow">Physics motivation and DarkSHINE <BaselineBadge/></div>

# Standard Model background hierarchy

<div class="columns wide"><div class="chart-stage tone-blue plot-large"><Plot src="figures/DEF-374.png" caption="Background sub-processes and relative production rates (Fig. 8)."/></div><div class="copy"><div class="narrative-note tone-blue"><h2 class="blue">Hard-photon branches</h2><p><LaTeX formula="\gamma\to e^+e^-"/>: identified by tracker and ECAL.</p><p><strong>Photonuclear</strong> / <LaTeX formula="\gamma\to\mu^+\mu^-"/>: hadrons and muons.</p></div><div class="narrative-note tone-gold"><h2 class="gold">Different rejection mechanisms</h2><p><strong>Electronuclear</strong> produces hadrons. HCAL vetoes hadronic and muonic activity.</p></div><div class="narrative-note tone-mint"><h2 class="mint">Residual background</h2><p>Muon pairs are effectively rejected by HCAL. <strong>PN / EN tails</strong> require extrapolation into the signal region.</p></div></div></div>
<div class="source">J. Chen et al., Sci. China Phys. Mech. Astron. 66, 211062 (2023); Baseline Design Report, <a href="https://arxiv.org/abs/2411.09345" target="_blank" rel="noopener noreferrer">arXiv:2411.09345</a>.</div>

<!--
Most beam electrons pass through the thin target. Hard bremsstrahlung produces a recoil electron and an energetic photon. Electron–positron conversion is frequent, and tracking and the ECAL can identify those particles. The rarer photonuclear and muon-pair branches put energy into hadrons or muons, making the HCAL veto essential. Electronuclear reactions provide another hadronic source.

After applying the veto, the paper finds muon pairs effectively rejected by HCAL. PN and EN require residual-background estimates in the signal region. This is where the low-energy tails matter and inclusive statistics become insufficient. We therefore simulate six dedicated samples: PN, EN and muon-pair production, each in the target and ECAL, alongside 2.5 billion inclusive events. The rare-process samples are normalised by their branching ratios and used to study rejection and extrapolate the nuclear-background tails. This motivates a framework that can populate and inspect these rare sub-processes efficiently.
-->
