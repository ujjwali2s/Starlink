'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

export default function CountUp({ end, duration = 2000, suffix = '', className = '' }: CountUpProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const countRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    // Start counting immediately
                    const startTime = Date.now();
                    const endTime = startTime + duration;

                    const updateCount = () => {
                        const now = Date.now();
                        const remaining = endTime - now;

                        if (remaining <= 0) {
                            setCount(end);
                            return;
                        }

                        const progress = (duration - remaining) / duration;
                        // Easing function for smooth animation
                        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                        const currentCount = Math.floor(easeOutQuart * end);

                        setCount(currentCount);
                        requestAnimationFrame(updateCount);
                    };

                    requestAnimationFrame(updateCount);
                }
            },
            { threshold: 0.3 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, [end, duration, hasAnimated]);

    return (
        <div ref={countRef} className={className}>
            {count}{suffix}
        </div>
    );
}
