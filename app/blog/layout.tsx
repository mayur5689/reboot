import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recovery & Performance Blog | R3BOOT Mumbai',
  description: 'Expert articles on physiotherapy, sports recovery, contrast therapy, hydrotherapy and mental performance from the R3BOOT team in Dadar, Mumbai.',
  keywords: ['sports recovery blog', 'physiotherapy articles mumbai', 'recovery tips', 'sports performance blog'],
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
