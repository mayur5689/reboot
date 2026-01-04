import React from "react";
import { PortableText } from '@portabletext/react';
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, client, urlFor } from "@/sanity/lib/client";
import { motion } from "framer-motion";

export const revalidate = 60;

// Generate Dynamic Metadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    metaDescription,
    "thumbnail": mainImage.asset->url,
    excerpt,
    "date": publishedAt,
    "author": author->name,
  }`;

    const post = await client.fetch(query, { slug });

    if (!post) {
        return { title: "Blog | R3BOOT", description: "This blog post does not exist." };
    }

    return {
        title: `${post.title} | R3BOOT`,
        description: post.metaDescription || post.excerpt || "Read this article on our blog.",
        openGraph: {
            title: post.title,
            description: post.metaDescription || post.excerpt,
            images: [post.thumbnail].filter(Boolean),
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        }
    };
}

const components = {
    types: {
        image: ({ value }: any) => (
            <div className="relative w-full h-[300px] sm:h-[500px] my-12 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                    src={urlFor(value).url()}
                    alt={value.alt || 'Blog Image'}
                    fill
                    className="object-cover"
                />
                {value.alt && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md text-white px-6 py-3 text-sm font-medium">
                        {value.alt}
                    </div>
                )}
            </div>
        ),
    },
    block: {
        h1: ({ children }: any) => <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-8 mt-16 tracking-tight leading-tight">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-6 mt-12 tracking-tight leading-tight">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-10 tracking-tight">{children}</h3>,
        normal: ({ children }: any) => <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6 font-medium">{children}</p>,
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-8 border-[#513394] dark:border-[#A78BFA] pl-8 py-4 my-12 bg-[#513394]/5 dark:bg-white/5 rounded-r-3xl italic text-2xl font-bold text-gray-800 dark:text-gray-200">
                &ldquo;{children}&rdquo;
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc pl-8 mb-8 space-y-4 text-gray-700 dark:text-gray-300 text-lg font-medium">{children}</ul>,
        number: ({ children }: any) => <ol className="list-decimal pl-8 mb-8 space-y-4 text-gray-700 dark:text-gray-300 text-lg font-medium">{children}</ol>,
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
            return (
                <a href={value.href} rel={rel} className="text-[#513394] dark:text-[#A78BFA] underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity font-bold">
                    {children}
                </a>
            );
        },
        strong: ({ children }: any) => <strong className="font-black text-gray-900 dark:text-white">{children}</strong>,
    },
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 dark:bg-[#0A0A0A]">
                <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Article Not Found</h1>
                <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium">The post you&apos;re looking for might have been moved or deleted.</p>
                <Link
                    href="/blog"
                    className="bg-[#513394] text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all shadow-xl shadow-[#513394]/20"
                >
                    Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <article className="min-h-screen dark:bg-[#0A0A0A] overflow-hidden">
            {/* Hero Header */}
            <div className="relative h-[60vh] sm:h-[70vh] w-full">
                {post.mainImage && (
                    <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12 lg:p-24 container mx-auto">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors font-bold uppercase tracking-widest text-xs"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Articles
                    </Link>

                    <div className="flex flex-wrap gap-3 mb-6">
                        {post.categories?.map((cat: string, i: number) => (
                            <span key={i} className="px-4 py-1.5 bg-[#A78BFA] text-[#0A0A0A] text-[10px] font-black uppercase tracking-widest rounded-full">
                                {cat}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-none max-w-4xl">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full border-2 border-[#A78BFA] p-0.5">
                                {post.authorImage ? (
                                    <div className="relative w-full h-full rounded-full overflow-hidden">
                                        <Image src={urlFor(post.authorImage).url()} alt={post.author} fill className="object-cover" />
                                    </div>
                                ) : (
                                    <div className="w-full h-full rounded-full bg-[#A78BFA] flex items-center justify-center text-[#0A0A0A] font-black uppercase">
                                        {post.author?.charAt(0)}
                                    </div>
                                )}
                            </div>
                            <div>
                                <p className="text-white text-sm font-black uppercase tracking-widest">{post.author}</p>
                                <p className="text-white/60 text-xs font-bold uppercase tracking-widest mt-1">
                                    {new Date(post.publishedAt).toLocaleDateString("en-IN", { day: 'numeric', month: 'long', year: 'numeric' })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 sm:px-12 lg:px-24 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <PortableText value={post.body} components={components} />
                        </div>

                        {/* FAQs Section */}
                        {post.faqs && post.faqs.length > 0 && (
                            <div className="mt-24 pt-16 border-t border-gray-100 dark:border-white/5">
                                <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-12 tracking-tight">Frequently Asked Questions</h2>
                                <div className="space-y-8">
                                    {post.faqs.map((faq: any, i: number) => (
                                        <div key={i} className="bg-gray-50 dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10">
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">{faq.question}</h4>
                                            <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-12">
                        <div className="sticky top-32">
                            {/* Share Card */}
                            <div className="bg-[#513394] p-10 rounded-3xl text-white shadow-2xl shadow-[#513394]/20 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/20 transition-all duration-700" />
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Ready to start your recovery?</h3>
                                <p className="text-white/80 font-medium mb-8 relative z-10">Expertly guided sessions designed for your peak performance.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-white text-[#513394] px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-gray-100 transition-all relative z-10 shadow-lg"
                                >
                                    Book A Session
                                </Link>
                            </div>

                            {/* Newsletter/Action */}
                            <div className="mt-8 p-10 bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 shadow-xl">
                                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">Stay in the loop</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-8 leading-relaxed">Join our community and get the latest recovery protocols directly in your inbox.</p>
                                <div className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-[#513394] outline-none font-medium transition-all"
                                    />
                                    <button className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:opacity-90 transition-all shadow-lg">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
}
