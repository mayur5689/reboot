#!/usr/bin/env node
/**
 * Add "Physio Insider" sections (from physio questionnaire answers) to live posts.
 *   node scripts/add-physio-insider-nov-2026.mjs           (dry run)
 *   node scripts/add-physio-insider-nov-2026.mjs --write
 * Idempotent: skips a post that already has a "Physio Insider" heading.
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
const key = () => randomBytes(6).toString('hex')
const span = (text, marks = []) => ({ _type: 'span', _key: key(), text, marks })
const block = (style, children, extra = {}) => ({ _type: 'block', _key: key(), style, markDefs: [], children, ...extra })
const h3 = (t) => block('h3', [span(t)])
const para = (t) => block('normal', [span(t)])
// "Lead: rest" -> bold lead + plain rest
const point = (lead, rest) =>
  block('normal', [span(lead + ' ', ['strong']), span(rest)], { listItem: 'bullet', level: 1 })
const attrib = (t) => block('normal', [span(t, ['em'])])

const HIRAL = 'Dr. Hiral Parikh, Lead Physiotherapist, R3BOOT'
const VAISHALI = 'Dr. Vaishali Vijay Rauniyar, Physiotherapist, R3BOOT'

const JOBS = [
  {
    id: 'blog-spondylolysis-young-cricketers',
    afterText: /^Do you need to rest first and start physio later\?/,
    blocks: [
      h3('Physio Insider: Dr. Hiral Parikh on spondylolysis in young athletes'),
      para('What we see and do in clinic with teenage bowlers and other young athletes:'),
      point('How it shows up:', 'pain when the back arches (extension), and a positive Quadrant test. That combination makes us suspect spondylolysis rather than a routine strain.'),
      point('How we work it out:', 'we look for localised tenderness and muscle spasm, then use the Quadrant test and slump test. X-ray is the first-line scan, and MRI follows when needed. For the first few weeks the athlete avoids hyperextension until the spasm settles.'),
      point('Rehab in four phases:', 'phase 1 reduces muscle spasm and pain, with taping. Phase 2 uses isometric strengthening and stabilising exercises for the core and glutes. Phase 3 builds strength in the glutes, core and lower limb. Phase 4 is the return to sport.'),
      point('How long:', 'recovery is gradual and differs from athlete to athlete, but it usually takes around 3 months.'),
      point('The mistake we see most:', 'young athletes train for strength and skip stability. Core weakness and an imbalance between strength and stability are common. A good programme covers strength, stability, flexibility and mobility together.'),
      point('When to stop and see a doctor now:', 'swelling, loss of power, loss of sensation in the gluteal area, or urinary incontinence.'),
      attrib(HIRAL),
    ],
  },
  {
    id: 'frozen-shoulder-stages-dry-needling',
    beforeHeading: /^Clinical perspective: Dr\. Vaishali/,
    blocks: [
      h3('Physio Insider: what a stage-by-stage plan looks like in clinic'),
      para('Dr. Vaishali Vijay Rauniyar on what patients get wrong and how care changes through the stages:'),
      point('The most common mistakes:', 'stretching too hard in the painful phase, and believing that more movement, even through pain, means faster recovery. It does not.'),
      point('Painful (freezing) stage:', 'dry needling, icing, gentle mobilisations, passive pain-free movements and isometric holds.'),
      point('Stiff (frozen) stage:', 'dry needling, grade 3 and 4 mobilisations, muscle energy techniques (MET), range-of-motion work and strengthening exercises.'),
      point('Thawing stage:', 'more assertive mobilisations, muscle energy techniques and strengthening with resistance bands.'),
      point('Home exercises that help:', 'pendulum swings and isometrics. Active exercises while the shoulder is painful tend to make it worse.'),
      point('What speeds it up or slows it down:', 'pain-free exercise with proper loading helps. Overloading, thyroid problems and diabetes slow recovery.'),
      point('When to look beyond physiotherapy:', 'recurring swelling and stiffness. Get an orthopedic opinion.'),
      attrib(VAISHALI),
    ],
  },
  {
    id: '29ea0dd6-3aa2-4a82-84c6-4d1e7d10768a',
    beforeHeading: /^When to See a Physiotherapist/,
    blocks: [
      h3('Physio Insider: what we see in racquet-sport players'),
      para('Dr. Vaishali Vijay Rauniyar on outer-elbow pain in padel and pickleball players:'),
      point('Telling it apart from golfer\'s elbow and other causes:', 'we check the exact tenderness points, run the special tests for each condition, and take a full history.'),
      point('Why cases are rising:', 'people start playing without any conditioning, with no load management, and then play long, high-intensity sessions. We also compare which muscles are being overworked against the ideal movement and the player\'s actual technique.'),
      point('What works:', 'dry needling, taping, manual therapy and specific loading exercises. Quick fixes do not hold. Expect more than 6 weeks in most cases.'),
      point('Can you keep playing?', 'yes, if the pain is manageable and the elbow is properly taped. If the pain is persistent, stop playing until it settles.'),
      point('Keeping it from coming back:', 'train the forearm and arm muscles properly and specifically for your sport.'),
      attrib(VAISHALI),
    ],
  },
]

const write = process.argv.includes('--write')
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'svgevudy',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-13',
  token: process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_TOKEN,
  useCdn: false,
})
const txt = (b) => (b.children || []).map((c) => c.text).join('')

for (const j of JOBS) {
  if (/[—–]/.test(JSON.stringify(j.blocks))) throw new Error(`${j.id}: dash found`)
  const doc = await client.fetch(`*[_id==$id][0]{_id,_rev,body}`, { id: j.id })
  if (!doc) { console.log('MISSING', j.id); continue }
  if (doc.body.some((b) => b.style === 'h3' && /Physio Insider/.test(txt(b)))) { console.log('SKIP (exists)', j.id); continue }
  let idx
  if (j.beforeHeading) idx = doc.body.findIndex((b) => /^h[23]$/.test(b.style) && j.beforeHeading.test(txt(b)))
  else { const a = doc.body.findIndex((b) => j.afterText.test(txt(b))); idx = a === -1 ? -1 : a + 1 }
  if (idx < 1) { console.log('ANCHOR NOT FOUND', j.id); continue }
  console.log(`${j.id}: insert ${j.blocks.length} blocks at index ${idx} (before: "${txt(doc.body[idx]).slice(0, 50)}")`)
  if (!write) continue
  await client.patch(doc._id).ifRevisionId(doc._rev).insert('before', `body[_key=="${doc.body[idx]._key}"]`, j.blocks).commit()
  console.log('  ✓ patched')
}
