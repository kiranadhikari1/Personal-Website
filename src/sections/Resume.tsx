import React from 'react';
import { Link } from 'react-router-dom';

export default function Resume() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Simple navigation header */}
      <nav className="navbar" role="navigation" aria-label="Resume navigation">
        <Link 
          to="/" 
          className="nav-logo"
          style={{ textDecoration: 'none' }}
        >
          Kiran Adhikari
        </Link>
        <Link 
          to="/" 
          className="button secondary"
          style={{ marginLeft: 'auto' }}
        >
          ← Back to Home
        </Link>
      </nav>

      <main className="section-container" style={{ minHeight: '100vh', paddingTop: '120px' }}>
        <iframe
          src="/Personal-Website/resume.pdf"
          title="Resume PDF"
          width="100%"
          height="900"
          style={{ border: 'none' }}
        />
      </main>
    </>
  );
}