import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    // TODO: integrate email API here
    setTimeout(() => setStatus('sent'), 1500);
  };

  return (
    <section id="contact" className="section-container" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact Me</h2>

      <div className="contact-wrapper">
        <form onSubmit={onSubmit} className="contact-form" noValidate>
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

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            rows={5}
            required
            disabled={status === 'sending'}
          />

          <button
            type="submit"
            className="button primary"
            disabled={status === 'sending' || status === 'sent'}
            aria-live="polite"
          >
            {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent! Thank you.' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
