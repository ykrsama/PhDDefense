---
layout: default
class: backup-slide qa-slide
transition: fade
clicks: 0
title: "How is a biased sample scaled to the exposure?"
---

<div class="eyebrow">Questions / supporting evidence</div>

# How is a biased sample scaled to the exposure?

<div class="formula-band"><LaTeX formula="N_{\rm POT}^{\rm eff}=\frac{N_{\rm attempt}\epsilon_{\rm gen}}{\mathcal B}" /></div><div class="qa-columns"><div class="qa-card"><h2 class="blue">PN ECAL example</h2><p><LaTeX formula="\frac{10^8\times0.2738}{1.85\times10^{-4}}=1.48\times10^{11}" /></p><p>Use generator acceptance as a fraction, not as a percentage.</p></div><div class="qa-card"><h2 class="gold">Scale the selected yield</h2><p><LaTeX formula="w_{\rm exposure}=\frac{3\times10^{14}}{1.48\times10^{11}}\simeq2.03\times10^3" /></p><p>This scales counts for this sample. It is not the microscopic bias factor. Other samples have different exposures.</p></div></div><div class="takeaway">Production bookkeeping, physical process probability and analysis acceptance enter at different steps.</div>

<div class="source">X. Zhu et al., arXiv:2609.05900; campaign normalisation table.</div>

<!--
For PN (photonuclear) production in the ECAL (Electromagnetic Calorimeter), the campaign convention gives 1.48 × 10¹¹ effective POT (Positrons On Target). We obtain it from 10⁸ generation attempts, an acceptance of 0.2738 and a process branching ratio of 1.85 × 10⁻⁴. The benchmark exposure is about 2,030 times larger. That exposure factor scales the selected prediction. It does not recover a tail from a sample with no surviving events, and it is not the cross-section bias factor. The full process table is on backup 3.
-->
