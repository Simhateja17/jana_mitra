export class Contact {
    private element: HTMLElement;

    constructor() {
        this.element = this.createElement();
        this.attachEventListeners();
    }

    private createElement(): HTMLElement {
        const section = document.createElement('section');
        section.id = 'contact';
        section.className = 'section contact';
        section.innerHTML = `
            <div class="container">
                <h2 class="section-title">Get In <span class="gradient-text">Touch</span></h2>
                <p class="section-subtitle">We'd love to hear from you. Contact us for any inquiries or project discussions</p>
                
                <div class="contact-content">
                    <div class="contact-info">
                        <h3>Contact Information</h3>
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>janamithraconstructions@gmail.com</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <span>+91 9999999999</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Chennai, Tamil Nadu, India</span>
                        </div>
                    </div>
                    
                    <form class="contact-form" id="contactForm">
                        <div class="form-group">
                            <label for="name">Your Name</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="form-submit">Send Message</button>
                    </form>
                </div>
            </div>
        `;
        return section;
    }

    private attachEventListeners(): void {
        const form = this.element.querySelector('#contactForm') as HTMLFormElement;
        
        form?.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data: Record<string, any> = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Show success message (in a real app, you would send this to a server)
            this.showMessage('Thank you for your message! We will get back to you soon.', 'success');
            
            // Reset form
            form.reset();
        });
    }

    private showMessage(message: string, type: 'success' | 'error'): void {
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 2rem;
            background: ${type === 'success' ? '#48bb78' : '#f56565'};
            color: white;
            border-radius: 5px;
            box-shadow: var(--shadow-lg);
            z-index: 3000;
            animation: slideIn 0.3s ease;
        `;
        
        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(messageDiv);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => {
                messageDiv.remove();
                style.remove();
            }, 300);
        }, 5000);
    }

    public getElement(): HTMLElement {
        return this.element;
    }
} 