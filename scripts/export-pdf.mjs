import { chromium } from 'playwright-chromium'
import { PDFDocument } from 'pdf-lib'
import fs from 'node:fs/promises'
const [url='http://localhost:3046',output='output/pdf/DarkSHINE_PhD_Defence.pdf',count='46']=process.argv.slice(2)
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||chromium.executablePath()})
const page=await browser.newPage({viewport:{width:980,height:552}}),doc=await PDFDocument.create()
const errors=[];page.on('pageerror',e=>errors.push(String(e)))
await fs.mkdir(output.substring(0,output.lastIndexOf('/')),{recursive:true})
const pages=process.env.PDF_SLIDES?process.env.PDF_SLIDES.split(',').map(Number):Array.from({length:Number(count)},(_,i)=>i+1)
for(const i of pages){
 await page.goto(url+'/?static=1&print=true#/'+i,{waitUntil:'networkidle'})
 await page.emulateMedia({colorScheme:'dark',media:'screen'})
 await page.waitForTimeout(1600);await page.evaluate(()=>document.fonts.ready)
 await page.addStyleTag({content:'*{animation:none!important;transition:none!important} .slidev-nav-controls,.slidev-drawing-controls{display:none!important} .cover-head .accent-title{background:none!important;color:#f0c36e!important;-webkit-text-fill-color:#f0c36e!important}'})
 const bytes=await page.pdf({width:980,height:552,margin:{left:0,top:0,right:0,bottom:0},pageRanges:'1',printBackground:true,preferCSSPageSize:true})
 const one=await PDFDocument.load(bytes);for(const p of await doc.copyPages(one,[0]))doc.addPage(p)
 if(i%10===0)console.log('PDF page',i)
}
doc.setTitle(Number(count)>20?'Design of DarkSHINE Simulation Framework and Prospective Study of Positron-Beam Mode':'DarkSHINE PhD Dissertation Defence — Backup')
doc.setAuthor('Xuliang Zhu');doc.setSubject('Shanghai Jiao Tong University · PhD Dissertation Defence · 10 November 2026')
await fs.writeFile(output,await doc.save());await browser.close();console.log(JSON.stringify({output,pages:doc.getPageCount(),errors}))
