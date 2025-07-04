import { Link } from 'react-router-dom';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

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
      </div>
    </section>
  );
}