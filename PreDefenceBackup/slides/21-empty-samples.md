---
layout: default
class: backup-slide qa-slide
transition: fade
clicks: 0
title: "Does zero survival prove a background-free search?"
---

<div class="eyebrow">Questions / supporting evidence</div>

# Does zero survival prove a background-free search?

<div class="qa-columns"><div class="qa-card"><h2 class="blue">A counting check</h2><div class="formula-band"><LaTeX formula="P(0\mid\lambda)=e^{-\lambda},\quad\lambda_{90}=-\ln0.1=2.30" /></div><p>For an ideal unweighted Poisson count with known equivalent POT. This is an illustration, not the analysis likelihood.</p></div><div class="qa-card"><h2 class="gold">POT scaling</h2><p>For the 2.5 × 10⁹ inclusive sample:</p><div class="formula-band"><LaTeX formula="2.30\frac{3\times10^{14}}{2.5\times10^9}\simeq2.76\times10^5" /></div><p>Zero observed events alone gives a weak bound when extrapolated to the benchmark.</p></div></div><div class="takeaway">The nominal residual backgrounds come from sideband fits, with assumptions about the unobserved tails.</div>

<div class="source">Campaign POT: arXiv:2609.05900. Poisson illustration calculated here.</div>

<!--
No surviving simulated event is not enough to claim a background-free search. As a simple counting illustration, 0 observed events corresponds to an upper Poisson mean of about 2.3 at 90% confidence. Scaling from 2.5 × 10⁹ to 3 × 10¹⁴ POT gives a very weak bound of roughly three hundred thousand events. This calculation assumes an ideal unweighted Poisson sample with known equivalent POT. It is not a substitute for the profile-likelihood construction or a bound to apply blindly to weighted samples. It explains why the study uses sideband extrapolation for its nominal prediction.
-->
