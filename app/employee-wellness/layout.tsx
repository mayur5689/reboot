import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Employee Wellness Program | Recovery Vouchers for Teams | R3BOOT',
  description:
    'Employee wellness at R3BOOT, Mumbai. Employers fund recovery sessions with prepaid vouchers, or issue discount cards so staff pay less at the clinic. Physiotherapist-led care at Dadar East and Lower Parel.',
  keywords: [
    'employee wellness program Mumbai',
    'employer paid physiotherapy voucher',
    'corporate recovery discount card',
    'employee wellness Dadar',
    'team recovery benefit Mumbai',
  ],
  alternates: { canonical: '/employee-wellness' },
}

export default function EmployeeWellnessLayout({ children }: { children: React.ReactNode }) {
  return children
}
