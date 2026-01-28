'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Star, Zap } from 'lucide-react';

const highlights = [
    {
        icon: ShieldCheck,
        title: "Ooredoo Group",
        subtitle: "Proud Subsidiary",
        color: "blue"
    },
    {
        icon: Star,
        title: "Official Partner",
        subtitle: "Apple, Samsung & Microsoft",
        color: "orange"
    },
    {
        icon: Globe,
        title: "Nationwide Reach",
        subtitle: "17+ Retail Locations",
        color: "blue"
    },
    {
        icon: Zap,
        title: "Since 2006",
        subtitle: "Leading Qatar's Tech Evolution",
        color: "orange"
    }
];

export default function Highlights() {
    return (
        <section className="relative py-12 bg-slate-900 border-b border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color === 'orange' ? 'from-orange-500/10' : 'from-blue-500/10'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />

                            <div className="relative flex flex-col items-center text-center">
                                <div className={`w-12 h-12 mb-4 rounded-xl flex items-center justify-center ${item.color === 'orange' ? 'bg-orange-500/20 text-orange-400' : 'bg-blue-500/20 text-blue-400'}`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
