---
layout: default
class: backup-slide qa-slide
transition: fade
clicks: 0
title: "Which events enter the biasing normalisation?"
---

<div class="eyebrow">Questions / supporting evidence</div>

# Which events enter the biasing normalisation?

<div class="qa-stages"><div class="qa-card"><h2 class="blue">Total</h2><p>All incident beam events</p></div><div class="qa-card"><h2 class="blue">Pool</h2><p>An eligible particle passes BiasEmin</p></div><div class="qa-card"><h2 class="blue">Rare</h2><p>The chosen interaction occurs</p></div><div class="qa-card"><h2 class="blue">Stored</h2><p>The event passes the output filters</p></div></div><div class="formula-band"><LaTeX formula="P(b)=N_{\rm rare}/N_{\rm pool},\qquad R(b)=(N_{\rm pool}/N_{\rm total})P(b)" /></div><div class="qa-columns"><p>The study records pool, rare and filter counters in truth_cutflow, including merged jobs.</p><p>The study limits each event to at most 1 biased interaction. Final-state cuts are accounted for separately.</p></div><div class="takeaway">The counters have different denominators. Stored events alone do not determine the incident beam count.</div>

<div class="source">Biasing study, pp. 4–5, 11, 15. Historical study counters.</div>

<!--
We count incident events, eligible events and rare interactions separately. Only some rare events pass the output filters. In this study, we allow at most 1 biased interaction per event and record the counters in truth_cutflow. We fit the rare-to-pool ratio before interpreting the final-state acceptance. A fit made after a truth trigger describes a conditional selected sample, so it cannot simply be read as the unfiltered process rate.
-->
