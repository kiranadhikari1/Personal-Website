import SocialIcons from '../components/SocialIcons';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

export default function Social() {
  const { ref, isVisible } = useFadeInOnScroll();
  const currentYear = new Date().getFullYear();

  return (
    <section 
      ref={ref}
      className={`section-container fade-in-section ${isVisible ? 'visible' : ''}`}
      id="social" 
      aria-label="Social media links and footer"
    >
      <div className="social-section">
        <h2>Connect With Me</h2>

        <div className="social-icons-large">
          <SocialIcons />
        </div>

        <div className="social-footer">
          <p>© {currentYear} Kiran Adhikari. All rights reserved.</p>
          <p>Designed &amp; built with React &amp; TypeScript.</p>
        </div>
      </div>
    </section>
  );
}