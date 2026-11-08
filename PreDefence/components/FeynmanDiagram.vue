<script setup>
import { computed, reactive, ref, onMounted, onBeforeUnmount, watch, useId } from 'vue'
import { animate } from 'animejs'
import { useSlideContext } from '@slidev/client'

const props = defineProps({ mode: String, charge: { type: String, default: '+' } })
const dashMaskId = useId()
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
    : [[30, 35, 115, 100, -1], [30, 170, 115, 100, 1], [210, 100, 290, 35, 1], [210, 100, 290, 170, -1]])
function arrow(line) {
  const [x, y, a, b, direction] = line
  return `translate(${(x + a) / 2},${(y + b) / 2}) rotate(${Math.atan2((b - y) * direction, (a - x) * direction) * 180 / Math.PI})`
}
const streams = computed(() => props.mode === 'brem'
  ? [
      { d: 'M30 45 L110 75 L185 65 L290 30', color: '#77c9ff' },
      { d: 'M30 167 L145 167 L290 167', color: '#77c9ff' },
      { d: wave([110,75],[145,167]), color: '#f0c36e' },
      { d: 'M185 65 L285 112', color: '#baa5ff', dashed: true },
    ]
  : props.mode === 'radiative'
    ? [
        { d: 'M30 35 L145 75 L145 125', color: '#77c9ff' },
        { d: 'M30 170 L145 125', color: '#77c9ff' },
        { d: wave([145,75],[285,35]), color: '#f0c36e' },
        { d: 'M145 125 L285 170', color: '#baa5ff', dashed: true },
      ]
    : [
        { d: 'M30 35 L115 100', color: '#77c9ff' },
        { d: 'M30 170 L115 100', color: '#77c9ff' },
        { d: 'M115 100 H210', color: '#baa5ff', dashed: true },
        { d: 'M210 100 L290 35', color: '#baa5ff' },
        { d: 'M210 100 L290 170', color: '#baa5ff' },
      ])
const dashedRoute = computed(() => streams.value.find(route => route.dashed))
const streamOffset = index => -100 * (phase.cycle + index * 0.17)
</script>
<template>
  <svg viewBox="0 0 330 205" class="feynman">
    <defs><mask :id="dashMaskId" maskUnits="userSpaceOnUse" x="0" y="0" width="330" height="205"><path :d="dashedRoute.d" fill="none" stroke="white" stroke-width="2.8" stroke-dasharray="6 4" /></mask></defs>
    <g v-for="(line, index) in lines" :key="index">
      <path :d="`M${line[0]} ${line[1]} L${line[2]} ${line[3]}`" fill="none" :stroke="mode === 'resonant' && index >= 2 ? '#baa5ff' : '#77c9ff'" stroke-width="1.5" />

      <path d="M-5 -3.5 L5 0 L-5 3.5Z" :transform="arrow(line)" :fill="mode === 'resonant' && index >= 2 ? '#baa5ff' : '#77c9ff'" />
    </g>
    <template v-if="mode === 'brem'">
      <path :d="wave([110,75],[145,167])" stroke="#f0c36e" fill="none" stroke-width="1.4" />

      <path d="M185 65 L285 112" stroke="#baa5ff" stroke-dasharray="6 4" stroke-width="1.5" />

      <text x="19" y="30">{{charge === '-' ? 'e⁻' : 'e⁺'}}</text><text x="290" y="21">{{charge === '-' ? 'e⁻' : 'e⁺'}}</text><text x="289" y="119">A′</text><text x="15" y="190">N</text><text x="289" y="190">N</text>
    </template>
    <template v-else>
      <text x="15" y="24">e⁺</text><text x="15" y="190">e⁻</text>
      <template v-if="mode === 'radiative'">
        <path :d="wave([145,75],[285,35])" stroke="#f0c36e" fill="none" stroke-width="1.5" />

        <path d="M145 125 L285 170" stroke="#baa5ff" stroke-width="1.5" stroke-dasharray="6 4" />

        <text x="292" y="39">γ</text><text x="290" y="178">A′</text>
      </template>
      <template v-else>
        <path d="M115 100 H210" stroke="#baa5ff" stroke-width="1.5" stroke-dasharray="6 4" />

        <text x="152" y="87">A′</text>
        <text x="294" y="36">χ</text><text x="294" y="183">χ̄</text>
      </template>
    </template>
    <path v-for="(route, index) in streams" :key="index" class="stream" :d="route.d" :stroke="route.color" :mask="route.dashed ? `url(#${dashMaskId})` : undefined" pathLength="100" fill="none" stroke-width="2.8" stroke-dasharray="6 94" :stroke-dashoffset="streamOffset(index)" />
  </svg>
</template>
<style scoped>
.feynman { width: 100%; height: 185px; overflow: visible }
.feynman text { font: 19px Georgia, serif; fill: #dae3ef }
.stream { pointer-events: none }
</style>
