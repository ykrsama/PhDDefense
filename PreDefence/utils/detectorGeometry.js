// Reference dimensions from XLZ-dsimu-geo.png, converted from cm to m.
// Visually stretch the tracking assembly by 1.5 along x about the target.
// Calorimeters retain their dimensions and follow the extended tracking assembly.
const trackingStretch = 1.5
const trackingHeightStretch = 1.3
// Local x follows the beam, z is the bending direction, y is vertical.
const tagLength = .600216 * trackingStretch, recoilLength = .172714 * trackingStretch
const ecalLength = .3834, hcalLength = 3.03601
const targetX = 0, targetThickness = .00035 * trackingStretch, targetGap = .0075 * trackingStretch
const tagBack = targetX - targetThickness / 2 - targetGap
const tagFront = tagBack - tagLength
const recoilFront = targetX + targetThickness / 2 + targetGap
const recoilBack = recoilFront + recoilLength
const recoilThickness = .000214 * trackingStretch
const recoilPlateCoordinates = [-86.25, -71.25, -55.25, -40.25, -4.25, 86.25]
// Map the reference plate-centre span onto the existing assembly, retaining its thickness.
const recoilPlateSpan = recoilLength - recoilThickness
const recoilPlateCenter = recoilFront + recoilPlateSpan / 2
const ecalFront = recoilBack + .001, ecalBack = ecalFront + ecalLength
const hcalFront = ecalBack + .001, hcalBack = hcalFront + hcalLength
export const detectorGeometry = Object.freeze({
  targetX, targetThickness, targetWidth: .20, targetHeight: .10 * trackingHeightStretch, trackerHeight: .10 * trackingHeightStretch,
  tagLength, tagFront, tagBack, tagCenter: (tagFront + tagBack) / 2,
  tagThickness: .000216 * trackingStretch,
  tagPlanes: Array.from({ length: 7 }, (_, i) => tagFront + i * .1 * trackingStretch),
  recoilLength, recoilFront, recoilBack, recoilCenter: (recoilFront + recoilBack) / 2,
  recoilThickness,
  recoilWidthFractions: [20, 20, 20, 24, 36, 50].map(width => width / 50),
  recoilHeights: [10, 10, 10, 11.5, 14, 20].map(height => height / 100 * trackingHeightStretch),
  // Reference x coordinates are centred on zero with a full span of 2 * 86.25.
  recoilPlanes: recoilPlateCoordinates.map(x => recoilPlateCenter + x / (2 * 86.25) * recoilPlateSpan),
  ecalLength, ecalFront, ecalBack, ecalCenter: (ecalFront + ecalBack) / 2, ecalWidth: .5,
  // Keep the previously selected transverse aperture; this change follows beam-axis lengths.
  hcalLength, hcalFront, hcalBack, hcalCenter: (hcalFront + hcalBack) / 2, hcalWidth: 4,
  magnetFront: tagFront - .03, magnetBack: recoilBack + .02,
  incoming: Array.from({ length: 45 }, (_, i) => [tagFront - .4 + i * (targetX - tagFront + .4) / 44, .015, 0]),
  // A gentle bend toward local -z in the xz plane; no vertical recoil deflection.
  recoil: Array.from({ length: 42 }, (_, i) => [targetX + i * (ecalFront - targetX) / 41, .015, (i / 41) ** 2 * -.04]),
  dark: Array.from({ length: 65 }, (_, i) => [targetX + i * (hcalBack - .15 - targetX) / 64, .015, i / 64 * .16]),
})
