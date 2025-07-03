import { socialLinks } from '../data/socialLinks';
import { Link } from 'react-router-dom';

interface Props {
  smoothScroll: (id: string) => void;
  active: string;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navbar({ smoothScroll, active, theme, toggleTheme }: Props) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact Me' },
    { id: 'social', label: 'Social' }
  ];

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div
        className="nav-logo"
        onClick={() => smoothScroll('home')}
        tabIndex={0}
        role="button"
        aria-label="Go to Home"
        onKeyDown={e => e.key === 'Enter' && smoothScroll('home')}
      >
        Kiran Adhikari
      </div>

      <div className="nav-links">
        {navItems.map(({ id, label }) => (
          <button
            key={id}
            className={`nav-button ${active === id ? 'active' : ''}`}
            onClick={() => smoothScroll(id)}
            aria-current={active === id ? 'page' : undefined}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="nav-socials" aria-label="Social media links">
        {socialLinks.map(({ href, label, svgPath }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="nav-social-link"
          >
            <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
              <path d={svgPath} />
            </svg>
          </a>
        ))}
        <button
          className="theme-toggle nav-button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
      </div>
    </nav>
  );
}
