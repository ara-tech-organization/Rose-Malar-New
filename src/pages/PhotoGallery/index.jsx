import { useEffect, useState } from 'react'
import Reveal from '../../components/Reveal'
import { GROUPS, PHOTOS } from '../../data/gallery'
import './PhotoGallery.css'

export default function PhotoGallery() {
  const [group, setGroup] = useState('all')
  const [open, setOpen] = useState(null)

  const visible = group === 'all' ? PHOTOS : PHOTOS.filter((p) => p.group === group)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <section id="photo-gallery" className="section section--surface">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Photo Gallery</span>
            <h2>Moments From Our Community</h2>
            <p>
              A look at the people and stories behind Rose Malar. Photographs
              from events, branch openings and member milestones will be added
              as they come in.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="gallery-filters" role="group" aria-label="Filter photos">
            {GROUPS.map((g) => (
              <button
                key={g.id}
                type="button"
                className={`gallery-filter ${g.id === group ? 'gallery-filter--active' : ''}`}
                aria-pressed={g.id === group}
                onClick={() => setGroup(g.id)}
              >
                {g.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <ul className="gallery-wall">
            {visible.map((photo) => (
              <li key={photo.id} className="gallery-item">
                <button type="button" className="gallery-polaroid" onClick={() => setOpen(photo)}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="gallery-caption">{photo.caption}</span>
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {open && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={open.caption} onClick={() => setOpen(null)}>
          <button type="button" className="gallery-lightbox-close" aria-label="Close photo" onClick={() => setOpen(null)}>
            &times;
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={open.src} alt={open.alt} />
            <figcaption>{open.caption}</figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
