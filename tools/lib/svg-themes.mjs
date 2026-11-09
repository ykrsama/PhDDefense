import { parse } from '@vue/compiler-dom'
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'

function color(value) {
  if (value === 'black') return [0, 0, 0]
  if (value === 'white') return [1, 1, 1]
  if (/^#[\da-f]{3}$/i.test(value)) return [...value.slice(1)].map(c => parseInt(c + c, 16) / 255)
  if (/^#[\da-f]{6}$/i.test(value)) return value.slice(1).match(/../g).map(c => parseInt(c, 16) / 255)
  const rgb = value.match(/^rgb\(([^)]+)\)$/)
  if (rgb) return rgb[1].split(',').map(c => parseFloat(c) / (c.includes('%') ? 100 : 255))
}
function paint(value, mode, ink, property) {
  const rgb = color(value)
  if (!rgb) return value
  const hi = Math.max(...rgb), lo = Math.min(...rgb)
  if (lo > .995) return property === 'fill' ? 'none' : (mode === 'dark' ? '#f0f1f3' : '#33465e') // Paper, plot panels and legend backgrounds.
  const luminance = c => c.reduce((s, x, i) => s + [0.2126,0.7152,0.0722][i] * (x <= .04045 ? x / 12.92 : ((x + .055) / 1.055) ** 2.4), 0)
  if (mode === 'light') {
    if (!ink && lo > .55) return value
    let result = rgb
    while (luminance(result) > .24) result = result.map(v => v * .97)
    return `rgb(${result.map(v => Math.round(v * 255)).join(',')})`
  }
  if (hi - lo < .035) {
    // Soft white axes and labels; gray grids remain visually subordinate.
    const v = Math.round(240 - lo * 115)
    return `rgb(${v},${v + 1},${v + 3})`
  }
  let result = rgb
  if (ink || lo <= .55) {
    // Lift dark series towards white without changing their hue/order.
    let blend = 0
    while (luminance(result) < .28 && blend < .7) {
      blend += .025
      result = rgb.map(v => v + (1 - v) * blend)
    }
  } else if (lo > .55) {
    // Dim pastel exclusion areas so the white labels remain readable.
    result = rgb.map(v => v * .48)
  }
  return `rgb(${result.map(v => Math.round(v * 255)).join(',')})`
}

export function themeSvg(source, mode) {
  // Mask the XML declaration for the parser while preserving every source offset.
  const ast = parse(source.replace(/<\?xml[^?]*\?>/, m => ' '.repeat(m.length)))
  const patches = []
  function visit(node, protectedPaint = false) {
    if (node.type !== 1) return
    protectedPaint ||= ['mask','clipPath','filter'].includes(node.tag)
    const containsGlyph = n => n.type === 1 && (['text','tspan','use'].includes(n.tag) || n.children.some(containsGlyph))
    const textInk = containsGlyph(node)
    if (!protectedPaint) {
      for (const attr of node.props) {
        if (attr.type !== 6 || !['fill','stroke'].includes(attr.name) || !attr.value) continue
        const mapped = paint(attr.value.content, mode, attr.name === 'stroke' || textInk, attr.name)
        if (mapped !== attr.value.content) patches.push([attr.loc.start.offset, attr.loc.end.offset, `${attr.name}="${mapped}"`])
      }
      // SVG's implicit fill is black, including glyph definitions with no fill attribute.
      if (node.tag === 'svg' && mode === 'dark' && !node.props.some(a => a.name === 'fill')) {
        patches.push([node.loc.start.offset + 4, node.loc.start.offset + 4, ' fill="#f0f1f3"'])
      }
    }
    if (node.tag === 'mask' && mode === 'dark' && !node.props.some(a => a.name === 'fill')) {
      patches.push([node.loc.start.offset + 5, node.loc.start.offset + 5, ' fill="black"'])
    }
    node.children.forEach(c => visit(c, protectedPaint))
  }
  ast.children.forEach(n => visit(n))
  for (const [start, end, value] of patches.sort((a,b) => b[0] - a[0])) source = source.slice(0, start) + value + source.slice(end)
  return source
}

export function prepareSvgThemes(deck) {
  let count = 0
  for (const folder of ['figures','physics-output']) {
    const directory = join(deck, 'public', folder)
    if (!existsSync(directory)) continue
    for (const name of readdirSync(directory).filter(n => n.endsWith('.svg'))) {
      const source = readFileSync(join(directory, name), 'utf8')
      for (const mode of ['light','dark']) {
        const target = join(deck, 'public', 'themed', mode, folder, name)
        mkdirSync(dirname(target), {recursive:true})
        writeFileSync(target, themeSvg(source, mode))
      }
      count++
    }
  }
  return count
}
