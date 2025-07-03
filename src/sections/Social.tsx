import SocialIcons from '../components/SocialIcons';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

export default function Social() {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section 
      ref={ref}
      className={`section-container fade-in-section ${isVisible ? 'visible' : ''}`}
      id="social" 
      aria-label="Social media links"
    >
      <div className="social-icons-large">
        <SocialIcons />
      </div>

      {/* todo : copyrtight sign here!*/}
      <div className="social-footer">
        <p>© {new Date().getFullYear()} Kiran Adhikari. All rights reserved.</p>
        <p>Designed &amp; built by Kiran Adhikari.</p>
      </div>
    </section>
  );
}