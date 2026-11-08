---
layout: default
class: content-slide slide-biasing
transition: slide-left
clicks: 0
title: "Rare-process biasing and physical normalisation"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Rare-process biasing and physical normalisation

<div class="columns "><div><h2 class="gold">Sample the rare interaction</h2><ul><li>Select the process and detector region</li><li>Enhance its interaction probability</li><li>Retain the relevant secondary ancestry</li><li>Apply production filters within a defined domain</li></ul></div><div><h2 class="blue">Recover the physical prediction</h2><div class="formula-band"><LaTeX formula="\widehat N=\sum_{j\in\mathrm{sel}}w_j" /></div><div class="formula-band"><LaTeX formula="N_{\mathrm{eff}}=\frac{(\sum_jw_j)^2}{\sum_jw_j^2}" /></div><p class="small">The positron campaign uses dedicated process-rate normalisations, rather than the stored transport-weight field.</p></div></div><div class="takeaway">Biasing increases sampling frequency. Filtering defines which phase space is retained.</div>

<!--
Time: 65 seconds.

Biasing increases the frequency of a selected rare interaction in a specified region. This is an importance-sampling operation, so the physical rate must be recovered with the normalisation appropriate to the sample. In generic weighted counting, the sum of weights gives the yield and the sum of squared weights gives its Monte Carlo variance. The effective event count can be substantially smaller than the number of stored events. The positron campaign uses dedicated biasing studies and process cross sections for normalisation rather than the stored transport-weight field. A filter has a different role: it removes phase space. No weight can restore events outside the generated support, so production cuts must remain compatible with the analysis.

Source context: Event simulation and reconstruction, supplied dissertation sources.
-->
