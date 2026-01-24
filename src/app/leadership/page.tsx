'use client';

import Link from 'next/link';
import { ArrowRight, Mail, Linkedin } from 'lucide-react';
import { useState } from 'react';

const leaders = [
    {
        name: 'Cyril Anand',
        position: 'Chief Executive Officer',
        initials: 'CA',
        color: 'from-cyan-500 to-blue-600',
        bio: 'With over 24 years of experience in the telecom and ICT sectors, Cyril brings a proven track record in strategic leadership and digital transformation. His expertise will guide us into our next phase of growth, enhancing both our innovative solutions and customer experiences. We look forward to strengthening our market position under his leadership.',
        category: 'executive'
    },
    {
        name: 'Thomas Andrew Davidson',
        position: 'Vice President, BPO',
        initials: 'TD',
        color: 'from-purple-500 to-pink-600',
        bio: 'Thomas is the Vice President of BPO at Starlink, bringing over 25 years of telecom industry experience. His extensive background in business process outsourcing and operational excellence drives our BPO division to deliver world-class services to our clients.',
        category: 'vp'
    },
    {
        name: 'Rajesh Bansal',
        position: 'Vice President, Finance',
        initials: 'RB',
        color: 'from-teal-500 to-green-600',
        bio: 'Rajesh Bansal is the Vice President of Finance at Starlink. With over 23 years of experience in financial management and strategic planning, Rajesh ensures our financial operations are aligned with our business objectives while maintaining the highest standards of fiscal responsibility.',
        category: 'vp'
    },
    {
        name: 'Taiyab Ghafoor',
        position: 'VP of Consumer Technology',
        initials: 'TG',
        color: 'from-orange-500 to-red-600',
        bio: 'Taiyab Ghafoor is the Vice President of Consumer Technology at Starlink. With over 30 years of experience in consumer electronics and mobile technology, Taiyab leads our efforts in delivering cutting-edge smartphone solutions and innovative consumer products to the market.',
        category: 'vp'
    },
    {
        name: 'Benish Peter Jacob',
        position: 'Vice President, ICT',
        initials: 'BJ',
        color: 'from-indigo-500 to-purple-600',
        bio: 'Benish Peter Jacob is our Vice President of ICT at Starlink. With over 21 years of industry leadership in information and communications technology, Benish drives our ICT solutions strategy, ensuring we deliver comprehensive, innovative technology infrastructure to our enterprise clients.',
        category: 'vp'
    },
    {
        name: 'Aoife Hurst',
        position: 'Head of People & Culture',
        initials: 'AH',
        color: 'from-pink-500 to-rose-600',
        bio: 'Aoife Hurst serves as Head of People & Culture at Starlink. With 18 years of HR leadership experience, Aoife champions our people-first culture, developing talent strategies that attract, retain, and develop the best professionals in the industry.',
        category: 'head'
    },
    {
        name: 'Salman Nawaz-Khan',
        position: 'Head of Strategy, Commercial & Planning',
        initials: 'SN',
        color: 'from-blue-500 to-cyan-600',
        bio: 'Salman Nawaz-Khan has been appointed as our Head of Strategy, Commercial, and Planning. Salman brings extensive experience in strategic business development and commercial operations, positioning Starlink for sustainable growth and market leadership.',
        category: 'head'
    },
    {
        name: 'Cagdas Evren Bayrak',
        position: 'Head of Contract & Legal',
        initials: 'CB',
        color: 'from-emerald-500 to-teal-600',
        bio: 'Cagdas Evren Bayrak serves as our Head of Contract and Legal at Starlink. With extensive legal experience in telecommunications and technology sectors, Cagdas ensures our operations maintain the highest standards of legal and regulatory compliance.',
        category: 'head'
    },
    {
        name: 'Muhammad Shumyl Akram',
        position: 'Head of Marketing',
        initials: 'MA',
        color: 'from-amber-500 to-orange-600',
        bio: 'Shumyl Akram, as the Head of Marketing, brings with him an impressive 18 years of experience in brand strategy and digital marketing. His innovative approach to market positioning and customer engagement continues to elevate Starlink\'s brand presence across the region.',
        category: 'head'
    }
];

