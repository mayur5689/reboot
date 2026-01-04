"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, urlFor } from "@/sanity/lib/client";

const BlogPage = () => {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const posts = await getAllPosts();
                setBlogs(posts);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <section className="relative pt-[120px] pb-24 dark:bg-[#0A0A0A] px-4 sm:px-6 lg:px-12 min-h-screen">
            <div className="container mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block px-4 py-2 bg-[#513394]/10 text-[#513394] dark:text-[#A78BFA] font-bold rounded-full backdrop-blur-lg mb-6 tracking-wider uppercase text-xs">
                        Latest Insights
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                        Stay Updated with <span className="text-[#513394] dark:text-[#A78BFA]">REBOOT</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                        Expert advice, recovery tips, and the latest in athletic performance technology to help you stay at the top of your game.
                    </p>
                </motion.div>

                {/* Blog Grid */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="w-12 h-12 border-4 border-[#513394] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : blogs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog, index) => (
                            <motion.div
                                key={blog._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/blog/${blog.slug.current}`}
                                    className="group block bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl shadow-xl hover:shadow-[#513394]/10 transition-all duration-500 overflow-hidden h-full"
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
                                                <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">No Image Available</span>
                                            </div>
                                        )}
                                        {/* Date Badge */}
                                        <div className="absolute top-4 left-4 px-4 py-1.5 bg-white/90 dark:bg-[#0A0A0A]/90 backdrop-blur-md text-gray-900 dark:text-white text-xs font-bold rounded-full">
                                            {new Date(blog.publishedAt).toLocaleDateString("en-IN", {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                        </div>
                                    </div>

                                    {/* Blog Content */}
                                    <div className="p-8">
                                        {blog.categories && blog.categories.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {blog.categories.map((category: string, i: number) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 bg-[#513394]/5 text-[#513394] dark:text-[#A78BFA] text-[10px] font-black uppercase tracking-widest rounded-full border border-[#513394]/10"
                                                    >
                                                        {category}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors duration-300 leading-tight mb-4">
                                            {blog.title}
                                        </h3>
                                        {blog.excerpt && (
                                            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-6 font-medium leading-relaxed">
                                                {blog.excerpt}
                                            </p>
                                        )}
                                        <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-white/5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-[#513394]/10 flex items-center justify-center text-[#513394] font-black text-xs">
                                                    {blog.author?.charAt(0) || 'R'}
                                                </div>
                                                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{blog.author || 'R3BOOT Team'}</span>
                                            </div>
                                            <span className="text-[#513394] dark:text-[#A78BFA] font-black text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                                Read More
                                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 dark:bg-white/5 rounded-3xl border border-dashed border-gray-200 dark:border-white/10">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No Articles Found</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-medium">We&apos;re working on bringing you the best recovery tips. Check back soon!</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogPage;
