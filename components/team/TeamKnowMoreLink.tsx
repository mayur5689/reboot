import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { teamMemberProfilePath } from '@/lib/team'

type Props = {
  slug: string
  className?: string
  variant?: 'light' | 'dark' | 'inline'
  label?: string
}

export function TeamKnowMoreLink({
  slug,
  className = '',
  variant = 'inline',
  label = 'Know more',
}: Props) {
  const base =
    variant === 'dark'
      ? 'inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#C4B5FD] transition-colors'
      : variant === 'light'
        ? 'inline-flex items-center gap-2 text-sm font-bold text-[#513394] dark:text-[#A78BFA] hover:underline underline-offset-4'
        : 'inline-flex items-center gap-1.5 text-sm font-bold text-[#513394] dark:text-[#A78BFA] hover:gap-2 transition-all'

  return (
    <Link href={teamMemberProfilePath(slug)} className={`${base} ${className}`}>
      {label}
      <ArrowRight className="w-4 h-4 flex-shrink-0" aria-hidden />
    </Link>
  )
}
