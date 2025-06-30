import './styles/main.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Reviews } from './components/Reviews';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

class App {
    private components: any[] = [];

    constructor() {
        this.init();
    }

    private init(): void {
        const app = document.getElementById('app');
        if (!app) return;

        // Initialize components
        const header = new Header();
        const hero = new Hero();
        const projects = new Projects();
        const reviews = new Reviews();
        const about = new About();
        const contact = new Contact();
        const footer = new Footer();

        // Store components for cleanup if needed
        this.components = [header, hero, projects, reviews, about, contact, footer];

        // Build the page
        document.body.insertBefore(header.getElement(), app);
        
        app.appendChild(hero.getElement());
        app.appendChild(about.getElement());
        app.appendChild(projects.getElement());
        app.appendChild(reviews.getElement());
        app.appendChild(contact.getElement());
        
        document.body.appendChild(footer.getElement());

        // Add loading animation
        this.addLoadingAnimation();
        
        // Initialize scroll animations
        this.initScrollAnimations();
    }

    private addLoadingAnimation(): void {
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
        });
    }

    private initScrollAnimations(): void {
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

        // Observe all sections and cards
        const elements = document.querySelectorAll('.section, .project-card, .review-card, .stat-item');
        elements.forEach(element => {
            observer.observe(element);
        });
    }
}

// Start the application
document.addEventListener('DOMContentLoaded', () => {
    new App();
});

// Add some global styles for animations
const style = document.createElement('style');
style.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .section {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .section.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .project-card {
        transition: all 0.3s ease;
    }
    
    .stat-item {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.5s ease;
    }
    
    .stat-item.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style); 