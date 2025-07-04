import { useState, useEffect } from 'react';

interface Props {
  smoothScroll: (id: string) => void;
}

export default function Landing({ smoothScroll }: Props) {
  const [nameText, setNameText] = useState('');
  const [titleText, setTitleText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentPhase, setCurrentPhase] = useState<'name' | 'title' | 'complete'>('name');

  const fullName = "Hi, I'm Kiran Adhikari";
  const fullTitle = "I write code and play games... sometimes";

  useEffect(() => {
    let timeoutId: number;

    if (currentPhase === 'name') {
      if (nameText.length < fullName.length) {
        timeoutId = setTimeout(() => {
          setNameText(fullName.slice(0, nameText.length + 1));
        }, 100);
      } else {
        
        timeoutId = setTimeout(() => {
          setCurrentPhase('title');
        }, 500);
      }
    } else if (currentPhase === 'title') {
      if (titleText.length < fullTitle.length) {
        timeoutId = setTimeout(() => {
          setTitleText(fullTitle.slice(0, titleText.length + 1));
        }, 50);
      } else {
        
        setCurrentPhase('complete');
      }
    }

    return () => clearTimeout(timeoutId);
  }, [nameText, titleText, currentPhase]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <main className="landing" id="home">
      <div className="landing-container">
        <div className="landing-content">
          <h1 className="landing-title">
            {nameText}
            {currentPhase === 'name' && (
              <span className={`typing-cursor ${showCursor ? 'visible' : 'hidden'}`}>|</span>
            )}
          </h1>
          <p className="landing-subtitle">
            {titleText}
            {currentPhase === 'title' && (
              <span className={`typing-cursor ${showCursor ? 'visible' : 'hidden'}`}>|</span>
            )}
          </p>
          
          <div className={`button-group ${currentPhase === 'complete' ? 'fade-in' : 'hidden'}`}>
            <button className="button primary" onClick={() => smoothScroll('projects')}>
              View Projects
            </button>
            <button className="button secondary" onClick={() => smoothScroll('contact')}>
              Contact Me
            </button>
          </div>

          <div className={`scroll-down-indicator ${currentPhase === 'complete' ? 'fade-in' : 'hidden'}`} aria-hidden="true">
            <span>▼</span>
          </div>
        </div>
      </div>
    </main>
  );
}