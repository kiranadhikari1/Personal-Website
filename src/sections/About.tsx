import { Link } from 'react-router-dom';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';
import { experiences } from '../data/experience';

const profilePhoto = '/Personal-Website/background.png';

export default function About() {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section 
      ref={ref}
      className={`about-section fade-in-section ${isVisible ? 'visible' : ''}`} 
      id="about" 
      aria-label="About Me"
    >
      <h2>About Me</h2>

      <div className="about-content">
        <img
          src={profilePhoto}
          alt="Kiran Adhikari"
          className="profile-photo"
          loading="lazy"
        />
        <div className="about-text">
          <p>
            I'm a software developer who recently graduated from Carleton University. I currently work full time and game part time!
          </p>
          <div className="about-buttons" style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/resume"
              className="button primary"
              > Resume
            </Link>
            <Link
              to="/gaming"
              className="button secondary"
              > Gaming Profile
            </Link>
          </div>
          
          {/* Small Timeline */}
          <div className="mini-timeline">
            <div className="timeline-track">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="timeline-point">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <div className="company-name">{exp.company}</div>
                    <div className="position-title">{exp.position}</div>
                    <div className="type">{exp.type}</div>
                    <div className="duration">{exp.duration}</div>
                  </div>
                  {index < experiences.length - 1 && <div className="timeline-connector"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}