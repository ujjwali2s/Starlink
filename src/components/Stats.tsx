'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Award, Briefcase, Users, CheckCircle } from 'lucide-react';

const stats = [
    { label: 'Years of Excellence', value: 15, suffix: '+', icon: Award, color: 'orange' },
    { label: 'Projects Completed', value: 500, suffix: '+', icon: Briefcase, color: 'blue' },
    { label: 'Satisfied Clients', value: 200, suffix: '+', icon: Users, color: 'orange' },
    { label: 'ISO Certified', value: 100, suffix: '%', icon: CheckCircle, color: 'blue' },
];

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
    const [count, setCount] = useState(from);
    const nodeRef = useRef(null);
    const inView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (inView) {
            let startTime: number;
            const step = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
                setCount(Math.floor(progress * (to - from) + from));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [inView, from, to, duration]);

    return <span ref={nodeRef}>{count}</span>;
}

export default function Stats() {
    return (
        <section className="py-20 bg-slate-900 relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 ${stat.color === 'orange' ? 'group-hover:bg-orange-500/10 group-hover:border-orange-500/30' : 'group-hover:bg-blue-500/10 group-hover:border-blue-500/30'}`}>
                                <stat.icon className={`w-8 h-8 ${stat.color === 'orange' ? 'text-orange-400' : 'text-blue-400'}`} />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono tracking-tight">
                                <Counter from={0} to={stat.value} />{stat.suffix}
                            </div>
                            <div className="text-sm md:text-base text-slate-400 font-medium uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
