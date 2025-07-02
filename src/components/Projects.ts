import { projects, Project } from '../data/projects';

export class Projects {
    private element: HTMLElement;
    private currentFilter: string = 'all';

    constructor() {
        this.element = this.createElement();
        this.attachEventListeners();
    }

    private createElement(): HTMLElement {
        const section = document.createElement('section');
        section.id = 'projects';
        section.className = 'section';
        section.innerHTML = `
            <div class="container">
                <h2 class="section-title">Our <span class="gradient-text">Projects</span></h2>
                <p class="section-subtitle">Discover our portfolio of completed and ongoing construction projects</p>
                
                <div class="projects-filter">
                    <button class="filter-btn active" data-filter="all">All Projects</button>
                    <button class="filter-btn" data-filter="completed">Completed</button>
                    <button class="filter-btn" data-filter="ongoing">Ongoing</button>
                </div>
                
                <div class="projects-grid">
                    ${this.renderProjects(projects)}
                </div>
            </div>
        `;
        
        return section;
    }

    private renderProjects(projectsToRender: Project[]): string {
        return projectsToRender.map(project => `
            <div class="project-card" data-project-id="${project.id}" data-status="${project.status}" data-category="${project.category}">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    <span class="project-status status-${project.status}">${project.status === 'completed' ? 'Completed' : 'Ongoing'}</span>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${project.location}
                    </p>
                    <div class="project-actions">
                        <button class="project-details-btn" data-project-id="${project.id}">
                            <span>More Details</span>
                            <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    private attachEventListeners(): void {
        // Filter buttons
        const filterButtons = this.element.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const target = e.target as HTMLButtonElement;
                const filter = target.getAttribute('data-filter') || 'all';
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                target.classList.add('active');
                
                // Filter projects
                this.filterProjects(filter);
            });
        });

        // Project details button click
        this.element.addEventListener('click', (e) => {
            const detailsBtn = (e.target as HTMLElement).closest('.project-details-btn');
            if (detailsBtn) {
                const projectId = detailsBtn.getAttribute('data-project-id');
                if (projectId) {
                    // Navigate to project detail page
                    this.navigateToProject(projectId);
                }
            }
        });
    }

    private filterProjects(filter: string): void {
        const projectCards = this.element.querySelectorAll('.project-card') as NodeListOf<HTMLElement>;
        
        projectCards.forEach(card => {
            const status = card.getAttribute('data-status');
            
            let shouldShow = false;
            
            switch(filter) {
                case 'all':
                    shouldShow = true;
                    break;
                case 'completed':
                case 'ongoing':
                    shouldShow = status === filter;
                    break;
            }
            
            if (shouldShow) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    private navigateToProject(projectId: string): void {
        // For now, we'll use hash-based routing for simplicity
        // In a more complex app, you might use a proper router
        window.location.hash = `#project/${projectId}`;
        
        // Alternative: Open in new tab with project details
        // window.open(`project.html?id=${projectId}`, '_blank');
    }

    public getElement(): HTMLElement {
        return this.element;
    }
} 