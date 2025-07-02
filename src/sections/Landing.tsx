interface Props {
  smoothScroll: (id: string) => void;
}
const profilePhoto = '/Personal-Website/background.png';

export default function Landing({ smoothScroll }: Props) {
  return (
    <main className="landing" id="home">
      <div className="landing-container">
        <div className="landing-content">
          <h1 className="landing-title">Hi, I'm Kiran</h1>
          <p className="landing-subtitle"></p>
          <div className="button-group">
            <button className="button primary" onClick={() => smoothScroll('projects')}>
              View Projects
            </button>
            <button className="button secondary" onClick={() => smoothScroll('contact')}>
              Contact Me
            </button>
          </div>
          <div className="scroll-down-indicator" aria-hidden="true">
            <span>▼</span>
          </div>

          {/* About Me Section */}
          <section className="about-section">
            <h2>About Me</h2>
            <div className="about-content">
              <img
                src={profilePhoto}
                alt=""
                loading="lazy"
                className="profile-photo"
              />
              <p>
                blog text?blog text?blog text?blog text?blog text?blog text?blog text?blog text?blog text?blog text?blog text?blog text?blog 
                text?blog text?blog text?blog text?blog text?blog text?blog text?
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
