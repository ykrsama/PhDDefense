<script setup lang="ts">
// Projection, canvas layering and lifecycle adapted directly from CCNU_Seminar/NJUChapterScene.vue.
// Anime.js drives the camera and physical-scene animation state. Dimensions are in metres.
import { computed, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { animate } from 'animejs'
import { particleTimeline } from '../utils/particleTimeline.js'
import { detectorGeometry as geometry } from '../utils/detectorGeometry.js'
import { atomTimeline, outerElectronPosition, COLLISION_TIME, OUTGOING_DURATION, PARTICLE_SPEED, ORBIT_SPEED } from '../utils/atomTimeline.js'
import { useNav, useSlideContext, useDarkMode } from '@slidev/client'
import { clusterTimeline, CLUSTER_PERIOD } from '../utils/clusterTimeline.js'
const props=withDefaults(defineProps<{scene?:string; persistent?:boolean; compact?:boolean; labels?:boolean; magnet?:boolean; original?:boolean; narrow?:boolean; focus?:string}>(),{scene:'detector',persistent:false,compact:false,labels:false,magnet:false,original:false,narrow:false,focus:''})
const { isDark } = useDarkMode()
const canvas=ref<HTMLCanvasElement>()
const nav=useNav(); const state={t:5,yaw:-.56,pitch:.28,roll:.20,zoom:1,cx:620,cy:328};let ctx:CanvasRenderingContext2D|null=null,loop:any,camera:any
const page=computed(()=>nav.currentPage.value)
const context=props.persistent?undefined:useSlideContext()
const active=computed(()=>props.persistent?page.value<=2:page.value===context?.$page.value)
const isStatic=()=>typeof location!=='undefined'&&((location.search.includes('static')||location.search.includes('print'))||matchMedia('(prefers-reduced-motion: reduce)').matches)
type P=[number,number,number]
function proj(p:P):[number,number,number]{
 // Beam longitudinal axis is local +x (physical +z). Rotate the model,
 // including tracks and label anchors, by -90 degrees before camera projection.
 // This flips the cover/chapter view 180 degrees around the displayed local X axis.
 const [x,y,z]:P=props.scene==='detector'&&!props.compact?[p[0],p[2],-p[1]]:p
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
  const fa=geometry.ecalCenter*Math.cos(turn),fb=-geometry.ecalCenter*Math.sin(turn),fv=-fb*Math.sin(pitch),fd=fb*Math.cos(pitch),fq=10/(10+fd)
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
 return props.scene==='detector'&&!props.compact?[eye[0],-eye[2],eye[1]]:eye
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
function detectorCallout(s:string,p:P,dx:number,dy:number){
 const q=proj(p),x=q[0]+dx,y=q[1]+dy
 ctx!.save();ctx!.font='14px "DM Sans",sans-serif';ctx!.beginPath();ctx!.moveTo(q[0],q[1])
 ctx!.lineTo(x+(dx<0?ctx!.measureText(s).width:0),y-5)
 ctx!.strokeStyle='rgba(174,182,193,.42)';ctx!.lineWidth=.6;ctx!.stroke();ctx!.restore()
 label(s,p,dx,dy)
}
function trackerPlane(x:number,width:number,height:number,thickness:number){
 // Local z is the magnetic bending direction; local y is the narrower vertical axis.
 box(x,-height/2,-width/2,thickness,height,width,'rgba(139,175,224,.46)','rgba(77,149,195,.08)')
 for(let k=1;k<8;k++)path([[x,-height/2,-width/2+k*width/8],[x,height/2,-width/2+k*width/8]],'rgba(139,175,224,.23)',.5)
}
// Temporary model-coordinate guide while tuning the recoil direction.
const showDetectorAxes=false
function detectorAxes(){
 const origin:P=[geometry.targetX,0,0],start=proj(origin),axisLength=.45
 const axes:{name:string;end:P;color:string}[]=[
  {name:'+X',end:[geometry.targetX+axisLength,0,0],color:'#e58b91'},
  {name:'+Y',end:[geometry.targetX,axisLength,0],color:'#a5c2d1'},
  {name:'+Z',end:[geometry.targetX,0,axisLength],color:'#8bafe0'},
 ]
 for(const axis of axes){
  path([origin,axis.end],axis.color,2)
  const end=proj(axis.end),angle=Math.atan2(end[1]-start[1],end[0]-start[0])
  ctx!.save();ctx!.fillStyle=axis.color;ctx!.beginPath();ctx!.moveTo(end[0],end[1])
  for(const sign of [-1,1])ctx!.lineTo(end[0]-9*Math.cos(angle)+sign*4*Math.sin(angle),end[1]-9*Math.sin(angle)-sign*4*Math.cos(angle))
  ctx!.closePath();ctx!.fill()
  const x=end[0]+14*Math.cos(angle),y=end[1]+14*Math.sin(angle)
  ctx!.font='600 15px "DM Sans",sans-serif';ctx!.textAlign='center';ctx!.textBaseline='middle'
  ctx!.fillStyle='rgba(12,13,15,.9)';ctx!.fillRect(x-17,y-11,34,22)
  ctx!.fillStyle=axis.color;ctx!.fillText(axis.name,x,y);ctx!.restore()
 }
 dot(origin,3,'#dce2ea')
}
function detector(){
 // Reference geometry with a visual 1.5x longitudinal stretch of the tracking assembly.
 const {ecalWidth,targetWidth,targetHeight}=geometry
 const hcalHalf=geometry.hcalWidth/2
 box(geometry.hcalFront,-hcalHalf,-hcalHalf,geometry.hcalLength,geometry.hcalWidth,geometry.hcalWidth,'rgba(189,190,221,.3)','rgba(62,58,85,.12)',24,true)
 box(geometry.ecalFront,-ecalWidth/2,-ecalWidth/2,geometry.ecalLength,ecalWidth,ecalWidth,'rgba(165,194,209,.68)','rgba(50,115,97,.15)',10)
 // Magnet open bore; tracker planes use single-direction strip segmentation.
 if(props.compact||props.magnet)for(let y of [-.48,.34])box(geometry.magnetFront,y,-.42,geometry.magnetBack-geometry.magnetFront,.14,.84,'rgba(206,171,110,.36)','rgba(125,93,40,.10)')
 for(const x of geometry.tagPlanes)trackerPlane(x,targetWidth,geometry.trackerHeight,geometry.tagThickness)
 box(geometry.targetX-geometry.targetThickness/2,-targetHeight/2,-targetWidth/2,geometry.targetThickness,targetHeight,targetWidth,'rgba(229,139,145,.95)','rgba(229,139,145,.2)')
 geometry.recoilPlanes.forEach((x,i)=>{
  const width=ecalWidth*geometry.recoilWidthFractions[i],height=geometry.recoilHeights[i]
  trackerPlane(x,width,height,geometry.recoilThickness)
 })
 const incoming=geometry.incoming as P[],recoil=geometry.recoil as P[],dark=geometry.dark as P[]
 path(incoming,'#8bafe0',2);path(recoil,'#8bafe0',2.2);path(dark,'#bdbedd',1.7,[7,6])
 const particles=particleTimeline(state.t,incoming,recoil,dark,isStatic())
 if(particles.blue)dot(particles.blue as P,3,'#d2eeff')
 if(particles.yellow)dot(particles.yellow as P,2.8,'#8bafe0')
 if(particles.red)dot(particles.red as P,2.2,'#bdbedd')
 const showerStart=recoil[recoil.length-1]
 if(particles.showerAge>=0){
  // Keep the developed shower visible until the outgoing tracks finish this cycle.
  const progress=Math.min(1,particles.showerAge/.45),fade=Math.min(1,particles.cycleRemaining/.35)
  for(let k=0;k<11;k++){
   const u=progress*(.65+.35*(k%4)/3)
   const end:P=[showerStart[0]+geometry.ecalLength*.9*u,showerStart[1]+(k-5)*.012*u,showerStart[2]+(k%3-1)*.04*u]
   const showerColor=k%2===0?'206,171,110':'139,175,224'
   path([showerStart,end],`rgba(${showerColor},${.55*fade})`,.9)
  }
 }
 if(props.labels){
  if(!props.focus||props.focus==='tracking'){
   label('Tagging tracker',[geometry.tagCenter,-targetHeight/2,targetWidth/2],-75,32)
   if(props.compact&&!props.focus)detectorCallout('W target',[geometry.targetX,.12,0],-110,-12)
   else label('W target',[geometry.targetX,.12,0],-28,-12)
   label('Recoil tracker',[geometry.recoilCenter,-.15,.25],-15,45)
  }
  if(!props.focus||props.focus==='ecal'){
   const p:P=props.compact?[geometry.ecalCenter,.35,0]:[geometry.ecalCenter,0,-.36]
   if(props.compact&&!props.focus)detectorCallout('ECAL',p,24,-10)
   else label('ECAL',p,-17,-10)
  }
  if(!props.focus||props.focus==='hcal')label('HCAL',props.compact?[geometry.hcalCenter,2.1,0]:[geometry.hcalCenter,0,-2.1],-5,-17)
  if(!props.focus)label('Magnet',props.compact?[(geometry.magnetFront+geometry.magnetBack)/2,.5,0]:[(geometry.magnetFront+geometry.magnetBack)/2,0,-.59],-20,props.compact?-26:-10)
 }
 if(showDetectorAxes)detectorAxes()
}
function sphere(center:P,r:number,col:string,turn=0){for(let j=1;j<12;j++){let b=-Math.PI/2+j*Math.PI/12;path(Array.from({length:65},(_,i):P=>[center[0]+r*Math.cos(b)*Math.cos(i/64*Math.PI*2+turn),center[1]+r*Math.sin(b),center[2]+r*Math.cos(b)*Math.sin(i/64*Math.PI*2+turn)]),col,.6)}for(let j=0;j<12;j++)path(Array.from({length:65},(_,i):P=>{let a=i/64*Math.PI*2,b=j*Math.PI/6+turn;return[center[0]+r*Math.cos(a)*Math.cos(b),center[1]+r*Math.sin(a),center[2]+r*Math.cos(a)*Math.sin(b)]}),col,.6)}
// Soft projected kernels, not opaque spheres or latitude/longitude meshes.
const clusterHash=(n:number)=>{const a=Math.sin(n*127.1+311.7)*43758.5453;return a-Math.floor(a)}
const clusterNormal=(n:number)=>Math.sqrt(-2*Math.log(Math.max(.005,clusterHash(n))))*Math.cos(2*Math.PI*clusterHash(n+57))
function clusterCloud(center:P,radii:P,rgb:number[],alpha:number){
 if(!ctx||alpha<=0)return
 const p=proj(center)
 const axes=radii.map((r,i)=>{const point=[...center] as P;point[i]+=r;const q=proj(point);return[q[0]-p[0],q[1]-p[1]]})
 // Project the covariance of a 3D ellipsoid, preserving its soft depth extent.
 const xx=axes.reduce((v,a)=>v+a[0]*a[0],0),yy=axes.reduce((v,a)=>v+a[1]*a[1],0),xy=axes.reduce((v,a)=>v+a[0]*a[1],0)
 const spread=Math.hypot(xx-yy,2*xy),rx=Math.max(1,Math.sqrt((xx+yy+spread)/2)),ry=Math.max(1,Math.sqrt((xx+yy-spread)/2))
 ctx.save();ctx.translate(p[0],p[1]);ctx.rotate(.5*Math.atan2(2*xy,xx-yy));ctx.scale(rx,ry)
 const g=ctx.createRadialGradient(0,0,0,0,0,1)
 const rgba=(v:number)=>`rgba(${rgb.join(',')},${v})`
 g.addColorStop(0,rgba(alpha));g.addColorStop(.25,rgba(alpha*.74));g.addColorStop(.58,rgba(alpha*.26));g.addColorStop(1,rgba(0))
 ctx.fillStyle=g;ctx.fillRect(-1,-1,2,2);ctx.restore()
}
function clusterGalaxy(p:P,size:number,opacity:number,angle:number){
 if(!ctx||opacity<=0)return
 const q=proj(p),dark=isDark.value
 ctx.save();ctx.translate(q[0],q[1]);ctx.rotate(angle);ctx.scale(1.8,1)
 const r=size*4,g=ctx.createRadialGradient(0,0,0,0,0,r)
 const rgb=dark?'244,220,177':'110,115,140'
 g.addColorStop(0,`rgba(${rgb},${opacity*.8})`);g.addColorStop(.25,`rgba(${rgb},${opacity*.32})`);g.addColorStop(1,`rgba(${rgb},0)`)
 ctx.fillStyle=g;ctx.fillRect(-r,-r,2*r,2*r);ctx.restore()
 ctx.save();ctx.fillStyle=dark?`rgba(255,245,220,${opacity})`:`rgba(46,66,95,${opacity*.8})`;ctx.beginPath();ctx.arc(q[0],q[1],Math.max(.45,size*.5),0,Math.PI*2);ctx.fill();ctx.restore()
}
function clusters(){
 if(!ctx||!canvas.value)return
 const scene=clusterTimeline(state.t),{alpha,after,impact,compression,members}=scene
 canvas.value.dataset.cluster=JSON.stringify({t:scene.t,after,members:members.map(m=>({massX:m.massX,gasX:m.gasX}))})
 ctx.save()
 // A quiet depth field makes the moving cluster galaxies readable as a group.
 for(let i=0;i<68;i++){
  const p:P=[(clusterHash(i+900)-.5)*5.3,(clusterHash(i+1000)-.5)*2.05,(clusterHash(i+1100)-.5)*1.5]
  const q=proj(p);ctx.fillStyle=isDark.value?`rgba(205,215,235,${.10+clusterHash(i)*.18})`:`rgba(78,99,130,${.12+clusterHash(i)*.14})`;ctx.beginPath();ctx.arc(q[0],q[1],i%13===0?1:.55,0,Math.PI*2);ctx.fill()
 }
 const blue=isDark.value?[71,111,244]:[72,100,220]
 const pink=isDark.value?[242,65,119]:[220,55,107]
 // Lensing mass halos keep their broad, diffuse shape through the encounter.
 ctx.globalCompositeOperation=isDark.value?'screen':'source-over'
 for(const m of members){
  const center:P=[m.massX,m.y,m.z]
  clusterCloud(center,[m.size*1.34,m.size*.91,m.size*.7],blue,alpha*(isDark.value?.55:.49))
  for(let j=0;j<9;j++){
   const p:P=[center[0]+clusterNormal(j+11)*m.size*.24,center[1]+clusterNormal(j+81)*m.size*.20,center[2]+clusterNormal(j+151)*m.size*.28]
   clusterCloud(p,[m.size*.65,m.size*.5,m.size*.45],blue,alpha*.075)
  }
 }
 // Gas piles up and broadens transversely; a faint bridge links the two wakes.
 clusterCloud([0,0,0],[.87,.43,.32],pink,alpha*impact*.19)
 for(const [index,m] of members.entries()){
  const center:P=[m.gasX,m.y-.015,m.z+.05],r=m.size*(index===0?.92:.84)
  const width=r*(1-.42*compression),height=r*(.70+.22*compression)
  clusterCloud(center,[width*1.2,height,.55*r],pink,alpha*(isDark.value?.69:.47))
  for(let j=0;j<8;j++){
   const tail=impact*(j/7)*r*.68
   const p:P=[center[0]-m.direction*tail,center[1]+clusterNormal(j+230)*r*.15,center[2]+clusterNormal(j+270)*r*.16]
   clusterCloud(p,[width*.64,height*.62,r*.38],pink,alpha*(.10-.045*j/7))
  }
  // A short, soft bow front supports the gas deformation without wireframe shells.
  if(after>.2){
   const front=Array.from({length:39},(_,i):P=>{const u=(i-19)/19;return[center[0]+m.direction*(width*.73+.20*r*(1-u*u)),center[1]+u*height*.72,center[2]]})
   ctx.save();ctx.shadowColor=`rgba(${pink.join(',')},.25)`;ctx.shadowBlur=5
   path(front,`rgba(${pink.join(',')},${alpha*impact*.22})`,.85);ctx.restore()
  }
 }
 ctx.globalCompositeOperation='source-over'
 // The visible galaxy tracers remain attached to their collisionless mass peaks.
 for(const [index,m] of members.entries()){
  const n=index===0?60:35
  for(let i=0;i<n;i++){
   const seed=i+index*401,p:P=[m.massX+clusterNormal(seed+330)*m.size*.42,m.y+clusterNormal(seed+410)*m.size*.34,m.z+clusterNormal(seed+490)*m.size*.32]
   clusterGalaxy(p,i%17===0?1.8:.65+clusterHash(seed+530)*.65,alpha*(.35+clusterHash(seed+610)*.57),clusterHash(seed+710)*Math.PI)
  }
  clusterGalaxy([m.massX,m.y,m.z],index===0?2.6:2.0,alpha,.12+index*.7)
 }
 ctx.restore()
}
function atom(){
 if(!ctx||!canvas.value)return
 const frame=atomTimeline(state.t),{t,mode,local,after,vertex:origin}=frame
 const vertex=origin as P
 canvas.value.dataset.atom=JSON.stringify({mode,local,electrons:frame.electrons.length})
 // Only the nucleus recoils in the nuclear encounter; the displacement is small.
 const recoil=mode===2?Math.min(after*.045,.09)*frame.recoilReturn:0
 const nucleus:P=[.65+recoil,-recoil*.3,0]
 sphere(nucleus,.19,'rgba(206,171,110,.42)',t*ORBIT_SPEED)
 for(let i=0;i<35;i++){
  const a=i*2.4,b=Math.acos(1-2*(i+.5)/35)
  dot([nucleus[0]+.16*Math.sin(b)*Math.cos(a),nucleus[1]+.16*Math.cos(b),.16*Math.sin(b)*Math.sin(a)],3.5,i%2?'#d6b372':'#8da8c0')
 }
 for(let k=0;k<5;k++){
  const r=.48+k*.21
  const orbit=(a:number):P=>k===4
   ?outerElectronPosition(COLLISION_TIME+a/ORBIT_SPEED,0) as P
   :[.65+r*Math.cos(a),r*Math.sin(a)*Math.cos(k*.54),r*Math.sin(a)*Math.sin(k*.54)]
  path(Array.from({length:121},(_,i)=>orbit(i/120*Math.PI*2)),'rgba(139,175,224,.25)',.8)
  if(k<4)for(let j=0;j<3;j++)dot(orbit(t*ORBIT_SPEED+k+j*2*Math.PI/3),2.5,'#8bafe0')
 }
 for(const i of frame.electrons)dot(outerElectronPosition(t,i) as P,3,'#8bafe0')
 if(frame.returningElectronsOpacity>0)for(const i of [0,2])
  dot(outerElectronPosition(t,i) as P,3,`rgba(139,175,224,${frame.returningElectronsOpacity})`)
 // The incoming positron meets the existing orbiting electron at the vertex.
 const beamGuide:P=[-2.6,vertex[1],vertex[2]],alpha=frame.eventOpacity
 const color=(rgb:string,a=1)=>`rgba(${rgb},${a*alpha})`
 // Invert perspective along either ray so apparent speed stays constant.
 const rayFraction=(end:P,travel:number)=>{
  const a=proj(vertex),b=proj(end),projectedDistance=Math.hypot(b[0]-a[0],b[1]-a[1])
  return travel*(10+a[2])/(projectedDistance*(10+b[2])-travel*(b[2]-a[2]))
 }
 const beamPoint=(travel:number):P=>{
  const u=rayFraction(beamGuide,travel)
  return vertex.map((x,i)=>x+(beamGuide[i]-x)*u) as P
 }
 const incomingLength=PARTICLE_SPEED*COLLISION_TIME
 const outgoingLength=PARTICLE_SPEED*OUTGOING_DURATION
 const start=beamPoint(incomingLength),incoming=beamPoint(incomingLength*(1-frame.incoming))
 let positronLabelPoint:P|undefined=frame.collided?undefined:incoming
 path([start,frame.collided?vertex:incoming],color('229,139,145',.52),1.5)
 if(!frame.collided)dot(incoming,3.5,color('229,139,145'))
 // Match the incoming speed, then hold all final-state particles together.
 // Every final-state particle shares the same length and progress.
 const emit=(end:P,rgb:string,name:string,dashed=false,photon=false)=>{
  const distance=Math.hypot(...end.map((x,i)=>x-vertex[i]))
  const u=rayFraction(end,outgoingLength*frame.outgoing)
  const tip=vertex.map((x,i)=>x+(end[i]-x)*u) as P
  if(photon){
   const points=Array.from({length:90},(_,i):P=>{
    const f=i/89*u,wave=.035*Math.sin(f*distance*28)*Math.sin(i/89*Math.PI)
    return [vertex[0]+(end[0]-vertex[0])*f,vertex[1]+(end[1]-vertex[1])*f+wave,vertex[2]+(end[2]-vertex[2])*f]
   })
   path(points,color(rgb,.68),1.4)
  }else path([vertex,tip],color(rgb,.6),1.5,dashed?[7,6]:[])
  const continuingPositron=mode===2&&name==='e⁺'
  dot(tip,continuingPositron?3.5:3,color(rgb,continuingPositron?1:.85))
  if(continuingPositron)positronLabelPoint=tip
  else{ctx!.save();ctx!.globalAlpha=alpha*Math.min(1,after/.25);label(name,tip,9,name==='χ̄'||name==='γ'?-9:17);ctx!.restore()}
 }
 if(frame.collided){
  if(mode===0){
   emit([2.45,1.12,.28],'194,175,233','χ',true)
   emit([2.30,-.72,-.20],'194,175,233','χ̄',true)
  }else if(mode===1){
   emit([2.45,1.12,.28],'189,190,221','A′',true)
   emit([2.30,-.72,-.20],'206,171,110','γ',false,true)
  }else{
   emit([2.34,-.19,0],'189,190,221','A′',true)
   emit([2.34,1.61,.35],'229,139,145','e⁺')
  }
 }
 // One label follows the positron through the vertex with the same offset and opacity.
 if(positronLabelPoint){ctx.save();ctx.globalAlpha=alpha;label('e⁺',positronLabelPoint,0,-14);ctx.restore()}
 label('W',nucleus,-6,5)
}
function draw(){if(!ctx||!canvas.value)return;canvas.value.dataset.camera=JSON.stringify({yaw:state.yaw,roll:state.roll,zoom:state.zoom,cx:state.cx,cy:state.cy});ctx.clearRect(0,0,980,551.25);if(props.scene==='cluster')clusters();else if(props.scene==='atom')atom();else detector()}
function setCamera(){
 if(!active.value)return
 camera?.pause()
 const n=page.value
 const target:any=props.compact
  ? props.narrow?{yaw:-.43,pitch:.28,roll:.20,zoom:.58,cx:220,cy:150}
   : props.original?{yaw:-.43,pitch:.433,roll:0,zoom:.88,cx:421,cy:134}
   :{yaw:-.43,pitch:.28,roll:.20,zoom:.86,cx:421,cy:160}
  : props.scene==='cluster'?{yaw:-.18,pitch:.14,roll:.12,zoom:.82,cx:715,cy:325}
  : props.scene==='atom'?{yaw:-.56,pitch:.28,roll:.20,zoom:1.05,cx:660,cy:320}
  : props.persistent&&n===2?{yaw:-.95,pitch:.20,roll:.85,zoom:2.80,cx:750,cy:265}
  :{yaw:-.58,pitch:.20,roll:.72,zoom:2.40,cx:720,cy:275}
 if(props.scene==='detector'&&props.compact){
  const saved={...state};Object.assign(state,target,{zoom:1,cx:0,cy:0})
  const envelope:P[]=[]
  for(const x of [geometry.hcalFront,geometry.hcalBack])for(const y of [-2,2])for(const z of [-2,2])envelope.push([x,y,z])
  envelope.push(geometry.incoming[0] as P,[geometry.magnetFront,-.48,-.42],[geometry.magnetBack,.48,.42])
  const projected=envelope.map(proj),xs=projected.map(p=>p[0]),ys=projected.map(p=>p[1])
  const left=Math.min(...xs),right=Math.max(...xs),top=Math.min(...ys),bottom=Math.max(...ys)
  const frame=props.compact?(props.narrow?[10,470,35,275]:[55,900,25,285]):props.persistent&&n===2?[430,955,110,480]:[355,955,110,485]
  target.zoom=Math.min((frame[1]-frame[0])/(right-left),(frame[3]-frame[2])/(bottom-top))
  target.cx=(frame[0]+frame[1])/2-(left+right)/2*target.zoom
  target.cy=(frame[2]+frame[3])/2-(top+bottom)/2*target.zoom
  Object.assign(state,saved)
  if(props.focus){
   const views:Record<string,{point:P;zoom:number}>={
    tracking:{point:[(geometry.tagFront+geometry.ecalBack)/2,0,0],zoom:2.1},
    ecal:{point:[geometry.ecalCenter,0,0],zoom:2.15},
    hcal:{point:[geometry.hcalCenter,0,0],zoom:.49},
   }
   const view=views[props.focus]
   if(view){
    target.zoom=view.zoom
    Object.assign(state,{...target,zoom:1,cx:0,cy:0})
    const anchor=proj(view.point)
    target.cx=480-anchor[0]*view.zoom
    target.cy=155-anchor[1]*view.zoom
    Object.assign(state,saved)
   }
  }
 }
 if(isStatic()||(props.compact&&!props.focus)||props.scene!=='detector'){Object.assign(state,target);draw();return}
 if(props.compact){camera=animate(state,{...target,duration:850,ease:'inOutCubic',onUpdate:draw});return}
 // One deliberate establishing move, then a fixed diagonal hero composition.
 if(!props.persistent||n===1)Object.assign(state,{...target,yaw:.12,pitch:.10,roll:-.08,zoom:target.zoom*.55})
 camera=animate(state,{...target,duration:2800,ease:'outCubic',onUpdate:draw})
}
function syncLoop(){loop?.pause();setCamera();if(active.value&&!isStatic()){const span=props.scene==='cluster'?CLUSTER_PERIOD:360;loop=animate(state,{t:[state.t,state.t+span],duration:span*1000,ease:'linear',loop:true,onUpdate:draw})}}
onMounted(()=>{const c=canvas.value!;c.width=props.narrow?980:1960;c.height=props.compact?620:1103;ctx=c.getContext('2d');ctx?.scale(2,2);if(props.scene==='cluster'){const requested=new URLSearchParams(location.search).get('clusterTime');state.t=requested!==null?Number(requested):isStatic()?10.2:0;}if(props.scene==='atom')state.t=isStatic()?3.8:0;syncLoop();watch([page,active],syncLoop)})
watch(()=>props.focus,()=>setCamera())
watch(isDark,()=>{if(props.scene==='cluster')draw()})
onBeforeUnmount(()=>{loop?.pause();camera?.pause()})
</script>
<template><div class="physics-scene" :class="{compact}" :data-scene="scene"><canvas ref="canvas"/><div v-if="!compact" class="physics-scene-shade"/></div></template>
<style scoped>
.physics-scene{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:-1;background:#0d1829}.physics-scene canvas{width:100%;height:100%;object-fit:fill;opacity:.95}.physics-scene-shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(12,13,15,.98) 0%,rgba(12,13,15,.84) 31%,rgba(12,13,15,.34) 55%,transparent 83%),linear-gradient(0deg,rgba(12,13,15,.78),transparent 23%)}.compact{position:relative;z-index:0;background:transparent;width:100%;height:100%}.compact canvas{opacity:1}
</style>
