import React, { useState } from 'react';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const { ref, isVisible } = useFadeInOnScroll();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    // Note: To integrate with a backend, replace this with an actual API call
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section 
      ref={ref}
      className={`section-container fade-in-section ${isVisible ? 'visible' : ''}`}
      id="contact" 
      aria-labelledby="contact-heading"
    >
      <div className="contact-section">
        <h2 id="contact-heading">Get in Touch</h2>

        <div className="contact-cta">
          <p>Have a question or want to collaborate?</p>
          <a href="mailto:kiranadhikari11@gmail.com" className="email-link">
            kiranadhikari11@gmail.com
          </a>
        </div>

        <div className="contact-wrapper">
          <form onSubmit={onSubmit} className="contact-form" noValidate>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                required
                disabled={status === 'sending'}
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                disabled={status === 'sending'}
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows={5}
                required
                disabled={status === 'sending'}
              />
            </div>

            <button
              type="submit"
              className="button btn-primary"
              disabled={status === 'sending' || status === 'sent'}
              aria-live="polite"
            >
              {status === 'sending' ? 'Sending…' : status === 'sent' ? '✓ Sent! Thank you.' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}