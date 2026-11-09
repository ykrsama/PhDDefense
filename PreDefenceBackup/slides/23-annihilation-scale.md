---
layout: default
class: backup-slide qa-slide
transition: fade
clicks: 0
title: "Why is the gain concentrated near 90 MeV?"
---

<div class="eyebrow">Questions / supporting evidence</div>

# Why is the gain concentrated near 90 MeV?

<div class="qa-columns"><div><div class="qa-plot"><Plot src="figures/xsections.svg" caption="Production cross sections at 8 GeV"/></div></div><div class="qa-card"><h2 class="rose">Fixed-target kinematics</h2><div class="formula-band"><LaTeX formula="s=2m_e(E_{e^+}+m_e),\quad\sqrt{s}\simeq90.4\,\mathrm{MeV}" /></div><p>The stationary-electron endpoint is a reference scale. Bound-electron motion broadens this picture.</p><div class="formula-band"><LaTeX formula="E_\gamma^*=\frac{s-m_{A^\prime}^2}{2\sqrt{s}}" /></div><p>Near the endpoint, the associated photon becomes soft. Selection efficiency matters alongside the production rate.</p></div></div>

<div class="source">X. Zhu et al., arXiv:2609.05900; 2-body kinematics.</div>

<!--
For an 8 GeV positron and an electron at rest, the centre-of-mass energy is about 90.4 MeV. The photon energy in the centre-of-mass frame tends to 0 as the mediator mass approaches this value. This helps non-resonant annihilation pass a low-visible-energy selection. The detector-level efficiencies still determine the accepted yield. Bound-electron motion changes the ideal stationary-electron picture; the specific implementation should be checked against the production configuration rather than inferred from the illustration.
-->
