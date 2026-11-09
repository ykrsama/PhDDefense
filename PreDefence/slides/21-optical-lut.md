---
layout: default
class: content-slide slide-optical-lut
transition: fade
clicks: 0
title: "Optical response with a lookup table"
---

<div class="eyebrow">Event simulation and reconstruction</div>

# Optical response with a lookup table

<div class="optical-results"><section class="method-panel tone-mint"><div class="panel-kicker">Replace repeated photon propagation</div><h2>Predict detected light and arrival time</h2><p>Tabulate response versus emission position and direction.</p><div class="observable-tags"><span>Detection probability</span><span>Photon transit time</span></div><p>Sample this response for scintillation photons during shower simulation.</p><div class="result-strip"><b>~200 → ~4 s/event</b><span>Full optical tracking → LUT</span></div></section><div class="chart-stage tone-blue"><Plot src="physics-output/optical-efficiency.png" caption="Detection efficiency: (LUT − full) / full"/><p class="chart-reading">Collected light versus emission depth and angle.</p></div><div class="chart-stage tone-gold"><Plot src="physics-output/optical-timing.png" caption="Photon transit-time spectrum: LUT / full"/><p class="chart-reading">Arrival-time response of the detected photons.</p></div></div>
<div class="takeaway">Validate the light yield and time response; the tested detection efficiencies agree within 5%.</div>
<div class="source">Credit: Qibin Liu</div>

<!--
The LUT replaces repeated optical-photon propagation with a detector-response model. It is indexed by the photon emission position and direction. We need two outputs: the detection probability, which controls the collected light, and the transit-time distribution, which controls when it reaches the sensor. The middle plot compares the LUT detection efficiency with full transport over depth and angle; the difference stays within five percent in the tested configuration. The right plot compares the transit-time spectra. Most populated bins lie near one, while late photons have larger statistical uncertainty. In the complete-event benchmark, this reduces the time from about 200 seconds to four seconds. This optical-response work is Qibin Liu's collaboration contribution, integrated into the framework.
-->
