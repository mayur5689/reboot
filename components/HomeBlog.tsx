"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, urlFor } from "@/sanity/lib/client";

const HomeBlog = () => {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const posts = await getAllPosts();
                // Only show top 3 blogs on homepage
                setBlogs(posts.slice(0, 3));
            } catch (error) {
                console.error("Error fetching blogs for home:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (!loading && blogs.length === 0) return null;

    return (
        <section className="py-24 dark:bg-[#0A0A0A] bg-white relative overflow-hidden transition-colors duration-500">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#513394]/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#513394]/5 blur-[100px] rounded-full -z-10" />

            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-3 text-[#513394] dark:text-[#A78BFA] mb-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]"></div>
                            <span className="text-[13px] font-bold tracking-[0.3em] uppercase">LATEST UPDATES</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.1]">
                            Insights from <br />
                            <span className="text-[#513394] dark:text-[#A78BFA]">Our Experts</span>
                        </h2>
                    </div>

                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#513394] text-white font-bold rounded-full hover:bg-[#412975] transition-all duration-300 group shadow-lg shadow-[#513394]/20"
                    >
                        View All Posts
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                {/* Loading State */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="w-12 h-12 border-4 border-[#513394] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog, index) => (
                            <motion.div
                                key={blog._id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/blog/${blog.slug.current}`}
                                    className="group block bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[2.5rem] shadow-xl hover:shadow-[#513394]/20 transition-all duration-500 overflow-hidden h-full flex flex-col"
                                >
                                    {/* Blog Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        {blog.mainImage ? (
                                            <Image
                                                src={urlFor(blog.mainImage).url()}
                                                alt={blog.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-[#513394]/5 flex items-center justify-center">
                                                <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">No Image</span>
                                            </div>
                                        )}
                                        {/* Date Badge */}
                                        <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 dark:bg-[#0A0A0A]/90 backdrop-blur-md text-gray-900 dark:text-white text-[11px] font-black rounded-xl">
                                            {new Date(blog.publishedAt).toLocaleDateString("en-IN", {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                        </div>
                                    </div>

                                    {/* Blog Content */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors duration-300 leading-tight mb-4 line-clamp-2">
                                            {blog.title}
                                        </h3>

                                        {blog.excerpt && (
                                            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-6 font-medium leading-relaxed">
                                                {blog.excerpt}
                                            </p>
                                        )}

                                        <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100 dark:border-white/5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-[#513394]/10 flex items-center justify-center text-[#513394] font-black text-xs">
                                                    {blog.author?.charAt(0) || 'R'}
                                                </div>
                                                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest leading-none">{blog.author || 'REBOOT TEAM'}</span>
                                            </div>

                                            <div className="w-10 h-10 rounded-full border border-[#513394]/20 flex items-center justify-center text-[#513394] group-hover:bg-[#513394] group-hover:text-white transition-all duration-300">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default HomeBlog;
