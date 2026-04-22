import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | R3BOOT Mumbai',
  description: 'Terms and conditions for using R3BOOT Recovery & Performance Clinic services in Dadar, Mumbai.',
  alternates: { canonical: '/terms' },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
