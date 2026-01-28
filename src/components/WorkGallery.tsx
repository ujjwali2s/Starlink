'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const works = [
    {
        id: 1,
        title: 'Consumer Tech',
        category: 'Retail & Distribution',
        image: '/images/tech-retail.png',
        size: 'large'
    },
    {
        id: 2,
        title: 'Global Partnerships',
        category: 'Client Success',
        image: '/images/partnership.png',
        size: 'small'
    },
    {
        id: 3,
        title: 'ICT Infrastructure',
        category: 'Enterprise Solutions',
        image: '/images/ict-server.png',
        size: 'small'
    },
    {
        id: 4,
        title: 'BPO Excellence',
        category: 'Contact Center',
        image: '/images/bpo-office.png',
        size: 'large'
    }
];

export default function WorkGallery() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-4 block"
                        >
                            Our Portfolio
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white transition-colors"
                        >
                            Impact in Action
                        </motion.h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
                    {works.map((work, index) => (
                        <motion.div
                            key={work.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative rounded-3xl overflow-hidden cursor-pointer ${work.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'
                                }`}
                        >
                            <Image
                                src={work.image}
                                alt={work.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <span className="text-orange-400 text-sm font-semibold uppercase tracking-wider mb-2 block translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                    {work.category}
                                </span>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl font-bold text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        {work.title}
                                    </h3>
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                        <ArrowUpRight className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
