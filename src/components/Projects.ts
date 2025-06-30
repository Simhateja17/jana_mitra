import { projects, Project } from '../data/projects';
import { ProjectModal } from './ProjectModal';

export class Projects {
    private element: HTMLElement;
    private currentFilter: string = 'all';
    private modal: ProjectModal;

    constructor() {
        this.modal = new ProjectModal();
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
        
        section.appendChild(this.modal.getElement());
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

        // Project cards - click to open modal
        this.element.addEventListener('click', (e) => {
            const projectCard = (e.target as HTMLElement).closest('.project-card');
            if (projectCard) {
                const projectId = projectCard.getAttribute('data-project-id');
                const project = projects.find(p => p.id === projectId);
                if (project) {
                    this.modal.show(project);
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

    public getElement(): HTMLElement {
        return this.element;
    }
} 