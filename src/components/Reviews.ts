import { reviews } from '../data/reviews';

export class Reviews {
    private element: HTMLElement;
    private currentIndex: number = 0;
    private autoPlayInterval: number | null = null;

    constructor() {
        this.element = this.createElement();
        this.addDotStyles();
        this.attachEventListeners();
        this.startAutoPlay();
    }

    private createElement(): HTMLElement {
        const section = document.createElement('section');
        section.id = 'reviews';
        section.className = 'section';
        section.innerHTML = `
            <div class="container">
                <h2 class="section-title">Client <span class="gradient-text">Reviews</span></h2>
                <p class="section-subtitle">What our clients say about us</p>
                
                <div class="reviews-slider">
                    <div class="review-card">
                        ${this.renderReview(reviews[0])}
                    </div>
                    <div style="display: flex; justify-content: center; gap: 0.5rem; margin-top: 2rem;">
                        ${reviews.map((_, index) => `
                            <button class="review-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></button>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        return section;
    }

    private renderReview(review: any): string {
        return `
            <div class="review-stars">
                ${Array(review.rating).fill('').map(() => '<i class="fas fa-star"></i>').join('')}
            </div>
            <p class="review-text">"${review.text}"</p>
            <div>
                <div class="review-author">${review.author}</div>
                <div class="review-position">${review.position}${review.company ? `, ${review.company}` : ''}</div>
            </div>
        `;
    }

    private attachEventListeners(): void {
        const dots = this.element.querySelectorAll('.review-dot');
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToReview(index);
                this.stopAutoPlay();
                this.startAutoPlay();
            });
        });
    }

    private goToReview(index: number): void {
        this.currentIndex = index;
        const reviewCard = this.element.querySelector('.review-card') as HTMLElement;
        const dots = this.element.querySelectorAll('.review-dot');
        
        if (reviewCard) {
            reviewCard.style.opacity = '0';
            setTimeout(() => {
                reviewCard.innerHTML = this.renderReview(reviews[index]);
                reviewCard.style.opacity = '1';
            }, 300);
        }
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    private startAutoPlay(): void {
        this.autoPlayInterval = window.setInterval(() => {
            const nextIndex = (this.currentIndex + 1) % reviews.length;
            this.goToReview(nextIndex);
        }, 5000);
    }

    private stopAutoPlay(): void {
        if (this.autoPlayInterval !== null) {
            clearInterval(this.autoPlayInterval);
        }
    }

    private addDotStyles(): void {
        const style = document.createElement('style');
        style.textContent = `
            .review-card {
                transition: opacity 0.3s ease;
            }
            .review-dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: 2px solid var(--primary-color);
                background: transparent;
                cursor: pointer;
                transition: var(--transition);
            }
            .review-dot.active {
                background: var(--primary-color);
            }
            .review-dot:hover {
                background: var(--primary-color);
                opacity: 0.7;
            }
        `;
        this.element.appendChild(style);
    }

    public getElement(): HTMLElement {
        return this.element;
    }

    public destroy(): void {
        this.stopAutoPlay();
    }
} 