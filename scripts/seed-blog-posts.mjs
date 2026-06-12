#!/usr/bin/env node
/**
 * Seed 5 blog posts to Sanity as DRAFTS (drafts.* document IDs).
 * They will NOT appear on the live site until published in Sanity Studio.
 *
 * Usage:
 *   SANITY_API_WRITE_TOKEN=your_token node scripts/seed-blog-posts.mjs
 *
 * Create a token at sanity.io/manage → API → Tokens (Editor permissions).
 */

import { createClient } from '@sanity/client'
import { readFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { DRAFT_POSTS, toDraftDocument } from './data/blog-posts.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

function loadEnv() {
  const envPath = resolve(root, '.env.local')
  if (!existsSync(envPath)) return
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const k = trimmed.slice(0, eq)
    const v = trimmed.slice(eq + 1)
    if (!process.env[k]) process.env[k] = v
  }
}

loadEnv()

const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_TOKEN

if (!token) {
  console.error(
    '\nMissing SANITY_API_WRITE_TOKEN.\n' +
      '1. Go to https://www.sanity.io/manage → your project → API → Tokens\n' +
      '2. Create token with Editor role\n' +
      '3. Run: SANITY_API_WRITE_TOKEN=xxx node scripts/seed-blog-posts.mjs\n'
  )
  process.exit(1)
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-13',
  token,
  useCdn: false,
})

async function main() {
  console.log(`Seeding ${DRAFT_POSTS.length} blog posts as Sanity DRAFTS...\n`)

  for (const post of DRAFT_POSTS) {
    const doc = toDraftDocument(post)
    await client.createOrReplace(doc)
    console.log(`  ✓ draft: ${post.baseId}`)
    console.log(`    title: ${post.title}`)
    console.log(`    studio: Content → Posts → filter "Drafts"\n`)
  }

  console.log('Done. Posts are DRAFTS only, not live on r3boot.in yet.')
  console.log('Next steps in Sanity Studio:')
  console.log('  1. Add hero images (mainImage)')
  console.log('  2. Proofread body + FAQs')
  console.log('  3. Publish when ready\n')
}

main().catch((err) => {
  console.error('Seed failed:', err.message)
  process.exit(1)
})
