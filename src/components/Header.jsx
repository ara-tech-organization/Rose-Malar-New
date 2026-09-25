import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/Logo.png'
import './Header.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products & Services' },
  { to: '/impact', label: 'Our Impact' },
  { to: '/leadership', label: 'Governance & Leadership' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header-top">
        <div className="container site-header-top-inner">
          <p>A Multi-State Co-operative Society · Regd. under the Ministry of Agriculture &amp; Farmers Welfare, Govt. of India</p>
        </div>
      </div>

      <div className="site-header-main">
        <Link to="/" className="brand">
          <img src={logo} alt="Rose Malar Developmental Co-operative Society Ltd." className="brand-mark" />
          <span className="brand-name">Rose Malar</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${menuOpen ? 'site-nav-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `site-nav-link ${isActive ? 'site-nav-link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          <div className="site-nav-actions">
            <a href="tel:+914146240683" className="btn btn-outline--dark btn-sm">
              Call Now
            </a>
            <Link to="/contact" className="btn btn-primary btn-sm" onClick={() => setMenuOpen(false)}>
              Book Now
            </Link>
          </div>
        </nav>

        <div className="site-header-actions">
          <a href="tel:+914146240683" className="btn btn-outline--dark btn-sm">
            Call Now
          </a>
          <Link to="/contact" className="btn btn-primary btn-sm">
            Book Now
          </Link>
        </div>
      </div>
    </header>
  )
}
