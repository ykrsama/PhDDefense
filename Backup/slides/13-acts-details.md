---
layout: default
class: backup-slide backup-acts-details
clicks: 0
title: "ACTS interfaces and implementation scope"
---

<div class="eyebrow">Dissertation defence / backup</div>

# ACTS interfaces and implementation scope

<div class="formula-band"><LaTeX formula="(x,y,z)_{\mathrm{ACTS}}=(z,-x,-y)_{\mathrm{DSS}}" /></div><div class="columns"><div><h2 class="blue">Independent ActsSequencer</h2><ul class="small"><li>Separate tagging and recoil contexts</li><li>Telescope surfaces from detector information</li><li>Truth-smeared seeds in the reference sequence</li><li>Combinatorial KF and adaptive vertex finding</li><li>ECAL propagation through Acts_ECal_seed outputs</li></ul></div><div><h2 class="gold">Existing Tracking processor</h2><ul class="small"><li>Optional hit-triplet seed adapter</li><li>Circle extrapolation for the optional finder</li><li>ACTS propagation with local Kalman updates</li><li>Separate ECal_seed output path</li><li>Space-point sequence requires completion and validation</li></ul></div></div>
<div class="source">Sources: supplied dissertation and positron-study figures. Publication and production assumptions retained.</div>

<!--

-->
