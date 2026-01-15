"use client";

import { motion } from "framer-motion";

export default function TermsOfService() {
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
                        <span className="text-[13px] font-bold tracking-[0.3em] uppercase">LEGAL</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight"
                    >
                        Terms of <span className="text-[#513394] dark:text-[#A78BFA]">Service</span>
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
                            By accessing, booking, or using any services provided by R3BOOT, you agree to be bound by these Terms of Service. If you do not agree, do not use our services.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                            <span className="text-[#513394] dark:text-[#A78BFA]">01.</span> About R3BOOT
                        </h2>
                        <p>
                            R3BOOT is a recovery, rehabilitation, physiotherapy, and performance wellness brand offering services including but not limited to physiotherapy, hydrotherapy, Pilates, counselling, mental training, massage therapy, and recovery modalities such as ice baths, sauna, compression therapy, and contrast therapy.
                        </p>
                        <p>
                            R3BOOT operates as a wellness and rehabilitation service provider. We do not provide emergency medical care.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                            <span className="text-[#513394] dark:text-[#A78BFA]">02.</span> Eligibility to Use Services
                        </h2>
                        <p>You must:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Be at least 18 years old, or</li>
                            <li>Be accompanied by a parent or legal guardian if under 18.</li>
                            <li>Provide accurate personal, health, and contact information.</li>
                        </ul>
                        <p>R3BOOT reserves the right to refuse service if information is incomplete, misleading, or poses safety risks.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                            <span className="text-[#513394] dark:text-[#A78BFA]">03.</span> Medical Disclaimer
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>R3BOOT services are not a substitute for medical diagnosis, emergency treatment, or hospital care.</li>
                            <li>You confirm that you have disclosed all relevant medical conditions, injuries, surgeries, medications, and allergies.</li>
                            <li>You understand that participation in physical and recovery-based services involves inherent risks.</li>
                            <li>You agree that R3BOOT is not responsible for complications arising from undisclosed or inaccurately disclosed health information.</li>
                            <li>If you experience severe pain, dizziness, breathlessness, or medical distress, you must inform staff immediately.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                            <span className="text-[#513394] dark:text-[#A78BFA]">04.</span> Assessments & Personalized Programs
                        </h2>
                        <p>All programs are designed based on assessments, professional judgment, and available information. Results vary by individual.</p>
                        <p>R3BOOT does not guarantee outcomes, recovery timelines, or performance improvements. Your responsibility is to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Follow guidance provided by therapists.</li>
                            <li>Communicate discomfort or concerns immediately.</li>
                            <li>Avoid activities advised against by R3BOOT professionals.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                            <span className="text-[#513394] dark:text-[#A78BFA]">05.</span> Bookings, Payments & Packages
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>All sessions must be booked in advance.</li>
                            <li>Payments may be required upfront for single sessions, packages, or memberships.</li>
                            <li>Prices are subject to change without prior notice.</li>
                            <li>Packages are non-transferable unless explicitly stated.</li>
                            <li>Unused sessions may expire based on package terms.</li>
                            <li>R3BOOT may suspend or cancel services due to non-payment or policy violations.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                            <span className="text-[#513394] dark:text-[#A78BFA]">06.</span> Cancellations & No-Shows
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Cancellations must be made at least 24 hours in advance, unless otherwise specified.</li>
                            <li>Late cancellations or no-shows may result in session forfeiture.</li>
                            <li>Repeated no-shows may lead to booking restrictions.</li>
                            <li>R3BOOT reserves the right to modify cancellation policies for events, group sessions, or corporate programs.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                            <span className="text-[#513394] dark:text-[#A78BFA]">07.</span> Safety, Conduct & Facility Rules
                        </h2>
                        <p>While on R3BOOT premises, you agree to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Follow staff instructions at all times.</li>
                            <li>Use equipment only as directed.</li>
                            <li>Maintain respectful conduct toward staff and other clients.</li>
                            <li>Avoid intoxication, substance use, or unsafe behavior.</li>
                        </ul>
                        <p>R3BOOT may immediately terminate sessions without refund if conduct is deemed unsafe, abusive, or disruptive.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                            <span className="text-[#513394] dark:text-[#A78BFA]">08.</span> Assumption of Risk & Limitation of Liability
                        </h2>
                        <p>By using R3BOOT services, you acknowledge and accept the inherent physical and mental risks involved. To the maximum extent permitted by law:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>R3BOOT, its founders, staff, and partners are not liable for injuries, losses, or damages arising from participation.</li>
                            <li>Liability is limited to the amount paid for the specific service in question.</li>
                            <li>Indirect, incidental, or consequential damages are excluded.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                            <span className="text-[#513394] dark:text-[#A78BFA]">09.</span> Mental Health & Counselling Services
                        </h2>
                        <p>Counselling and mental training sessions are supportive and developmental in nature. They are not a replacement for psychiatric care, medication, or crisis intervention. If you are experiencing severe mental health distress or emergencies, you must seek appropriate medical or emergency services.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                            <span className="text-[#513394] dark:text-[#A78BFA]">10.</span> Intellectual Property
                        </h2>
                        <p>All content, branding, programs, materials, videos, and methodologies used by R3BOOT are proprietary. You may not copy, distribute, record, or reproduce any content without written permission.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                            <span className="text-[#513394] dark:text-[#A78BFA]">11.</span> Privacy & Data Use
                        </h2>
                        <p>Your personal and health-related information is handled in accordance with applicable privacy laws. R3BOOT does not sell personal data to third parties.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                            <span className="text-[#513394] dark:text-[#A78BFA]">12.</span> Corporate, Team & Group Programs
                        </h2>
                        <p>Special terms may apply for corporate wellness programs, sports teams, and group sessions. Such engagements may be governed by separate agreements.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                            <span className="text-[#513394] dark:text-[#A78BFA]">13.</span> Modifications to Services or Terms
                        </h2>
                        <p>R3BOOT reserves the right to modify services, schedules, or offerings and update these Terms of Service at any time.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-4">
                            <span className="text-[#513394] dark:text-[#A78BFA]">14.</span> Governing Law & Jurisdiction
                        </h2>
                        <p>These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts located in Mumbai, Maharashtra.</p>
                    </section>

                    <section className="bg-[#F8F9FA] dark:bg-[#1A1A1A] p-8 rounded-[2rem] space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-tight">15. Contact Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base">
                            <div>
                                <p className="font-bold text-[#513394] dark:text-[#A78BFA] mb-2">Address</p>
                                <p>R3boot Activelife Pvt Ltd<br />Palai Plaza, Office No. 203,<br />Swami Gyan Jivandas Marg,<br />Dadar East, Mumbai 400014</p>
                            </div>
                            <div>
                                <p className="font-bold text-[#513394] dark:text-[#A78BFA] mb-2">Contact Details</p>
                                <p>Phone: +91 9702368612</p>
                                <p>WhatsApp: +91 9702368612</p>
                                <p>Email: info.r3boot@gmail.com</p>
                            </div>
                        </div>
                    </section>
                </motion.div>
            </div>
        </main>
    );
}
