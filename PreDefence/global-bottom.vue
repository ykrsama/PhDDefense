<script setup>
import {useNav} from '@slidev/client'
const {currentPage}=useNav()
</script>
<template><Transition name="detector-background"><div v-if="currentPage<=2" class="persistent-scene"><PhysicsScene persistent /></div></Transition></template>
<style scoped>.persistent-scene{position:absolute;inset:0;z-index:-1;overflow:hidden;pointer-events:none}.detector-background-enter-active,.detector-background-leave-active{transition:opacity var(--slidev-transition-duration) ease}.detector-background-enter-from,.detector-background-leave-to{opacity:0}@media(prefers-reduced-motion:reduce){.detector-background-enter-active,.detector-background-leave-active{transition:none}}</style>
