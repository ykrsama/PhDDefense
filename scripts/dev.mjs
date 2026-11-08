import { spawn } from 'node:child_process'
import { join } from 'node:path'
import { repoRoot, deckDirectory } from '../tools/lib/decks.mjs'
const [name='PreDefence',...args]=process.argv.slice(2)
const child=spawn(process.execPath,[join(repoRoot,'node_modules/@slidev/cli/bin/slidev.mjs'),'slides.md',...args],{cwd:deckDirectory(name),stdio:'inherit'})
child.on('exit',code=>process.exit(code??1))
