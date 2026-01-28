'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShoppingBag, Server, Users, Radio } from 'lucide-react';

const verticals = [
    {
        title: "Retail & Distribution",
        description: "Starlink is Qatar's premier destination for the latest technology. With over 17 retail locations and a robust e-commerce platform, we bring the world's leading brands—from Apple to Samsung—directly to consumers.",
        icon: ShoppingBag,
        image: "/images/business/retail.png",
        features: ["17+ Retail Stores", "Official Apple Reseller", "E-commerce Platform"]
    },
    {
        title: "Managed Services & ICT",
        description: "We empower organizations with end-to-end IT solutions. As a trusted system integrator, we manage complex infrastructure, data centers, and secure networks for government and enterprise clients.",
        icon: Server,
        image: "/images/business/managed-services.png",
        features: ["System Integration", "Cloud Solutions", "Cybersecurity"]
    },
    {
        title: "Outsourcing & HR Services",
        description: "Our HRO division provides strategic staffing and human resource solutions, allowing businesses to focus on their core competencies while we handle talent acquisition and management.",
        icon: Users,
        image: "/images/business/outsourcing.png",
        features: ["Staffing Solutions", "HR Consulting", "Call Center Operations"]
    },
    {
        title: "Telecom Infrastructure",
        description: "Building the backbone of Qatar's connectivity. We specialize in fiber optic deployment, 5G network installation, and critical telecommunications infrastructure projects.",
        icon: Radio,
        image: "/images/business/telecom.png",
        features: ["Fiber Deployment", "5G Networks", "Field Maintenance"]
    }
];

export default function OurBusiness() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Header */}
            <section className="relative py-24 bg-white overflow-hidden">
                <div className="absolute inset-0 bg-slate-50/50" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-black text-slate-900 mb-6"
                    >
                        Our Business
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        Driving innovation across Qatar through diverse pillars of excellence, from consumer retail to critical national infrastructure.
                    </motion.p>
                </div>
            </section>

            {/* Verticals */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="space-y-32">
                        {verticals.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
                            >
                                {/* Image Side */}
                                <div className="lg:w-1/2 w-full">
                                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 group">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="lg:w-1/2 w-full">
                                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-8">
                                        <item.icon className="w-8 h-8 text-orange-600" />
                                    </div>
                                    <h2 className="text-4xl font-bold text-slate-900 mb-6">{item.title}</h2>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                        {item.description}
                                    </p>
                                    <ul className="space-y-4">
                                        {item.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                                <div className="w-2 h-2 rounded-full bg-orange-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
