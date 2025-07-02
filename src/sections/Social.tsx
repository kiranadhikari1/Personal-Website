import React from 'react';
import SocialIcons from '../components/SocialIcons';

export default function Social() {
  return (
    <section id="social" className="section-container" aria-label="Social media links">
      <div className="social-icons-large">
        <SocialIcons />
      </div>

      {/* Add copyright and signature here */}
      <div className="social-footer">
        <p>© {new Date().getFullYear()} Kiran Adhikari. All rights reserved.</p>
        <p>Designed &amp; built by Kiran Adhikari.</p>
      </div>
    </section>
  );
}
