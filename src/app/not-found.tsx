import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>

            <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
                <div className="glass rounded-3xl p-12 md:p-16">
                    {/* Icon */}
                    <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                        <Clock className="w-16 h-16 text-white" />
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
                        Coming Soon
                    </h1>

                    {/* Description */}
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                        We're working hard to bring you this page. Something amazing is on the way!
                    </p>

                    {/* Details */}
                    <p className="text-sm md:text-base lg:text-lg text-gray-400 mb-8 md:mb-12">
                        This section of our website is currently under development. Check back soon for exciting updates.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-gray-900 font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back to Home
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass text-white font-semibold text-lg hover:bg-white/10 transition-all transform hover:-translate-y-1"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-12 text-gray-400">
                    <p>Have questions? <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 underline">Get in touch</Link> with our team.</p>
                </div>
            </div>
        </main>
    );
}
