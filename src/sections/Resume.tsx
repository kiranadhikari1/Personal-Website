export default function Resume() {
  return (
    <main className="section-container" style={{ minHeight: '100vh' }}>
      <iframe
        src="/Personal-Website/resume.pdf"
        title="Resume PDF"
        width="100%"
        height="900"
        style={{ border: 'none' }}
      />
    </main>
  );
}
