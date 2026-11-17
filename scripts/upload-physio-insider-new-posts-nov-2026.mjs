#!/usr/bin/env node
/**
 * Two new posts built from the Physio Insider questionnaire (Articles 3 and 4).
 *   node scripts/upload-physio-insider-new-posts-nov-2026.mjs          (dry run)
 *   node scripts/upload-physio-insider-new-posts-nov-2026.mjs --write  (creates DRAFTS)
 */
import { createClient } from '@sanity/client'
import { readFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { randomBytes } from 'crypto'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
for (const f of ['.env.local', '.env']) {
  const p = resolve(root, f)
  if (!existsSync(p)) continue
  for (const l of readFileSync(p, 'utf8').split('\n')) {
    const i = l.indexOf('=')
    if (i > 0 && !l.startsWith('#') && !process.env[l.slice(0, i)]) process.env[l.slice(0, i)] = l.slice(i + 1)
  }
}
const HIRAL = '8a6bf0f1-64c7-4ce6-b5da-bef89b57d983'
const VAISHALI = '39779954-05b8-4600-9f87-6ad1876429e7'
const CAT_PHYSIO = '363aaf3d-a61c-4184-9c5b-40a4531eb7a7'
const key = () => randomBytes(6).toString('hex')

// inline: **bold**, [text](/path)
function inline(text) {
  const markDefs = [], children = []
  const re = /(\*\*[^*]+?\*\*|\[[^\]]+?\]\([^)]+?\))/g
  let last = 0, m
  const span = (t, marks = []) => ({ _type: 'span', _key: key(), text: t, marks })
  while ((m = re.exec(text))) {
    if (m.index > last) children.push(span(text.slice(last, m.index)))
    const tok = m[0]
    if (tok.startsWith('**')) children.push(span(tok.slice(2, -2), ['strong']))
    else {
      const mm = tok.match(/^\[([^\]]+?)\]\(([^)]+?)\)$/)
      const k = key()
      markDefs.push({ _key: k, _type: 'link', href: mm[2].startsWith('/') ? 'https://www.r3boot.in' + mm[2] : mm[2] })
      children.push(span(mm[1], [k]))
    }
    last = m.index + tok.length
  }
  if (last < text.length) children.push(span(text.slice(last)))
  return { children, markDefs }
}
const blk = (style, t, extra = {}) => ({ _type: 'block', _key: key(), style, ...inline(t), ...extra })
function parse(src) {
  return src.trim().split('\n').filter((l) => l.trim()).map((l) => {
    if (l.startsWith('TABLE|')) {
      const [, ...rest] = l.split('|')
      const rows = rest.join('|').split(';;').map((r) => r.split('|').map((c) => c.trim()))
      return { _type: 'blogTable', _key: key(), headers: rows[0], rows: rows.slice(1).map((r) => ({ _type: 'row', _key: key(), cells: r })) }
    }
    if (l.startsWith('## ')) return blk('h2', l.slice(3))
    if (l.startsWith('### ')) return blk('h3', l.slice(4))
    if (l.startsWith('> ')) return blk('blockquote', l.slice(2))
    if (l.startsWith('- ')) return blk('normal', l.slice(2), { listItem: 'bullet', level: 1 })
    return blk('normal', l)
  })
}
const faq = (question, answer) => ({ _key: key(), question, answer })

const POSTS = (await import('./data/physio-insider-new-posts.mjs')).default({ HIRAL, VAISHALI, faq })

const write = process.argv.includes('--write')
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'svgevudy',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-13',
  token: process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_TOKEN,
  useCdn: false,
})
for (const p of POSTS) {
  const faqIdx = p.body.indexOf('## Frequently Asked Questions')
  const body = parse(p.body.slice(0, faqIdx))
  const json = JSON.stringify({ body, f: p.faqs, t: p.title, e: p.excerpt, m: p.metaDescription })
  if (/[—–]/.test(json)) throw new Error(p.slug + ': dash')
  if (p.metaDescription.length > 160) throw new Error(p.slug + ': meta ' + p.metaDescription.length)
  const words = p.body.split(/\s+/).length
  console.log(p.slug, 'blocks', body.length, 'words ~' + words, 'meta', p.metaDescription.length, 'faqs', p.faqs.length)
  const pub = await client.fetch(`count(*[_id==$id])`, { id: 'blog-' + p.slug })
  if (pub) console.warn('  WARN published doc exists: blog-' + p.slug + ' (draft will sit on top of it)')
  if (!write) continue
  await client.createOrReplace({
    _id: `drafts.blog-${p.slug}`, _type: 'post', title: p.title,
    slug: { _type: 'slug', current: p.slug }, metaDescription: p.metaDescription, excerpt: p.excerpt,
    author: { _type: 'reference', _ref: p.author },
    categories: [{ _type: 'reference', _ref: CAT_PHYSIO, _key: key() }],
    publishedAt: new Date().toISOString(), body, faqs: p.faqs,
  })
  console.log('  ✓ draft created')
}
