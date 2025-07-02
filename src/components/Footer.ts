export class Footer {
    private element: HTMLElement;

    constructor() {
        this.element = this.createElement();
        this.attachEventListeners();
    }

    private createElement(): HTMLElement {
        const footer = document.createElement('footer');
        footer.className = 'footer';
        footer.innerHTML = `
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h4>About Janamithra</h4>
                        <p style="color: rgba(255, 255, 255, 0.8); margin-top: 1rem;">
                            Leading infrastructure company committed to building blocks and creating futures 
                            through innovative construction solutions.
                        </p>
                        <div class="social-links" style="margin-top: 1.5rem;">
                            <a href="https://www.facebook.com/people/Janamithra-Infra-Developers/100063784675490/?mibextid=qi2Omg&rdid=XZWfQtM54PaFM8RF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FnGCE9vhdn4KzusSb%2F%3Fmibextid%3Dqi2Omg" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/janamithra_infra_developers?igsh=MWg5eWNuZXRzanhwZw%3D%3D" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Quick Links</h4>
                        <ul class="footer-links" style="margin-top: 1rem;">
                            <li style="margin-bottom: 0.5rem;"><a href="#home">Home</a></li>
                            <li style="margin-bottom: 0.5rem;"><a href="#projects">Projects</a></li>
                            <li style="margin-bottom: 0.5rem;"><a href="#reviews">Reviews</a></li>
                            <li style="margin-bottom: 0.5rem;"><a href="#about">About Us</a></li>
                            <li style="margin-bottom: 0.5rem;"><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Our Services</h4>
                        <ul class="footer-links" style="margin-top: 1rem;">
                            <li style="margin-bottom: 0.5rem;"><a href="#">Residential Construction</a></li>
                            <li style="margin-bottom: 0.5rem;"><a href="#">Commercial Projects</a></li>
                            <li style="margin-bottom: 0.5rem;"><a href="#">Infrastructure Development</a></li>
                            <li style="margin-bottom: 0.5rem;"><a href="#">Project Management</a></li>
                            <li style="margin-bottom: 0.5rem;"><a href="#">Consulting Services</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} Janamithra Infrastructure. All rights reserved.</p>
                </div>
            </div>
        `;
        
        return footer;
    }

    private attachEventListeners(): void {
        // Smooth scrolling for footer links
        const links = this.element.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = (e.target as HTMLAnchorElement).getAttribute('href');
                if (target && target !== '#') {
                    const section = document.querySelector(target);
                    if (section) {
                        const offsetTop = section.getBoundingClientRect().top + window.scrollY - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    public getElement(): HTMLElement {
        return this.element;
    }
} 