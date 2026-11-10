---
layout: default
class: content-slide slide-filter-performance
transition: fade
clicks: 0
title: "Generator-level filter performance"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Generator-level filter performance

<div class="filter-efficiency-line"><span>8 GeV electron sample</span><LaTeX formula="\epsilon_{\rm filter}=\frac{N_{\rm stored}}{N_{\rm EOT}}=\frac{270310}{2\times10^{10}}\simeq \textcolor{#ceab6e}{0.0014\%}"/></div>
<div class="filter-checks"><section class="tone-gold"><div class="panel-kicker">ECAL-energy selection</div><div class="filter-check-plot"><Plot src="physics-output/generator-filter-ecal-cut.png"/></div><div class="filter-check-reading"><b>0.11%</b><p>Pass <LaTeX formula="E_{\rm ECAL} &lt; 4~\mathrm{GeV}"/> in the prefiltered sample with a reconstructed recoil track.</p></div></section><section class="tone-blue"><div class="panel-kicker">Missing-momentum threshold migration</div><div class="filter-check-plot"><Plot src="physics-output/generator-filter-tracker-missing-p-cut.png"/></div><div class="filter-check-reading"><b>6 / <LaTeX formula="2\times10^7"/> EOT</b><p>Cross the 4 GeV threshold after reconstruction and also pass the truth ECAL-energy cut.</p></div></section></div>
<div class="takeaway">About five orders of magnitude fewer stored event records at the same simulated EOT.</div>

<!--
In the inclusive production test, we saved roughly a quarter of a million events from twenty billion incident electrons. That is about one saved event per seventy thousand beam electrons, or roughly five orders of magnitude fewer stored records.

On the left, only about a tenth of a percent of the prefiltered sample with a reconstructed recoil track has ECAL energy below 4 GeV. On the right, the blue histogram selects one reconstructed recoil track and reconstructed missing momentum above 4 GeV. The horizontal axis is truth missing momentum. Adding truth ECAL energy below 4 GeV leaves six threshold-migration events in twenty million incident electrons.
-->
