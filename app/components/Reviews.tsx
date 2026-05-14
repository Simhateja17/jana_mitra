'use client';

import { useState, useEffect, useCallback } from 'react';
import { reviews } from '@/src/data/reviews';

export default function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const review = reviews[currentIndex];

    const goToReview = useCallback((index: number) => {
        if (index === currentIndex) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsTransitioning(false);
        }, 300);
    }, [currentIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="reviews" className="section">
            <div className="container">
                <h2 className="section-title">Client <span className="gradient-text">Reviews</span></h2>
                <p className="section-subtitle">What our clients say about us</p>

                <div className="reviews-slider">
                    <div
                        className="review-card"
                        style={{ opacity: isTransitioning ? 0 : 1, transition: 'opacity 0.3s ease' }}
                    >
                        <div className="review-stars">
                            {Array.from({ length: review.rating }).map((_, i) => (
                                <i key={i} className="fas fa-star"></i>
                            ))}
                        </div>
                        <p className="review-text">&ldquo;{review.text}&rdquo;</p>
                        <div>
                            <div className="review-author">{review.author}</div>
                            <div className="review-position">
                                {review.position}{review.company ? `, ${review.company}` : ''}
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                className={`review-dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => goToReview(index)}
                                aria-label={`Go to review ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
