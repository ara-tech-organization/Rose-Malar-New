import { Link } from 'react-router-dom'
import './Footer.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/members', label: 'Members' },
  { to: '/products', label: 'Products' },
  { to: '/loans', label: 'Loans' },
  { to: '/leadership', label: 'Our Leadership Team' },
  { to: '/archive', label: 'Archive' },
  { to: '/contact', label: 'Contact Us' },
]

const CONTACT_ITEMS = [
  { label: 'Address', value: 'Branch address to be confirmed' },
  { label: 'Phone', value: 'To be confirmed' },
  { label: 'Email', value: 'To be confirmed' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">RM</span>
          <p>Rose Malar Developmental Co-operative Society Limited</p>
          <p className="footer-muted">
            Regd. under the Multi-State Co-operative Societies Act, 2002.
          </p>
        </div>

        <div>
          <h3 className="footer-heading">Quick Links</h3>
          <nav className="footer-links">
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="footer-heading">Get in Touch</h3>
          <ul className="footer-contact">
            {CONTACT_ITEMS.map((item) => (
              <li key={item.label}>
                <span className="footer-contact-label">{item.label}</span>
                <span className="footer-contact-value">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {year} Rose Malar Developmental Co-operative Society Limited. All rights reserved.</p>
        <p className="footer-credit">
          <span className="footer-heart">&hearts;</span> Crafted by{' '}
          <a href="https://discovertechnologies.co/" target="_blank" rel="noopener noreferrer">
            ARA Discoveries
          </a>
        </p>
      </div>
    </footer>
  )
}
