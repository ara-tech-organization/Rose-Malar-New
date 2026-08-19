import Reveal from './Reveal'
import './Leadership.css'

const PENDING_SEATS = 3

export default function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Leadership</span>
            <h2>Our Leadership Team</h2>
            <p>Since 2018, RMDCS has functioned under the following Chairmanship.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="leader-list">
            <div className="leader-row leader-row--chair">
              <div className="leader-row-avatar leader-row-avatar--chair">PJR</div>
              <div className="leader-row-body">
                <span className="leader-row-tag">Chairperson</span>
                <h3>Mrs. Prabala Jabeegara Ross</h3>
              </div>
              <span className="leader-row-status leader-row-status--chair">Serving since 2018</span>
            </div>

            {Array.from({ length: PENDING_SEATS }).map((_, i) => (
              <div key={i} className="leader-row leader-row--open">
                <span className="leader-row-avatar leader-row-avatar--open" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <circle cx="12" cy="9" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path
                      d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div className="leader-row-body">
                  <span className="leader-row-tag">Open seat</span>
                  <h3>Board Member</h3>
                </div>
                <span className="leader-row-status">Profile coming soon</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
