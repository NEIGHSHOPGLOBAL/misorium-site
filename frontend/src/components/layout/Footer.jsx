import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link className="footer-logo" to="/" aria-label="Misorium Technologies home">
              <span className="footer-logo-mark">M</span>
              <span>Misorium <small>TECHNOLOGIES</small></span>
            </Link>
            <p>We turn ambitious ideas into digital experiences that help businesses grow.</p>
            <Link className="footer-cta" to="/book-consultation">Start a conversation <span>→</span></Link>
          </div>

          <div className="footer-links">
            <div>
              <h2>Explore</h2>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/case-studies">Case Studies</Link>
            </div>
            <div>
              <h2>Resources</h2>
              <Link to="/blog">Blog</Link>
              <Link to="/industries">Industries</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
            <div className="footer-contact">
              <h2>Let’s connect</h2>
              <a href="mailto:hello@misorium.com">hello@misorium.com</a>
              <a href="tel:+919876543210">+91 98765 43210</a>
              <p>Mon–Fri, 9:00 AM–6:00 PM IST</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Misorium Technologies. All rights reserved.</span>
          <div>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
