export default function Placeholder({ title }) {
  return (
    <div className="container section">
      <h1>{title}</h1>
      <p style={{ color: 'var(--color-text-muted)' }}>
        This page is scaffolded and pending content/design implementation.
      </p>
    </div>
  );
}
