import { chromium } from 'playwright-chromium'
import fs from 'node:fs/promises'
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||chromium.executablePath()})
const page=await browser.newPage({viewport:{width:1568,height:882}}),errors=[],result={}
page.on('pageerror',e=>errors.push(String(e)))
await page.goto('http://localhost:3046/#/1',{waitUntil:'networkidle'});await page.waitForTimeout(2200)
const a=await page.evaluate(()=>{window.testCanvas=document.querySelector('.persistent-scene canvas');return window.testCanvas.toDataURL()});await page.waitForTimeout(700)
result.detectorAnimated=a!==await page.evaluate(()=>window.testCanvas.toDataURL())
await page.keyboard.press('ArrowRight');await page.waitForTimeout(2400)
result.outlineCameraPreservesCanvas=await page.evaluate(()=>window.testCanvas===document.querySelector('.persistent-scene canvas'))
result.outlineRoute=page.url().endsWith('/2')
await page.screenshot({path:'output/qa/interaction-outline.png'})
await page.goto('http://localhost:3046/#/15',{waitUntil:'networkidle'});await page.waitForTimeout(1700)
const flow=page.locator('[data-slidev-no="15"] .flow-diagram path[stroke-dasharray]').first(),offset=await flow.getAttribute('stroke-dashoffset');await page.waitForTimeout(700)
result.flowHighlightAnimated=offset!==await flow.getAttribute('stroke-dashoffset')
result.flowFullGraphVisible=await page.locator('[data-slidev-no="15"] .flow-diagram .node-text').count()===6
await page.goto('http://localhost:3046/#/28',{waitUntil:'networkidle'});await page.waitForTimeout(1700)
await page.locator('.zoomable-plot-image:visible').first().click();result.figureZoomOpen=await page.locator('.fullscreen-overlay').isVisible();await page.keyboard.press('Escape');result.figureZoomClosed=await page.locator('.fullscreen-overlay').count()===0
result.errors=errors;await fs.writeFile('output/interaction-report.json',JSON.stringify(result,null,2));console.log(result);await browser.close()
