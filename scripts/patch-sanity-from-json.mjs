#!/usr/bin/env node
/**
 * Patch Sanity documents from MCP-style patch JSON files.
 * Usage: SANITY_API_WRITE_TOKEN=xxx node scripts/patch-sanity-from-json.mjs /tmp/patch-*.json
 */

import { createClient } from '@sanity/client'
import { readFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

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
if (!token) {
  console.error('Missing SANITY_API_WRITE_TOKEN')
  process.exit(1)
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-13',
  token,
  useCdn: false,
})

const files = process.argv.slice(2)
if (!files.length) {
  console.error('Usage: node scripts/patch-sanity-from-json.mjs <patch.json> [...]')
  process.exit(1)
}

for (const file of files) {
  const patchMap = JSON.parse(readFileSync(file, 'utf8'))
  for (const [documentId, { patches }] of Object.entries(patchMap)) {
    const set = patches?.[0]?.set
    if (!set) throw new Error(`Invalid patch file: ${file}`)
    await client.patch(documentId).set(set).commit()
    console.log(`✓ ${documentId}`)
  }
}

console.log('Done.')
