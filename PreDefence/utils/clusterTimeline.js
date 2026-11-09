// Artistic merger clock: blue collisionless mass/galaxies pass through;
// pink intracluster gas slows under ram pressure. Units are illustrative.
export const CLUSTER_PERIOD = 16
export const CLUSTER_COLLISION_TIME = 4.6
const clamp = x => Math.max(0, Math.min(1, x))
const smooth = x => { const u = clamp(x); return u*u*(3-2*u) }
export function clusterTimeline(time) {
  const t = ((time % CLUSTER_PERIOD) + CLUSTER_PERIOD) % CLUSTER_PERIOD
  const after = Math.max(0, t - CLUSTER_COLLISION_TIME)
  // Coast to a composed final pose, then hold it for the audience to read.
  const travel = t < 9.4 ? t : 9.4 + .5*(1-Math.exp(-(t-9.4)/.5))
  const elapsed = travel - CLUSTER_COLLISION_TIME
  const alpha = smooth(t/.55)*(1-smooth((t-14.3)/1.1))
  const impact = smooth(after/.7)
  const compression = Math.exp(-(((after-.6)/.9)**2))*impact
  const members = [
    {direction:-1, velocity:.34, size:.9, y:-.055, z:.08},
    {direction:1, velocity:.40, size:.59, y:.055, z:-.08},
  ].map((m,index) => {
    const massX = m.direction*m.velocity*elapsed
    const gasX = t <= CLUSTER_COLLISION_TIME ? massX
      : m.direction*(index===0?.34:.40)*1.05*(1-Math.exp(-after/1.05))
    return {...m, massX, gasX}
  })
  return {t,after,alpha,impact,compression,members}
}
