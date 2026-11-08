<script setup lang="ts">
// Projection, canvas layering and lifecycle adapted directly from CCNU_Seminar/NJUChapterScene.vue.
// Anime.js drives the camera and physical-scene animation state. Dimensions are in metres.
import { computed, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { animate } from 'animejs'
import { useNav, useSlideContext } from '@slidev/client'
const props=withDefaults(defineProps<{scene?:string; persistent?:boolean; compact?:boolean; labels?:boolean; magnet?:boolean; original?:boolean; narrow?:boolean}>(),{scene:'detector',persistent:false,compact:false,labels:false,magnet:false,original:false,narrow:false})
const canvas=ref<HTMLCanvasElement>()
const nav=useNav(); const state={t:5,yaw:-.56,pitch:.28,roll:.20,zoom:1,cx:620,cy:328};let ctx:CanvasRenderingContext2D|null=null,loop:any,camera:any
const page=computed(()=>nav.currentPage.value)
const context=props.persistent?undefined:useSlideContext()
const active=computed(()=>props.persistent?page.value<=2:page.value===context?.$page.value)
const isStatic=()=>typeof location!=='undefined'&&((location.search.includes('static')||location.search.includes('print'))||matchMedia('(prefers-reduced-motion: reduce)').matches)
type P=[number,number,number]
function proj(p:P):[number,number,number]{
 // Beam longitudinal axis is local +x (physical +z). Rotate the model,
 // including tracks and label anchors, by +90 degrees before camera projection.
 const [x,y,z]:P=props.scene==='detector'&&!props.compact?[p[0],-p[2],p[1]]:p
 const turn=state.yaw
 const a=x*Math.cos(turn)+z*Math.sin(turn), b=-x*Math.sin(turn)+z*Math.cos(turn)
 // An orthonormal camera basis keeps screen coordinates and depth consistent.
 const {pitch,roll}=state
 const vertical=y*Math.cos(pitch)-b*Math.sin(pitch)
 const depth=y*Math.sin(pitch)+b*Math.cos(pitch)
 const horizontal=a*Math.cos(roll)-vertical*Math.sin(roll)
 const up=a*Math.sin(roll)+vertical*Math.cos(roll)
 const q=10/(10+depth), scale=props.compact?126:112
 let focusX=0,focusY=0
 if(props.scene==='detector'&&!props.compact){
  // ECAL centre is the fixed screen-space pivot for the chapter establishing move.
  const fa=.40*Math.cos(turn),fb=-.40*Math.sin(turn),fv=-fb*Math.sin(pitch),fd=fb*Math.cos(pitch),fq=10/(10+fd)
  focusX=(fa*Math.cos(roll)-fv*Math.sin(roll))*fq
  focusY=(fa*Math.sin(roll)+fv*Math.cos(roll))*fq
 }
 return [state.cx+(horizontal*q-focusX)*scale*state.zoom,state.cy-(up*q-focusY)*scale*state.zoom,depth]
}
function path(ps:P[],color:string,width=1,dash:number[]=[]){if(!ctx)return;const depth=ps.reduce((a,p)=>a+proj(p)[2],0)/ps.length;ctx.filter=`blur(${Math.min(.7,Math.abs(depth)*.16)}px)`;ctx.globalAlpha=Math.max(.6,1-Math.abs(depth)*.07);ctx.beginPath();ps.forEach((p,i)=>{let v=proj(p);i?ctx!.lineTo(v[0],v[1]):ctx!.moveTo(v[0],v[1])});ctx.strokeStyle=color;ctx.lineWidth=width;ctx.setLineDash(dash);ctx.stroke();ctx.setLineDash([]);ctx.filter='none';ctx.globalAlpha=1}
function dot(p:P,r:number,color:string){if(!ctx)return;let a=proj(p);ctx.beginPath();ctx.arc(a[0],a[1],r,0,Math.PI*2);ctx.fillStyle=color;ctx.fill()}
function cameraEye():P{
 // Invert the camera depth axis, then undo the model rotation.
 const eye:P=[10*Math.sin(state.yaw)*Math.cos(state.pitch),-10*Math.sin(state.pitch),-10*Math.cos(state.yaw)*Math.cos(state.pitch)]
 return props.scene==='detector'&&!props.compact?[eye[0],eye[2],-eye[1]]:eye
}
function box(x:number,y:number,z:number,dx:number,dy:number,dz:number,color:string,fill:string,grid=0,layers=false){
 const vs:P[]=[[x,y,z],[x+dx,y,z],[x+dx,y+dy,z],[x,y+dy,z],[x,y,z+dz],[x+dx,y,z+dz],[x+dx,y+dy,z+dz],[x,y+dy,z+dz]]
 const faces=[{ids:[0,1,2,3],axis:2,sign:-1},{ids:[4,5,6,7],axis:2,sign:1},{ids:[0,4,7,3],axis:0,sign:-1},{ids:[1,5,6,2],axis:0,sign:1},{ids:[0,1,5,4],axis:1,sign:-1},{ids:[3,2,6,7],axis:1,sign:1}]
 faces.sort((a,b)=>b.ids.reduce((sum,i)=>sum+proj(vs[i])[2],0)-a.ids.reduce((sum,i)=>sum+proj(vs[i])[2],0))
 const eye=cameraEye()
 const visible=(face:typeof faces[number])=>face.sign*(eye[face.axis]-vs[face.ids[0]][face.axis])>0
 for(const face of faces){if(grid&&!visible(face))continue;const {ids}=face;ctx!.beginPath();ids.forEach((n,i)=>{const p=proj(vs[n]);i?ctx!.lineTo(p[0],p[1]):ctx!.moveTo(p[0],p[1])});ctx!.closePath();ctx!.fillStyle=fill;ctx!.fill();ctx!.strokeStyle=color;ctx!.lineWidth=.55;ctx!.stroke()}
 if(!grid)return
 const mix=(a:P,b:P,t:number):P=>a.map((v,i)=>v+(b[i]-v)*t) as P
 // Draw segmentation only on camera-facing surfaces, including during rotation.
 for(const {ids,axis,sign} of faces){
  if(sign*(eye[axis]-vs[ids[0]][axis])<=0)continue
  if(layers&&axis===0)continue
  for(let i=1;i<grid;i++){
   const f=i/grid
   if(layers){
    const xx=x+dx*f
    if(axis===1){const yy=vs[ids[0]][1];path([[xx,yy,z],[xx,yy,z+dz]],color,.55)}
    else{const zz=vs[ids[0]][2];path([[xx,y,zz],[xx,y+dy,zz]],color,.55)}
   }else{
    path([mix(vs[ids[0]],vs[ids[1]],f),mix(vs[ids[3]],vs[ids[2]],f)],color,.5)
    path([mix(vs[ids[0]],vs[ids[3]],f),mix(vs[ids[1]],vs[ids[2]],f)],color,.5)
   }
  }
 }
}
function label(s:string,p:P,dx=0,dy=0){const q=proj(p);ctx!.font='14px "DM Sans",sans-serif';ctx!.fillStyle='#cdd5df';ctx!.fillText(s,q[0]+dx,q[1]+dy)}
function detector(){
 // Baseline 1 HCAL: 4 x 4 m transverse, 4.02 m active stack (80 x 3 cm Fe + 162 x 1 cm scintillator).
 // ECAL remains 0.5 x 0.5 x 0.44 m.
 box(.78,-2,-2,4.02,4,4,'rgba(186,165,255,.3)','rgba(62,58,85,.12)',24,true)

 box(.18,-.25,-.25,.44,.5,.5,'rgba(112,220,178,.68)','rgba(50,115,97,.15)',10)
 // Side veto panels preserve the calorimeter aperture.
 
 // Magnet open bore, two yokes. Tracker planes are intentionally never pixel grids.
 if(props.compact||props.magnet)for(let y of [-.48,.34])box(-1.9,y,-.42,1.65,.14,.84,'rgba(240,195,110,.36)','rgba(125,93,40,.10)')
 for(let i=0;i<7;i++){const x=-1.8+i*.15;box(x,-.10,-.15,.009,.20,.30,'rgba(119,201,255,.46)','rgba(77,149,195,.08)');for(let k=1;k<8;k++)path([[x,-.1,-.15+k*.3/8],[x,.1,-.15+k*.3/8]],'rgba(119,201,255,.23)',.5)}
 box(-.78,-.10,-.15,.004,.20,.30,'rgba(246,156,171,.95)','rgba(246,156,171,.2)')
 for(let i=0;i<6;i++){let x=-.68+i*.09,h=.11+i*.018,w=.16+i*.022;box(x,-h,-w,.008,h*2,w*2,'rgba(119,201,255,.46)','rgba(77,149,195,.08)');for(let k=1;k<8;k++)path([[x,-h,-w+k*w*2/8],[x,h,-w+k*w*2/8]],'rgba(119,201,255,.23)',.5)}
 const incoming=Array.from({length:45},(_,i):P=>[-2.8+i*2.02/44,.008,Math.sin(i/44*Math.PI)*.026]);path(incoming,'#77c9ff',2)
 const recoil=Array.from({length:42},(_,i):P=>[-.78+i*1.20/41,.015+i/41*.14,Math.pow(i/41,2)*.16]);path(recoil,'#f0c36e',2.2)
 const dark=Array.from({length:65},(_,i):P=>[-.78+i*4.45/64,.015+i/64*.80,-i/64*.32]);path(dark,'#f69cab',1.7,[7,6]);dot([-.78,.015,0],3.5,'#fff0ba')
 const u=(state.t*.65)%1;dot(incoming[Math.floor(u*44)],3,'#d2eeff');dot(recoil[Math.floor(u*41)],2.8,'#fff0ba');dot(dark[Math.floor(u*64)],2.2,'#ffc1d0')
 const showerStart=recoil[recoil.length-1]
 for(let k=0;k<11;k++){
  const u=(state.t*.55+k*.073)%1
  const end:P=[showerStart[0]+.18*u,showerStart[1]+(k-5)*.012*u,showerStart[2]+(k%3-1)*.04*u]
  path([showerStart,end],`rgba(240,195,110,${.25+.25*(1-u)})`,.9)
 }
 if(props.labels){label('Tagging tracker',[-1.55,-.1,.16],-55,32);label('W target',[-.78,.12,0],-15,props.compact?20:-12);label('Recoil tracker',[-.35,-.2,.22],-12,45);label('ECAL',props.compact?[.43,.35,0]:[.43,0,-.36],-17,-10);label('HCAL',props.compact?[2.8,2.1,0]:[2.8,0,-2.1],-5,-17);label('Magnet',props.compact?[-1.2,.5,0]:[-1.2,0,-.59],-20,-10)}
}
function sphere(center:P,r:number,col:string,turn=0){for(let j=1;j<12;j++){let b=-Math.PI/2+j*Math.PI/12;path(Array.from({length:65},(_,i):P=>[center[0]+r*Math.cos(b)*Math.cos(i/64*Math.PI*2+turn),center[1]+r*Math.sin(b),center[2]+r*Math.cos(b)*Math.sin(i/64*Math.PI*2+turn)]),col,.6)}for(let j=0;j<12;j++)path(Array.from({length:65},(_,i):P=>{let a=i/64*Math.PI*2,b=j*Math.PI/6+turn;return[center[0]+r*Math.cos(a)*Math.cos(b),center[1]+r*Math.sin(a),center[2]+r*Math.cos(a)*Math.sin(b)]}),col,.6)}
function clusters(){
 const phase=(state.t%22)/22, separation=1.55*Math.cos(phase*Math.PI*2)
 // Keep the original visual identities: blue star-filled spheres lag at the collision.
 const slowed=.42*Math.tanh(separation*1.3)
 for(const side of [-1,1]){
  const cx=side*slowed,cz=side*.13,center:P=[cx,side*.16,cz]
  sphere(center,.82,'rgba(119,201,255,.22)',state.t*.025)
  for(let i=0;i<170;i++){
   const a=i*2.39996,b=Math.acos(1-2*(i+.5)/170),r=.74*Math.pow((i*29%170)/170,.5)
   dot([cx+r*Math.sin(b)*Math.cos(a),side*.16+r*Math.cos(b),cz+r*Math.sin(b)*Math.sin(a)],i%7?1.1:2,'rgba(119,201,255,.7)')
  }
  // The red component passes through and separates farther and faster.
  const rx=side*separation
  for(let j=0;j<15;j++){
   const rr=.22+j*.025
   path(Array.from({length:70},(_,i):P=>[rx+rr*1.4*Math.cos(i/69*Math.PI*2),side*.1+rr*Math.sin(i/69*Math.PI*2),side*.1]),'rgba(246,156,171,.25)',1.7)
  }
 }
}
function atom(){sphere([.65,0,0],.19,'rgba(240,195,110,.55)',state.t*.1);for(let i=0;i<35;i++){let a=i*2.4,b=Math.acos(1-2*(i+.5)/35);dot([.65+.16*Math.sin(b)*Math.cos(a),.16*Math.cos(b),.16*Math.sin(b)*Math.sin(a)],3.5,i%2?'#d6b372':'#8da8c0')}
 for(let k=0;k<5;k++){let r=.48+k*.21;const orbit=(a:number):P=>[.65+r*Math.cos(a),r*Math.sin(a)*Math.cos(k*.54),r*Math.sin(a)*Math.sin(k*.54)];path(Array.from({length:121},(_,i)=>orbit(i/120*Math.PI*2)),'rgba(119,201,255,.25)',.8);for(let j=0;j<3;j++)dot(orbit(state.t*.3+k+j*2.1),2.5,'#77c9ff')}
 const u=(state.t%8)/8,vertex:P=[-.50,.25,.13],end:P=[2.2,.8,.25]
 path([[-2.6,.25,.13],vertex],'rgba(246,156,171,.6)',1.6)
 // Keep the guide visible; the bright trail and label follow the emitted particle.
 path([vertex,end],'rgba(240,195,110,.30)',1.2,[7,6])
 if(u<.52){dot([-2.6+2.1*u/.52,.25,.13],4,'#f69cab');dot(vertex,3.5,'#77c9ff')}
 else{
  const v=(u-.52)/.48,tip:P=[-.50+2.7*v,.25+.55*v,.13+.12*v]
  path([vertex,tip],'rgba(240,195,110,.8)',2,[7,6]);dot(tip,3,'#fff0ba')
  sphere(vertex,.05+v*.32,`rgba(255,221,166,${.6*(1-v)})`)

 }
 label('A′',end,10,-9)
 label('e⁺',[-1.9,.25,.13],0,-14);label('W',[.65,0,0],-6,5)
}
function draw(){if(!ctx||!canvas.value)return;canvas.value.dataset.camera=JSON.stringify({yaw:state.yaw,roll:state.roll,zoom:state.zoom,cx:state.cx,cy:state.cy});ctx.clearRect(0,0,980,551.25);if(props.scene==='cluster')clusters();else if(props.scene==='atom')atom();else detector()}
function setCamera(){
 if(!active.value)return
 camera?.pause()
 const n=page.value
 const target=props.compact
  ? props.narrow?{yaw:-.43,pitch:.28,roll:.20,zoom:.58,cx:220,cy:150}
   : props.original?{yaw:-.43,pitch:.433,roll:0,zoom:.88,cx:421,cy:134}
   :{yaw:-.43,pitch:.28,roll:.20,zoom:.86,cx:421,cy:160}
  : props.scene==='cluster'?{yaw:-.56,pitch:.28,roll:.20,zoom:1.12,cx:665,cy:320}
  : props.scene==='atom'?{yaw:-.56,pitch:.28,roll:.20,zoom:1.05,cx:660,cy:320}
  : props.persistent&&n===2?{yaw:-.95,pitch:.20,roll:.85,zoom:1.70,cx:750,cy:265}
  :{yaw:-.58,pitch:.20,roll:.72,zoom:1.40,cx:720,cy:275}
 if(props.scene==='detector'&&props.compact){
  const saved={...state};Object.assign(state,target,{zoom:1,cx:0,cy:0})
  const envelope:P[]=[]
  for(const x of [.78,4.8])for(const y of [-2,2])for(const z of [-2,2])envelope.push([x,y,z])
  envelope.push([-2.8,0,0],[-1.9,-.48,-.42],[-1.9,.48,.42])
  const projected=envelope.map(proj),xs=projected.map(p=>p[0]),ys=projected.map(p=>p[1])
  const left=Math.min(...xs),right=Math.max(...xs),top=Math.min(...ys),bottom=Math.max(...ys)
  const frame=props.compact?(props.narrow?[10,470,35,275]:[55,900,25,285]):props.persistent&&n===2?[430,955,110,480]:[355,955,110,485]
  target.zoom=Math.min((frame[1]-frame[0])/(right-left),(frame[3]-frame[2])/(bottom-top))
  target.cx=(frame[0]+frame[1])/2-(left+right)/2*target.zoom
  target.cy=(frame[2]+frame[3])/2-(top+bottom)/2*target.zoom
  Object.assign(state,saved)
 }
 if(isStatic()||props.compact||props.scene!=='detector'){Object.assign(state,target);draw();return}
 // One deliberate establishing move, then a fixed diagonal hero composition.
 if(!props.persistent||n===1)Object.assign(state,{...target,yaw:.12,pitch:.10,roll:-.08,zoom:target.zoom*.55})
 camera=animate(state,{...target,duration:2800,ease:'outCubic',onUpdate:draw})
}
function syncLoop(){loop?.pause();setCamera();if(active.value&&!isStatic())loop=animate(state,{t:[state.t,state.t+360],duration:360000,ease:'linear',loop:true,onUpdate:draw})}
onMounted(()=>{const c=canvas.value!;c.width=props.narrow?980:1960;c.height=props.compact?620:1103;ctx=c.getContext('2d');ctx?.scale(2,2);if(props.scene==='cluster')state.t=2;syncLoop();watch([page,active],syncLoop)})
onBeforeUnmount(()=>{loop?.pause();camera?.pause()})
</script>
<template><div class="physics-scene" :class="{compact}"><canvas ref="canvas"/><div v-if="!compact" class="physics-scene-shade"/></div></template>
<style scoped>
.physics-scene{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:-1;background:#0c0d0f}.physics-scene canvas{width:100%;height:100%;object-fit:fill;opacity:.95}.physics-scene-shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(12,13,15,.98) 0%,rgba(12,13,15,.84) 31%,rgba(12,13,15,.34) 55%,transparent 83%),linear-gradient(0deg,rgba(12,13,15,.78),transparent 23%)}.compact{position:relative;z-index:0;background:transparent;width:100%;height:100%}.compact canvas{opacity:1}
</style>