export default function Leadership() {
    const [selectedLeader, setSelectedLeader] = useState<typeof leaders[0] | null>(null);
    const [filter, setFilter] = useState('all');

    const filteredLeaders = leaders.filter(leader =>
        filter === 'all' || leader.category === filter
    );

    return (
        <main className="min-h-screen">

            {/* Hero Section */}
            <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
                </div>

                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full glass border border-cyan-500/30 text-cyan-400 text-xs md:text-sm font-semibold uppercase tracking-wider mb-6">
                        Leadership Team
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-gradient animate-fade-in-up">
                        Our Leaders
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed">
                        Meet the visionary executives driving innovation and excellence at Starlink World
                    </p>
                </div>
            </section>

            {/* CEO Spotlight */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="glass rounded-3xl p-12 md:p-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <span className="inline-block px-4 py-2 rounded-full glass border border-cyan-500/30 text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-6">
                                Chief Executive Officer
                            </span>

                            <div className="grid md:grid-cols-3 gap-8 items-start">
                                <div className="md:col-span-1">
                                    <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-8xl font-bold text-white shadow-2xl shadow-cyan-500/30">
                                        CA
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gradient">Cyril Anand</h2>
                                    <p className="text-base md:text-lg lg:text-xl text-gray-400 uppercase tracking-wider mb-4 md:mb-6">Chief Executive Officer</p>
                                    <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6">
                                        With over 24 years of experience in the telecom and ICT sectors, Cyril brings a proven track record in strategic leadership and digital transformation. His expertise will guide us into our next phase of growth, enhancing both our innovative solutions and customer experiences.
                                    </p>
                                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                        Under Cyril's leadership, Starlink World is poised to strengthen its market position and continue delivering exceptional value to clients across Qatar and the region.
                                    </p>
                                    <div className="flex gap-4">
                                        <button className="flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 transition-all">
                                            <Mail className="w-5 h-5 text-cyan-400" />
                                            <span>Contact</span>
                                        </button>
                                        <button className="flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 transition-all">
                                            <Linkedin className="w-5 h-5 text-cyan-400" />
                                            <span>LinkedIn</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Buttons */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-6 py-3 rounded-full font-semibold transition-all ${filter === 'all'
                                ? 'bg-gradient-to-r from-cyan-500 to-teal-400 text-gray-900'
                                : 'glass hover:bg-white/10'
                                }`}
                        >
                            All Leaders
                        </button>
                        <button
                            onClick={() => setFilter('vp')}
                            className={`px-6 py-3 rounded-full font-semibold transition-all ${filter === 'vp'
                                ? 'bg-gradient-to-r from-cyan-500 to-teal-400 text-gray-900'
                                : 'glass hover:bg-white/10'
                                }`}
                        >
                            Vice Presidents
                        </button>
                        <button
                            onClick={() => setFilter('head')}
                            className={`px-6 py-3 rounded-full font-semibold transition-all ${filter === 'head'
                                ? 'bg-gradient-to-r from-cyan-500 to-teal-400 text-gray-900'
                                : 'glass hover:bg-white/10'
                                }`}
                        >
                            Department Heads
                        </button>
                    </div>
                </div>
            </section>

            {/* Leadership Grid */}
            <section className="py-12 pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredLeaders.slice(1).map((leader, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedLeader(leader)}
                                className="glass rounded-xl overflow-hidden hover:transform hover:-translate-y-3 transition-all duration-300 cursor-pointer hover:border-cyan-500/50 border border-transparent group"
                            >
                                <div className={`h-56 bg-gradient-to-br ${leader.color} flex items-center justify-center text-6xl font-bold text-white relative overflow-hidden`}>
                                    <span className="relative z-10">{leader.initials}</span>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">{leader.name}</h3>
                                    <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">{leader.position}</p>
                                    <button className="text-cyan-400 font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                                        View Profile <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedLeader && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
                    onClick={() => setSelectedLeader(null)}
                >
                    <div
                        className="glass rounded-3xl p-8 md:p-12 max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/3">
                                <div className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${selectedLeader.color} flex items-center justify-center text-6xl font-bold text-white`}>
                                    {selectedLeader.initials}
                                </div>
                            </div>
                            <div className="md:w-2/3">
                                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">{selectedLeader.name}</h3>
                                <p className="text-gray-400 uppercase tracking-wider mb-6 text-sm">{selectedLeader.position}</p>
                                <p className="text-gray-300 leading-relaxed mb-8">{selectedLeader.bio}</p>
                                <div className="flex gap-4">
                                    <button className="flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 transition-all">
                                        <Mail className="w-5 h-5 text-cyan-400" />
                                        <span>Contact</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 transition-all">
                                        <Linkedin className="w-5 h-5 text-cyan-400" />
                                        <span>LinkedIn</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setSelectedLeader(null)}
                            className="mt-8 w-full px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-gray-900 font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="glass rounded-3xl p-12 md:p-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Want to Join Our Team?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Explore exciting career opportunities and work alongside industry leaders
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/careers" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-gray-900 font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1">
                                View Careers
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-white font-semibold text-lg hover:bg-white/10 transition-all transform hover:-translate-y-1">
                                Learn More About Us
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
