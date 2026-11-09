<script setup>
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()
const stages = ['', 'tracking', 'ecal', 'hcal']
const focus = computed(() => stages[Math.min($clicks.value, 3)] || '')
</script>
<template>
  <div class="detector-tour" :class="{ 'has-focus': focus }">
    <div class="detector-tour-visual"><PhysicsScene compact labels original :focus="focus" /></div>
    <div class="detector-tour-cards">
      <div class="detector-tour-card" :class="{ active: focus === 'tracking' }"><h2 class="blue">Tracking</h2><p class="small">Tag the incoming particle.<br/>Measure recoil momentum and multiplicity.</p></div>
      <div class="detector-tour-card" :class="{ active: focus === 'ecal' }"><h2 class="mint">ECAL</h2><p class="small">Measure electromagnetic energy.<br/>Resolve localized deposits.</p></div>
      <div class="detector-tour-card" :class="{ active: focus === 'hcal' }"><h2 class="violet">HCAL</h2><p class="small">Veto neutral hadrons and penetrating muons.</p></div>
    </div>
  </div>
</template>
<style scoped>
.detector-tour-visual { height:280px; margin-top:-12px; overflow:hidden }
.detector-tour-cards { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:28px; margin-top:-10px }
.detector-tour-card { border-top:2px solid transparent; padding:9px 0 0; transition:transform 850ms cubic-bezier(.45,0,.2,1), opacity 650ms ease, border-color 650ms ease }
.detector-tour-card h2 { margin-bottom:9px }
.detector-tour-card p { margin:0 }
.has-focus .detector-tour-card { opacity:.38; transform:translateY(0) }
.has-focus .detector-tour-card.active { opacity:1; transform:translateY(-20px); border-color:currentColor }
.has-focus .detector-tour-card.active:nth-child(1) { color:#77c9ff }
.has-focus .detector-tour-card.active:nth-child(2) { color:#70dcb2 }
.has-focus .detector-tour-card.active:nth-child(3) { color:#baa5ff }
@media (prefers-reduced-motion: reduce) { .detector-tour-card { transition:none } }
</style>
