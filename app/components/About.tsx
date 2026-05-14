'use client';

import { useEffect, useRef, useCallback } from 'react';

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const hasAnimated = useRef(false);

    const animateNumber = useCallback((element: HTMLElement, target: number) => {
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateNumber = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current).toString();
                requestAnimationFrame(updateNumber);
            } else {
                element.textContent = target.toString() + '+';
            }
        };

        updateNumber();
    }, []);

    useEffect(() => {
        if (!sectionRef.current || hasAnimated.current) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    hasAnimated.current = true;
                    const statNumbers = entry.target.querySelectorAll<HTMLElement>('.stat-number');
                    statNumbers.forEach((stat) => {
                        const target = parseInt(stat.getAttribute('data-target') || '0');
                        animateNumber(stat, target);
                    });
                    observer.disconnect();
                }
            });
        }, { threshold: 0.1, rootMargin: '0px' });

        observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [animateNumber]);

    return (
        <section id="about" className="section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">About <span className="gradient-text">Janamithra </span></h2>
                <p className="section-subtitle">Visionary Leadership & Sustainable Communities</p>

                <div className="about-content">
                    <div className="about-image">
                        <img src="/images/Founder_of_Jana_Mitra-removebg-preview.png" alt="Siva Reddy - Chairperson of Janamithra Infra Venture" className="founder-image" />
                    </div>
                    <div className="about-text">
                        <h3>At the Helm: Siva Reddy</h3>
                        <p>At the helm of Janamithra Infra Venture stands <strong>Siva Reddy</strong>, a visionary leader whose dedication and expertise have been the cornerstone of our success. As Chairperson, Siva Reddy brings over two decades of experience in the real estate industry, coupled with an unwavering commitment to excellence and integrity.</p>
                        <p>Siva Reddy&apos;s vision for Janamithra Infra Venture transcends mere business objectives. He is a passionate advocate for sustainable development and believes in creating communities that harmonize with nature. This ethos is embedded in every project, as the company strives to contribute positively to the environment and the society at large. Siva Reddy&apos;s leadership ensures that Janamithra Infra Venture not only delivers exceptional real estate solutions but also fosters a sense of community and environmental stewardship.</p>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <h4 className="stat-number" data-target="20">0+</h4>
                                <p className="stat-label">Projects Completed</p>
                            </div>
                            <div className="stat-item">
                                <h4 className="stat-number" data-target="1500">0+</h4>
                                <p className="stat-label">Happy Clients</p>
                            </div>
                            <div className="stat-item">
                                <h4 className="stat-number" data-target="20">0+</h4>
                                <p className="stat-label">Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
