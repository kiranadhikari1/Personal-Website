interface Props {
  smoothScroll: (id: string) => void;
}

export default function Landing({ smoothScroll }: Props) {
  return (
    <main className="landing" id="home">
      <div className="landing-container">
        <div className="landing-content">
          <h1 className="landing-title">Hi, I'm Kiran Adhikari</h1>
          <p className="landing-subtitle">
            Front‑end developer passionate about React &amp; TypeScript
          </p>
Q
          <div className="button-group">
            <button className="button primary" onClick={() => smoothScroll('projects')}>
              View Projects
            </button>
            <button className="button secondary" onClick={() => smoothScroll('contact')}>
              Contact Me
            </button>
          </div>

          <div className="scroll-down-indicator" aria-hidden="true">
            <span>▼</span>
          </div>
        </div>
      </div>
    </main>
  );
}
