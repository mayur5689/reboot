"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from "react-icons/fa";

export default function ContactPage() {
    return (
        <main className="pt-32 pb-20 bg-white dark:bg-[#0A0A0A] transition-colors duration-500">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center justify-center gap-3 text-[#513394] dark:text-[#A78BFA] mb-4"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]"></div>
                        <span className="text-[13px] font-bold tracking-[0.3em] uppercase">GET IN TOUCH</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]"></div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-7xl font-bold text-[#1A1A1A] dark:text-white tracking-tight leading-[1.1] mb-6"
                    >
                        Let&apos;s Start Your <br />
                        <span className="text-[#513394] dark:text-[#A78BFA]">Recovery Journey</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Have questions about our services or want to book a session?
                        Reach out to us and our team will get back to you shortly.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-[#F8F9FA] dark:bg-[#1A1A1A] rounded-[3rem] p-8 md:p-12 shadow-xl border border-transparent dark:border-white/5"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-4">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-full px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#513394] dark:focus:ring-[#A78BFA] transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-4">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-full px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#513394] dark:focus:ring-[#A78BFA] transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-4">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                        className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-full px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#513394] dark:focus:ring-[#A78BFA] transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-4">Subject</label>
                                    <select
                                        className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-full px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#513394] dark:focus:ring-[#A78BFA] transition-all appearance-none"
                                    >
                                        <option>General Inquiry</option>
                                        <option>Booking a Session</option>
                                        <option>Membership Plans</option>
                                        <option>Partnership</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-4">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="How can we help you?"
                                    className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-[2rem] px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#513394] dark:focus:ring-[#A78BFA] transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#513394] hover:bg-[#412975] text-white font-bold py-5 rounded-full shadow-lg shadow-[#513394]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-10"
                    >
                        {/* Info Cards */}
                        <div className="grid grid-cols-1 gap-6">
                            <div className="flex items-start gap-6 p-6 rounded-[2rem] bg-[#F8F9FA]/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all border border-transparent dark:border-white/5">
                                <div className="w-14 h-14 rounded-2xl bg-[#513394]/10 text-[#513394] dark:text-[#A78BFA] flex items-center justify-center shrink-0">
                                    <FaMapMarkerAlt size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Our Location</h3>
                                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                        909, Mayuresh Cosmos, Plot No. 37, Sector-11,<br />
                                        Airoli, Navi Mumbai - 400 708
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 p-6 rounded-[2rem] bg-[#F8F9FA]/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all border border-transparent dark:border-white/5">
                                <div className="w-14 h-14 rounded-2xl bg-[#513394]/10 text-[#513394] dark:text-[#A78BFA] flex items-center justify-center shrink-0">
                                    <FaPhoneAlt size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Call Us</h3>
                                    <p className="text-gray-500 dark:text-gray-400">+91-22-41632222</p>
                                    <p className="text-gray-500 dark:text-gray-400">+91-99999 88888</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 p-6 rounded-[2rem] bg-[#F8F9FA]/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all border border-transparent dark:border-white/5">
                                <div className="w-14 h-14 rounded-2xl bg-[#513394]/10 text-[#513394] dark:text-[#A78BFA] flex items-center justify-center shrink-0">
                                    <FaEnvelope size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Us</h3>
                                    <p className="text-gray-500 dark:text-gray-400">info@r3boot.com</p>
                                    <p className="text-gray-500 dark:text-gray-400">support@r3boot.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 p-6 rounded-[2rem] bg-[#F8F9FA]/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all border border-transparent dark:border-white/5">
                                <div className="w-14 h-14 rounded-2xl bg-[#513394]/10 text-[#513394] dark:text-[#A78BFA] flex items-center justify-center shrink-0">
                                    <FaClock size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Working Hours</h3>
                                    <p className="text-gray-500 dark:text-gray-400">Mon - Fri: 6:00 AM - 10:00 PM</p>
                                    <p className="text-gray-500 dark:text-gray-400">Sat - Sun: 7:00 AM - 8:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <a
                            href="https://wa.me/912241632222"
                            target="_blank"
                            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-[2rem] shadow-lg transition-all hover:scale-[1.02]"
                        >
                            <FaWhatsapp size={24} />
                            Chat on WhatsApp
                        </a>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
