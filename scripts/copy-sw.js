import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = join(__dirname, '..')

// Generate SW manifest with build assets and copy to dist
const { execSync } = await import('node:child_process')
try {
  execSync('node scripts/generate-sw-manifest.js', { cwd: PROJECT_ROOT, stdio: 'inherit' })
} catch {
  console.error('❌ Failed to generate SW manifest')
  process.exit(1)
}
