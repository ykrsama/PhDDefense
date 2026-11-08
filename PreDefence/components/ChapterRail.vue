<script setup>
// Copied from CCNU_Seminar/NJUChapter.vue; only chapter labels changed.
defineProps({active:Number})
const chapters=['Physics & experiment','Simulation & reconstruction','Positron-beam analysis','Summary & outlook']
</script>
<template><div class="nju-chapter-rail"><span v-for="(label,i) in chapters" :key="label" :class="{current:active===i+1}"><b>{{String(i+1).padStart(2,'0')}}</b>{{label}}</span></div></template>
