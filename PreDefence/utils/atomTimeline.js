// Three encounters share one orbital clock: successive outer electrons arrive
// at the annihilation point six seconds apart, with no capture or teleport.
export const ATOM_PERIOD = 18
export const ENCOUNTER_DURATION = 6
export const COLLISION_TIME = 2.4
export const END_HOLD_DURATION = 1
export const OUTGOING_DURATION = ENCOUNTER_DURATION - COLLISION_TIME - END_HOLD_DURATION
export const ANNIHILATION_VERTEX = [-.50, .25, .13]
// Place the illustrative nuclear-field encounter outside the drawn nucleus.
export const NUCLEAR_VERTEX = [.18, .43, .13]
export const ORBIT_SPEED = 2 * Math.PI / ATOM_PERIOD
const clamp = x => Math.max(0, Math.min(1, x))
const smooth = x => { const u = clamp(x); return u * u * (3 - 2 * u) }

export function outerElectronPosition(time, index) {
  const [dx, dy, dz] = [-1.15, .25, .13]
  const radius = Math.hypot(dx, dy, dz), xy = Math.hypot(dx, dy)
  const a = ORBIT_SPEED * (time - COLLISION_TIME) + index * 2 * Math.PI / 3
  return [.65 + dx * Math.cos(a) - radius * dy / xy * Math.sin(a),
    dy * Math.cos(a) + radius * dx / xy * Math.sin(a), dz * Math.cos(a)]
}

export function atomTimeline(time) {
  const t = ((time % ATOM_PERIOD) + ATOM_PERIOD) % ATOM_PERIOD
  const mode = Math.floor(t / ENCOUNTER_DURATION), local = t % ENCOUNTER_DURATION
  const after = Math.max(0, local - COLLISION_TIME)
  return {
    t, mode, local, after,
    collided: local >= COLLISION_TIME,
    incoming: clamp(local / COLLISION_TIME),
    outgoing: clamp(after / OUTGOING_DURATION),
    vertex: mode === 2 ? NUCLEAR_VERTEX : ANNIHILATION_VERTEX,
    // Restore only the consumed electrons on their continuing orbits before reset.
    electrons: [0, 1, 2].filter(i => !(i === 0 && t >= COLLISION_TIME) && !(i === 2 && t >= ENCOUNTER_DURATION + COLLISION_TIME)),
    returningElectronsOpacity: smooth((t - (ATOM_PERIOD - .8)) / .8),
    recoilReturn: 1 - smooth((local - 5) / 1),
    eventOpacity: smooth(local / .3) * smooth((ENCOUNTER_DURATION - local) / .45),
  }
}
