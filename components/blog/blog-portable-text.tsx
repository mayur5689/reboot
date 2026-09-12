import Image from 'next/image'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/client'
import { slugifyHeading } from '@/lib/blog/headings'
import { BlogTable } from '@/components/blog/BlogTable'

export const blogPortableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <figure className="my-12">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={urlFor(value).width(1200).quality(85).url()}
              alt={value.alt || 'Blog Image'}
              width={1200}
              height={900}
              className="w-full h-auto rounded-2xl"
            />
          </div>
          {value.alt && (
            <figcaption className="text-sm font-medium text-gray-500 dark:text-gray-400 text-center mt-3 px-2 italic">
              {value.alt}
            </figcaption>
          )}
        </figure>
      )
    },
    blogTable: ({ value }) => (
      <BlogTable
        caption={value.caption}
        headers={value.headers ?? []}
        rows={value.rows ?? []}
      />
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-8 mt-16 tracking-tight leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children, value }) => {
      const text =
        value?.children
          ?.map((child) => ('text' in child ? (child.text ?? '') : ''))
          .join('') ?? ''
      const id = slugifyHeading(text)
      return (
        <h2
          id={id}
          className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-6 mt-12 tracking-tight leading-tight scroll-mt-28"
        >
          {children}
        </h2>
      )
    },
    h3: ({ children }) => (
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-10 tracking-tight scroll-mt-28">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6 font-medium">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-8 border-[#513394] dark:border-[#A78BFA] pl-8 py-4 my-12 bg-[#513394]/5 dark:bg-white/5 rounded-r-3xl italic text-2xl font-bold text-gray-800 dark:text-gray-200">
        &ldquo;{children}&rdquo;
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-8 mb-8 space-y-4 text-gray-700 dark:text-gray-300 text-lg font-medium">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-8 mb-8 space-y-4 text-gray-700 dark:text-gray-300 text-lg font-medium">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href ?? '#'
      const rel = !href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a
          href={href}
          rel={rel}
          className="text-[#513394] dark:text-[#A78BFA] underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity font-bold"
        >
          {children}
        </a>
      )
    },
    strong: ({ children }) => (
      <strong className="font-black text-gray-900 dark:text-white">{children}</strong>
    ),
  },
}

type BlogPortableTextProps = {
  value: Parameters<typeof PortableText>[0]['value']
}

export function BlogPortableText({ value }: BlogPortableTextProps) {
  return <PortableText value={value} components={blogPortableTextComponents} />
}
