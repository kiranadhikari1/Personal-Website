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
        {/* Education Section */}
        <div className="education-container" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem', 
          padding: '0.5rem',
          backgroundColor: '#fff',
          borderRadius: '6px',
          border: '3px solid var(--primary-color, #3498db)',
          borderTop: '3px solid var(--primary-color, #3498db)',
          fontSize: '0.85rem',
          width: 'fit-content',
          minHeight: '80px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          position: 'absolute',
          left: '90px',
          top: '230px',
          zIndex: 10
        }}>
          <img
            src="/Personal-Website/carletonlogo.png"
            alt="Carleton University Logo"
            className="university-logo"
            style={{
              width: '24px',
              height: '24px',
              objectFit: 'contain',
              marginBottom: '0.2rem'
            }}
            loading="lazy"
          />
          <div className="education-details">
            <div className="university-name" style={{ fontWeight: '600', fontSize: '0.8rem', color: 'var(--primary-color, #2c3e50)', marginBottom: '0.2rem', lineHeight: '1.2' }}>
              Carleton University
            </div>
            <div className="degree" style={{ color: '#555', fontSize: '0.7rem', marginBottom: '0.2rem', lineHeight: '1.2' }}>
              Bachelor of Computer Science
            </div>
            <div className="year" style={{ color: '#666', fontSize: '0.6rem', backgroundColor: '#f8f9fa', padding: '0.15rem 0.3rem', borderRadius: '3px', fontWeight: '500' }}>
              2020 - 2024
            </div>
          </div>
        </div>
        
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
          <div className="mini-timeline" style={{ position: 'relative' }}>
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