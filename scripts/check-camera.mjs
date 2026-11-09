import {chromium} from 'playwright-chromium'
import fs from 'node:fs/promises'
const browser=await chromium.launch({headless:true}),page=await browser.newPage({viewport:{width:1568,height:882}})
const read=async n=>JSON.parse(await page.locator(`[data-slidev-no="${n}"] canvas`).getAttribute('data-camera'))
const result={};await fs.mkdir('output/camera-revision',{recursive:true})
for(const n of [9,10,13]){
 await page.goto('http://127.0.0.1:8808/site/predefence/#/'+n,{waitUntil:'domcontentloaded'})
 await page.locator(`[data-slidev-no="${n}"] canvas[data-camera]`).waitFor()
 const initial=await read(n);await page.waitForTimeout(3200);const settled=await read(n)
 await page.waitForTimeout(600);const held=await read(n)
 result[n]={initial,settled,held}
 if(n!==13&&JSON.stringify(initial)!==JSON.stringify(settled))throw Error('Compact camera moved')
 if(JSON.stringify(settled)!==JSON.stringify(held))throw Error('Camera did not settle')
 if(n===13)await page.screenshot({path:'output/camera-revision/13-animated.png'})
}
await fs.writeFile('output/camera-motion-report.json',JSON.stringify(result,null,2));console.log(result);await browser.close()
