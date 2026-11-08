<script setup>
defineProps({src:String,caption:String,plain:Boolean})
</script>
<template><figure class="evidence"><div class="plot-mat" :class="{plain}"><NJUPlot :src="src" :alt="caption"/></div><figcaption v-if="caption">{{caption}}</figcaption></figure></template>
