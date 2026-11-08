const length = points => points.slice(1).reduce((sum,p,i)=>sum+Math.hypot(...p.map((v,k)=>v-points[i][k])),0)
function atDistance(points,distance){
 for(let i=1;i<points.length;i++){
  const a=points[i-1],b=points[i],segment=Math.hypot(...b.map((v,k)=>v-a[k]))
  if(distance<=segment)return a.map((v,k)=>v+(b[k]-v)*distance/segment)
  distance-=segment
 }
 return points.at(-1)
}
export function particleTimeline(time,incoming,recoil,dark,staticFrame=false){
 const speed=1.5,entryLength=length(incoming),recoilLength=length(recoil),darkLength=length(dark)
 const cycle=(entryLength+Math.max(recoilLength,darkLength))/speed
 const elapsed=staticFrame?entryLength/speed+.35:((time%cycle)+cycle)%cycle
 const outgoing=elapsed-entryLength/speed,distance=outgoing*speed
 return {
  blue:outgoing<0?atDistance(incoming,elapsed*speed):null,
  yellow:outgoing>=0&&distance<recoilLength?atDistance(recoil,distance):null,
  red:outgoing>=0&&distance<darkLength?atDistance(dark,distance):null,
  impact:outgoing>=0&&outgoing<.10,
  showerAge:outgoing-recoilLength/speed,
  cycle,entryTime:entryLength/speed,recoilTime:recoilLength/speed,darkTime:darkLength/speed,
 }
}
