#!/usr/bin/env node

import { existsSync } from 'node:fs'
import { mkdir, readdir, writeFile } from 'node:fs/promises'
import { basename, dirname, extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = join(__dirname, '..')
const SOURCE_DIR = join(PROJECT_ROOT, 'public', 'projects')
const OUTPUT_DIR = join(PROJECT_ROOT, 'public', 'optimized')
const MAX_WIDTH = 1920
const WEBP_QUALITY = 75

const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp']

async function optimizeImage(inputPath, outputDir) {
  const filename = basename(inputPath, extname(inputPath))
  const urlMapping = {}

  try {
    const metadata = await sharp(inputPath).metadata()
    const originalWidth = metadata.width || MAX_WIDTH
    const originalHeight = metadata.height || 0
    const targetWidth = Math.min(originalWidth, MAX_WIDTH)

    console.log(`Processing: ${filename} (${originalWidth}x${originalHeight})`)

    const webpOutput = join(outputDir, `${filename}.webp`)
    await sharp(inputPath)
      .resize({
        width: targetWidth,
        withoutEnlargement: true,
        fit: 'inside',
      })
      .webp({ quality: WEBP_QUALITY, effort: 6 })
      .toFile(webpOutput)

    const outputUrl = `/optimized/${filename}.webp`
    urlMapping[`${filename}${extname(inputPath)}`] = outputUrl

    console.log(`  ✓ Created WebP: ${outputUrl}`)

    return {
      original: `${filename}${extname(inputPath)}`,
      optimized: outputUrl,
      width: targetWidth,
    }
  } catch (error) {
    console.error(`Error processing ${filename}:`, error.message)
    return null
  }
}

async function main() {
  console.log('🚀 Image Optimization Script\n')

  if (!existsSync(SOURCE_DIR)) {
    console.log(`Creating source directory: ${SOURCE_DIR}`)
    await mkdir(SOURCE_DIR, { recursive: true })
    console.log('\n📁 Please place your images in the "public/projects" folder and run again.')
    return
  }

  if (!existsSync(OUTPUT_DIR)) {
    await mkdir(OUTPUT_DIR, { recursive: true })
    console.log(`Created output directory: ${OUTPUT_DIR}\n`)
  }

  const files = await readdir(SOURCE_DIR)
  const images = files.filter(f => IMAGE_EXTENSIONS.some(ext => f.toLowerCase().endsWith(ext)))

  if (images.length === 0) {
    console.log('No images found in public/projects folder.')
    return
  }

  console.log(`Found ${images.length} images to optimize\n`)

  const optimizationResults = []
  const urlMapping = {}

  for (const image of images) {
    const inputPath = join(SOURCE_DIR, image)
    const result = await optimizeImage(inputPath, OUTPUT_DIR)
    if (result) {
      optimizationResults.push(result)
      urlMapping[result.original] = result.optimized
    }
  }

  const mappingJson = JSON.stringify(urlMapping, null, 2)
  await writeFile(join(OUTPUT_DIR, 'image-mapping.json'), mappingJson, 'utf-8')

  console.log('\n✅ Optimization complete!')
  console.log(`\n📊 Summary:`)
  console.log(`   - Processed: ${optimizationResults.length} images`)
  console.log(`   - Output: ${OUTPUT_DIR}`)
  console.log(`   - Max width: ${MAX_WIDTH}px`)
  console.log(`   - WebP quality: ${WEBP_QUALITY}%`)
  console.log(`\n📄 Mapping saved to: /public/optimized/image-mapping.json`)
  console.log('\nNext steps:')
  console.log('1. Update the PROJECTS array in src/constants/data.ts')
  console.log('2. Use optimized paths from image-mapping.json')
}

main().catch(console.error)
