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
          I'm a frontend developer who loves crafting elegant, responsive
          web apps with React, TypeScript and modern UI/UX practices. Outside of
          coding I enjoy gaming (Elden Ring!), reading tech blogs and exploring
          new tools.
        </p>
        <Link
            to="/resume"
            className="button primary"
            style={{ marginTop: '1rem', display: 'inline-block' }}
            > Resume
        </Link>
      </div>
    </section>
  );
}