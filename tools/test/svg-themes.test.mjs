import assert from 'node:assert/strict'
import { test } from 'node:test'
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { themeSvg } from '../lib/svg-themes.mjs'

// Compare actual plot geometry, glyphs, links and opacity after removing only paint attributes.
const withoutPaint = s => s.replace(/\s+(?:fill|stroke)="[^"]*"/g, '')
test('theme variants preserve every scientific path, glyph, opacity and clipping definition', () => {
  let count = 0
  for (const deck of ['PreDefence','PreDefenceBackup']) {
    for (const folder of ['figures','physics-output']) {
      const directory = join(deck, 'public', folder)
      if (!existsSync(directory)) continue
      for (const name of readdirSync(directory).filter(n => n.endsWith('.svg'))) {
        const source = readFileSync(join(directory,name),'utf8')
        for (const mode of ['light','dark']) assert.equal(withoutPaint(themeSvg(source,mode)),withoutPaint(source),`${deck}/${folder}/${name} (${mode})`)
        count++
      }
    }
  }
  assert.ok(count > 0)
})

test('white paper becomes transparent while masks and white strokes keep working', () => {
  const source='<svg><defs><mask id="m"><rect fill="white" width="1" height="1"/><path fill="black" d="M0 0"/></mask></defs><rect fill="white" width="2" height="2"/><path stroke="white" fill="none" d="M0 1L2 1"/></svg>'
  for (const mode of ['light','dark']) {
    const themed=themeSvg(source,mode)
    assert.match(themed,/<rect fill="none" width="2"/)
    assert.match(themed,/<rect fill="white" width="1"/)
    assert.match(themed,/<path fill="black" d="M0 0"/)
    assert.doesNotMatch(themed,/stroke="none"/)
  }
})
