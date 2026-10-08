import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-primary-dark)', color: '#fff', padding: 'var(--space-8) 0' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-6)' }}>
        <div style={{ flex: 1, minWidth: 200 }}>
          <strong>Misorium Technologies</strong>
          <p>Building digital experiences that help businesses grow.</p>
        </div>
        <div>
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
        </div>
        <div>
          <h4>Services</h4>
          <Link to="/services">Services</Link>
        </div>
        <div>
          <h4>Resources</h4>
          <Link to="/blog">Blog</Link>
        </div>
        <div>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
      <div className="container" style={{ marginTop: 'var(--space-6)', fontSize: 13 }}>
        © {new Date().getFullYear()} Misorium Technologies ·{' '}
        <Link to="/privacy-policy">Privacy Policy</Link> · <Link to="/terms">Terms & Conditions</Link>
      </div>
    </footer>
  );
}
