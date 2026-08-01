import { Link } from 'react-router-dom';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';
import { experiences } from '../data/experience';
import { techStack } from '../data/techStack';

const profilePhoto = '/Personal-Website/background.png';

export default function About() {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section 
      ref={ref}
      className={`section-container fade-in-section ${isVisible ? 'visible' : ''}`}
      id="about" 
      aria-label="About Me"
    >
      <div className="about-section">
        <h2>About Me</h2>

        <div className="about-content">
          {/* Profile Photo */}
          <img
            src={profilePhoto}
            alt="Kiran Adhikari"
            className="profile-photo"
            loading="lazy"
          />

          {/* About Text & Info */}
          <div className="about-text">
            <p>
              I'm a full-stack software developer with a passion for building elegant, scalable solutions. Recently graduated from Carleton University with a degree in Computer Science, I'm currently working full-time at Ross Video while maintaining a keen interest in gaming and technology.
            </p>
            <p>
              I specialize in modern web technologies and enjoy crafting user-friendly interfaces with React and TypeScript. I'm constantly learning and exploring new technologies to expand my skillset.
            </p>

            {/* Action Buttons */}
            <div className="about-buttons">
              <Link to="/resume" className="button btn-primary">
                View Resume
              </Link>
              <Link to="/gaming" className="button btn-secondary">
                Gaming Profile
              </Link>
            </div>
          </div>

          <div className="about-details">
            {/* Tech Stack */}
            <div className="tech-stack">
              <h3>Tech Stack</h3>
              <div className="tech-icons">
                {techStack.map((tech) => (
                  <div key={tech.name} className="tech-icon" title={tech.name}>
                    <span className="tech-icon-img">{tech.icon}</span>
                    <span className="tech-icon-label">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="mini-timeline">
              <h3>Experience</h3>
              <div className="timeline-track">
                {experiences.map((exp) => (
                  <div key={exp.id} className="timeline-point">
                    <div className="timeline-dot"></div>
                    <div className="timeline-card">
                      <div className="company-name">{exp.company}</div>
                      <div className="position-title">{exp.position}</div>
                      <span className={`type ${exp.type}`}>{exp.type}</span>
                      <div className="duration">{exp.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}