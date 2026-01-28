'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function OurBusiness() {
    return (
        <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 w-full relative"
                    >
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-slate-900/50">
                            <Image
                                src="/images/business/managed-services.png"
                                alt="Starlink Business Operations"
                                fill
                                className="object-cover"
                            />

                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800">
                                <div className="flex items-center gap-4">
                                    <div className="text-4xl font-bold text-orange-600">13+</div>
                                    <div className="text-sm font-medium text-slate-600 dark:text-slate-300">
                                        Business Verticals <br /> Driving Innovation
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-slate-100 dark:bg-slate-800 rounded-full blur-3xl -z-10 transition-colors" />
                    </motion.div>


                    <div className="lg:w-1/2 w-full">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-4 block"
                        >
                            Our Business
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight transition-colors"
                        >
                            Diverse Solutions for a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Digital World</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed transition-colors"
                        >
                            Starlink World Qatar is a powerhouse of expertise, operating across multiple strategic sectors. From empowering consumers with the latest tech to building the nation's digital infrastructure, we turn complex challenges into seamless solutions.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
                        >
                            {[
                                "Retail & Distribution",
                                "Managed Services & ICT",
                                "Outsourcing & HR",
                                "Telecom Infrastructure"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                    <span className="text-slate-700 dark:text-slate-200 font-medium transition-colors">{item}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link
                                href="/our-business"
                                className="inline-flex items-center gap-2 text-orange-600 font-bold hover:gap-4 transition-all group"
                            >
                                Explore All Verticals
                                <ArrowRight className="w-5 h-5 group-hover:text-orange-700" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
