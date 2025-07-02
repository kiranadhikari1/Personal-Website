import React from 'react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((proj) => (
          <article key={proj.title} className="project-card">
            <img src={proj.image} alt={proj.title} loading="lazy" />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <ul className="tech-list">
              {proj.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="project-links">
              {proj.github && <a href={proj.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
              {proj.demo && <a href={proj.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
