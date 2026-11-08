---
layout: default
class: content-slide slide-generator-validation
transition: slide-left
clicks: 0
title: "Signal generation and validation"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Signal generation and validation

<div class="columns wide"><div><div class="plot-large"><Plot src="figures/generator-comparison.png" caption="External and transport-native signal-generation comparison." /></div></div><div><h2 class="blue">Two connected routes</h2><p>External hard-process generation supplies signal kinematics.</p><p>A Geant4-native process supports transport-based production.</p><div class="rule"></div><h2 class="gold">Checks at several levels</h2><p class="small">Total cross section, recoil energy, angle and transverse momentum.</p><p class="small muted">Agreement of rates and agreement of shapes test different inputs.</p></div></div><div class="takeaway">A common configuration and normalisation are required before comparing generator predictions.</div>
<div class="source">DarkSHINE signal-generator comparison; collaboration study. Original plot retained.</div>

<!--
Time: 60 seconds.

The software supports external hard-process kinematics and a transport-native dark-photon process. The external route uses matrix-element generators and passes the resulting particles into detector transport. The native route integrates production with Geant4. Generator validation checks the cross section and several recoil distributions. Comparing only the integrated cross section would miss a kinematic disagreement that changes detector acceptance. Conversely, normalised shape agreement does not establish the absolute rate. The beam, target, mass, coupling convention and generation cuts must match in a meaningful comparison. These validation studies are collaboration results that establish the interfaces used by the framework and analysis.

Source context: DarkSHINE signal-generator comparison; collaboration study. Original plot retained.
-->
