"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { Loader2 } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: ""
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setStatusMessage("Thank you! Your message has been sent successfully.");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "General Inquiry",
                    message: ""
                });
            } else {
                const data = await response.json();
                throw new Error(data.message || 'Failed to send message');
            }
        } catch (error: any) {
            setStatus('error');
            setStatusMessage(error.message || "Something went wrong. Please try again later.");
        }
    };

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
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-4">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-full px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#513394] dark:focus:ring-[#A78BFA] transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-4">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
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
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 00000 00000"
                                        className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-full px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#513394] dark:focus:ring-[#A78BFA] transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-4">Subject</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-full px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#513394] dark:focus:ring-[#A78BFA] transition-all appearance-none"
                                    >
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Booking a Session">Booking a Session</option>
                                        <option value="Membership Plans">Membership Plans</option>
                                        <option value="Partnership">Partnership</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-4">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can we help you?"
                                    className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-[2rem] px-6 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#513394] dark:focus:ring-[#A78BFA] transition-all resize-none"
                                ></textarea>
                            </div>

                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-green-600 dark:text-green-400 font-bold"
                                >
                                    <FaCheckCircle className="shrink-0" />
                                    {statusMessage}
                                </motion.div>
                            )}

                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-600 dark:text-red-400 font-bold"
                                >
                                    <FaExclamationCircle className="shrink-0" />
                                    {statusMessage}
                                </motion.div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-[#513394] hover:bg-[#412975] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-5 rounded-full shadow-lg shadow-[#513394]/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
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
                                        R3boot Activelife Pvt Ltd, Palai Plaza, 203,<br />
                                        Swami Gyan Jivandas Marg, Dadar East,<br />
                                        Mumbai, Maharashtra 400014
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 p-6 rounded-[2rem] bg-[#F8F9FA]/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all border border-transparent dark:border-white/5">
                                <div className="w-14 h-14 rounded-2xl bg-[#513394]/10 text-[#513394] dark:text-[#A78BFA] flex items-center justify-center shrink-0">
                                    <FaPhoneAlt size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Call Us</h3>
                                    <p className="text-gray-500 dark:text-gray-400">+91 9702368612</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 p-6 rounded-[2rem] bg-[#F8F9FA]/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all border border-transparent dark:border-white/5">
                                <div className="w-14 h-14 rounded-2xl bg-[#513394]/10 text-[#513394] dark:text-[#A78BFA] flex items-center justify-center shrink-0">
                                    <FaEnvelope size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Us</h3>
                                    <p className="text-gray-500 dark:text-gray-400">info.r3boot@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 p-6 rounded-[2rem] bg-[#F8F9FA]/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all border border-transparent dark:border-white/5">
                                <div className="w-14 h-14 rounded-2xl bg-[#513394]/10 text-[#513394] dark:text-[#A78BFA] flex items-center justify-center shrink-0">
                                    <FaClock size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Working Hours</h3>
                                    <p className="text-gray-500 dark:text-gray-400">Mon - Sun: 8:00 AM - 9:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <a
                            href="https://wa.me/919702368612"
                            target="_blank"
                            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-[2rem] shadow-lg transition-all hover:scale-[1.02]"
                        >
                            <FaWhatsapp size={24} />
                            Chat on WhatsApp
                        </a>
                    </motion.div>
                </div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-[#1A1A1A] h-[450px] relative"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.333831776953!2d72.8433525!3d19.0165524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf87519edaa5%3A0x36815ea9da0ca28c!2sR3boot%20%7C%20Integrated%20Recovery%20Center!5e0!3m2!1sen!2sin!4v1736966800000"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full transition-all duration-700"
                    ></iframe>
                </motion.div>
            </div>
        </main>
    );
}
