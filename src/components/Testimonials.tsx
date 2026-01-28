'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
    {
        content: "Starlink World has been instrumental in transforming our HR operations. Their BPO solutions have significantly improved our efficiency and allowed us to focus on core business activities.",
        author: "Mohammed Al-Rashid",
        role: "HR Director, Manufacturing Sector",
        rating: 5
    },
    {
        content: "The ICT infrastructure solutions provided by Starlink World exceeded our expectations. Their team's professionalism and technical expertise is outstanding.",
        author: "Fatima Al-Kuwari",
        role: "CTO, Financial Services",
        rating: 5
    },
    {
        content: "We've partnered with Starlink World for over 5 years. Their contact center solutions have consistently delivered exceptional customer satisfaction rates for our business.",
        author: "Khalid Al-Thani",
        role: "Operations Manager, Retail",
        rating: 5
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => setActiveIndex((current) => (current + 1) % testimonials.length);
    const prev = () => setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-4 block">
                        Client Success
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white transition-colors">
                        What Our Partners Say
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="overflow-hidden p-4">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-700 shadow-xl relative transition-colors duration-300"
                        >
                            <Quote className="w-12 h-12 text-orange-200 absolute top-8 left-8" />

                            <div className="flex gap-1 mb-6 justify-center text-orange-400">
                                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>

                            <blockquote className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 text-center font-medium leading-relaxed mb-8 relative z-10 transition-colors">
                                "{testimonials[activeIndex].content}"
                            </blockquote>

                            <div className="text-center">
                                <div className="font-bold text-slate-900 dark:text-white text-lg mb-1 transition-colors">{testimonials[activeIndex].author}</div>
                                <div className="text-slate-500 dark:text-slate-400 transition-colors">{testimonials[activeIndex].role}</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 hover:bg-orange-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all z-20">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 hover:bg-orange-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all z-20">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}
