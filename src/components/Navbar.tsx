'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-gradient">
                    Starlink World
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8">
                    <li><Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Home</Link></li>
                    <li><Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">About Us</Link></li>
                    <li><Link href="/leadership" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Leadership</Link></li>
                    <li><Link href="/solutions" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Business Solutions</Link></li>
                    <li><Link href="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Careers</Link></li>
                    <li><Link href="/newsroom" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Newsroom</Link></li>
                    <li><Link href="/contact" className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-gray-900 font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">Contact Us</Link></li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0a0e27] border-t border-cyan-500/30">
                    <ul className="flex flex-col px-6 py-4 space-y-3">
                        <li>
                            <Link
                                href="/"
                                className="text-white hover:text-cyan-400 transition-colors font-medium block py-2 px-4 rounded-lg hover:bg-cyan-500/10"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="text-white hover:text-cyan-400 transition-colors font-medium block py-2 px-4 rounded-lg hover:bg-cyan-500/10"
                                onClick={() => setIsOpen(false)}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/leadership"
                                className="text-white hover:text-cyan-400 transition-colors font-medium block py-2 px-4 rounded-lg hover:bg-cyan-500/10"
                                onClick={() => setIsOpen(false)}
                            >
                                Leadership
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/solutions"
                                className="text-white hover:text-cyan-400 transition-colors font-medium block py-2 px-4 rounded-lg hover:bg-cyan-500/10"
                                onClick={() => setIsOpen(false)}
                            >
                                Business Solutions
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/careers"
                                className="text-white hover:text-cyan-400 transition-colors font-medium block py-2 px-4 rounded-lg hover:bg-cyan-500/10"
                                onClick={() => setIsOpen(false)}
                            >
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/newsroom"
                                className="text-white hover:text-cyan-400 transition-colors font-medium block py-2 px-4 rounded-lg hover:bg-cyan-500/10"
                                onClick={() => setIsOpen(false)}
                            >
                                Newsroom
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-gray-900 font-semibold text-center block"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
