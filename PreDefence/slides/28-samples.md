---
layout: default
class: content-slide slide-samples
transition: fade
clicks: 0
title: "Signal and background samples"
---

<div class="eyebrow">Positron-beam-mode analysis</div>

# Signal and background samples

<div class="columns "><div class="method-panel tone-blue"><div class="panel-kicker">Efficiency samples</div><h2 class="blue">Signal grid</h2><table><tbody><tr><th>Mechanism</th><th>Mass points</th></tr><tr><td>Dark bremsstrahlung</td><td>30</td></tr><tr><td>Non-resonant annihilation</td><td>18</td></tr><tr><td>Resonant annihilation</td><td>23</td></tr></tbody></table><p class="small"><LaTeX formula="10^5" /> events per channel–mass point.</p><p class="small">CalcHEP kinematics followed by Geant4 detector simulation.</p></div><div class="method-panel tone-gold"><div class="panel-kicker">Background predictions</div><h2 class="gold">Background production</h2><ul class="small"><li>PN, EN and muon-pair conversion</li><li>Target/tracker and ECAL locations</li><li>Additional target-annihilation sample</li><li>Independent inclusive sample: <LaTeX formula="2.5\times10^9" /> POT</li></ul><div class="rule"></div><p class="small">Common benchmark: 8 GeV, <LaTeX formula="3\times10^{14}" /> POT, baseline 1 detector.</p></div></div><div class="takeaway">Equal generated signal counts measure efficiency. Cross sections determine the physical mixture.</div>
<div class="source">arXiv:2609.05900</div>

<!--
We simulate 30 bremsstrahlung mass points, 18 non-resonant points and 23 resonant points, with a hundred thousand events at each channel–mass point. CalcHEP provides the signal kinematics, followed by Geant4 detector simulation. These samples determine the selection efficiencies; cross sections set the relative production rates.

Dedicated background samples cover photonuclear, positron-nuclear and muon-pair processes in the target or tracker and in the ECAL, plus ordinary target annihilation. The positron-nuclear sample uses the EN label. An independent inclusive sample contains 2.5 billion POT for background validation. The sensitivity benchmark is 8 GeV, 3 × 10¹⁴ POT and Baseline 1.
-->
