import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

export default function Projects() {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section 
      ref={ref}
      className={`section-container fade-in-section ${isVisible ? 'visible' : ''}`}
      id="projects"
    >
      <div className="projects-section">
        <h2>Featured Projects</h2>
        
        {projects.length > 0 ? (
          <div className="project-grid">
            {projects.map((proj, index) => (
              <article 
                key={proj.title} 
                className={`project-card fade-in-item ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Header */}
                <div className="project-header">
                  <div className="project-icon">
                    {proj.icon && proj.icon.endsWith('.png') ? (
                      <img 
                        src={proj.icon} 
                        alt={`${proj.title} logo`}
                      />
                    ) : (
                      proj.icon
                    )} 
                  </div>
                  <h3>{proj.title}</h3>
                </div>

                {/* Description */}
                <p>{proj.description}</p>

                {/* Tech List */}
                <ul className="tech-list">
                  {proj.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                {/* Links */}
                <div className="project-links">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${proj.title} on GitHub`}
                      title="View on GitHub"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                  )}
                  {proj.live && (
                    <a 
                      href={proj.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`View ${proj.title} live`}
                      title="View Live"
                    >
                      <FaExternalLinkAlt />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="no-projects">
            <p>No projects to display yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}