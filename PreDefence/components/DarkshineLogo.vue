<script setup>
import { ref, onMounted, onBeforeUnmount, watch, useId } from 'vue'
import { useNav } from '@slidev/client'
import logo from '../assets/darkshine-logo/logo.svg?raw'
import '../assets/darkshine-logo/motion.css'
const props = defineProps({ compact: { type: Boolean, default: false } })
const { currentPage } = useNav()
// Cached cover slides and the persistent header can coexist; keep their masks independent.
const instanceId = useId().replace(/[^a-zA-Z0-9_-]/g, '')
const logoMarkup = logo
  .replace(/id="(ds-[^"]+)"/g, (_, part) => `id="${instanceId}-${part}" class="${part}"`)
  .replace(/url\(#(ds-[^)]+)\)/g, (_, part) => `url(#${instanceId}-${part})`)
const root = ref()
const staticMode = () => new URLSearchParams(location.search).has('static') || matchMedia('(prefers-reduced-motion: reduce)').matches
function animations() { return root.value?.getAnimations({ subtree: true }) || [] }
function finish() {
  for (const a of animations()) {
    if (a.effect.getTiming().iterations === Infinity) { a.pause(); a.currentTime = 0; continue }
    a.finish()
  }
}
function replay() {
  if (staticMode()) { finish(); return }
  for (const a of animations()) { a.currentTime = 0; a.play() }
}
let stop, motionPreference, onMotionChange
onMounted(() => {
  motionPreference = matchMedia('(prefers-reduced-motion: reduce)')
  onMotionChange = () => {
    if (motionPreference.matches) animations().forEach(a => a.cancel())
    else replay()
  }
  motionPreference.addEventListener('change', onMotionChange)
  if (props.compact || currentPage.value === 1) replay(); else finish()
  stop = watch(currentPage, page => { if (props.compact) return; if (page === 1) replay(); else finish() })
})
onBeforeUnmount(() => { stop?.(); motionPreference?.removeEventListener('change', onMotionChange) })
defineExpose({ replay, finish })
</script>
<template><button ref="root" type="button" class="darkshine-logo" :class="{'darkshine-logo--compact':compact}" aria-label="Replay DarkSHINE logo animation" title="Replay DarkSHINE logo" @click.stop="replay" @keydown.enter.stop @keydown.space.stop><span v-html="logoMarkup"/></button></template>
<style>
.darkshine-logo{--ds-ink:#111e31;--ds-blue:#4372f7;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;color:var(--ds-ink);flex-shrink:0;line-height:0;appearance:none}
.darkshine-logo--compact{width:25.1px;height:24px;background:transparent!important;border:0;border-radius:0;padding:0;box-shadow:none;pointer-events:auto}
html.dark .darkshine-logo{--ds-ink:#edf0f5;--ds-blue:#8bafff}
html.dark .brandbar button.dark-logo,html.light .brandbar button.dark-logo{background:transparent!important;border:0;border-radius:0;padding:0!important;margin-left:auto;width:60px;height:60px;box-shadow:none}
.darkshine-logo>span,.darkshine-logo svg{display:block;width:100%;height:100%;overflow:visible}
.darkshine-logo:focus-visible{outline:1px solid var(--ds-blue);outline-offset:5px}
.darkshine-logo .ds-traveller{offset-path:path('M400 48 C355 75 289 96 289 148 C289 199 349 231 344 285 C341 339 290 365 244 390');offset-rotate:0deg;animation:ds-idle-particle 6000ms linear 2600ms infinite both}
@keyframes ds-idle-particle{0%{offset-distance:0%;opacity:0}4%{opacity:.8}32%{offset-distance:100%;opacity:.8}36%,99.9%{offset-distance:100%;opacity:0}100%{offset-distance:0%;opacity:0}}
@media(prefers-reduced-motion:reduce){.darkshine-logo *{animation:none!important;transition:none!important}}
</style>
