#!/usr/bin/env node
/**
 * Create or update sauna blog drafts in Sanity.
 *
 * Usage:
 *   SANITY_API_WRITE_TOKEN=xxx node scripts/push-sauna-blogs.mjs
 */

import { createClient } from '@sanity/client'
import { readFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { SAUNA_BLOG_UPDATES } from './data/sauna-blogs-qa.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const AUTHOR_REF = '39779954-05b8-4600-9f87-6ad1876429e7'
const CATEGORY_REF = 'fdcd74bf-a430-4304-82d4-5d41ed9c5ee8'

function loadEnv() {
  for (const file of ['.env.local', '.env']) {
    const envPath = resolve(root, file)
    if (!existsSync(envPath)) continue
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
}

loadEnv()

const token =
  process.env.SANITY_API_WRITE_TOKEN ||
  process.env.SANITY_API_TOKEN ||
  (() => {
    try {
      const cfg = JSON.parse(
        readFileSync(`${process.env.HOME}/.config/sanity/config.json`, 'utf8')
      )
      return cfg.authToken
    } catch {
      return null
    }
  })()

if (!token) {
  console.error('\nMissing SANITY_API_WRITE_TOKEN.\n')
  process.exit(1)
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'svgevudy',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-13',
  token,
  useCdn: false,
})

async function main() {
  console.log(`Pushing ${SAUNA_BLOG_UPDATES.length} sauna blogs to Sanity...\n`)

  for (const blog of SAUNA_BLOG_UPDATES) {
    const {
      documentId,
      slug,
      title,
      excerpt,
      metaDescription,
      body,
      faqs,
    } = blog

    await client.createOrReplace({
      _id: documentId,
      _type: 'post',
      title,
      slug: { _type: 'slug', current: slug },
      excerpt,
      metaDescription,
      body,
      faqs,
      author: { _type: 'reference', _ref: AUTHOR_REF },
      categories: [
        { _type: 'reference', _ref: CATEGORY_REF, _key: slug.slice(0, 12) },
      ],
      publishedAt: new Date().toISOString(),
    })

    console.log(`  ✓ ${documentId} (${slug})`)
  }

  console.log('\nDone. Review drafts in Sanity Studio and publish when ready.')
}

main().catch((err) => {
  console.error('Push failed:', err.message)
  process.exit(1)
})
