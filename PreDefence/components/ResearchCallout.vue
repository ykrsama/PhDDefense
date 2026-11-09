<script setup>
import { computed } from 'vue'
import { researchPublications } from '../data/researchPublications.js'
const props = defineProps({ works: { type: Array, required: true } })
const entries = computed(() => props.works.map(id => {
  const publication = researchPublications[id]
  if (!publication) throw new Error(`Unknown research publication: ${id}`)
  return { id, ...publication }
}))
</script>

<template>
  <aside class="research-callouts" aria-label="Research publications">
    <a v-for="entry in entries" :key="entry.id" class="research-callout"
       :data-research-id="entry.id" :href="entry.url" :title="entry.title"
       target="_blank" rel="noopener noreferrer" @click.stop>
      <span class="research-role">{{ entry.role }}</span>
      <strong>{{ entry.shortTitle }}</strong>
      <span class="research-citation">{{ entry.citation }}</span>
      <span class="research-link">{{ entry.linkText }} ↗</span>
    </a>
  </aside>
</template>

<style scoped>
.research-callouts{position:absolute;bottom:11px;left:48px;right:48px;z-index:3;display:flex;gap:12px;align-items:center;pointer-events:none}
.research-callout{display:flex;align-items:center;gap:10px;min-width:0;max-width:100%;padding:6px 10px;border:1px solid #ffffff28;border-radius:5px;background:#1b2c43f5;box-shadow:0 3px 10px #0002;color:#dce4ee;text-decoration:none;line-height:1.25;pointer-events:auto}
.research-role{font-size:8px;color:#aab8c8;border-right:1px solid #ffffff25;padding-right:9px;white-space:nowrap}
.research-callout strong{font-size:10px;font-weight:600;white-space:nowrap}
.research-citation{font-size:9px;color:#aab8c8;white-space:nowrap}
.research-link{font-size:9px;color:#c5d6e9;white-space:nowrap}
.research-callout:hover{border-color:#ffffff58;background:#263d58}
.research-callout:focus-visible{outline:2px solid #aabbd0;outline-offset:3px}
@media print{.research-callout{background:#1b2c43;box-shadow:none}}
</style>
