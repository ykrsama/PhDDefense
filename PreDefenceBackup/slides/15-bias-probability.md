---
layout: default
class: backup-slide qa-slide
transition: fade
clicks: 0
title: "Why is the bias factor not an event weight?"
---

<div class="eyebrow">Questions / supporting evidence</div>

# Why is the bias factor not an event weight?

<div class="formula-band"><LaTeX formula="P(b)=\frac{bk}{1+bk}\left[1-e^{-p(1+bk)}\right]" /></div><div class="qa-columns"><div class="qa-card"><h2 class="blue">Competing interactions</h2><p><LaTeX formula="k=\sigma_{\rm rare}/\sigma_{\rm other},\quad p=n\sigma_{\rm other}D" /></p><p>The rare interaction competes with other processes and with escape from a finite region.</p></div><div class="qa-card"><h2 class="gold">Recover the physical rate</h2><p><LaTeX formula="R_{\rm rare}=\frac{N_{\rm pool}}{N_{\rm total}}P(1)" /></p><p>Fit the conditional probability across bias factors. Evaluate it at the physical cross section.</p></div></div><div class="takeaway">At large bias, the probability saturates. Dividing the biased event count by b is not generally valid.</div>

<div class="source">X. Zhu, Y. Zhang, Biasing study, 25 Jun. 2024, pp. 3–5, 14.</div>

<!--
We scale the rare-process cross section by a bias factor b. The probability of that process happening also depends on competing interactions and the distance available in the material. This 1-dimensional model assumes constant effective cross sections along that distance. We fit the scan and evaluate the probability at b = 1. The pool is the set of eligible particles above the bias-energy cut. The pool fraction then converts the conditional probability into a rate per incident particle. This rate-calibration method is separate from Geant4 track-weight bookkeeping.
-->
