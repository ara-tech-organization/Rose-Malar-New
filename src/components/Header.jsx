import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'
import './Header.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/members', label: 'Members' },
  { to: '/products', label: 'Products' },
  { to: '/loans', label: 'Loans' },
  { to: '/leadership', label: 'Our Leadership Team' },
  { to: '/archive', label: 'Archive' },
  { to: '/contact', label: 'Contact Us' },
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

      <div className="container site-header-main">
        <Link to="/" className="brand">
          <img src={logo} alt="RMDCS logo" className="brand-mark" />
          <span className="brand-text">
            <span className="brand-name">Rose Malar</span>
            <span className="brand-sub">Developmental Co-operative Society Ltd.</span>
          </span>
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
            <Link key={link.to} to={link.to} className="site-nav-link" onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
