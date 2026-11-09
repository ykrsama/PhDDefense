---
layout: default
class: backup-slide qa-slide
transition: fade
clicks: 0
title: "Can the production filters remove useful events?"
---

<div class="eyebrow">Questions / supporting evidence</div>

# Can the production filters remove useful events?

<table><thead><tr><th>Quantity</th><th>Loose production filter</th><th>Final selection</th></tr></thead><tbody><tr><td>Momentum difference</td><td>&gt; 1 GeV</td><td>&gt; 4 GeV in SR1</td></tr><tr><td>Total ECAL energy</td><td>&lt; 7 GeV</td><td>&lt; 2.5 GeV in SR1; &lt; 2 GeV in SR2/3</td></tr><tr><td>Recoil multiplicity</td><td>Record the production definition</td><td>1 in SR1; 0 in SR2/3</td></tr></tbody></table><div class="qa-columns"><div class="qa-card"><h2 class="blue">What the thresholds show</h2><p>The production energy window is looser than the analysis energy window.</p></div><div class="qa-card"><h2 class="gold">What still needs checking</h2><p>Truth and reconstructed quantities are not interchangeable. Check boundary migration and the exact filter implementation.</p></div></div><div class="takeaway">A weight cannot restore phase space rejected during generation.</div>

<div class="source">Positron production filters and fixed region definitions, arXiv:2609.05900.</div>

<!--
The production energy and momentum cuts are looser than the final analysis cuts. That is useful, but it is not by itself a proof that the filters have no effect. A truth quantity can differ from its reconstructed counterpart, and the 0-track categories need their own bookkeeping. We check the actual production definitions and the response near the boundaries. We also keep the filter acceptance with the sample. Any excluded phase space is absent from the prediction and cannot be recovered by reweighting.
-->
