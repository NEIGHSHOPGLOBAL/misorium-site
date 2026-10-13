import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
  { to: '/login', label: 'Client Login' },
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
          <Link className="header-login" to="/login" onClick={closeMenu}>Client Login</Link>
          <Link className="header-consultation" to="/book-consultation" onClick={closeMenu}>Book a Consultation</Link>
        </div>
      </div>
    </header>
  );
}
