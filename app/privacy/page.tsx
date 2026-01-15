"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0A0A0A] pt-32 pb-20 transition-colors duration-500">
            <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
                {/* Header */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 text-[#513394] dark:text-[#A78BFA] mb-4"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]"></div>
                        <span className="text-[13px] font-bold tracking-[0.3em] uppercase">PRIVACY</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight"
                    >
                        Privacy <span className="text-[#513394] dark:text-[#A78BFA]">Policy</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 dark:text-gray-400 font-medium"
                    >
                        Last updated: 16 January 2026
                    </motion.p>
                </div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="prose prose-lg dark:prose-invert max-w-none space-y-12 text-gray-600 dark:text-gray-300"
                >
                    <section>
                        <p className="text-xl leading-relaxed">
                            R3boot Activelife Pvt Ltd (“R3BOOT”, “we”, “our”, “us”) respects your privacy and is committed to protecting the personal information you share with us.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                            <span className="text-[#513394] dark:text-[#A78BFA]">01.</span> Information We Collect
                        </h2>
                        <div className="space-y-4">
                            <p className="font-bold">a) Personal Information</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Full name</li>
                                <li>Phone number</li>
                                <li>Email address</li>
                                <li>Age and gender</li>
                            </ul>
                            <p className="font-bold">b) Health & Wellness Information</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Injury history</li>
                                <li>Medical conditions</li>
                                <li>Physical limitations</li>
                                <li>Therapy or recovery goals</li>
                            </ul>
                            <p className="font-bold">c) Technical Information</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>IP address</li>
                                <li>Browser type</li>
                                <li>Device information</li>
                                <li>Website usage data</li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                            <span className="text-[#513394] dark:text-[#A78BFA]">02.</span> How We Collect Information
                        </h2>
                        <p>Information is collected through Website contact forms, WhatsApp Business, phone calls, in-person consultations, and intake forms. All form submissions redirect only to <span className="text-[#513394] dark:text-[#A78BFA] font-bold">info.r3boot@gmail.com</span>.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                            <span className="text-[#513394] dark:text-[#A78BFA]">03.</span> Purpose of Data Collection
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Schedule and manage appointments</li>
                            <li>Provide personalized therapy and recovery services</li>
                            <li>Communicate updates and reminders</li>
                            <li>Improve services and client experience</li>
                            <li>Maintain internal records and compliance</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                            <span className="text-[#513394] dark:text-[#A78BFA]">04.</span> Sharing of Information
                        </h2>
                        <p>We do not sell, rent, or trade your personal data. Information may be shared with internal staff for service delivery or when legally required by law.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                            <span className="text-[#513394] dark:text-[#A78BFA]">05.</span> Data Security
                        </h2>
                        <p>We take appropriate measures to protect your information including secure email handling and restricted access. By using our services, you acknowledge that no system is 100% secure.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                            <span className="text-[#513394] dark:text-[#A78BFA]">06.</span> Data Retention
                        </h2>
                        <p>We retain data only as long as necessary for service delivery, legal requirements, or operational needs.</p>
                    </section>

                    <section className="bg-[#F8F9FA] dark:bg-[#1A1A1A] p-8 rounded-[2rem] space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-tight">Contact Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base">
                            <div>
                                <p className="font-bold text-[#513394] dark:text-[#A78BFA] mb-2">Address</p>
                                <p>R3boot Activelife Pvt Ltd<br />Palai Plaza, Office No. 203,<br />Dadar East, Mumbai 400014</p>
                            </div>
                            <div>
                                <p>Phone: +91 9702368612</p>
                                <p>Email: info.r3boot@gmail.com</p>
                            </div>
                        </div>
                    </section>
                </motion.div>
            </div>
        </main>
    );
}
