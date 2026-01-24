'use client';

import Link from 'next/link';
import { ArrowRight, Target, Eye, Heart, Award, Users, Globe, Lightbulb } from 'lucide-react';
import CountUp from '@/components/CountUp';

export default function About() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
                </div>

                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full glass border border-cyan-500/30 text-cyan-400 text-xs md:text-sm font-semibold uppercase tracking-wider mb-6">
                        About Us
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-gradient animate-fade-in-up">
                        Who We Are
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed">
                        A subsidiary of the Ooredoo Group, Starlink has been a key player in Qatar's mobile and accessories market since 2006, delivering innovative technology solutions that transform businesses.
                    </p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="glass rounded-3xl p-12 md:p-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">Our Story</h2>
                        <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-300 leading-relaxed">
                            <p>
                                Since our inception in 2006, Starlink World has established itself as Qatar's leading Systems Integrator, providing comprehensive end-to-end solutions across Consumer Technology, Information and Communications Technology (ICT), and Business Processing Outsourcing (BPO).
                            </p>
                            <p>
                                As a proud subsidiary of the Ooredoo Group, we leverage our deep industry expertise and strategic partnerships to deliver world-class solutions that empower businesses and enhance customer experiences across the region.
                            </p>
                            <p>
                                Our commitment to innovation, excellence, and customer satisfaction has positioned us at the forefront of Qatar's technology landscape, serving as a trusted partner for organizations seeking to drive digital transformation and achieve sustainable growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                            Vision & Mission
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass rounded-2xl p-12 hover:transform hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-cyan-500/50">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center mb-6">
                                <Eye className="w-10 h-10 text-gray-900" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gradient">Our Vision</h3>
                            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                                To be the most trusted and innovative technology partner in the region, empowering businesses to achieve their full potential through cutting-edge solutions and exceptional service delivery.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-12 hover:transform hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-cyan-500/50">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                                <Target className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold mb-6 text-gradient">Our Mission</h3>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                To deliver world-class integrated solutions that drive business transformation, foster innovation, and create lasting value for our clients, employees, and stakeholders across Qatar and beyond.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Advantages */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full glass border border-cyan-500/30 text-cyan-400 text-xs md:text-sm font-semibold uppercase tracking-wider mb-4">
                            What Sets Us Apart
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                            Our Competitive Advantages
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass rounded-xl p-8 hover:border-cyan-500/50 border border-transparent transition-all">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center flex-shrink-0">
                                    <Lightbulb className="w-7 h-7 text-gray-900" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">Integrated Innovation</h3>
                                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                                        We seamlessly blend cutting-edge technology with strategic business insights to deliver transformative solutions that drive measurable results.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="glass rounded-xl p-8 hover:border-cyan-500/50 border border-transparent transition-all">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                                    <Users className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">Collaborative Culture</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Our team-oriented approach fosters innovation and excellence, ensuring every project benefits from diverse perspectives and shared expertise.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="glass rounded-xl p-8 hover:border-cyan-500/50 border border-transparent transition-all">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-green-400 flex items-center justify-center flex-shrink-0">
                                    <Award className="w-7 h-7 text-gray-900" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">Professional Excellence</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Our team of seasoned professionals brings unparalleled expertise and dedication to every engagement, ensuring outstanding results.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="glass rounded-xl p-8 hover:border-cyan-500/50 border border-transparent transition-all">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                                    <Globe className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">Continuous Research</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        We stay ahead of industry trends by constantly exploring emerging technologies and best practices to deliver future-ready solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Impact Stats */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="glass rounded-3xl p-12 md:p-16">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 md:mb-12 text-center">Our Impact</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                            <div className="text-center">
                                <CountUp
                                    end={18}
                                    suffix="+"
                                    className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient mb-2 md:mb-3"
                                />
                                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-300">Years of Excellence</p>
                            </div>
                            <div className="text-center">
                                <CountUp
                                    end={500}
                                    suffix="+"
                                    className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient mb-2 md:mb-3"
                                />
                                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-300">Enterprise Clients</p>
                            </div>
                            <div className="text-center">
                                <CountUp
                                    end={1000}
                                    suffix="+"
                                    className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient mb-2 md:mb-3"
                                />
                                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-300">Team Members</p>
                            </div>
                            <div className="text-center">
                                <CountUp
                                    end={99}
                                    suffix="%"
                                    className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient mb-2 md:mb-3"
                                />
                                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-300">Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Registration & Details */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="glass rounded-3xl p-8 md:p-12 lg:p-16">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center">Company Information</h2>
                        <div className="grid md:grid-cols-2 gap-8 text-sm md:text-base">
                            <div className="space-y-4">
                                <div className="flex justify-between py-3 border-b border-white/10">
                                    <span className="text-gray-400">Registered Name:</span>
                                    <span className="font-semibold text-right">Starlink World W.L.L</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-white/10">
                                    <span className="text-gray-400">Year Established:</span>
                                    <span className="font-semibold">2006</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-white/10">
                                    <span className="text-gray-400">Commercial Registration:</span>
                                    <span className="font-semibold">Qatar</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-white/10">
                                    <span className="text-gray-400">Parent Company:</span>
                                    <span className="font-semibold text-gradient">Ooredoo Group</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between py-3 border-b border-white/10">
                                    <span className="text-gray-400">Industry:</span>
                                    <span className="font-semibold text-right">Technology & Systems Integration</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-white/10">
                                    <span className="text-gray-400">Headquarters:</span>
                                    <span className="font-semibold text-right">Lusail City, Qatar</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-white/10">
                                    <span className="text-gray-400">Service Areas:</span>
                                    <span className="font-semibold text-right">Qatar & GCC Region</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-white/10">
                                    <span className="text-gray-400">Certifications:</span>
                                    <span className="font-semibold text-right">ISO 9001, ISO 27001</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 md:mt-12 pt-8 border-t border-white/10 text-center">
                            <p className="text-xs md:text-sm lg:text-base text-gray-400 leading-relaxed">
                                Starlink World is a wholly-owned subsidiary of Ooredoo Group, operating under Qatar Commercial Law with full authorization to provide technology solutions and business process outsourcing services across the State of Qatar and GCC region.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Corporate Social Responsibility */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="glass rounded-3xl p-12 md:p-16">
                        <div className="flex items-start gap-6 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-teal-400 flex items-center justify-center flex-shrink-0">
                                <Heart className="w-8 h-8 text-gray-900" />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">Corporate Social Responsibility</h2>
                                <div className="space-y-3 md:space-y-4 text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed">
                                    <p>
                                        At Starlink World, we believe in giving back to the community and contributing to Qatar's sustainable development goals. Our CSR initiatives focus on education, technology accessibility, and environmental sustainability.
                                    </p>
                                    <p>
                                        We actively support local technology education programs, provide internship opportunities for aspiring technologists, and partner with educational institutions to bridge the digital skills gap in the region.
                                    </p>
                                    <p>
                                        Our commitment to environmental responsibility extends to our operations, where we continuously work to minimize our carbon footprint and promote sustainable business practices.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="glass rounded-3xl p-12 md:p-16 text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
                            Join Us on Our Journey
                        </h2>
                        <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8">
                            Explore career opportunities and become part of our innovative team
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/leadership" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-gray-900 font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1">
                                Meet Our Leaders
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/careers" className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-white font-semibold text-lg hover:bg-white/10 transition-all transform hover:-translate-y-1">
                                View Careers
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
