---
layout: default
class: content-slide slide-biasing
transition: fade
clicks: 0
title: "Rare-process biasing and physical normalisation"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Rare-process biasing and physical normalisation

<div class="columns "><div><h2 class="gold">Sample the rare interaction</h2><ul><li>Select the process and detector region</li><li>Enhance its interaction probability</li><li>Retain the relevant secondary ancestry</li><li>Apply production filters within a defined domain</li></ul></div><div><h2 class="blue">Recover the physical prediction</h2><div class="formula-band"><LaTeX formula="\widehat N=\sum_{j\in\mathrm{sel}}w_j" /></div><div class="formula-band"><LaTeX formula="N_{\mathrm{eff}}=\frac{(\sum_jw_j)^2}{\sum_jw_j^2}" /></div><p class="small">The positron campaign uses dedicated process-rate normalisations, rather than the stored transport-weight field.</p></div></div><div class="takeaway">Biasing increases sampling frequency. Filtering defines which phase space is retained.</div>

<!--
Biasing makes a chosen rare interaction happen more often in a specified region. We then correct the normalisation to recover the physical rate. For weighted event counting, the sum of weights gives the yield, and the sum of squared weights gives the Monte Carlo variance. A sample with many stored events can still have a much smaller effective event count. In the positron production, we use dedicated biasing studies and process cross sections for normalisation; we do not use the stored transport-weight field. Filtering also removes part of phase space. No weight can recover events we never generated, so the production cuts need to cover the phase space used in the analysis.
-->
