import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'

export type BlogAuthor = {
  name: string
  role?: string
  credentials?: string[]
  bio?: string
  image?: Parameters<typeof urlFor>[0]
}

type BlogAuthorCardProps = {
  author: BlogAuthor
  reviewedLabel?: string
}

/** E-E-A-T author block — data from Sanity `author` document on each post. */
export function BlogAuthorCard({ author, reviewedLabel = 'Medically reviewed by' }: BlogAuthorCardProps) {
  if (!author?.name) return null

  return (
    <aside className="my-16 rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] p-8 sm:p-10 shadow-xl">
      <p className="text-[10px] font-black uppercase tracking-widest text-[#513394] dark:text-[#A78BFA] mb-6">
        {reviewedLabel}
      </p>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
        <div className="shrink-0 w-20 h-20 rounded-full border-2 border-[#A78BFA] p-0.5">
          {author.image ? (
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src={urlFor(author.image).width(160).quality(85).url()}
                alt={author.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-full h-full rounded-full bg-[#A78BFA] flex items-center justify-center text-[#0A0A0A] text-2xl font-black uppercase">
              {author.name.charAt(0)}
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
            {author.name}
          </h3>
          {author.role && (
            <p className="text-sm font-bold text-[#513394] dark:text-[#A78BFA] mt-1">{author.role}</p>
          )}
          {author.credentials?.length ? (
            <ul className="flex flex-wrap gap-2 mt-4">
              {author.credentials.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1 rounded-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 text-xs font-bold text-gray-700 dark:text-gray-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          {author.bio && (
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mt-4 font-medium">
              {author.bio}
            </p>
          )}
        </div>
      </div>
    </aside>
  )
}
