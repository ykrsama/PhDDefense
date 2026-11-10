---
layout: default
class: content-slide slide-likelihood
transition: fade
clicks: 1
title: "Combined statistical interpretation"
---

<div class="eyebrow">Positron-beam-mode analysis</div>

# Combined statistical interpretation

<div class="panel-kicker" style="margin-bottom:8px;color:#bdbedd"><span class="ordinal">01</span>Build the signal prediction</div><div class="formula-band" style="font-size:27px"><LaTeX formula="s_i=\sum_cN_{\mathrm{prod},c}\eta_{ic},\qquad\mu\simeq\frac{\epsilon^2}{\epsilon_{\mathrm{ref}}^2}" /></div><div class="columns "><div class="method-panel tone-blue"><div class="panel-kicker"><span class="ordinal">02</span>Fit exclusive regions</div><h2 class="blue">Joint region model</h2><ul><li>Three mutually exclusive signal regions</li><li>One signal strength for all mechanisms</li><li>Include all channel-to-region migrations</li><li>Profile nuisance parameters in the fit</li></ul></div><div class="method-panel tone-gold" v-click="1"><div class="panel-kicker"><span class="ordinal">03</span>Expected limit</div><h2 class="gold">Expected 90% CL limits</h2><p class="small">Background-only expectation using <LaTeX formula="\mathrm{CL}_s" /> and asymptotic profile likelihood.</p><div class="formula-band" style="font-size:22px"><LaTeX formula="\lambda(\mu)=\frac{\mathcal L(\mu,\hat{\hat{\theta}}_\mu)}{\mathcal L(\hat\mu,\hat\theta)}" /></div><p class="small muted">Background-shape uncertainties are uncorrelated between bins in the reported construction.</p></div></div>
<div class="source">arXiv:2609.05900</div>

<!--
At each mass, we sum all three production mechanisms in every signal region, including migration. A common signal-strength parameter scales their rates through the kinetic mixing. We combine the three exclusive regions in a binned profile likelihood and profile the nuisance parameters. The expected 90 percent confidence-level limit uses CLs and the asymptotic profile likelihood under the background-only hypothesis. Background-shape uncertainties are uncorrelated between bins.
-->
