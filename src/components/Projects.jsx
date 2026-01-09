import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../mock';
import '../styles/Projects.css';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Real-world ML systems built for production</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${hoveredId === project.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <ExternalLink size={20} className="project-icon" />
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              {project.impact && (
                <div className="project-impact">
                  <span className="impact-label">Impact:</span>
                  <span className="impact-text">{project.impact}</span>
                </div>
              )}
              
              <div className="project-link">{project.link}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
