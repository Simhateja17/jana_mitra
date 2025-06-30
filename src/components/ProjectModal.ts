import { Project } from '../data/projects';

export class ProjectModal {
    private element: HTMLElement;

    constructor() {
        this.element = this.createElement();
        this.attachEventListeners();
    }

    private createElement(): HTMLElement {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div class="modal-body"></div>
            </div>
        `;
        return modal;
    }

    private attachEventListeners(): void {
        // Close button
        const closeBtn = this.element.querySelector('.modal-close');
        closeBtn?.addEventListener('click', () => this.hide());

        // Click outside to close
        this.element.addEventListener('click', (e) => {
            if (e.target === this.element) {
                this.hide();
            }
        });

        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.element.style.display === 'block') {
                this.hide();
            }
        });
    }

    public show(project: Project): void {
        const modalBody = this.element.querySelector('.modal-body');
        if (modalBody) {
            modalBody.innerHTML = `
                <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 400px; object-fit: cover; border-radius: 10px 10px 0 0;">
                <div style="padding: 2rem; flex: 1;">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                        <h2 style="font-size: 2rem; color: var(--primary-color); margin: 0;">${project.title}</h2>
                        <span class="project-status status-${project.status}" style="font-size: 1rem;">
                            ${project.status === 'completed' ? 'Completed' : 'Ongoing'}
                        </span>
                    </div>
                    
                    <p style="color: var(--text-light); margin-bottom: 1.5rem;">
                        <i class="fas fa-map-marker-alt"></i> ${project.location}
                    </p>
                    
                    <p style="color: var(--text-dark); line-height: 1.8; margin-bottom: 2rem;">
                        ${project.description}
                    </p>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                        ${project.completionDate ? `
                            <div>
                                <h4 style="color: var(--primary-color); margin-bottom: 0.5rem;">
                                    <i class="fas fa-calendar"></i> Completion Date
                                </h4>
                                <p>${project.completionDate}</p>
                            </div>
                        ` : ''}
                        ${project.size ? `
                            <div>
                                <h4 style="color: var(--primary-color); margin-bottom: 0.5rem;">
                                    <i class="fas fa-ruler-combined"></i> Project Size
                                </h4>
                                <p>${project.size}</p>
                            </div>
                        ` : ''}
                    </div>
                    
                    <div>
                        <h4 style="color: var(--primary-color); margin-bottom: 1rem;">
                            <i class="fas fa-star"></i> Key Features
                        </h4>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem;">
                            ${project.features.map(feature => `
                                <div style="display: flex; align-items: center; gap: 0.5rem;">
                                    <i class="fas fa-check-circle" style="color: var(--secondary-color);"></i>
                                    <span>${feature}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }
        
        this.element.style.display = 'flex';
        // Ensure the modal can scroll from the top
        this.element.scrollTop = 0;
    }

    public hide(): void {
        this.element.style.display = 'none';
    }

    public getElement(): HTMLElement {
        return this.element;
    }
} 