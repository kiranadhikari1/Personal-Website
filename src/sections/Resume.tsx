export default function Resume() {
  return (
    <main className="section-container" style={{ minHeight: '100vh' }}>
      <h1>My Resume</h1>
      <iframe
        src="/resume.pdf"
        title="Resume"
        width="100%"
        height="900"
        style={{ border: 'none' }}
      />
    </main>
  );
}
