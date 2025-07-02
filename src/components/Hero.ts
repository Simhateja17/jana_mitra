import { Cubes } from '../utils/Cubes';

export class Hero {
    private element: HTMLElement;
    private cubes: Cubes | null = null;

    constructor() {
        this.element = this.createElement();
        this.addBackgroundPattern();
    }

    private createElement(): HTMLElement {
        const section = document.createElement('section');
        section.id = 'home';
        section.className = 'hero';
        section.innerHTML = `
            <div class="hero-background"></div>
            <div class="container">
                <div class="hero-content">
                    <div class="hero-badge">Excellence in Infrastructure</div>
                    <h1 class="hero-title">
                        <span class="hero-title-line"><span class="hero-highlight-blue">Building</span> <span class="hero-highlight-white-gold">Blocks</span><span class="hero-comma">,</span></span>
                        <span class="hero-title-line"><span class="hero-highlight-white-blue">Creating</span> <span class="hero-highlight">Futures</span></span>
                    </h1>
                    <p class="hero-subtitle">Leading infrastructure company delivering excellence in construction</p>
                    <div class="hero-cta-wrapper">
                        <a href="#projects" class="hero-cta primary">
                            <span>Explore Our Projects</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                        <a href="#contact" class="hero-cta secondary">
                            <span>Get in Touch</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
        return section;
    }

    private addBackgroundPattern(): void {
        // Initialize the 3D cubes animation
        this.cubes = new Cubes(this.element, {
            gridSize: 12,
            maxAngle: 30,
            radius: 3,
            borderStyle: '1px solid rgba(59, 130, 246, 0.3)',
            faceColor: 'rgba(255, 255, 255, 0.8)',
            rippleColor: '#3b82f6',
            rippleSpeed: 1.8,
            autoAnimate: true,
            rippleOnClick: true,
            sections: 36  // Divide into 6x6 sections, each containing 4 cubes (2x2)
        });
    }

    public destroy(): void {
        if (this.cubes) {
            this.cubes.destroy();
            this.cubes = null;
        }
    }

    public getElement(): HTMLElement {
        return this.element;
    }
} 