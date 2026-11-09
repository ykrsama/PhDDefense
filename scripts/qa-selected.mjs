import fs from 'node:fs/promises'
const source=await fs.readFile(new URL('./qa.mjs',import.meta.url),'utf8')
const numbers=(process.env.QA_SLIDES||'8,9,11,13,17,18,19,22,23,24,25,26,27,30,31,32,34,35,36,38,45').split(',').map(Number)
await fs.writeFile(new URL('./.qa-selected-run.mjs',import.meta.url),source.replace('for(let i=1;i<=n;i++){','for(const i of '+JSON.stringify(numbers)+'){'))
await import('./.qa-selected-run.mjs')
await fs.unlink(new URL('./.qa-selected-run.mjs',import.meta.url))
