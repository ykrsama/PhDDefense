---
layout: default
class: backup-slide qa-slide
transition: fade
clicks: 0
title: "How does the signal enter detector transport?"
---

<div class="eyebrow">Questions / configuration evidence</div>

# How does the signal enter detector transport?

<div class="qa-columns"><div class="qa-card"><h2 class="blue">8 GeV production configuration</h2><p>Baseline 1 directory, resonant channel, job j14:</p><table class="compact-table"><tbody><tr><td>Beam</td><td>e⁺, 8 GeV</td></tr><tr><td>Mass</td><td>60 MeV</td></tr><tr><td>signal_PESch</td><td>true</td></tr><tr><td>signal_use_LUT</td><td>false</td></tr><tr><td>visible_decay</td><td>false</td></tr></tbody></table><p>Bremsstrahlung and radiative-annihilation templates reference their own 8 GeV lookup tables.</p></div><div class="qa-card"><h2 class="rose">Resonant transport</h2><p>PositronSchProcess creates 1 A′ along the incident direction and terminates the incoming positron.</p><p>The visible decay is not simulated. This represents the invisible final state for detector-response studies.</p><p>The code defines a LUT reader, but PostStepDoIt does not call it.</p></div></div>

<div class="takeaway">Resonant events use invisible A′ transport. Bremsstrahlung and radiative annihilation use their own kinematic lookup tables.</div>
<div class="source">bl0: condor-script/run/…/sch/j14/default.yaml; darkshine-simulation/…/PositronSchProcess.cc.</div>

<!--
I can show an independent 8 GeV job configuration for the resonant channel at 60 MeV. It enables the resonant process, disables the LUT (Lookup Table), and disables visible decay. In the available transport implementation, we create an invisible dark photon along the incoming direction and terminate the positron. Although the class contains a lookup-table reader, the final-state function does not call it. The bremsstrahlung and radiative-annihilation templates use separate 8 GeV tables. The production configurations are stored in condor-script. The CalcHEP rate-test batches and the detector transport have different roles.
-->
