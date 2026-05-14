'use client';

import { useState, useCallback } from 'react';

export default function Contact() {
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        setShowToast(true);
        form.reset();
        setTimeout(() => setShowToast(false), 5000);
    }, []);

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
                <p className="section-subtitle">We&apos;d love to hear from you. Contact us for any inquiries or project discussions</p>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <span>siva.janamithra9@gmail.com</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <span>+91 9742980083</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>D NO. 13-6-600/44/81, P k Layout, Beside Partha Dental Hospital, TIRUPATI - 517501</span>
                        </div>
                        <div className="social-links" style={{ marginTop: '2rem' }}>
                            <h4 style={{ marginBottom: '1rem', color: 'var(--text-color)' }}>Follow Us</h4>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href="https://www.facebook.com/people/Janamithra-Infra-Developers/100063784675490/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: 'var(--primary-color)', fontSize: '1.5rem', transition: 'color 0.3s ease' }}>
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.instagram.com/janamithra_infra_developers" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: 'var(--primary-color)', fontSize: '1.5rem', transition: 'color 0.3s ease' }}>
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.youtube.com/@janamithrainfradevelopers9140" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ color: 'var(--primary-color)', fontSize: '1.5rem', transition: 'color 0.3s ease' }}>
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={5} required></textarea>
                        </div>
                        <button type="submit" className="form-submit">Send Message</button>
                    </form>
                </div>
            </div>

            {showToast && (
                <div className="form-message success">
                    Thank you for your message! We will get back to you soon.
                </div>
            )}
        </section>
    );
}
