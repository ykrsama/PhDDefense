import fs from 'node:fs/promises'
const source=await fs.readFile(new URL('./qa.mjs',import.meta.url),'utf8')
const numbers=(process.env.QA_SLIDES||'8,9,11,13,22,23,24,26,27,28,31,32,33,35,36,37,39,46').split(',').map(Number)
await fs.writeFile(new URL('./.qa-selected-run.mjs',import.meta.url),source.replace('for(let i=1;i<=n;i++){','for(const i of '+JSON.stringify(numbers)+'){'))
await import('./.qa-selected-run.mjs')
await fs.unlink(new URL('./.qa-selected-run.mjs',import.meta.url))
