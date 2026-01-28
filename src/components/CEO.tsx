'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CEO() {
    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                                <Image
                                    src="/images/ceo.jpg"
                                    alt="Cyril Anand"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-8 text-white">
                                    <h3 className="text-3xl font-bold mb-2">Cyril Anand</h3>
                                    <p className="text-orange-400 font-medium tracking-wide uppercase">Chief Executive Officer</p>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -z-10" />
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl -z-10" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-4 block">
                                Leadership
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">
                                <span className="text-white">Trusted </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Business Partner</span>
                            </h2>
                            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                                <p>
                                    "With over 24 years of experience in the telecom and ICT sectors, Cyril brings a proven track record in strategic leadership and digital transformation."
                                </p>
                                <p>
                                    "His expertise will guide us into our next phase of growth, enhancing both our innovative solutions and customer experiences. We look forward to strengthening our market position under his leadership."
                                </p>
                            </div>

                            <div className="mt-10 pt-10 border-t border-slate-800">
                                <blockquote className="text-xl font-medium text-white italic">
                                    "Empowering Your Business with Innovative Solutions"
                                </blockquote>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
