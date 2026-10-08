import { Link } from 'react-router-dom';
import Button from '../common/Button.jsx';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/industries', label: 'Industries' },
  { to: '/blog', label: 'Blog' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        background: '#fff',
        boxShadow: '0 1px 0 var(--color-card-border)',
        zIndex: 50,
      }}
    >
      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px' }}
      >
        <Link to="/" style={{ fontWeight: 800 }}>
          Misorium Technologies
        </Link>
        <nav style={{ display: 'flex', gap: 'var(--space-4)' }}>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <Link to="/login">
            <Button variant="secondary">Client Login</Button>
          </Link>
          <Link to="/book-consultation">
            <Button variant="accent">Book a Consultation</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
