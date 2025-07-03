import React from 'react';
import Navbar from './components/Navbar';
import Landing from './sections/Landing';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Social from './sections/Social';
import About from './sections/About';

export default function App() {
  const smoothScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const [active, setActive] = React.useState('home');
  React.useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('main, section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const [theme, setTheme] = React.useState<'light' | 'dark'>(() =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'dark'
      : 'dark'
  );
  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  React.useEffect(() => {
    document.body.classList.toggle('light-theme', theme === 'light');
  }, [theme]);

  return (
    <>
      <Navbar smoothScroll={smoothScroll} active={active} theme={theme} toggleTheme={toggleTheme} />
      <Landing smoothScroll={smoothScroll} />
      <About />
      <Projects />
      <Contact />
      <Social />
    </>
  );
}
