/**
 * Validates that all translation files have the same set of top-level keys.
 * Run: node scripts/validate-translations.js
 * Exit code: 0 = all good, 1 = mismatch found
 */

import { readdir, readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const translationsDir = resolve(__dirname, '..', 'src', 'constants', 'translations')

function extractTopLevelKeys(code) {
  // Find: const translation: TranslationContent = {
  const startMatch = code.match(/const\s+\w+\s*:\s*TranslationContent\s*=\s*\{/)
  if (!startMatch) return null

  const startIdx = code.indexOf(startMatch[0]) + startMatch[0].length
  let braceCount = 1
  let objEnd = startIdx

  for (let i = startIdx; i < code.length && braceCount > 0; i++) {
    if (code[i] === '{') braceCount++
    else if (code[i] === '}') braceCount--
    if (braceCount === 0) {
      objEnd = i
      break
    }
  }

  const objContent = code.substring(startIdx, objEnd)
  // Match top-level keys: identifier at depth 1 (indented with 2 spaces)
  const keys = [...objContent.matchAll(/^\s{2}(\w+)\s*:/gm)].map(m => m[1])
  return keys
}

async function main() {
  const files = (await readdir(translationsDir)).filter(f => f.endsWith('.ts') && f !== 'index.ts')
  let referenceKeys = null
  let referenceFile = null
  const errors = []

  for (const file of files.sort()) {
    const code = await readFile(resolve(translationsDir, file), 'utf-8')
    const keys = extractTopLevelKeys(code)

    if (!keys) {
      errors.push(`${file}: could not parse TranslationContent object`)
      continue
    }

    if (!referenceKeys) {
      referenceKeys = keys
      referenceFile = file
    } else if (JSON.stringify(keys) !== JSON.stringify(referenceKeys)) {
      const missing = referenceKeys.filter(k => !keys.includes(k))
      const extra = keys.filter(k => !referenceKeys.includes(k))
      if (missing.length > 0) errors.push(`${file}: missing keys [${missing.join(', ')}]`)
      if (extra.length > 0) errors.push(`${file}: extra keys [${extra.join(', ')}]`)
    }
  }

  if (errors.length === 0) {
    console.log(
      `✅ All ${files.length} translation files have matching top-level keys (reference: ${referenceFile})`,
    )
    console.log(`   Keys: ${referenceKeys.join(', ')}`)
    process.exit(0)
  } else {
    console.error('❌ Translation key mismatches found:')
    for (const error of errors) {
      console.error(`   ${error}`)
    }
    process.exit(1)
  }
}

main()
