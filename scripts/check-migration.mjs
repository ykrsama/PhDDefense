import {chromium} from 'playwright-chromium';import fs from 'node:fs/promises'
const browser=await chromium.launch({headless:true}),page=await browser.newPage(),results=[]
for(const [n,mass,selected,produced] of [[34,90,'0.0870','0.705']]){
 await page.goto('http://127.0.0.1:8808/site/predefence/?static=1#/'+n,{waitUntil:'networkidle'})
 const slide=page.locator(`[data-slidev-no="${n}"]`);await slide.locator('.matrix button').nth(7).hover();const detail=await slide.locator('aside').innerText()
 if(!detail.includes(selected)||!detail.includes(produced))throw Error('Benchmark mismatch at '+mass)
 const condition=await slide.locator('.benchmark-conditions').innerText();if(!condition.includes('MeV')||!condition.includes('|')||condition.includes('MEV'))throw Error('Unit case/separator mismatch')
 const forced=await slide.locator('*').evaluateAll(xs=>xs.filter(x=>getComputedStyle(x).textTransform==='uppercase').length);if(forced)throw Error('Uppercase remains')
 results.push({mass,condition,detail,forcedUppercase:forced})
}
await fs.writeFile('output/migration-report.json',JSON.stringify(results,null,2));console.log(results);await browser.close()
