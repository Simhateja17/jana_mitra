'use client';

import { useState, useEffect, useCallback } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);

            const sections = document.querySelectorAll('section');
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('mobile-menu-open');
        } else {
            document.body.style.overflow = '';
            document.body.classList.remove('mobile-menu-open');
        }
        return () => {
            document.body.style.overflow = '';
            document.body.classList.remove('mobile-menu-open');
        };
    }, [mobileMenuOpen]);

    const toggleMobileMenu = useCallback((e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setMobileMenuOpen(prev => !prev);
    }, []);

    const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        setActiveSection(target.replace('#', ''));

        const section = document.querySelector(target);
        if (section) {
            const offsetTop = section.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (mobileMenuOpen) {
                const navMenu = document.querySelector('.nav-menu');
                const toggleBtn = document.querySelector('.mobile-menu-toggle');
                if (navMenu && !navMenu.contains(e.target as Node) && toggleBtn && !toggleBtn.contains(e.target as Node)) {
                    setMobileMenuOpen(false);
                }
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [mobileMenuOpen]);

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#reviews', label: 'Reviews' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <nav className="nav-container">
                    <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
                        <img src="/images/logo.webp" alt="Janamithra" className="logo-image" />
                    </a>
                    <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="mobile-menu-toggle"
                        onClick={toggleMobileMenu}
                        onTouchStart={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </button>
                </nav>
            </div>
        </header>
    );
}
