const profilePhoto = '/Personal-Website/background.png';

export default function About() {
  return (
    <section className="about-section" id="about" aria-label="About Me">
      <h2>About Me</h2>

      <div className="about-content">
        <img
          src={profilePhoto}
          alt="Kiran Adhikari"
          className="profile-photo"
          loading="lazy"
        />

        <p>
          I’m a frontend developer who loves crafting elegant, responsive
          web apps with React, TypeScript and modern UI/UX practices. Outside of
          coding I enjoy gaming (Elden Ring!), reading tech blogs and exploring
          new tools.
        </p>
      </div>
    </section>
  );
}
