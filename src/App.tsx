import React, { useState } from 'react';

const socialLinks = [
  {
    href: 'https://github.com/kiranadhikari1',
    label: 'GitHub',
    svgPath:
      'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.62 7.62 0 012 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z',
  },
  {
    href: 'https://linkedin.com/in/adhikariKiran',
    label: 'LinkedIn',
    svgPath:
      'M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v12H0zM7 8h4.76v1.71h.07c.66-1.24 2.28-2.54 4.7-2.54 5.03 0 5.96 3.32 5.96 7.63V20H17v-6.68c0-1.6-.03-3.67-2.23-3.67-2.23 0-2.57 1.74-2.57 3.54V20H7z',
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    alert(`Navigate to ${section} - functionality to be implemented`);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div
          className="nav-logo"
          onClick={() => handleNavClick('Home')}
          tabIndex={0}
          role="button"
          aria-label="Go to Home"
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleNavClick('Home'); }}
        >
          Kiran Adhikari
        </div>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="navigation"
        >
          <span className="hamburger" />
          <span className="hamburger" />
          <span className="hamburger" />
        </button>

        <div
          id="navigation"
          className="nav-links"
          style={{ display: menuOpen ? 'flex' : undefined }}
        >
          <button className="nav-button" onClick={() => handleNavClick('Home')}>
            Home
          </button>
          <button className="nav-button" onClick={() => handleNavClick('Projects')}>
            Projects
          </button>
          <button className="nav-button" onClick={() => handleNavClick('Contact Me')}>
            Contact Me
          </button>
          <button className="nav-button" onClick={() => handleNavClick('Social')}>
            Social
          </button>
        </div>

        <div className="nav-socials">
          {socialLinks.map(({ href, label, svgPath }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
            >
              <svg
                height="24"
                width="24"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d={svgPath} />
              </svg>
            </a>
          ))}
        </div>
      </nav>

      <main className="landing" role="main">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Kiran Adhikari, a Frontend Developer passionate about React and TypeScript.</p>

        <div className="button-group">
          <button className="button" onClick={() => handleNavClick('Projects')}>
            View Projects
          </button>
          <button className="button" onClick={() => handleNavClick('Contact Me')}>
            Contact Me
          </button>
        </div>
      </main>
    </>
  );
}
