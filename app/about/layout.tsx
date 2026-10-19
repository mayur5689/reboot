import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About R3BOOT | Recovery & Performance Clinic Mumbai',
  description: 'Learn about R3BOOT | Mumbai\'s integrated recovery and performance clinic in Dadar. Our team of physiotherapists, therapists and coaches help athletes and active adults recover, perform and thrive.',
  keywords: ['about R3BOOT', 'recovery clinic dadar', 'physiotherapy team mumbai', 'sports clinic about'],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About R3BOOT | Recovery & Performance Clinic Mumbai',
    description: 'Learn about R3BOOT | Mumbai\'s integrated recovery and performance clinic in Dadar. Our team of physiotherapists, therapists and coaches help athletes and active adults recover, perform and thrive.',
    url: 'https://www.r3boot.in/about',
    type: 'website',
    siteName: 'R3BOOT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About R3BOOT | Recovery & Performance Clinic Mumbai',
    description: 'Learn about R3BOOT | Mumbai\'s integrated recovery and performance clinic in Dadar. Our team of physiotherapists, therapists and coaches help athletes and active adults recover, perform and thrive.',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
