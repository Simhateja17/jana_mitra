'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { projects, Project } from '@/src/data/projects';

export default function Projects() {
    const [currentFilter, setCurrentFilter] = useState('all');

    const filterProjects = useCallback((filter: string) => {
        setCurrentFilter(filter);
    }, []);

    const filteredProjects = projects.filter((project) => {
        if (currentFilter === 'all') return true;
        return project.status === currentFilter;
    });

    const renderProject = (project: Project) => (
        <div
            key={project.id}
            className="project-card"
            data-project-id={project.id}
            data-status={project.status}
            data-category={project.category}
            style={{
                display: 'block',
                opacity: 1,
                transform: 'translateY(0)',
                transition: 'all 0.3s ease'
            }}
        >
            <div className="project-image">
                <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
                <span className={`project-status status-${project.status}`}>
                    {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                </span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-location">
                    <i className="fas fa-map-marker-alt"></i>
                    {project.location}
                </p>
                <div className="project-actions">
                    <Link href={`/project/${project.id}`} className="project-details-btn">
                        <span>More Details</span>
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    );

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Our <span className="gradient-text">Projects</span></h2>
                <p className="section-subtitle">Discover our portfolio of completed and ongoing construction projects</p>

                <div className="projects-filter">
                    <button
                        className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
                        onClick={() => filterProjects('all')}
                    >
                        All Projects
                    </button>
                    <button
                        className={`filter-btn ${currentFilter === 'completed' ? 'active' : ''}`}
                        onClick={() => filterProjects('completed')}
                    >
                        Completed
                    </button>
                    <button
                        className={`filter-btn ${currentFilter === 'ongoing' ? 'active' : ''}`}
                        onClick={() => filterProjects('ongoing')}
                    >
                        Ongoing
                    </button>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(renderProject)}
                </div>
            </div>
        </section>
    );
}
