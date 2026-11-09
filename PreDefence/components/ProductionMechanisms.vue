<script setup>
// Two-state grouping follows the fixed-card/revealed-results pattern in
// CCNU_Seminar/pretrain.md and downstream-overview.md.
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()
const expanded = computed(() => $clicks.value >= 1)
</script>
<template>
  <section class="production-story" :class="{ expanded }" :data-stage="expanded ? 1 : 0">
    <article class="brem-card method-panel tone-blue">
      <div class="panel-kicker"><span class="ordinal">01</span>Retained from electron running</div>
      <h2>Dark bremsstrahlung</h2>
      <div class="mechanism-badge">Nuclear scattering</div>
      <FeynmanDiagram mode="brem" />
      <div class="mechanism-reaction"><LaTeX formula="e^+N\to e^+NA^{\prime}" /></div>
      <div class="mechanism-outcome"><span>Visible remnant</span><p>A recoil positron remains.</p></div>
    </article>
    <div class="annihilation-group method-panel tone-gold" :aria-hidden="!expanded" :inert="!expanded">
      <div class="panel-kicker"><span class="ordinal">02</span>Added with a positron beam</div>
      <div class="annihilation-cards">
        <article class="annihilation-card tone-gold">
          <h2>Non-resonant<br/>annihilation</h2><div class="mechanism-badge">Radiative production</div>
          <FeynmanDiagram mode="radiative"/>
          <div class="mechanism-reaction"><LaTeX formula="e^+e^-\to\gamma A^{\prime}" /></div>
          <div class="mechanism-outcome"><span>Visible remnant</span><p>A photon accompanies the invisible state.</p></div>
        </article>
        <article class="annihilation-card tone-rose">
          <h2>Resonant<br/>annihilation</h2><div class="mechanism-badge">Invisible decay</div>
          <FeynmanDiagram mode="resonant"/>
          <div class="mechanism-reaction"><LaTeX formula="e^+e^-\to A^{\prime}\to\chi\bar\chi" /></div>
          <div class="mechanism-outcome"><span>Visible remnant</span><p>Very little visible downstream activity.</p></div>
        </article>
      </div>
    </div>
  </section>
</template>
<style scoped>
.production-story{position:relative;height:337px;margin-top:5px}
.brem-card{display:grid;grid-template-rows:18px 38px 20px 124px 28px minmax(0,1fr);gap:6px;position:absolute;left:225px;top:0;width:430px;height:337px;transition:left 700ms cubic-bezier(.4,0,.2,1),width 700ms cubic-bezier(.4,0,.2,1)}
.brem-card h2{color:#eef4fc;font-size:19px!important;line-height:1.2!important;padding:6px 10px;box-sizing:border-box;margin:0!important;white-space:nowrap}
.brem-card .panel-kicker,.annihilation-group>.panel-kicker{margin:0}
.brem-card :deep(.feynman){height:124px;margin:0}
.mechanism-badge{display:inline-flex;align-items:center;align-self:start;justify-self:start;box-sizing:border-box;border:1px solid rgba(var(--panel-rgb),.26);border-radius:5px;background:rgba(var(--panel-rgb),.08);color:var(--panel-accent);font-size:9px;font-weight:550;line-height:1.3;padding:3px 7px}
.mechanism-reaction{text-align:center;color:var(--panel-accent);font-size:17px;line-height:21px;border-bottom:1px solid #ffffff16;padding:0 0 6px;margin:0}
.mechanism-reaction :deep(.katex){font-size:1em}
.mechanism-outcome>span{display:block;color:var(--panel-accent);font-size:9px;line-height:12px;letter-spacing:.035em}
.mechanism-outcome>p{font-size:13px!important;line-height:1.3!important;margin:4px 0 0!important;color:#dce4ed!important}
.annihilation-group{display:grid;grid-template-rows:18px minmax(0,1fr);gap:12px;position:absolute;left:297px;top:0;width:585px;height:337px;opacity:0;visibility:hidden;transform:translateX(16px);transition:opacity 500ms ease 220ms,transform 700ms cubic-bezier(.4,0,.2,1),visibility 0ms linear 700ms}
.annihilation-cards{display:grid;grid-template-columns:1fr 1fr;gap:17px}
.annihilation-card{min-width:0;display:grid;grid-template-rows:44px 20px 106px 28px minmax(0,1fr);gap:6px}
.annihilation-card+article{border-left:1px solid #ffffff16;padding-left:17px}
.annihilation-card h2{font-size:19px!important;color:#eef3fa!important;line-height:1.15!important;margin:0!important}
.annihilation-card :deep(.feynman){height:106px;margin:0}
.annihilation-card .mechanism-reaction{font-size:15px}
.expanded .brem-card{left:0;width:279px}
.expanded .brem-card h2{white-space:normal}
.expanded .annihilation-group{opacity:1;visibility:visible;transform:none;transition-delay:200ms,0ms,0ms}
@media(prefers-reduced-motion:reduce){.brem-card,.annihilation-group{transition:none}}
</style>
