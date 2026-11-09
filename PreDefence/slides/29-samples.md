---
layout: default
class: content-slide slide-samples
transition: fade
clicks: 0
title: "Signal and background samples"
---

<div class="eyebrow">Positron-beam-mode analysis</div>

# Signal and background samples

<div class="columns "><div class="method-panel tone-blue"><div class="panel-kicker">Efficiency samples</div><h2 class="blue">Signal grid</h2><table><tbody><tr><th>Mechanism</th><th>Mass points</th></tr><tr><td>Dark bremsstrahlung</td><td>30</td></tr><tr><td>Non-resonant annihilation</td><td>18</td></tr><tr><td>Resonant annihilation</td><td>23</td></tr></tbody></table><p class="small"><LaTeX formula="10^5" /> events per channel–mass point.</p><p class="small">CalcHEP kinematics followed by Geant4 transport.</p></div><div class="method-panel tone-gold"><div class="panel-kicker">Background predictions</div><h2 class="gold">Background production</h2><ul class="small"><li>PN, EN and muon-pair conversion</li><li>Target/tracker and ECAL locations</li><li>Additional target-annihilation sample</li><li>Independent inclusive sample: <LaTeX formula="2.5\times10^9" /> POT</li></ul><div class="rule"></div><p class="small">Common benchmark: 8 GeV, <LaTeX formula="3\times10^{14}" /> POT, baseline 1 detector.</p></div></div><div class="takeaway">Equal generated signal counts measure efficiency. Cross sections determine the physical mixture.</div>
<div class="source">arXiv:2609.05900</div>

<!--
We simulate 30 bremsstrahlung mass points, 18 non-resonant points and 23 resonant points, with 100,000 events at each point. We calculate efficiencies from these equal-sized samples and apply the physical rates afterwards. For backgrounds, we generate dedicated biased samples of photonuclear, positron-nuclear and muon-pair processes. Production in the target or tracker is separate from production in the ECAL (Electromagnetic Calorimeter). The EN (Electronuclear) label is retained for the positron-nuclear sample in this campaign. We also generate ordinary annihilation in the target. An independent inclusive sample contains the equivalent of 2.5 × 10⁹ incident positrons. We use it to check the dedicated predictions without adding it to the background total. All sensitivity results use baseline 1.
-->
