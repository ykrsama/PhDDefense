---
layout: default
class: content-slide slide-background-validation
transition: fade
clicks: 0
title: "Normalisation checked in populated sidebands"
---

<div class="eyebrow">Positron-beam-mode analysis</div>

# Normalisation checked in populated sidebands

<div class="columns wide"><div class="chart-stage tone-blue"><div class="plot-large"><Plot src="figures/validation.svg" caption="Dedicated rare-process sum compared with inclusive production." /></div></div><div class="method-panel tone-blue"><div class="panel-kicker">Rate validation</div><h2 class="blue">Independent comparison</h2><p class="small">Dedicated samples are normalised using process rates and filter acceptance.</p><p class="small">The inclusive sample tests the populated survival trend.</p><div class="formula-band" style="font-size:19px"><LaTeX formula="N_{\mathrm{POT}}^{\mathrm{eff}}=\frac{N_{\mathrm{attempt}}\epsilon_{\mathrm{gen}}}{\mathcal B}" /></div></div></div><div class="takeaway">Sideband agreement supports the production model where simulated events remain.</div>


<!--
We normalise each dedicated sample to its equivalent unbiased exposure using the number of generation attempts, generator acceptance and physical branching ratio. The number of attempts differs from the number of stored events, so we keep track of both. We then compare the sum of the dedicated samples, including target annihilation, with the independent inclusive sample where enough events are available. This checks the rates and shapes in that region. It does not test the much smaller tails at the final cuts. We use the inclusive sample for this cross-check only, since adding it to the dedicated samples would count the same background twice.
-->
