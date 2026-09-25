import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'
import './Footer.css'

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products & Services' },
  { to: '/impact', label: 'Our Impact' },
  { to: '/leadership', label: 'Governance' },
  { to: '/contact', label: 'Contact' },
]

const PRODUCT_LINKS = [
  { to: '/products', label: 'Savings' },
  { to: '/products', label: 'Recurring Deposit' },
  { to: '/products', label: 'Fixed Deposit' },
  { to: '/products', label: 'Loans' },
  { to: '/impact', label: 'Housing Finance' },
]

const RESOURCE_LINKS = [
  { to: null, label: 'Annual Report' },
  { to: '/contact', label: 'Deposit Calculator' },
  { to: '/contact', label: 'FAQ' },
]

const CONNECT_LINKS = [
  { to: '/contact', label: 'Membership Enquiry' },
  { to: '/contact', label: 'Loan Enquiry' },
  { to: '/contact', label: 'Contact Us' },
]

const FOOTER_COLUMNS = [
  { heading: 'Quick Links', links: QUICK_LINKS },
  { heading: 'Products', links: PRODUCT_LINKS },
  { heading: 'Resources', links: RESOURCE_LINKS },
  { heading: 'Connect', links: CONNECT_LINKS },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="RMDCS logo" className="footer-logo" loading="lazy" decoding="async" />
          <p>Rose Malar Developmental Co-operative Society Limited</p>
          <p className="footer-tagline">Together We Grow. Together We Prosper.</p>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <div key={column.heading}>
            <h3 className="footer-heading">{column.heading}</h3>
            <nav className="footer-links">
              {column.links.map((link) =>
                link.to ? (
                  <Link key={link.label} to={link.to}>
                    {link.label}
                  </Link>
                ) : (
                  <span key={link.label} className="footer-link-pending">
                    {link.label}
                  </span>
                )
              )}
            </nav>
          </div>
        ))}
      </div>

      <div className="container footer-bottom">
        <p>&copy; {year} Rose Malar Developmental Co-operative Society Limited. All rights reserved.</p>
      </div>
    </footer>
  )
}
