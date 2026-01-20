/**
 * Image Optimization Script
 * Converts all images to WebP format with responsive sizes
 * Run with: node scripts/optimize-images.js
 */

import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ASSETS_DIR = path.join(__dirname, '..', 'assets')
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images')

// Responsive sizes to generate
const SIZES = [400, 600, 800, 1200]

// Quality settings
const QUALITY = 80

async function optimizeImages() {
    console.log('🖼️  Starting image optimization...\n')

    // Create output directory
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true })
    }

    // Get all image files
    const files = fs.readdirSync(ASSETS_DIR).filter(file =>
        /\.(jpg|jpeg|png)$/i.test(file)
    )

    console.log(`Found ${files.length} images to optimize\n`)

    for (const file of files) {
        const inputPath = path.join(ASSETS_DIR, file)
        const baseName = path.basename(file, path.extname(file))

        console.log(`Processing: ${file}`)

        try {
            const image = sharp(inputPath)
            const metadata = await image.metadata()

            // Generate responsive sizes
            for (const width of SIZES) {
                // Skip if original is smaller than target
                if (metadata.width && metadata.width < width) continue

                const outputName = `${baseName}-${width}w.webp`
                const outputPath = path.join(OUTPUT_DIR, outputName)

                await sharp(inputPath)
                    .resize(width, null, {
                        withoutEnlargement: true,
                        fit: 'inside'
                    })
                    .webp({ quality: QUALITY })
                    .toFile(outputPath)

                const stats = fs.statSync(outputPath)
                console.log(`  ✓ ${outputName} (${(stats.size / 1024).toFixed(0)}KB)`)
            }

            // Also create a full-size WebP
            const fullOutputPath = path.join(OUTPUT_DIR, `${baseName}.webp`)
            await sharp(inputPath)
                .webp({ quality: QUALITY })
                .toFile(fullOutputPath)

            const fullStats = fs.statSync(fullOutputPath)
            console.log(`  ✓ ${baseName}.webp (${(fullStats.size / 1024).toFixed(0)}KB)`)
            console.log('')

        } catch (err) {
            console.error(`  ✗ Error processing ${file}: ${err.message}`)
        }
    }

    console.log('\n✅ Image optimization complete!')
    console.log(`Output directory: ${OUTPUT_DIR}`)
}

optimizeImages().catch(console.error)
