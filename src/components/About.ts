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
                <h2 class="section-title">About <span class="gradient-text">Jana Mithra</span></h2>
                <p class="section-subtitle">Building dreams with quality and trust</p>
                
                <div class="about-content">
                    <div class="about-image">
                        <img src="assets/images/Founder_of_Jana_Mitra-removebg-preview.png" alt="Mr. N. Siva Reddy - Founder of Jana Mithra Construction" class="founder-image">
                    </div>
                    <div class="about-text">
                        <h3>Two Decades of Excellence</h3>
                        <p>Founded by <strong>Mr. N. Siva Reddy</strong>, the Proprietor of Janamithra Infra Developers, Jana Mithra Construction has been at the forefront of the construction industry for over 20 years. Our journey began with a simple vision: to build structures that stand the test of time while exceeding our clients' expectations.</p>
                        
                        <p>From residential complexes to commercial spaces and infrastructure projects, we have successfully completed numerous projects across Tamil Nadu and beyond. Our commitment to quality, innovation, and customer satisfaction has made us a trusted name in the construction industry.</p>
                        
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
                                <h4 class="stat-number" data-target="15">0+</h4>
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