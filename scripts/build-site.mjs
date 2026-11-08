import { spawnSync } from 'node:child_process'
import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const root=fileURLToPath(new URL('../',import.meta.url)),site=path.join(root,'site')
for(const name of ['PreDefence','Backup']){
 const result=spawnSync(process.execPath,['tools/slidev.mjs','build',name,'--base','./'],{cwd:root,stdio:'inherit'})
 if(result.status!==0)process.exit(result.status||1)
}
await fs.mkdir(site,{recursive:true})
await fs.rm(path.join(site,'defence'),{recursive:true,force:true})
for(const [source,target] of [['PreDefence','predefence'],['Backup','backup']]){
 await fs.rm(path.join(site,target),{recursive:true,force:true})
 await fs.cp(path.join(root,source,'dist'),path.join(site,target),{recursive:true})
}
// Remove any PDFs left by an older local build; Pages deploys web assets only.
await fs.rm(path.join(site,'pdf'),{recursive:true,force:true})
await fs.copyFile(path.join(root,'scripts/site-index.html'),path.join(site,'index.html'))
await fs.writeFile(path.join(site,'.nojekyll'),'')
console.log('Portable static site written to site/. No deployment was performed.')
