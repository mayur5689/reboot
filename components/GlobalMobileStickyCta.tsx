'use client'

import { usePathname } from 'next/navigation'
import { DesktopStickyCta } from '@/components/DesktopStickyCta'
import { MobileStickyCta } from '@/components/MobileStickyCta'
import { stickyConfigForPath } from '@/lib/sticky-pricing'

export function GlobalMobileStickyCta() {
  const pathname = usePathname() || ''
  const config = stickyConfigForPath(pathname)
  if (!config) return null

  return (
    <>
      <div className="h-40 md:hidden" aria-hidden />
      <MobileStickyCta tiers={config.tiers} note={config.note} />
      <DesktopStickyCta tiers={config.tiers} note={config.note} />
    </>
  )
}
