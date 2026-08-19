import Reveal from './Reveal'
import './Archive.css'

const TILE_COUNT = 5

export default function Archive() {
  return (
    <section id="archive" className="section section--surface">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Archive</span>
            <h2>Moments from RMDCS</h2>
            <p>
              Photographs from RMDCS events, branch openings, and member
              milestones will be added here soon.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="archive-gallery">
            {Array.from({ length: TILE_COUNT }).map((_, i) => (
              <div key={i} className={`archive-tile ${i === 0 ? 'archive-tile--wide' : ''}`}>
                <svg viewBox="0 0 64 64" role="presentation" aria-hidden="true">
                  <rect x="4" y="10" width="56" height="44" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="20" cy="24" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 46l14-14 10 10 8-8 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
