import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-12 md:py-16 mt-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Mobile Footer - Compact Single Column */}
                <div className="md:hidden space-y-6">
                    {/* Company Info */}
                    <div className="text-center pb-6 border-b border-white/10">
                        <h3 className="text-xl font-bold text-gradient mb-2">Starlink World</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Leading Qatar's technology market since 2006
                        </p>
                    </div>

                    {/* Quick Links - Compact */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 pb-6 border-b border-white/10">
                        <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm py-1">Home</Link>
                        <Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm py-1">About Us</Link>
                        <Link href="/leadership" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm py-1">Leadership</Link>
                        <Link href="/careers" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm py-1">Careers</Link>
                        <Link href="/solutions" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm py-1">Solutions</Link>
                        <Link href="/newsroom" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm py-1">Newsroom</Link>
                    </div>

                    {/* Contact Info - Compact with Icons */}
                    <div className="space-y-3 pb-6">
                        <a href="tel:+97444283888" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                            <Phone className="w-4 h-4 flex-shrink-0 text-cyan-400" />
                            <span>+974 4428 3888</span>
                        </a>
                        <a href="mailto:customers@starlinkworld.com" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                            <Mail className="w-4 h-4 flex-shrink-0 text-cyan-400" />
                            <span className="break-all">customers@starlinkworld.com</span>
                        </a>
                        <div className="flex items-start gap-2 text-gray-400 text-sm">
                            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-400" />
                            <span>21st Floor, Manarat Lusail, Lusail City, Qatar</span>
                        </div>
                    </div>
                </div>

                {/* Desktop Footer - Full Grid */}
                <div className="hidden md:grid md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold text-gradient mb-4">Starlink World</h3>
                        <p className="text-gray-400 mb-4">
                            A subsidiary of the Ooredoo Group, leading Qatar's mobile and accessories market since 2006.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</Link></li>
                            <li><Link href="/leadership" className="text-gray-400 hover:text-cyan-400 transition-colors">Leadership</Link></li>
                            <li><Link href="/careers" className="text-gray-400 hover:text-cyan-400 transition-colors">Careers</Link></li>
                            <li><Link href="/newsroom" className="text-gray-400 hover:text-cyan-400 transition-colors">Newsroom</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-lg">Solutions</h4>
                        <ul className="space-y-2">
                            <li><Link href="/solutions" className="text-gray-400 hover:text-cyan-400 transition-colors">Consumer Tech</Link></li>
                            <li><Link href="/solutions" className="text-gray-400 hover:text-cyan-400 transition-colors">ICT</Link></li>
                            <li><Link href="/solutions" className="text-gray-400 hover:text-cyan-400 transition-colors">BPO</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-lg">Contact Info</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-gray-400">
                                <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-cyan-400" />
                                <span>+974 4428 3888</span>
                            </li>
                            <li className="flex items-start gap-2 text-gray-400">
                                <Mail className="w-5 h-5 mt-1 flex-shrink-0 text-cyan-400" />
                                <span>customers@starlinkworld.com</span>
                            </li>
                            <li className="flex items-start gap-2 text-gray-400">
                                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-cyan-400" />
                                <span>21st Floor, Manarat Lusail<br />Lusail City, Qatar</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright - All Screens */}
                <div className="border-t border-white/10 pt-6 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Starlink World. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
