/**
 * Validates that all translation files have the same top-level keys and nested keys.
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
    if (code[i] === "'" || code[i] === '"' || code[i] === '`') {
      const quote = code[i]
      i++
      while (i < code.length && code[i] !== quote) {
        if (code[i] === '\\') i++
        i++
      }
      continue
    }
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

function extractNestedKeys(code, objectKey) {
  const objectMatch = code.match(new RegExp(`^\\s+${objectKey}\\s*:\\s*\\{`, 'm'))
  if (!objectMatch) return null

  const startIdx = code.indexOf(objectMatch[0]) + objectMatch[0].length
  let braceCount = 1
  let objectEnd = startIdx

  for (let i = startIdx; i < code.length && braceCount > 0; i++) {
    if (code[i] === "'" || code[i] === '"' || code[i] === '`') {
      const quote = code[i]
      i++
      while (i < code.length && code[i] !== quote) {
        if (code[i] === '\\') i++
        i++
      }
      continue
    }
    if (code[i] === '{') braceCount++
    else if (code[i] === '}') braceCount--
    if (braceCount === 0) {
      objectEnd = i
      break
    }
  }

  const objectContent = code.substring(startIdx, objectEnd)
  const keys = []
  let depth = 0
  let quote = null
  let isEscaped = false

  for (let i = 0; i < objectContent.length; i++) {
    const char = objectContent[i]
    if (quote) {
      if (isEscaped) {
        isEscaped = false
        continue
      }
      if (char === '\\') {
        isEscaped = true
        continue
      }
      if (char === quote) {
        quote = null
      }
      continue
    }

    if (char === "'" || char === '"' || char === '`') {
      quote = char
      continue
    }

    if (char === '{') {
      depth++
      continue
    }
    if (char === '}') {
      depth--
      continue
    }
    if (depth !== 0 || !/\w/.test(char)) continue

    const keyMatch = objectContent.slice(i).match(/^(\w+)\s*:/)
    if (!keyMatch) continue

    keys.push(keyMatch[1])
    i += keyMatch[0].length - 1
  }

  return keys
}

function compareKeys(errors, file, label, keys, referenceKeys) {
  if (JSON.stringify(keys) === JSON.stringify(referenceKeys)) return

  const missing = referenceKeys.filter(key => !keys.includes(key))
  const extra = keys.filter(key => !referenceKeys.includes(key))

  if (missing.length > 0) errors.push(`${file}: missing ${label} keys [${missing.join(', ')}]`)
  if (extra.length > 0) errors.push(`${file}: extra ${label} keys [${extra.join(', ')}]`)
}

async function main() {
  const files = (await readdir(translationsDir)).filter(f => f.endsWith('.ts') && f !== 'index.ts')
  let referenceKeys = null
  let referenceCareerKeys = null
  let referenceAboutKeys = null
  let referenceStatsLabelsKeys = null
  let referenceA11yKeys = null
  let referenceFile = null
  const errors = []

  for (const file of files.sort()) {
    const code = await readFile(resolve(translationsDir, file), 'utf-8')
    const keys = extractTopLevelKeys(code)
    const careerKeys = extractNestedKeys(code, 'career')
    const aboutKeys = extractNestedKeys(code, 'about')
    const statsLabelsKeys = extractNestedKeys(code, 'statsLabels')
    const a11yKeys = extractNestedKeys(code, 'a11y')

    if (!keys) {
      errors.push(`${file}: could not parse TranslationContent object`)
      continue
    }

    if (!careerKeys) {
      errors.push(`${file}: could not parse career object`)
      continue
    }

    if (!aboutKeys) {
      errors.push(`${file}: could not parse about object`)
      continue
    }

    if (!statsLabelsKeys) {
      errors.push(`${file}: could not parse about.statsLabels object`)
      continue
    }

    if (!a11yKeys) {
      errors.push(`${file}: could not parse a11y object`)
      continue
    }

    if (!referenceKeys) {
      referenceKeys = keys
      referenceCareerKeys = careerKeys
      referenceAboutKeys = aboutKeys
      referenceStatsLabelsKeys = statsLabelsKeys
      referenceA11yKeys = a11yKeys
      referenceFile = file
    } else {
      compareKeys(errors, file, 'top-level', keys, referenceKeys)
      compareKeys(errors, file, 'career', careerKeys, referenceCareerKeys)
      compareKeys(errors, file, 'about', aboutKeys, referenceAboutKeys)
      compareKeys(errors, file, 'about.statsLabels', statsLabelsKeys, referenceStatsLabelsKeys)
      compareKeys(errors, file, 'a11y', a11yKeys, referenceA11yKeys)
    }
  }

  if (errors.length === 0) {
    console.log(
      `✅ All ${files.length} translation files have matching top-level, career, about, and a11y keys (reference: ${referenceFile})`,
    )
    console.log(`   Keys: ${referenceKeys.join(', ')}`)
    console.log(`   Career keys: ${referenceCareerKeys.join(', ')}`)
    console.log(`   About keys: ${referenceAboutKeys.join(', ')}`)
    console.log(`   About statsLabels keys: ${referenceStatsLabelsKeys.join(', ')}`)
    console.log(`   A11y keys: ${referenceA11yKeys.join(', ')}`)
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
