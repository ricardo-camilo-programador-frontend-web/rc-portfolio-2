import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = join(__dirname, '..')

const src = join(PROJECT_ROOT, 'sw.js')
const dest = join(PROJECT_ROOT, 'dist', 'sw.js')

if (!existsSync(src)) {
  console.error('❌ sw.js not found in project root')
  process.exit(1)
}

if (!existsSync(join(PROJECT_ROOT, 'dist'))) {
  console.error('❌ dist folder not found. Run build first.')
  process.exit(1)
}

copyFileSync(src, dest)
console.log('✅ Service Worker copied to dist/sw.js')
