import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About R3BOOT | Recovery & Performance Clinic Dadar Mumbai',
  description: 'Learn about R3BOOT — Mumbai\'s integrated recovery and performance clinic in Dadar. Our team of physiotherapists, therapists and coaches help athletes and active adults recover, perform and thrive.',
  keywords: ['about R3BOOT', 'recovery clinic dadar', 'physiotherapy team mumbai', 'sports clinic about'],
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
