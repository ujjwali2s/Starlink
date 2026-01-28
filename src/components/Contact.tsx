'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export default function Contact() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-4 block">
                                Get In Touch
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Let's Start a Conversation
                            </h2>
                            <p className="text-slate-400 text-lg max-w-xl">
                                Whether you're looking for business solutions, partnerships, or customer support, our team is here to help.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-orange-500" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-2">Visit Us</h4>
                                    <p className="text-slate-400">21st Floor, Manarat Lusail<br />Lusail City, Qatar</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-blue-500" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-2">Email Us</h4>
                                    <Link href="mailto:customers@starlinkworld.com" className="text-slate-400 hover:text-white transition-colors">
                                        customers@starlinkworld.com
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-green-500" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-2">Call Us</h4>
                                    <Link href="tel:+97444283888" className="text-slate-400 hover:text-white transition-colors">
                                        +974 4428 3888
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 text-slate-900 dark:text-white transition-colors duration-300"
                    >
                        <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900/20 text-slate-900 dark:text-white outline-none transition-all" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900/20 text-slate-900 dark:text-white outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900/20 text-slate-900 dark:text-white outline-none transition-all" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900/20 text-slate-900 dark:text-white outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="button" className="w-full py-4 rounded-xl bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 active:scale-95 transition-all flex items-center justify-center gap-2 group">
                                Send Message
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
