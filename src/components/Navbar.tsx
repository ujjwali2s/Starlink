'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="relative z-50">
                    <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}>
                        Starlink<span className="text-orange-500">World</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className={`text-sm font-medium hover:text-orange-500 transition-colors ${scrolled ? 'text-slate-700 dark:text-slate-200' : 'text-slate-200'}`}>
                        Home
                    </Link>
                    <div className="group relative">
                        <button className={`flex items-center gap-1 text-sm font-medium hover:text-orange-500 transition-colors ${scrolled ? 'text-slate-700 dark:text-slate-200' : 'text-slate-200'}`}>
                            Solutions <ChevronDown className="w-4 h-4" />
                        </button>
                        <div className="absolute top-full left-0 w-64 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-2 border border-slate-100 dark:border-slate-700 overflow-hidden">
                                <Link href="/solutions/hro" className="block px-4 py-3 rounded-lg hover:bg-orange-50 dark:hover:bg-slate-700 transition-colors">
                                    <div className="font-semibold text-slate-800 dark:text-white">HR Outsourcing</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">Maximize workforce potential</div>
                                </Link>
                                <Link href="/solutions/consumer-tech" className="block px-4 py-3 rounded-lg hover:bg-orange-50 dark:hover:bg-slate-700 transition-colors">
                                    <div className="font-semibold text-slate-800 dark:text-white">Consumer Tech</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">Leading smartphone innovation</div>
                                </Link>
                                <Link href="/solutions/bpo" className="block px-4 py-3 rounded-lg hover:bg-orange-50 dark:hover:bg-slate-700 transition-colors">
                                    <div className="font-semibold text-slate-800 dark:text-white">Contact Center</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">Elevate customer experience</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link href="/leadership" className={`text-sm font-medium hover:text-orange-500 transition-colors ${scrolled ? 'text-slate-700 dark:text-slate-200' : 'text-slate-200'}`}>
                        Leadership
                    </Link>
                    <Link href="/about" className={`text-sm font-medium hover:text-orange-500 transition-colors ${scrolled ? 'text-slate-700 dark:text-slate-200' : 'text-slate-200'}`}>
                        About Us
                    </Link>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <Link
                        href="/contact"
                        className="group px-6 py-2.5 rounded-full bg-slate-900 text-white font-medium text-sm hover:bg-orange-500 transition-colors flex items-center gap-2"
                    >
                        Get In Touch
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden relative z-50 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <X className={`w-6 h-6 ${scrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`} />
                    ) : (
                        <Menu className={`w-6 h-6 ${scrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={false}
                animate={mobileMenuOpen ? { opacity: 1, pointerEvents: 'auto' } : { opacity: 0, pointerEvents: 'none' }}
                className="fixed inset-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl z-40 md:hidden pt-24 px-6"
            >
                <div className="flex flex-col gap-6">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-slate-900 dark:text-white">Home</Link>
                    <Link href="/solutions" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-slate-900 dark:text-white">Solutions</Link>
                    <Link href="/leadership" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-slate-900 dark:text-white">Leadership</Link>
                    <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-slate-900 dark:text-white">About Us</Link>
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-orange-600">Get In Touch</Link>
                </div>
            </motion.div>
        </motion.header>
    );
}
