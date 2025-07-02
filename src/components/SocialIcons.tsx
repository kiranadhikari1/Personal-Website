import React from 'react';
import { socialLinks } from '../data/socialLinks';

export default function SocialIcons() {
  return (
    <>
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
          <svg height={24} width={24} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
            <path d={svgPath} />
          </svg>
        </a>
      ))}
    </>
  );
}
