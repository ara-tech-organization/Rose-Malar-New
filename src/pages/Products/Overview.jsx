import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import './Overview.css'

const SAVINGS = [
  {
    code: 'SB',
    title: 'Savings Account',
    text: 'A savings solution designed to help members build financial security while maintaining access to their funds.',
    stats: [
      { value: '73,227', label: 'Savings Depositors' },
      { value: '₹19.55 Cr', label: 'Savings Balance' },
    ],
    cta: 'Enquire About Savings',
  },
  {
    code: 'RD',
    title: 'Recurring Deposit',
    text: 'Develop disciplined savings habits by depositing a fixed amount regularly over a predetermined period.',
    stats: [
      { value: '3,859', label: 'RD Depositors' },
      { value: '₹2.92 Cr', label: 'RD Balance' },
    ],
    cta: 'Enquire About RD',
  },
  {
    code: 'FD',
    title: 'Fixed Deposit',
    text: 'Invest a lump sum for a selected tenure with applicable interest benefits and available payout options. The Society also provides options including the Cumulative Deposit Scheme.',
    stats: [
      { value: '2,442', label: 'FD Depositors' },
      { value: '₹26.73 Cr', label: 'Deposit Balance' },
    ],
    cta: 'Enquire About FD',
  },
]

export default function Overview() {
  return (
    <section id="products" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Products &amp; Services</span>
            <h2>Financial Solutions Designed Around Your Needs</h2>
            <p>
              From everyday savings to long-term deposits and need-based
              credit, Rose Malar provides a range of financial products
              designed around its members.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <h3 className="products-block-title">Savings Solutions</h3>
          <div className="savings-grid">
            {SAVINGS.map((item) => (
              <div key={item.code} className="savings-card">
                <span className="savings-card-code">{item.code}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                <div className="savings-stats">
                  <span className="savings-fy">FY 2025&ndash;26</span>
                  {item.stats.map((stat) => (
                    <div key={stat.label} className="savings-stat">
                      <span className="savings-stat-value">{stat.value}</span>
                      <span className="savings-stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="savings-cta">
                  {item.cta}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
