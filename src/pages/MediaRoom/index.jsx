import Reveal from '../../components/Reveal'
import WatchStory from '../Home/WatchStory'
import './MediaRoom.css'

export default function MediaRoom() {
  return (
    <>
      <WatchStory />

      <section id="press" className="section">
        <div className="container">
          <Reveal>
            <div className="section-header section-header--center">
              <span className="section-eyebrow">Press &amp; Announcements</span>
              <h2>News From Rose Malar</h2>
              <p>
                Press releases, media coverage and society announcements will be
                published here.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="press-empty">
              <span className="press-empty-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M5 4.5h11a2 2 0 0 1 2 2V19a1.5 1.5 0 0 0 3 0V9h-3M5 4.5V18a2 2 0 0 0 2 2h12M8.5 9h6M8.5 12.5h6M8.5 16h3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3>No announcements yet</h3>
              <p>Check back soon, or write to us for media enquiries.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
