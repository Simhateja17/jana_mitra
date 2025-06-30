export class Header {
    private element: HTMLElement;
    private mobileMenuOpen: boolean = false;

    constructor() {
        this.element = this.createElement();
        this.attachEventListeners();
        this.handleScroll();
    }

    private createElement(): HTMLElement {
        const header = document.createElement('header');
        header.className = 'header';
        header.innerHTML = `
            <div class="container">
                <nav class="nav-container">
                    <a href="#home" class="logo">
                        <img src="assets/images/logo.webp" alt="Jana Mithra" class="logo-image">
                    </a>
                    <ul class="nav-menu">
                        <li><a href="#home" class="nav-link active">Home</a></li>
                        <li><a href="#projects" class="nav-link">Projects</a></li>
                        <li><a href="#reviews" class="nav-link">Reviews</a></li>
                        <li><a href="#about" class="nav-link">About</a></li>
                        <li><a href="#contact" class="nav-link">Contact</a></li>
                    </ul>
                    <button class="mobile-menu-toggle">
                        <i class="fas fa-bars"></i>
                    </button>
                </nav>
            </div>
        `;
        return header;
    }

    private attachEventListeners(): void {
        // Mobile menu toggle
        const toggleBtn = this.element.querySelector('.mobile-menu-toggle');
        const navMenu = this.element.querySelector('.nav-menu');
        
        // Enhanced event listeners for reliable mobile menu functionality
        if (toggleBtn) {
            // Primary click event
            toggleBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleMobileMenu(toggleBtn, navMenu);
            });

            // Touch support for mobile devices
            toggleBtn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleMobileMenu(toggleBtn, navMenu);
            });
        }

        // Smooth scrolling for navigation links
        const navLinks = this.element.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = (e.target as HTMLAnchorElement).getAttribute('href');
                if (target) {
                    const section = document.querySelector(target);
                    if (section) {
                        const offsetTop = section.getBoundingClientRect().top + window.scrollY - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
                
                // Close mobile menu after clicking
                if (this.mobileMenuOpen) {
                    navMenu?.classList.remove('active');
                    this.mobileMenuOpen = false;
                    if (toggleBtn) {
                        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }

                // Update active link
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                link.classList.add('active');
            });
        });
    }

    private toggleMobileMenu(toggleBtn: Element, navMenu: Element | null): void {
        this.mobileMenuOpen = !this.mobileMenuOpen;
        navMenu?.classList.toggle('active');
        toggleBtn.innerHTML = this.mobileMenuOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    }

    private handleScroll(): void {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.element.classList.add('scrolled');
            } else {
                this.element.classList.remove('scrolled');
            }

            // Update active nav link based on scroll position
            const sections = document.querySelectorAll('section');
            const navLinks = this.element.querySelectorAll('.nav-link');
            
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    const correspondingLink = this.element.querySelector(`a[href="#${section.id}"]`);
                    correspondingLink?.classList.add('active');
                }
            });
        });
    }

    public getElement(): HTMLElement {
        return this.element;
    }
} 