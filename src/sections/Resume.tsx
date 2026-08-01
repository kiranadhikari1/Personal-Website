import React from 'react';
import { socialLinks } from '../data/socialLinks';

export default function Resume() {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact Me' },
    { id: 'social', label: 'Social' },
  ];

  const [theme, setTheme] = React.useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  React.useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    document.body.classList.toggle('light-theme', theme === 'light');
  }, [theme]);

  const goHome = (id?: string) => {
    window.location.hash = '#/';
    window.scrollTo(0, 0);

    if (id) {
      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Resume navigation">
        <button
          type="button"
          className="nav-logo"
          style={{ textDecoration: 'none', background: 'transparent', border: 'none', padding: 0 }}
          onClick={() => goHome()}
        >
          Kiran Adhikari
        </button>

        <div className="nav-links">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              className="nav-button"
              onClick={() => goHome(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="nav-socials" aria-label="Social media links">
          {socialLinks.slice(0, 2).map(({ href, label, svgPath }) => (
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

      <main className="section-container" style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '40px' }}>
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 18px 50px rgba(0, 0, 0, 0.18)',
          }}
        >
          <iframe
            src="/Personal-Website/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
            title="Resume PDF"
            width="100%"
            height="900"
            style={{ border: 'none', display: 'block', background: '#ffffff' }}
          />
        </div>
      </main>
    </>
  );
}