'use client'

import { useState } from 'react'

type TocItem = { id: string; text: string }

type BlogTableOfContentsProps = {
  items: TocItem[]
  variant?: 'sidebar' | 'inline'
}

function TocList({ items }: { items: TocItem[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item, index) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="group flex gap-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#513394] dark:hover:text-[#A78BFA] transition-colors leading-snug"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-[#513394]/60 dark:text-[#A78BFA]/60 mt-0.5 shrink-0">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="group-hover:underline underline-offset-4 decoration-2">
              {item.text}
            </span>
          </a>
        </li>
      ))}
    </ol>
  )
}

/** Auto-built from H2 headings — same component on every blog post. */
export function BlogTableOfContents({ items, variant = 'sidebar' }: BlogTableOfContentsProps) {
  const [open, setOpen] = useState(false)

  if (!items.length) return null

  if (variant === 'inline') {
    return (
      <nav
        aria-label="Table of contents"
        className="lg:hidden mb-10 rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] overflow-hidden"
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between px-6 py-4 text-left"
          aria-expanded={open}
        >
          <span className="text-xs font-black uppercase tracking-widest text-gray-900 dark:text-white">
            In this article
          </span>
          <span className="text-[#513394] dark:text-[#A78BFA] text-lg leading-none">{open ? '−' : '+'}</span>
        </button>
        {open && (
          <div className="px-6 pb-6 border-t border-gray-200 dark:border-white/10 pt-4">
            <TocList items={items} />
          </div>
        )}
      </nav>
    )
  }

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] p-8 shadow-lg"
    >
      <p className="text-xs font-black uppercase tracking-widest text-gray-900 dark:text-white mb-6">
        In this article
      </p>
      <TocList items={items} />
    </nav>
  )
}
