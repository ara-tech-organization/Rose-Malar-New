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

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" role="presentation" aria-hidden="true">
      <path
        d="M5 4h3.5l1.7 4.2-2.1 1.3a11 11 0 0 0 5.4 5.4l1.3-2.1L19 14.5V18a2 2 0 0 1-2 2A13 13 0 0 1 3 6a2 2 0 0 1 2-2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  )
}

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
          <img src={logo} alt="Rosmaler Developmental Cooperative Society Limited" className="brand-mark" />
          <span className="brand-name">Rosmaler Developmental Cooperative Society Limited</span>
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
            <a href="tel:+914146240683" className="btn btn-outline--dark btn-sm btn-call" aria-label="Call us">
              <PhoneIcon />
            </a>
            <Link to="/contact" className="btn btn-primary btn-sm" onClick={() => setMenuOpen(false)}>
              Become a Member
            </Link>
          </div>
        </nav>

        <div className="site-header-actions">
          <a href="tel:+914146240683" className="btn btn-outline--dark btn-sm btn-call" aria-label="Call us">
            <PhoneIcon />
          </a>
          <Link to="/contact" className="btn btn-primary btn-sm">
            Become a Member
          </Link>
        </div>
      </div>
    </header>
  )
}
