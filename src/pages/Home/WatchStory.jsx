import { useState } from 'react'
import Reveal from '../../components/Reveal'
import ad30 from '../../assets/videos/ad-30s.mp4'
import ad59 from '../../assets/videos/ad-59s.mp4'
import ad79 from '../../assets/videos/ad-79s.mp4'
import poster30 from '../../assets/videos/ad-30s.jpg'
import poster59 from '../../assets/videos/ad-59s.jpg'
import poster79 from '../../assets/videos/ad-79s.jpg'
import './WatchStory.css'

const VIDEOS = [
  { id: 'short', label: 'Introduction', length: '0:30', src: ad30, poster: poster30 },
  { id: 'medium', label: 'Our Services', length: '0:59', src: ad59, poster: poster59 },
  { id: 'long', label: 'Our Story', length: '1:19', src: ad79, poster: poster79 },
]

export default function WatchStory() {
  const [active, setActive] = useState(0)
  const video = VIDEOS[active]

  return (
    <section id="watch" className="section section--surface">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Watch</span>
            <h2>Hear It From Us</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="watch-layout">
            <video
              key={video.id}
              className="watch-player"
              src={video.src}
              poster={video.poster}
              controls
              playsInline
              preload="none"
            />

            <ul className="watch-list">
              {VIDEOS.map((v, i) => (
                <li key={v.id}>
                  <button
                    type="button"
                    className={`watch-item ${i === active ? 'watch-item--active' : ''}`}
                    aria-pressed={i === active}
                    onClick={() => setActive(i)}
                  >
                    <img src={v.poster} alt="" loading="lazy" decoding="async" />
                    <span>
                      <strong>{v.label}</strong>
                      <small>{v.length}</small>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
