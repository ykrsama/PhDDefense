---
layout: default
class: backup-slide qa-slide
transition: fade
clicks: 0
title: "CalcHEP inputs and detector production"
---

<div class="eyebrow">Questions / supporting evidence</div>

# CalcHEP inputs and detector production

<table class="compact-table"><thead><tr><th>Archive</th><th>Process</th><th>Observed settings</th></tr></thead><tbody><tr><td>diagramA</td><td>e⁺ N → e⁺ A′ N</td><td>p₁ = 8 GeV, p₂ = 0; 10⁵ requested events</td></tr><tr><td>diagramB</td><td>e⁺ e⁻ → A′ γ</td><td>p₁ = 8 GeV, p₂ = 0; 10⁵ requested events</td></tr><tr><td>calcHEP</td><td>Includes e⁺ e⁻ → χχ̄</td><td>8 GeV multi-process rate/test batch; 10 events</td></tr><tr><td>diagramC</td><td>e⁺ e⁻ → χχ̄</td><td>4 GeV test batch; 2 events</td></tr></tbody></table><div class="qa-columns"><div class="qa-card"><h2 class="blue">Verified in the batch files</h2><p>DarkPhoton model; Feynman gauge; ε = 1; mA′ = 0.090 GeV; beam structure functions OFF.</p></div><div class="qa-card"><h2 class="gold">Configuration trace</h2><p>Snapshots include model files and output headers. Detector production uses the condor-script baseline 1, 8 GeV configurations.</p></div></div>

<div class="source">Read-only bl0 configuration snapshots, 9 Nov. 2026; see sources/calchep.</div>

<!--
I can show the archived batch settings and the corresponding output headers. We found 8 GeV bremsstrahlung and radiative-annihilation batches requesting 10⁵ events. The calcHEP directory also has an 8 GeV multi-process batch containing a dark-matter-pair process, but it requests only 10 events. The diagramC example is a 4 GeV test. These records verify what those files specify. For detector production, we use the baseline 1, 8 GeV configurations in condor-script. The next page shows how each signal channel is implemented in Geant4.
-->
