'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, Star } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Hero Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 animate-scale-in"
                    style={{ backgroundImage: 'url("/images/hero-bg.png")' }}
                />

                {/* Animated Gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-transparent to-slate-900/50" />

                {/* Floating Orbs for "Alive" feel */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-10 hover:bg-white/15 transition-all cursor-default hover:scale-105"
                    >
                        <Star className="w-4 h-4 text-orange-400 fill-current animate-pulse" />
                        <span className="text-sm font-semibold text-slate-100 tracking-wide uppercase">
                            Qatar's Leading Systems Integrator
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 leading-[1.1] drop-shadow-2xl"
                    >
                        Building Tomorrow's <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 animate-gradient">Digital Future</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-lg md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        Delivering world-class solutions that elevate your business through innovative technology and strategic expertise.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <Link
                            href="/contact"
                            className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-xl overflow-hidden shadow-xl shadow-orange-500/20 transition-all hover:scale-105 hover:shadow-orange-500/40"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative flex items-center gap-3">
                                Discover More
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <Link
                            href="tel:+97444283888"
                            className="group px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-xl hover:bg-white/10 hover:border-white/20 backdrop-blur-sm transition-all hover:scale-105 flex items-center gap-3"
                        >
                            <Phone className="w-6 h-6 text-orange-400 group-hover:rotate-12 transition-transform" />
                            <span>+974 4428 3888</span>
                        </Link>
                    </motion.div>
                </div>
            </div>


        </section>
    );
}
