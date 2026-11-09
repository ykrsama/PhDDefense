---
layout: default
class: content-slide slide-filter-performance
transition: fade
clicks: 0
title: "Generator-level filter performance"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Generator-level filter performance

<div class="filter-efficiency-line"><span>8 GeV electron sample</span><LaTeX formula="\epsilon_{\rm filter}=\frac{N_{\rm stored}}{N_{\rm EOT}}=\frac{270310}{2\times10^{10}}\simeq \textcolor{#f0c36e}{0.0014\%}"/></div>
<div class="filter-checks"><section class="tone-gold"><div class="panel-kicker">ECAL-energy selection</div><div class="filter-check-plot"><Plot src="physics-output/generator-filter-ecal-cut.png"/></div><div class="filter-check-reading"><b>0.11%</b><p>Pass <LaTeX formula="E_{\rm ECAL} &lt; 4~\mathrm{GeV}"/> in the prefiltered sample with a reconstructed recoil track.</p></div></section><section class="tone-blue"><div class="panel-kicker">Missing-momentum threshold migration</div><div class="filter-check-plot"><Plot src="physics-output/generator-filter-tracker-missing-p-cut.png"/></div><div class="filter-check-reading"><b>6 / <LaTeX formula="2\times10^7"/> EOT</b><p>Cross the 4 GeV threshold after reconstruction and also pass the truth ECAL-energy cut.</p></div></section></div>
<div class="takeaway">About five orders of magnitude fewer stored event records at the same simulated EOT.</div>

<!--
The main gain from this filter is at the storage stage. In the inclusive production test, we saved 270,310 events from twenty billion incident electrons. The filter efficiency, defined here as the fraction of beam events saved, is 0.0014 percent. We therefore write about 74,000 times fewer event records at the same simulated EOT: a storage-efficiency improvement of roughly five orders of magnitude. This makes background production at high EOT practical to store and analyse. The two plots show the physics behind the selection. On the left, only 0.11 percent of the prefiltered sample with a reconstructed recoil track has ECAL energy below 4 GeV. On the right, the blue histogram contains events with one reconstructed recoil track and reconstructed missing momentum above 4 GeV, plotted against truth missing momentum. Adding truth ECAL energy below 4 GeV leaves only six threshold-migration events in twenty million incident electrons. These distributions guide the production cuts. Next, rare-process biasing provides the statistics needed for specific background final states.
-->
