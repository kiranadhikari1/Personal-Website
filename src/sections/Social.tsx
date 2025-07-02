import React from 'react';
import SocialIcons from '../components/SocialIcons';

export default function Social() {
  return (
    <section id="social" className="section-container" aria-label="Social media links">
      <h2>Social</h2>
      <div className="social-icons-large">
        <SocialIcons />
      </div>
    </section>
  );
}
