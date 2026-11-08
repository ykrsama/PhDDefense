import { chromium } from 'playwright-chromium'
import fs from 'node:fs/promises'
const args=process.argv.slice(2),url=args[0]||'http://localhost:3046',out=args[1]||'output/qa',n=Number(args[2]||46)
await fs.mkdir(out,{recursive:true})
const browser=await chromium.launch({headless:true,executablePath:chromium.executablePath()})
const page=await browser.newPage({viewport:{width:1568,height:882},deviceScaleFactor:1})
const errors=[];page.on('pageerror',e=>errors.push(String(e)));page.on('response',r=>{if(r.status()>=400)errors.push(r.status()+' '+r.url())})
const slides=[]
for(let i=1;i<=n;i++){
 await page.goto(url+'/?static=1#/'+i,{waitUntil:'networkidle'})
 await page.waitForTimeout(1500)
 await page.evaluate(()=>document.fonts.ready)
 await page.screenshot({path:out+'/'+String(i).padStart(2,'0')+'.png'})
 const info=await page.evaluate(()=>{
 const el=document.querySelector('.slidev-page:not([style*="display: none"]) .slidev-layout')||document.querySelector('.slidev-layout')
 if(!el)return {missing:true}
 const root=el.getBoundingClientRect(),bad=[];const take=el.querySelector('.takeaway')?.getBoundingClientRect()
 for(const x of el.querySelectorAll('h1,p,li,table,figure,.formula-band,.big-number,.achievement')){
 const r=x.getBoundingClientRect();if(r.width&&r.height&&(r.right>root.right+2||r.bottom>root.bottom+2||r.left<root.left-2))bad.push({tag:x.tagName,text:x.textContent.slice(0,80),bounds:[r.x,r.y,r.width,r.height]})
 }
 const overlap=[];if(take){for(const x of el.querySelectorAll('h2,p,li,table,figure,.formula-band,.achievement')){if(x.closest('.takeaway,.source'))continue;const r=x.getBoundingClientRect();if(r.width&&r.height&&r.bottom>take.top-4&&r.top<take.bottom&&r.right>take.left&&r.left<take.right)overlap.push({tag:x.tagName,text:x.textContent.slice(0,90),bottom:r.bottom,takeTop:take.top})}}
 return {overlap,title:el.querySelector('h1')?.textContent,images:[...el.querySelectorAll('img')].map(x=>({src:x.src,ok:x.complete&&x.naturalWidth>0})),mathErrors:[...el.querySelectorAll('.katex-error')].map(x=>x.textContent),bad}
 })
 slides.push({i,...info});if(i%10===0)console.log('Rendered',i)
}
await fs.writeFile(out+'/report.json',JSON.stringify({slides,errors},null,2))
await browser.close();console.log(JSON.stringify({slides:n,errors,bad:slides.filter(x=>x.bad?.length||x.overlap?.length||x.mathErrors?.length||x.images?.some(y=>!y.ok))},null,2))
