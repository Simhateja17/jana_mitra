import { projects, Project } from '../data/projects';

export class ProjectDetail {
    private element: HTMLElement;
    private project: Project | null = null;

    constructor() {
        this.element = this.createElement();
        this.handleRouting();
        this.attachEventListeners();
    }

    private createElement(): HTMLElement {
        const section = document.createElement('section');
        section.id = 'project-detail';
        section.className = 'section project-detail-section';
        section.style.display = 'none'; // Hidden by default
        return section;
    }

    private handleRouting(): void {
        // Listen for hash changes
        window.addEventListener('hashchange', () => {
            this.checkRoute();
        });
        
        // Check initial route
        this.checkRoute();
    }

    private checkRoute(): void {
        const hash = window.location.hash;
        const projectMatch = hash.match(/^#project\/(.+)$/);
        
        if (projectMatch) {
            const projectId = projectMatch[1];
            this.showProject(projectId);
        } else {
            this.hideProject();
        }
    }

    private showProject(projectId: string): void {
        this.project = projects.find(p => p.id === projectId) || null;
        
        if (this.project) {
            this.renderProject();
            this.element.style.display = 'block';
            
            // Hide all main page elements
            const elementsToHide = [
                '.hero',
                '.section:not(.project-detail-section)',
                '.footer'
            ];
            
            elementsToHide.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(element => {
                    (element as HTMLElement).style.display = 'none';
                });
            });
            
            // Keep header visible
            const header = document.querySelector('.header');
            if (header) {
                (header as HTMLElement).style.display = 'block';
            }
            
            // Add class to body for project detail styling
            document.body.classList.add('project-detail-view');
            
            // Scroll to top
            window.scrollTo(0, 0);
        }
    }

    private hideProject(): void {
        this.element.style.display = 'none';
        
        // Remove project detail styling from body
        document.body.classList.remove('project-detail-view');
        
        // Show all main page elements
        const elementsToShow = [
            '.hero',
            '.section:not(.project-detail-section)',
            '.footer'
        ];
        
        elementsToShow.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                (element as HTMLElement).style.display = 'block';
            });
        });
    }

    private renderProject(): void {
        if (!this.project) return;

        this.element.innerHTML = `
            <div class="container">
                <div class="project-detail-header">
                    <button class="back-btn" id="backToProjects">
                        <i class="fas fa-arrow-left"></i>
                        <span>Back to Projects</span>
                    </button>
                </div>
                
                <div class="project-detail-content">
                    <div class="project-detail-left">
                        <div class="project-detail-image">
                            <img src="${this.project.image}" alt="${this.project.title}" />
                        </div>
                        
                        ${this.project.additionalInfo?.landParcel || this.project.additionalInfo?.floor ? `
                            <div class="project-detail-additional-info">
                                ${this.project.additionalInfo?.landParcel ? `
                                    <div class="project-meta-item">
                                        <h4><i class="fas fa-map"></i> Land Parcel</h4>
                                        <p>${this.project.additionalInfo.landParcel}</p>
                                    </div>
                                ` : ''}
                                ${this.project.additionalInfo?.floor ? `
                                    <div class="project-meta-item">
                                        <h4><i class="fas fa-building"></i> Floor</h4>
                                        <p>${this.project.additionalInfo.floor}</p>
                                    </div>
                                ` : ''}
                            </div>
                        ` : ''}
                        
                        ${this.project.sitePlan ? `
                            <div class="project-detail-site-plan">
                                <h4><i class="fas fa-map"></i> Site Plan</h4>
                                <div class="site-plan-container">
                                    <img src="${this.project.sitePlan}" alt="${this.project.title} Site Plan" loading="lazy" />
                                </div>
                            </div>
                        ` : ''}
                        
                        ${this.project.amenities ? `
                            <div class="project-detail-amenities">
                                <h4><i class="fas fa-home"></i> Amenities of ${this.project.title}</h4>
                                <div class="amenities-grid">
                                    ${this.project.amenities.map(amenity => `
                                        <div class="amenity-item">
                                            <i class="${amenity.icon}"></i>
                                            <span>${amenity.name}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                    
                    <div class="project-detail-right">
                        <div class="project-detail-title-section">
                            <h1 class="project-detail-title">${this.project.title}</h1>
                            <span class="project-status status-${this.project.status}">
                                ${this.project.status === 'completed' ? 'Completed' : 'Ongoing'}
                            </span>
                        </div>
                        
                        <p class="project-detail-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${this.project.location}
                        </p>
                        
                        <p class="project-detail-description">${this.project.description}</p>
                         
                        ${this.project.gallery ? `
                            <div class="project-detail-gallery">
                                <h4><i class="fas fa-images"></i> Gallery</h4>
                                <div class="gallery-grid">
                                    ${this.project.gallery.map((image, index) => `
                                        <div class="gallery-item">
                                            <img src="${image}" alt="Gallery Image ${index + 1}" loading="lazy" />
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                         
                        ${this.project.locationHighlights ? `
                            <div class="project-detail-location-highlights">
                                <h4><i class="fas fa-map-marked-alt"></i> Location Highlights of ${this.project.title}</h4>
                                <div class="location-highlights-grid">
                                    ${this.project.locationHighlights.map(highlight => `
                                        <div class="location-highlight-item">
                                            <i class="fas fa-map-marker-alt"></i>
                                            <span>${highlight}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                        
                        ${this.project.plotDetails ? `
                            <div class="project-detail-plot-details">
                                <h4><i class="fas fa-table"></i> Plot Details</h4>
                                <div class="plot-details-table-container">
                                    <table class="plot-details-table">
                                        <thead>
                                            <tr>
                                                <th>Plot No</th>
                                                <th>Facing</th>
                                                <th>Size</th>
                                                <th>Sq Feet</th>
                                                <th>Sq Yard</th>
                                                <th>Ankanams</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${this.project.plotDetails.map(plot => `
                                                <tr>
                                                    <td>${plot.plotNo}</td>
                                                    <td>${plot.facing}</td>
                                                    <td>${plot.size}</td>
                                                    <td>${plot.sqfeet}</td>
                                                    <td>${plot.sqyard}</td>
                                                    <td>${plot.ankanams}</td>
                                                </tr>
                                            `).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    private attachEventListeners(): void {
        this.element.addEventListener('click', (e) => {
            const backBtn = (e.target as HTMLElement).closest('#backToProjects');
            if (backBtn) {
                // Go back to main page
                window.location.hash = '';
                // Scroll to projects section
                setTimeout(() => {
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                        projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        });
    }

    public getElement(): HTMLElement {
        return this.element;
    }
} 