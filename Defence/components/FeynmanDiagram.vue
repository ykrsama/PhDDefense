<script setup>
import { computed, reactive, ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { animate } from 'animejs'
import { useSlideContext } from '@slidev/client'

const props = defineProps({ mode: String, charge: { type: String, default: '+' } })
const { $nav, $page, $renderContext } = useSlideContext()
const phase = reactive({ cycle: 0 })
const reduced = ref(false)
const hidden = ref(false)
const running = computed(() => $nav.value.currentPage === $page.value && $renderContext.value === 'slide' && !reduced.value && !hidden.value)
let loop, media
function syncLoop() {
  loop?.cancel()
  if (running.value) loop = animate(phase, { cycle: { from: 0, to: 1 }, duration: 2400, ease: 'linear', loop: true })
}
function visibility() { hidden.value = document.hidden }
function preference() { reduced.value = media.matches || location.search.includes('static') || location.search.includes('print') }
onMounted(() => {
  media = matchMedia('(prefers-reduced-motion: reduce)')
  media.addEventListener('change', preference)
  document.addEventListener('visibilitychange', visibility)
  preference()
  visibility()
  syncLoop()
})
watch(running, syncLoop)
onBeforeUnmount(() => {
  loop?.cancel()
  media?.removeEventListener('change', preference)
  document.removeEventListener('visibilitychange', visibility)
})

const wave = (a, b) => {
  const dx = b[0] - a[0], dy = b[1] - a[1], length = Math.hypot(dx, dy)
  return Array.from({ length: 81 }, (_, i) => {
    const t = i / 80, v = Math.sin(t * Math.PI * 14) * 3
    return `${i ? 'L' : 'M'}${a[0] + dx * t - dy / length * v},${a[1] + dy * t + dx / length * v}`
  }).join(' ')
}
const lines = computed(() => props.mode === 'brem'
  ? [[30, 45, 110, 75, props.charge === '-' ? 1 : -1], [110, 75, 185, 65, props.charge === '-' ? 1 : -1], [185, 65, 290, 30, props.charge === '-' ? 1 : -1], [30, 167, 145, 167, 1], [145, 167, 290, 167, 1]]
  : props.mode === 'radiative'
    ? [[30, 35, 145, 75, -1], [145, 75, 145, 125, -1], [30, 170, 145, 125, 1]]
    : [[30, 35, 150, 100, -1], [30, 170, 150, 100, 1]])
function arrow(line) {
  const [x, y, a, b, direction] = line
  return `translate(${(x + a) / 2},${(y + b) / 2}) rotate(${Math.atan2((b - y) * direction, (a - x) * direction) * 180 / Math.PI})`
}
const streamOffset = index => -100 * (phase.cycle + index * 0.17)
</script>
<template>
  <svg viewBox="0 0 330 205" class="feynman">
    <g v-for="(line, index) in lines" :key="index">
      <path :d="`M${line[0]} ${line[1]} L${line[2]} ${line[3]}`" fill="none" stroke="#77c9ff" stroke-width="1.5" />
      <path class="stream" :d="`M${line[0]} ${line[1]} L${line[2]} ${line[3]}`" pathLength="100" fill="none" stroke="#d8f2ff" stroke-width="2.5" stroke-dasharray="12 88" :stroke-dashoffset="streamOffset(index)" />
      <path d="M-5 -3.5 L5 0 L-5 3.5Z" :transform="arrow(line)" fill="#77c9ff" />
    </g>
    <template v-if="mode === 'brem'">
      <path :d="wave([110,75],[145,167])" stroke="#baa5ff" fill="none" stroke-width="1.4" />
      <path class="stream" :d="wave([110,75],[145,167])" pathLength="100" stroke="#eee3ff" fill="none" stroke-width="2.5" stroke-dasharray="12 88" :stroke-dashoffset="streamOffset(5)" />
      <path d="M185 65 L285 112" stroke="#f69cab" stroke-dasharray="6 4" stroke-width="1.5" />
      <path class="stream" d="M185 65 L285 112" pathLength="100" stroke="#ffd9e1" stroke-width="2.5" stroke-dasharray="12 88" :stroke-dashoffset="streamOffset(6)" />
      <text x="19" y="30">{{charge === '-' ? 'e⁻' : 'e⁺'}}</text><text x="290" y="21">{{charge === '-' ? 'e⁻' : 'e⁺'}}</text><text x="289" y="119">A′</text><text x="15" y="190">N</text><text x="289" y="190">N</text>
    </template>
    <template v-else>
      <text x="15" y="24">e⁺</text><text x="15" y="190">e⁻</text>
      <template v-if="mode === 'radiative'">
        <path :d="wave([145,75],[285,35])" stroke="#f0c36e" fill="none" stroke-width="1.5" />
        <path class="stream" :d="wave([145,75],[285,35])" pathLength="100" stroke="#fff0bf" fill="none" stroke-width="2.5" stroke-dasharray="12 88" :stroke-dashoffset="streamOffset(3)" />
        <path d="M145 125 L285 170" stroke="#f69cab" stroke-width="1.5" stroke-dasharray="6 4" />
        <path class="stream" d="M145 125 L285 170" pathLength="100" stroke="#ffd9e1" stroke-width="2.5" stroke-dasharray="12 88" :stroke-dashoffset="streamOffset(4)" />
        <text x="292" y="39">γ</text><text x="290" y="178">A′</text>
      </template>
      <template v-else>
        <path d="M150 100 H285" stroke="#f69cab" stroke-width="1.5" stroke-dasharray="6 4" />
        <path class="stream" d="M150 100 H285" pathLength="100" stroke="#ffd9e1" stroke-width="2.5" stroke-dasharray="12 88" :stroke-dashoffset="streamOffset(2)" />
        <text x="290" y="107">A′</text>
      </template>
    </template>
  </svg>
</template>
<style scoped>
.feynman { width: 100%; height: 185px; overflow: visible }
.feynman text { font: 19px Georgia, serif; fill: #dae3ef }
.stream { filter: drop-shadow(0 0 3px currentColor); pointer-events: none }
</style>
