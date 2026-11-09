---
layout: default
class: backup-slide qa-slide
transition: fade
clicks: 0
title: "What supports the 1 MeV cell thresholds?"
---

<div class="eyebrow">Questions / supporting evidence</div>

# What supports the 1 MeV cell thresholds?

<div class="qa-columns"><div class="qa-card"><h2 class="blue">ECAL response</h2><div class="qa-number">2.7 keV</div><p>Equivalent electronic noise per channel in the high-gain model.</p><p>The 1 MeV maximum-cell split is an analysis threshold. Noise alone does not determine the full fake-veto rate.</p></div><div class="qa-card"><h2 class="gold">HCAL response</h2><div class="qa-number">1 MeV</div><p>Assumed single-cell veto threshold; total veto energy is below 100 MeV.</p><p>Complete electronic-noise and pileup digitisation is not included in this campaign.</p></div></div><div class="takeaway">Prototype measurements should test occupancy, calibration, noise tails and veto efficiency at the analysis thresholds.</div>

<div class="source">DarkSHINE calorimeter design/readout studies; positron-analysis response assumptions.</div>

<!--
The ECAL (Electromagnetic Calorimeter) high-gain model gives an equivalent electronic noise of about 2.7 keV per channel. That provides context for a 1 MeV cut, but it does not determine the full probability of a noise-induced veto across many channels. The HCAL (Hadronic Calorimeter) threshold is an assumed performance in this campaign, which does not include complete noise and pileup digitisation. We would test the thresholds with prototype data and propagate the measured response into signal efficiency and background rejection.
-->
