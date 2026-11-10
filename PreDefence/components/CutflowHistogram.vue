<script setup>
import { ref } from 'vue'

const focus = ref(-1)
const hover = ref(null)
const colors = ['#8bafe0', '#ceab6e', '#e58b91']
const labels = ['Tag = 1', 'Recoil tracks', 'Momentum / ECAL', 'HCAL total', 'HCAL max cell', 'ECAL final cuts']
const cuts = [
  ['1 tagging track', '1 recoil track', 'Δp > 4 GeV', 'Total energy < 100 MeV', 'Maximum-cell energy < 1 MeV', 'Total energy < 2.5 GeV'],
  ['1 tagging track', '0 recoil tracks', 'ECAL maximum-cell energy ≥ 1 MeV', 'Total energy < 100 MeV', 'Maximum-cell energy < 1 MeV', 'Total energy < 2 GeV'],
  ['1 tagging track', '0 recoil tracks', 'ECAL total energy < 2 GeV', 'Total energy < 100 MeV', 'Maximum-cell energy < 1 MeV', 'Maximum-cell energy < 1 MeV'],
]
const details = {
  1: ['SR1: 1 track', 'SR2: 0 tracks', 'SR3: 0 tracks'],
  2: ['SR1: Δp > 4 GeV', 'SR2: Emax ≥ 1 MeV', 'SR3: ΣE < 2 GeV'],
  5: ['SR1: ΣE < 2.5 GeV', 'SR2: ΣE < 2 GeV', 'SR3: Emax < 1 MeV'],
}
const data = [
  [5794358, 4641895, 3114535, 272207, 88871, 0],
  [5794358, 138513, 138513, 8051, 2552, 0],
  [5794358, 138513, 120147, 3922, 1096, 0],
]
const y = n => n ? 275 - Math.log10(n) * 34 : 275
const describe = (r, c) => `SR${r + 1} | ${cuts[r][c]}: ${data[r][c].toLocaleString()} events`
</script>

<template>
  <div class="controls">
    <button @click="focus = -1">All regions</button>
    <button v-for="i in 3" :key="i" @click="focus = i - 1" :style="{ color: colors[i - 1] }">SR{{ i }}</button>
    <span>{{ hover || 'Cumulative counts | logarithmic scale' }}</span>
  </div>
  <svg viewBox="-34 0 914 386" class="hist">
    <text transform="translate(-16 158) rotate(-90)" text-anchor="middle">Simulated events (unweighted)</text>
    <g v-for="i in 7" :key="i">
      <line x1="58" x2="870" :y1="275 - i * 34" :y2="275 - i * 34" stroke="#ffffff14" />
      <text x="12" :y="280 - i * 34">{{ ['', '10¹', '10²', '10³', '10⁴', '10⁵', '10⁶', '10⁷'][i] }}</text>
    </g>
    <g v-for="(stage, c) in labels" :key="stage">
      <g v-for="(row, r) in data" :key="r" :style="{ opacity: focus === -1 || focus === r ? 1 : .13 }">
        <rect v-if="row[c]" :x="88 + c * 129 + r * 24" :y="y(row[c])" width="19" :height="275 - y(row[c])" :fill="colors[r]" rx="2" tabindex="0" @mouseenter="hover = describe(r, c)" @focus="hover = describe(r, c)" @mouseleave="hover = null" @blur="hover = null" />
        <text v-else :x="98 + c * 129 + r * 24" y="269" text-anchor="middle" :style="{ fill: colors[r] }">0</text>
      </g>
      <text :x="111 + c * 129" y="300" text-anchor="middle">{{ stage }}</text>
      <template v-if="details[c]">
        <text v-for="(detail, r) in details[c]" :key="r" class="cut-detail" :x="111 + c * 129" :y="320 + r * 17" text-anchor="middle" :style="{ opacity: focus === -1 || focus === r ? 1 : .18, fill: colors[r] }">{{ detail }}</text>
      </template>
      <text v-else-if="c === 3" :x="111 + c * 129" y="320" text-anchor="middle" class="cut-detail">ΣE &lt; 100 MeV</text>
      <text v-else-if="c === 4" :x="111 + c * 129" y="320" text-anchor="middle" class="cut-detail">Emax &lt; 1 MeV</text>
    </g>
    <text x="870" y="379" text-anchor="end" class="cut-key">ΣE: total energy | Emax: maximum-cell energy</text>
  </svg>
</template>

<style scoped>
.hist { width: 100%; height: 305px }
.hist text { fill: #bdc7d5; font: 13px 'DM Sans' }
.hist .cut-detail { font-size: 12px }
.hist .cut-key { font-size: 11px }
.hist rect { transition: opacity .3s; cursor: pointer }
.controls { display: flex; gap: 10px; margin-top: 12px; font-size: 13px }
.controls button { border: 1px solid #ffffff25; padding: 5px 12px; border-radius: 4px }
.controls span { margin-left: auto; color: #bbc4d0 }
</style>
