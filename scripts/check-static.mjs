import { chromium } from 'playwright-chromium'
import fs from 'node:fs/promises'
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||chromium.executablePath()}),page=await browser.newPage({viewport:{width:1568,height:882}})
const errors=[],external=[],results=[]
page.on('pageerror',e=>errors.push(String(e)));page.on('response',r=>{if(r.status()>=400)errors.push(r.status()+' '+r.url())})
await page.route('**/*',route=>{const u=new URL(route.request().url());if(!['127.0.0.1','localhost'].includes(u.hostname)){external.push(u.href);return route.abort()}return route.continue()})
for(const [deck,numbers] of [['defence',[1,2,3,8,15,23,27,33,34,35,41,47]],['backup',[1,7,10,14]]])for(const i of numbers){
 await page.goto('http://127.0.0.1:8808/site/'+deck+'/?static=1#/'+i,{waitUntil:'networkidle'});await page.waitForTimeout(1500)
 const issues=await page.locator('[data-slidev-no="'+i+'"] img').evaluateAll(images=>images.filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src))
 results.push({deck,slide:i,missingImages:issues})
 if([1,3,27,40].includes(i)&&deck==='defence')await page.screenshot({path:'output/qa-final/static-'+i+'.png'})
}
await page.goto('http://127.0.0.1:8808/site/',{waitUntil:'networkidle'})
results.push({landingLinks:await page.locator('nav a').count()})
await fs.writeFile('output/static-report.json',JSON.stringify({results,errors,external},null,2));console.log({slides:14,errors,external});await browser.close()
