<script setup lang="ts">
// Projection, canvas layering and lifecycle adapted directly from CCNU_Seminar/NJUChapterScene.vue.
// Anime.js drives the camera and physical-scene animation state. Dimensions are in metres.
import { computed, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { animate } from 'animejs'
import { useNav, useSlideContext } from '@slidev/client'
const props=withDefaults(defineProps<{scene?:string; persistent?:boolean; compact?:boolean; labels?:boolean}>(),{scene:'detector',persistent:false,compact:false,labels:false})
const canvas=ref<HTMLCanvasElement>()
const nav=useNav(); const state={t:5,yaw:-.56,zoom:1,cx:620,cy:328};let ctx:CanvasRenderingContext2D|null=null,loop:any,camera:any
const page=computed(()=>nav.currentPage.value)
const context=props.persistent?undefined:useSlideContext()
const active=computed(()=>props.persistent?page.value<=2:page.value===context?.$page.value)
const isStatic=()=>typeof location!=='undefined'&&((location.search.includes('static')||location.search.includes('print'))||matchMedia('(prefers-reduced-motion: reduce)').matches)
type P=[number,number,number]
function proj(p:P):[number,number,number]{const [x,y,z]=p;const turn=state.yaw;const a=x*Math.cos(turn)+z*Math.sin(turn),b=-x*Math.sin(turn)+z*Math.cos(turn);const c=y*.91-b*.42,d=y*.42+b*.91,q=12/(12+d);const scale=props.compact?126:112;return [state.cx+a*q*scale*state.zoom,state.cy-c*q*scale*state.zoom,d]}
function path(ps:P[],color:string,width=1,dash:number[]=[]){if(!ctx)return;ctx.beginPath();ps.forEach((p,i)=>{let v=proj(p);i?ctx!.lineTo(v[0],v[1]):ctx!.moveTo(v[0],v[1])});ctx.strokeStyle=color;ctx.lineWidth=width;ctx.setLineDash(dash);ctx.stroke();ctx.setLineDash([])}
function dot(p:P,r:number,color:string){if(!ctx)return;let a=proj(p);ctx.beginPath();ctx.arc(a[0],a[1],r,0,Math.PI*2);ctx.fillStyle=color;ctx.fill()}
function box(x:number,y:number,z:number,dx:number,dy:number,dz:number,color:string,fill:string,grid=0){
 const vs:P[]=[[x,y,z],[x+dx,y,z],[x+dx,y+dy,z],[x,y+dy,z],[x,y,z+dz],[x+dx,y,z+dz],[x+dx,y+dy,z+dz],[x,y+dy,z+dz]]
 const faces=[[0,1,2,3],[4,5,6,7],[0,4,7,3],[1,5,6,2],[0,1,5,4],[3,2,6,7]].sort((a,b)=>b.reduce((s,i)=>s+proj(vs[i])[2],0)-a.reduce((s,i)=>s+proj(vs[i])[2],0))
 faces.forEach(f=>{ctx!.beginPath();f.forEach((n,i)=>{let p=proj(vs[n]);i?ctx!.lineTo(p[0],p[1]):ctx!.moveTo(p[0],p[1])});ctx!.closePath();ctx!.fillStyle=fill;ctx!.fill();ctx!.strokeStyle=color;ctx!.lineWidth=.75;ctx!.stroke()})
 if(grid){for(let i=1;i<grid;i++){let f=i/grid;path([[x+dx,y+dy*f,z],[x+dx,y+dy*f,z+dz]],color,.5);path([[x+dx,y,z+dz*f],[x+dx,y+dy,z+dz*f]],color,.5);path([[x,y+dy,z+dz*f],[x+dx,y+dy,z+dz*f]],color,.5);path([[x+dx*f,y+dy,z],[x+dx*f,y+dy,z+dz]],color,.5)}}
}
function label(s:string,p:P,dx=0,dy=0){const q=proj(p);ctx!.font='14px "DM Sans",sans-serif';ctx!.fillStyle='#cdd5df';ctx!.fillText(s,q[0]+dx,q[1]+dy)}
function detector(){
 // Main HCAL = 1.5 x 1.5 x 2.5 m. ECAL = 0.5 x 0.5 x 0.44 m.
 box(.78,-.75,-.75,2.5,1.5,1.5,'rgba(186,165,255,.3)','rgba(62,58,85,.12)')
 for(let i=0;i<=24;i++)path([[.78+i*2.5/24,-.75,-.75],[.78+i*2.5/24,.75,-.75],[.78+i*2.5/24,.75,.75]],'rgba(186,165,255,.22)',.7)
 box(.18,-.25,-.25,.44,.5,.5,'rgba(112,220,178,.68)','rgba(50,115,97,.15)',10)
 // Side veto panels preserve the calorimeter aperture.
 for(let y of [-.72,.55])box(.10,y,-.7,.58,.17,1.4,'rgba(186,165,255,.18)','rgba(62,58,85,.05)')
 // Magnet open bore, two yokes. Tracker planes are intentionally never pixel grids.
 for(let y of [-.48,.34])box(-1.9,y,-.42,1.65,.14,.84,'rgba(240,195,110,.36)','rgba(125,93,40,.10)')
 for(let i=0;i<7;i++){const x=-1.8+i*.15;box(x,-.10,-.15,.009,.20,.30,'rgba(119,201,255,.68)','rgba(77,149,195,.08)');for(let k=1;k<8;k++)path([[x,-.1,-.15+k*.3/8],[x,.1,-.15+k*.3/8]],'rgba(119,201,255,.23)',.5)}
 box(-.78,-.10,-.15,.004,.20,.30,'rgba(246,156,171,.95)','rgba(246,156,171,.2)')
 for(let i=0;i<6;i++){let x=-.68+i*.09,h=.11+i*.018,w=.16+i*.022;box(x,-h,-w,.008,h*2,w*2,'rgba(119,201,255,.65)','rgba(77,149,195,.08)');for(let k=1;k<8;k++)path([[x,-h,-w+k*w*2/8],[x,h,-w+k*w*2/8]],'rgba(119,201,255,.23)',.5)}
 const incoming=Array.from({length:45},(_,i):P=>[-2.8+i*2.02/44,.008,Math.sin(i/44*Math.PI)*.026]);path(incoming,'#77c9ff',2)
 const recoil=Array.from({length:42},(_,i):P=>[-.78+i*1.20/41,.015+i/41*.14,Math.pow(i/41,2)*.16]);path(recoil,'#f0c36e',2.2)
 const dark=Array.from({length:65},(_,i):P=>[-.78+i*4.45/64,.015+i/64*.80,-i/64*.32]);path(dark,'#f69cab',1.7,[7,6]);dot([-.78,.015,0],3.5,'#fff0ba')
 const u=(state.t*.24)%1;dot(incoming[Math.floor(u*44)],3,'#d2eeff');dot(recoil[Math.floor(u*41)],2.8,'#fff0ba');dot(dark[Math.floor(u*64)],2.2,'#ffc1d0')
 for(let k=0;k<11;k++){let u=((state.t*.22+k*.073)%1);const x=.24+u*.4;path([[.2,.16,.16],[x,.16+(k-5)*.014*u,.16+(k%3-1)*.05*u]],`rgba(240,195,110,${.18+.15*(1-u)})`,.7)}
 if(props.labels){label('Tagging tracker',[-1.55,-.1,.16],-55,32);label('W target',[-.78,.12,0],-15,-12);label('Recoil tracker',[-.35,-.2,.22],-12,45);label('ECAL',[.43,.35,0],-17,-10);label('HCAL',[2.1,.78,0],-5,-17);label('Magnet',[-1.2,.5,0],-20,-10)}
}
function sphere(center:P,r:number,col:string,turn=0){for(let j=1;j<12;j++){let b=-Math.PI/2+j*Math.PI/12;path(Array.from({length:65},(_,i):P=>[center[0]+r*Math.cos(b)*Math.cos(i/64*Math.PI*2+turn),center[1]+r*Math.sin(b),center[2]+r*Math.cos(b)*Math.sin(i/64*Math.PI*2+turn)]),col,.6)}for(let j=0;j<12;j++)path(Array.from({length:65},(_,i):P=>{let a=i/64*Math.PI*2,b=j*Math.PI/6+turn;return[center[0]+r*Math.cos(a)*Math.cos(b),center[1]+r*Math.sin(a),center[2]+r*Math.cos(a)*Math.sin(b)]}),col,.6)}
function clusters(){const phase=(state.t%18)/18;const shift=1.4*Math.cos(phase*Math.PI*2);for(let side of [-1,1]){let cx=side*shift,cz=side*.13;const center:P=[cx,side*.16,cz];sphere(center,.82,'rgba(119,201,255,.18)',state.t*.025);for(let i=0;i<170;i++){let a=i*2.39996,b=Math.acos(1-2*(i+.5)/170),r=.74*Math.pow((i*29%170)/170,.5);dot([cx+r*Math.sin(b)*Math.cos(a),side*.16+r*Math.cos(b),cz+r*Math.sin(b)*Math.sin(a)],i%7?1.1:2,'rgba(165,218,255,.65)')}
 // Gas lags behind collisionless galaxies / mass halos.
 let gx=cx*.30;for(let j=0;j<15;j++){const rr=.22+j*.025;path(Array.from({length:70},(_,i):P=>[gx+rr*1.4*Math.cos(i/69*Math.PI*2),side*.1+rr*Math.sin(i/69*Math.PI*2),side*.1]),'rgba(246,156,171,.15)',1.7)}}}
function atom(){sphere([.65,0,0],.19,'rgba(240,195,110,.55)',state.t*.1);for(let i=0;i<35;i++){let a=i*2.4,b=Math.acos(1-2*(i+.5)/35);dot([.65+.16*Math.sin(b)*Math.cos(a),.16*Math.cos(b),.16*Math.sin(b)*Math.sin(a)],3.5,i%2?'#d6b372':'#8da8c0')}
 for(let k=0;k<5;k++){let r=.48+k*.21;const orbit=(a:number):P=>[.65+r*Math.cos(a),r*Math.sin(a)*Math.cos(k*.54),r*Math.sin(a)*Math.sin(k*.54)];path(Array.from({length:121},(_,i)=>orbit(i/120*Math.PI*2)),'rgba(119,201,255,.25)',.8);for(let j=0;j<3;j++)dot(orbit(state.t*.3+k+j*2.1),2.5,'#77c9ff')}
 let u=(state.t%8)/8;const vertex:P=[-.50,.25,.13];path([[-2.6,.25,.13],vertex],'rgba(246,156,171,.6)',1.6);if(u<.52){dot([-2.6+2.1*u/.52,.25,.13],4,'#f69cab');dot(vertex,3.5,'#77c9ff')}else{let v=(u-.52)/.48;path([vertex,[2.2,.8,.25]],'rgba(240,195,110,.8)',2,[7,6]);dot([-.50+2.7*v,.25+.55*v,.13+.12*v],3,'#fff0ba');sphere(vertex,.05+v*.32,`rgba(255,221,166,${.6*(1-v)})`);label('A′',[1.9,.78,.25],8,-9)};label('e⁺',[-1.9,.25,.13],0,-14);label('W',[.65,0,0],-6,5)
}
function draw(){if(!ctx||!canvas.value)return;ctx.clearRect(0,0,980,551.25);if(props.scene==='cluster')clusters();else if(props.scene==='atom')atom();else detector()}
function setCamera(){if(!active.value)return;const n=page.value;const target=props.persistent&&n===2?{yaw:-.98,zoom:1.08,cx:670,cy:310}:props.compact?{yaw:-.43,zoom:.88,cx:421,cy:134}:props.scene==='cluster'?{yaw:-.56,zoom:1.12,cx:665,cy:320}:props.scene==='atom'?{yaw:-.56,zoom:1.05,cx:660,cy:320}:{yaw:-.56,zoom:.85,cx:620,cy:328};camera?.pause();if(isStatic()){Object.assign(state,target);draw()}else camera=animate(state,{...target,duration:1900,ease:'inOutQuart',onUpdate:draw})}
function syncLoop(){loop?.pause();setCamera();if(active.value&&!isStatic())loop=animate(state,{t:[state.t,state.t+360],duration:360000,ease:'linear',loop:true,onUpdate:draw})}
onMounted(()=>{let c=canvas.value!;c.width=1960;c.height=props.compact?620:1103;ctx=c.getContext('2d');ctx?.scale(2,2);if(props.scene==='cluster')state.t=2;setCamera();draw();syncLoop();watch(page,setCamera);watch(active,syncLoop)})
onBeforeUnmount(()=>{loop?.pause();camera?.pause()})
</script>
<template><div class="physics-scene" :class="{compact}"><canvas ref="canvas"/><div v-if="!compact" class="physics-scene-shade"/></div></template>
<style scoped>
.physics-scene{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:-1;background:#0c0d0f}.physics-scene canvas{width:100%;height:100%;object-fit:fill;opacity:.95}.physics-scene-shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(12,13,15,.98) 0%,rgba(12,13,15,.84) 31%,rgba(12,13,15,.34) 55%,transparent 83%),linear-gradient(0deg,rgba(12,13,15,.78),transparent 23%)}.compact{position:relative;z-index:0;background:transparent;width:100%;height:100%}.compact canvas{opacity:1}
</style>
