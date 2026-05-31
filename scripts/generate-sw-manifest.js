import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = join(__dirname, '..')
const DIST_DIR = join(PROJECT_ROOT, 'dist')
const SW_SRC = join(PROJECT_ROOT, 'sw.js')
const SW_DEST = join(DIST_DIR, 'sw.js')

if (!existsSync(DIST_DIR)) {
  console.error('❌ dist folder not found. Run build first.')
  process.exit(1)
}

// Collect all hashed assets from dist/assets (excluding translation chunks)
// Translation chunks are loaded on-demand via dynamic import() — precaching them
// would negate the lazy-loading benefit (~40KB of unused translations per user).
// They're still served via staleWhileRevalidate after first navigation to that language.
const assetsDir = join(DIST_DIR, 'assets')
const buildAssets = []

if (existsSync(assetsDir)) {
  const files = readdirSync(assetsDir)
  for (const file of files) {
    // Only include hashed JS/CSS files (contain hash in filename)
    // Exclude 2-letter language code chunks (e.g. en-xxx.js, pt-xxx.js)
    if (/\-[a-zA-Z0-9]{6,12}\.(js|css)$/.test(file) && !/^[a-z]{2}\-/.test(file)) {
      buildAssets.push(`/assets/${file}`)
    }
  }
}

// Read the source sw.js and inject manifest
let swContent = readFileSync(SW_SRC, 'utf-8')

if (buildAssets.length === 0) {
  console.log('⚠️ No hashed assets found, copying SW without manifest')
} else {
  const manifestJson = JSON.stringify(buildAssets)
  // Replace the PRECACHE_ASSETS declaration block with injected manifest.
  // CRITICAL: Must match only the 3-line ternary block, not the rest of the file.
  // Using multiline with explicit line boundaries prevents the greedy [^;]+ bug
  // that consumed all event listeners in Round 1.
  swContent = swContent.replace(
    /const PRECACHE_ASSETS = typeof __BUILD_MANIFEST__ !== 'undefined'\n  \? __BUILD_MANIFEST__\n  : \[\]/,
    `const PRECACHE_ASSETS = ${manifestJson}`,
  )
  console.log(`✅ Injected ${buildAssets.length} assets into SW manifest`)
}

writeFileSync(SW_DEST, swContent)
console.log('✅ Service Worker copied to dist/sw.js')
