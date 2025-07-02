export class About {
    private element: HTMLElement;

    constructor() {
        this.element = this.createElement();
        this.animateStats();
    }

    private createElement(): HTMLElement {
        const section = document.createElement('section');
        section.id = 'about';
        section.className = 'section';
        section.innerHTML = `
            <div class="container">
                <h2 class="section-title">About <span class="gradient-text">Janamithra </span></h2>
                <p class="section-subtitle">Visionary Leadership & Sustainable Communities</p>
                
                <div class="about-content">
                    <div class="about-image">
                        <img src="assets/images/Founder_of_Jana_Mitra-removebg-preview.png" alt="Siva Reddy - Chairperson of Janamithra Infra Venture" class="founder-image">
                    </div>
                    <div class="about-text">
                        <h3>At the Helm: Siva Reddy</h3>
                        <p>At the helm of Janamithra Infra Venture stands <strong>Siva Reddy</strong>, a visionary leader whose dedication and expertise have been the cornerstone of our success. As Chairperson, Siva Reddy brings over two decades of experience in the real estate industry, coupled with an unwavering commitment to excellence and integrity.</p>
                        <p>Siva Reddy's vision for Janamithra Infra Venture transcends mere business objectives. He is a passionate advocate for sustainable development and believes in creating communities that harmonize with nature. This ethos is embedded in every project, as the company strives to contribute positively to the environment and the society at large. Siva Reddy's leadership ensures that Janamithra Infra Venture not only delivers exceptional real estate solutions but also fosters a sense of community and environmental stewardship.</p>
                        <div class="stats-grid">
                            <div class="stat-item">
                                <h4 class="stat-number" data-target="30">0+</h4>
                                <p class="stat-label">Projects Completed</p>
                            </div>
                            <div class="stat-item">
                                <h4 class="stat-number" data-target="1250">0+</h4>
                                <p class="stat-label">Happy Clients</p>
                            </div>
                            <div class="stat-item">
                                <h4 class="stat-number" data-target="20">0+</h4>
                                <p class="stat-label">Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return section;
    }

    private animateStats(): void {
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = this.element.querySelectorAll('.stat-number') as NodeListOf<HTMLElement>;
                    statNumbers.forEach(stat => {
                        const target = parseInt(stat.getAttribute('data-target') || '0');
                        this.animateNumber(stat, target);
                    });
                    observer.disconnect();
                }
            });
        }, observerOptions);

        observer.observe(this.element);
    }

    private animateNumber(element: HTMLElement, target: number): void {
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

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
    }

    public getElement(): HTMLElement {
        return this.element;
    }
} 