<script setup>
import { useDarkMode } from '@slidev/client'
const base = import.meta.env.BASE_URL
const { isDark, toggleDark } = useDarkMode()
</script>
<template>
  <header class="defence-identity" aria-label="Shanghai Jiao Tong University, Tsung-Dao Lee Institute; Xuliang Zhu, PhD Dissertation Pre-Defence">
    <img :src="base+'branding/tdli-sjtu-'+(isDark?'white':'blue')+'.png'" alt="SJTU / Tsung-Dao Lee Institute"/>
    <span>Xuliang Zhu <i/> PhD Dissertation Pre-Defence <button class="theme-toggle" :aria-label="isDark?'Switch to light theme':'Switch to dark theme'" :title="isDark?'Light theme':'Dark theme'" @click.stop="toggleDark()">{{ isDark?'☀':'☾' }}</button></span>
  </header>
</template>
<style scoped>
.defence-identity{position:absolute;z-index:90;left:48px;right:48px;top:6px;height:25px;display:flex;align-items:center;justify-content:space-between;pointer-events:none;border-bottom:1px solid #76839535;padding-bottom:4px;box-sizing:content-box}
.defence-identity::after{content:'';position:absolute;bottom:-1px;left:0;width:34px;height:1px;background:#c9151e}
.defence-identity img{height:24px;width:auto;object-fit:contain}
.defence-identity>span{font:500 9px/1.3 'DM Sans',sans-serif;color:#b7c3d4;display:flex;align-items:center;gap:10px;letter-spacing:.025em;margin-right:62px}
.defence-identity i{height:9px;width:1px;background:#76839588}
.theme-toggle{pointer-events:auto;cursor:pointer;width:21px;height:21px;border:1px solid #76839570;border-radius:4px;background:transparent;color:inherit;font:15px/1 sans-serif;display:grid;place-items:center}
</style>
