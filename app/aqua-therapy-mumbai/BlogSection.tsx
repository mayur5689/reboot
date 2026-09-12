'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts, urlFor } from '@/sanity/lib/client'

type BlogPost = {
  _id: string
  title: string
  slug: string
  mainImage?: any
  excerpt?: string
  publishedAt?: string
  author?: string
}

function formatDate(dateStr?: string) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllPosts()
      .then((all: BlogPost[]) => setPosts((all || []).slice(0, 3)))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false))
  }, [])

  if (!loading && posts.length === 0) return null

  return (
    <section className="pt-10 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-28 bg-[#0D0D0D]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">

        <div className="flex items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase mb-4 block">
              RECOVERY READING //
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1]">
              From the <span className="text-[#7B5FCA]">R3BOOT journal</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-[#A78BFA] font-bold text-[14px] shrink-0 hover:underline underline-offset-4"
          >
            View all posts
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-10 h-10 border-4 border-[#513394] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden hover:border-[#513394]/30 transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  {post.mainImage?.asset ? (
                    <Image
                      src={urlFor(post.mainImage).width(600).quality(80).url()}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#513394]/10 flex items-center justify-center">
                      <span className="text-white/30 text-xs font-bold uppercase tracking-widest">R3BOOT</span>
                    </div>
                  )}
                </div>
                <div className="p-5 lg:p-6">
                  {(post.publishedAt || post.author) && (
                    <p className="text-white/35 text-[12px] font-bold mb-2.5">
                      {formatDate(post.publishedAt)}{post.author ? ` · ${post.author}` : ''}
                    </p>
                  )}
                  <h3 className="text-white font-black text-[17px] leading-snug mb-3 group-hover:text-[#A78BFA] transition-colors">
                    {post.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-[#A78BFA] font-bold text-[13px]">
                    Learn More
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
