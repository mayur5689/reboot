#!/usr/bin/env node
/**
 * Push Q&A-structured content updates to Sanity for the 5 contrast therapy blogs.
 *
 * Usage:
 *   SANITY_API_WRITE_TOKEN=xxx node scripts/update-contrast-blogs-qa.mjs
 *   SANITY_API_WRITE_TOKEN=xxx node scripts/update-contrast-blogs-qa.mjs --publish
 */

import { createClient } from '@sanity/client'
import { readFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { CONTRAST_BLOG_QA_UPDATES } from './data/contrast-therapy-blogs-qa.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

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

const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_TOKEN
const publish = process.argv.includes('--publish')

if (!token) {
  console.error('\nMissing SANITY_API_WRITE_TOKEN.\n')
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
  console.log(`Updating ${CONTRAST_BLOG_QA_UPDATES.length} contrast therapy blogs (Q&A format)...\n`)

  const publishedIds = []

  for (const update of CONTRAST_BLOG_QA_UPDATES) {
    const { documentId, body, faqs, metaDescription, title, excerpt } = update

    const fields = { body, faqs, metaDescription }
    if (title) fields.title = title
    if (excerpt) fields.excerpt = excerpt

    await client.patch(documentId).set(fields).commit()

    console.log(`  ✓ ${documentId}`)
    if (!documentId.startsWith('drafts.')) publishedIds.push(documentId)
  }

  if (publish && publishedIds.length) {
    console.log('\nPublishing updated drafts...')
    const tx = client.transaction()
    for (const id of publishedIds) {
      tx.patch(id, (p) => p.set({}))
    }
    // Use publish API via mutate
    for (const id of publishedIds) {
      await client.request({
        url: `/data/mutate/${client.config().dataset}`,
        method: 'POST',
        body: {
          mutations: [{ publish: { id: `drafts.${id}` } }],
        },
      })
      console.log(`  ✓ published ${id}`)
    }
  } else if (publishedIds.length) {
    console.log('\nDrafts updated. Publish in Sanity Studio or re-run with --publish')
    console.log('  IDs:', publishedIds.join(', '))
  }

  console.log('\nDone.')
}

main().catch((err) => {
  console.error('Update failed:', err.message)
  process.exit(1)
})
