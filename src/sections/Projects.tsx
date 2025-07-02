import { projects } from '../data/projects';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((proj) => (
          <article key={proj.title} className="project-card">
            <h3>
              {proj.icon && proj.icon.endsWith('.png') ? (
                <img 
                  src={proj.icon} 
                  alt={`${proj.title} logo`} 
                  style={{ width: 24, height: 24, verticalAlign: 'middle', marginRight: 8 }} 
                />
              ) : (
                proj.icon
              )} 
              {proj.title}
            </h3>

            <p>{proj.description}</p>
            <ul className="tech-list">
              {proj.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="project-links">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub repository for ${proj.title}`}
                  style={{ fontSize: '1.4rem', color: 'var(--gold)' }}
                >
                  <FaGithub />
                </a>
              )}
              {proj.live && (
                <a href={proj.live} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
