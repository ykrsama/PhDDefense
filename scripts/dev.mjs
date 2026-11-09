import { spawn } from 'node:child_process'
import { join } from 'node:path'
import { repoRoot, deckDirectory } from '../tools/lib/decks.mjs'
import { prepareSvgThemes } from '../tools/lib/svg-themes.mjs'
const [name='PreDefence',...args]=process.argv.slice(2)
prepareSvgThemes(deckDirectory(name))
const child=spawn(process.execPath,[join(repoRoot,'node_modules/@slidev/cli/bin/slidev.mjs'),'slides.md',...args],{cwd:deckDirectory(name),stdio:'inherit'})
child.on('exit',code=>process.exit(code??1))
