'use client';

import { useCallback } from 'react';

export default function Footer() {
    const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        const href = e.currentTarget.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const section = document.querySelector(href);
            if (section) {
                const offsetTop = section.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>About Janamithra</h4>
                        <div className="footer-logo-quote" style={{ margin: '1rem 0' }}>
                            <p style={{ color: 'var(--gold-primary)', fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '1rem', textAlign: 'center', borderLeft: '3px solid var(--gold-primary)', paddingLeft: '1rem', textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}>
                                &ldquo;Discover Your Future: Janamithra Infra - Where Dreams Find Land.&rdquo;
                            </p>
                        </div>
                        <p style={{ color: 'black', marginTop: '1rem' }}>
                            Leading infrastructure company committed to building blocks and creating futures
                            through innovative construction solutions.
                        </p>
                        <div className="social-links" style={{ marginTop: '1.5rem' }}>
                            <a href="https://www.facebook.com/people/Janamithra-Infra-Developers/100063784675490/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/janamithra_infra_developers" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/@janamithrainfradevelopers9140" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links" style={{ marginTop: '1rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#home" onClick={handleSmoothScroll}>Home</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#projects" onClick={handleSmoothScroll}>Projects</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#reviews" onClick={handleSmoothScroll}>Reviews</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#about" onClick={handleSmoothScroll}>About Us</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#contact" onClick={handleSmoothScroll}>Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Our Services</h4>
                        <ul className="footer-links" style={{ marginTop: '1rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#">Residential Construction</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#">Commercial Projects</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#">Infrastructure Development</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#">Project Management</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#">Consulting Services</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Janamithra Infrastructure. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
