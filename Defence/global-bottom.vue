<script setup>
import {useNav} from '@slidev/client'
const {currentPage}=useNav()
</script>
<template><div v-if="currentPage<=2" class="persistent-scene"><PhysicsScene persistent /></div></template>
<style scoped>.persistent-scene{position:absolute;inset:0;z-index:-1;overflow:hidden;pointer-events:none}</style>
