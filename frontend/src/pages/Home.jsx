export default function Home() {
  return (
    <div className="container section">
      <p className="eyebrow">Your Technology Partner</p>
      <h1>
        We Build Digital Experiences <span style={{ color: 'var(--color-primary)' }}>That Grow Businesses</span>
      </h1>
      <p style={{ color: 'var(--color-text-muted)', maxWidth: 560 }}>
        Websites, digital marketing, UI/UX and technology solutions for growing businesses.
      </p>
      {/* TODO: Stats strip, Services grid, Featured Work, Process, Industries,
          Testimonials, CTA, FAQ and Blog sections per ui.md §4 */}
    </div>
  );
}
