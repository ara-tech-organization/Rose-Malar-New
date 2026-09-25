import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import './HousingFinance.css'

export default function HousingFinance() {
  return (
    <section id="housing-finance" className="section">
      <div className="container">
        <Reveal>
          <div className="housing-panel">
            <span className="section-eyebrow housing-eyebrow">
              Savings-Based Housing Finance
            </span>
            <h2>Making Affordable Housing More Accessible</h2>
            <p>
              Rose Malar is implementing a Savings-Based Housing Finance
              Product for the Low-Income Segment. The initiative aims to
              build financial awareness among low-income households and help
              them access affordable housing finance based on savings habits
              and financial history.
            </p>
            <p>
              Through collaboration with BWDA, the Society has supported
              small house construction projects and developed model housing
              units to demonstrate practical and affordable housing
              solutions.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Housing Finance Enquiry
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
