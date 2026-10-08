import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link className="site-logo" to="/" onClick={closeMenu}>
          <span className="site-logo-mark">M</span>
          <span>Misorium <small>TECHNOLOGIES</small></span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="site-navigation" className={`site-navigation${menuOpen ? ' is-open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'is-active' : '')}
              end={link.to === '/'}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/login" onClick={closeMenu}>
            <Button variant="secondary">Client Login</Button>
          </Link>
          <Link to="/book-consultation" onClick={closeMenu}>
            <Button variant="accent">Book a Consultation</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
