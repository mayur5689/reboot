import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Performance and Recovery Centre in Mumbai | R3BOOT',
  description: 'Expert articles on physiotherapy, sports recovery, contrast therapy, aqua therapy and mental performance from the R3BOOT team in Dadar, Mumbai.',
  keywords: ['sports recovery blog', 'physiotherapy articles mumbai', 'recovery tips', 'sports performance blog'],
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Performance and Recovery Centre in Mumbai',
    description: 'Expert articles on physiotherapy, sports recovery, contrast therapy, aqua therapy and mental performance from the R3BOOT team in Dadar, Mumbai.',
    url: 'https://www.r3boot.in/blog',
    type: 'website',
    siteName: 'R3BOOT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Performance and Recovery Centre in Mumbai',
    description: 'Expert articles on physiotherapy, sports recovery, contrast therapy, aqua therapy and mental performance from the R3BOOT team in Dadar, Mumbai.',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
