'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Users, Smartphone, Headset } from 'lucide-react';

const services = [
    {
        id: '01',
        title: 'Empower Your Workforce with Flexible HRO solutions',
        description: 'Maximize your team\'s potential with our adaptable Human Resource Outsourcing (HRO) services, designed to meet evolving business needs. From staffing to strategic HR support, we provide the flexibility to help your workforce thrive.',
        icon: Users,
        link: '/solutions/hro',
        color: 'orange'
    },
    {
        id: '02',
        title: 'Proudly Leading the Smartphone Revolution',
        description: 'At the forefront of mobile innovation, we take pride in delivering cutting-edge smartphone technology that shapes the future. Empower your lifestyle with devices designed for performance and connectivity.',
        icon: Smartphone,
        link: '/solutions/consumer-tech',
        color: 'blue'
    },
    {
        id: '03',
        title: 'Elevate Customer Experiences with Our Contact Center Outsourcing',
        description: 'Enhance customer satisfaction with our tailored contact center solutions designed to provide seamless, personalized support. Let us handle your customer interactions, so you can focus on driving business growth.',
        icon: Headset,
        link: '/solutions/bpo',
        color: 'orange'
    }
];

export default function Services() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-4 block"
                    >
                        What We Do
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white transition-colors"
                    >
                        Delivering Excellence
                    </motion.h2>
                </div>

                <div className="grid gap-12 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 hover:shadow-xl transition-all duration-500 border border-slate-100 dark:border-slate-700"
                        >
                            <div className="grid md:grid-cols-[1fr,2fr] gap-8 md:gap-16 items-center">
                                <div className="relative">
                                    <span className={`text-8xl font-black absolute -top-10 -left-6 select-none transition-colors duration-500 dark:text-slate-700/30 ${service.color === 'orange' ? 'text-orange-600/20 group-hover:text-orange-600/30' : 'text-blue-600/20 group-hover:text-blue-600/30'}`}>
                                        {service.id}
                                    </span>
                                    <div className={`relative z-10 w-20 h-20 rounded-2xl ${service.color === 'orange' ? 'bg-orange-500' : 'bg-blue-900'} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                        <service.icon className="w-10 h-10 text-white" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                                        {service.description}
                                    </p>
                                    <Link
                                        href={service.link}
                                        className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-semibold group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors"
                                    >
                                        Read More
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
