import { FULL_CYCLE_PRICE_LABEL, HALF_CYCLE_PRICE_LABEL } from '@/lib/contrast-therapy/protocol'
import type { StickyPriceTier } from '@/components/MobileStickyCta'

export type StickyCtaConfig = {
  tiers: StickyPriceTier[]
  note?: string
}

export const STICKY_PRESETS = {
  contrast: {
    tiers: [
      { label: '30 min Half', price: HALF_CYCLE_PRICE_LABEL },
      { label: '60 min Full', price: FULL_CYCLE_PRICE_LABEL, featured: true },
    ],
    note: 'Day or Night Cycle. Sauna + ice bath included.',
  },
  compression: {
    tiers: [
      { label: '15 min add-on', price: '₹500' },
      { label: '45 min Recovery', price: '₹1,500', featured: true },
    ],
    note: 'Recovery is standalone. Activation only with another session.',
  },
  massage: {
    tiers: [
      { label: 'Women', price: '₹2,500' },
      { label: 'Men', price: '₹3,500', featured: true },
    ],
    note: '60 to 90 min. Cupping included when indicated.',
  },
  mental: {
    tiers: [{ label: '50 min session', price: '₹2,200', featured: true }],
    note: 'Sports psychology and counselling.',
  },
  physiotherapy: {
    tiers: [{ label: '45 min session', price: '₹2,000', featured: true }],
    note: 'Clinical physiotherapy. Hands-on session.',
  },
  pilates: {
    tiers: [{ label: '45 min session', price: '₹2,000', featured: true }],
    note: 'Physio-led. One-to-one, not a group class.',
  },
  aqua: {
    tiers: [{ label: '45 min session', price: '₹2,000', featured: true }],
    note: 'Supervised aqua treadmill.',
  },
  screening: {
    tiers: [{ label: '90 min screening', price: '₹3,000', featured: true }],
    note: 'Full athlete screening and plan.',
  },
} satisfies Record<string, StickyCtaConfig>

const HIDE_EXACT = new Set(['/privacy', '/terms', '/links'])

type PresetKey = keyof typeof STICKY_PRESETS

const PATH_PRESETS: { test: (path: string) => boolean; key: PresetKey }[] = [
  { test: (p) => p.includes('compression-therapy'), key: 'compression' },
  { test: (p) => p.includes('sports-massage') || p.includes('massage'), key: 'massage' },
  { test: (p) => p.includes('mental-training') || p.includes('counselling'), key: 'mental' },
  {
    test: (p) =>
      p.includes('contrast-therapy') ||
      p.includes('ice-bath') ||
      p.includes('infrared-sauna') ||
      p.includes('cold-plunge'),
    key: 'contrast',
  },
  { test: (p) => p.includes('aqua-therapy'), key: 'aqua' },
  { test: (p) => p.includes('athlete-screening'), key: 'screening' },
  { test: (p) => p.includes('pilates') || p.includes('reformer'), key: 'pilates' },
  {
    test: (p) =>
      p.includes('physio') ||
      p.includes('disc-bulge') ||
      p.includes('post-surgery') ||
      p.includes('sports-injury'),
    key: 'physiotherapy',
  },
]

/** null = hide bar. Empty tiers = Call / WhatsApp only. */
export function stickyConfigForPath(pathname: string): StickyCtaConfig | null {
  if (!pathname) return { tiers: [] }
  if (pathname.startsWith('/studio')) return null
  if (HIDE_EXACT.has(pathname)) return null

  for (const rule of PATH_PRESETS) {
    if (rule.test(pathname)) return STICKY_PRESETS[rule.key]
  }

  return { tiers: [] }
}
