#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script helps optimize images for the portfolio.
 * 
 * Usage:
 * 1. Install dependencies: npm install -D sharp
 * 2. Place your source images in: public/projects/
 * 3. Run: node scripts/optimize-images.js
 * 
 * This will:
 * - Convert images to WebP format
 * - Create responsive variants (thumbnail, medium, large)
 * - Optimize compression for web
 */

import sharp from 'sharp';
import { readdir, mkdir, access } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');
const SOURCE_DIR = join(PROJECT_ROOT, 'public', 'projects');
const OUTPUT_DIR = join(PROJECT_ROOT, 'public', 'projects');

const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp'];

async function optimizeImage(inputPath, outputPath) {
  const filename = inputPath.split('/').pop().split('.')[0];
  
  try {
    const metadata = await sharp(inputPath).metadata();
    console.log(`Processing: ${filename} (${metadata.width}x${metadata.height})`);

    const sizes = [
      { name: 'thumbnail', width: 400 },
      { name: 'medium', width: 800 },
      { name: 'large', width: 1200 },
    ];

    for (const size of sizes) {
      const output = join(outputPath, `${filename}-${size.name}.webp`);
      await sharp(inputPath)
        .resize({ width: size.width, withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(output);
      console.log(`  ✓ Created ${size.name}: ${output}`);
    }

    const avifOutput = join(outputPath, `${filename}.avif`);
    await sharp(inputPath)
      .webp({ quality: 80, effort: 6 })
      .toFile(join(outputPath, `${filename}.webp`));
    console.log(`  ✓ Created WebP: ${outputPath}/${filename}.webp`);

  } catch (error) {
    console.error(`Error processing ${filename}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Image Optimization Script\n');

  if (!existsSync(SOURCE_DIR)) {
    console.log(`Creating source directory: ${SOURCE_DIR}`);
    await mkdir(SOURCE_DIR, { recursive: true });
    console.log('\n📁 Please place your images in the "public/projects" folder and run again.');
    return;
  }

  const files = await readdir(SOURCE_DIR);
  const images = files.filter(f => IMAGE_EXTENSIONS.some(ext => f.toLowerCase().endsWith(ext)));

  if (images.length === 0) {
    console.log('No images found in public/projects folder.');
    return;
  }

  console.log(`Found ${images.length} images to optimize\n`);

  for (const image of images) {
    const inputPath = join(SOURCE_DIR, image);
    await optimizeImage(inputPath, OUTPUT_DIR);
  }

  console.log('\n✅ Optimization complete!');
  console.log('\nNext steps:');
  console.log('1. Update the PROJECTS array in src/constants/data.ts');
  console.log('2. Use the optimized image paths (e.g., /projects/image-thumbnail.webp)');
}

main().catch(console.error);
