'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.section:not(#projects), .review-card, .stat-item');
        elements.forEach(element => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return null;
}
