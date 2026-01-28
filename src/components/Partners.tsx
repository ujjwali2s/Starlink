'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
    { name: "Ooredoo Group", logo: "/images/partners/ooredoo.png" },
    { name: "Microsoft", logo: "/images/partners/microsoft.png" },
    { name: "Huawei", logo: "/images/partners/huawei.png" },
    { name: "Xunison", logo: "/images/partners/xunison.png" },
];

export default function Partners() {
    return (
        <section className="py-20 bg-slate-900 relative overflow-hidden">
            {/* Background Elements (Hero Style) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-transparent to-slate-900/50" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Content Side */}
                    <div className="md:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-orange-400 font-bold tracking-wider uppercase text-sm mb-4 block"
                        >
                            Global Ecosystem
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black mb-6 text-white"
                        >
                            Powering Success with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">World-Class Partners</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-300 text-lg leading-relaxed mb-8 font-light"
                        >
                            We collaborate with industry giants to deliver cutting-edge technology and seamless connectivity. Our strategic alliances ensure that Starlink World remains at the forefront of digital transformation in Qatar.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="grid grid-cols-2 gap-6"
                        >
                            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                <div className="text-3xl font-bold mb-1 text-white">50+</div>
                                <div className="text-sm text-slate-400">Global Partners</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                <div className="text-3xl font-bold mb-1 text-white">200+</div>
                                <div className="text-sm text-slate-400">Projects Delivered</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Logos Grid Side */}
                    <div className="md:w-1/2 w-full">
                        <div className="grid grid-cols-2 gap-6">
                            {partners.map((partner, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="aspect-square flex flex-col items-center justify-center bg-white rounded-3xl hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 group cursor-default p-8"
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            fill
                                            className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
