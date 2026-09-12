import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affiliate Partnerships | Partner With R3BOOT Mumbai',
  description:
    'Partner with R3BOOT, Dadar. For gyms, sports clubs, personal trainers and doctors - refer clients for physiotherapy-led recovery and earn referral credit. No fee to join.',
  keywords: [
    'R3BOOT affiliate partnership',
    'gym referral partnership Mumbai',
    'physiotherapy clinic partner program',
    'trainer referral program Mumbai',
    'doctor referral physiotherapy Mumbai',
  ],
  alternates: { canonical: '/partnerships' },
}

export default function PartnershipsLayout({ children }: { children: React.ReactNode }) {
  return children
}
