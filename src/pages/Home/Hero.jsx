import { useEffect, useRef, useState } from 'react'
import './Hero.css'

// Drop-in banners: hero.jpg, hero-2.jpg, hero-3.jpg ... in src/assets
// (jpg, jpeg, png or webp). They become slides in natural filename order.
const modules = import.meta.glob('../../assets/hero*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

// hero.jpg counts as banner 1; hero-2.jpg, hero-3.jpg follow by their number.
const bannerNumber = (path) => Number(path.match(/hero-?(\d+)?\.[a-z]+$/i)?.[1] ?? 1)

const SLIDES = Object.entries(modules)
  .sort(([a], [b]) => bannerNumber(a) - bannerNumber(b))
  .map(([, src]) => src)

const SLIDE_MS = 2000 // time a slide takes to move; keep in sync with Hero.css
const HOLD_MS = 2000 // time a banner stays still before the next move
const AUTOPLAY_MS = SLIDE_MS + HOLD_MS
const ALT_FIRST =
  'Smiling members of the community in front of the Rosmaler cooperative society office, under the heading Together We Grow, Together We Prosper'

function Arrow({ direction }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d={direction === 'prev' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Hero() {
  const count = SLIDES.length
  const multiple = count > 1
  // Seamless loop: [last clone, 1..n, first clone]; real slides sit at index 1..n.
  const items = multiple ? [SLIDES[count - 1], ...SLIDES, SLIDES[0]] : SLIDES

  const [index, setIndex] = useState(multiple ? 1 : 0)
  const [animate, setAnimate] = useState(true)
  const [paused, setPaused] = useState(false)
  const [reduceMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const touchStart = useRef(null)
  const moving = useRef(false)
  const indexRef = useRef(index)
  const timer = useRef(null)

  const active = multiple ? (index - 1 + count) % count : 0

  useEffect(() => {
    indexRef.current = index
  }, [index])

  useEffect(() => () => clearTimeout(timer.current), [])

  // Once a slide has finished moving, jump (no animation) from a clone to its real twin.
  const settle = () => {
    moving.current = false
    const i = indexRef.current
    if (i > count) {
      setAnimate(false)
      setIndex(1)
    } else if (i < 1) {
      setAnimate(false)
      setIndex(count)
    }
  }

  const slide = (to) => {
    moving.current = true
    setAnimate(true)
    setIndex(to)
    clearTimeout(timer.current)
    timer.current = setTimeout(settle, SLIDE_MS + 60)
  }

  const step = (dir) => {
    if (!multiple) return
    if (reduceMotion) {
      setIndex((i) => ((i - 1 + dir + count) % count) + 1)
      return
    }
    if (moving.current) return
    slide(indexRef.current + dir)
  }

  const goTo = (n) => {
    if (n === active) return
    if (reduceMotion) {
      setIndex(n + 1)
      return
    }
    if (moving.current) return
    slide(n + 1)
  }

  useEffect(() => {
    if (animate) return undefined
    let inner
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setAnimate(true))
    })
    return () => {
      cancelAnimationFrame(outer)
      cancelAnimationFrame(inner)
    }
  }, [animate])

  useEffect(() => {
    if (!multiple || paused || reduceMotion) return undefined
    const id = setInterval(() => step(1), AUTOPLAY_MS)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [multiple, paused, reduceMotion, index])

  const onTouchEnd = (e) => {
    if (touchStart.current === null) return
    const dx = e.changedTouches[0].clientX - touchStart.current
    touchStart.current = null
    if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1)
  }

  return (
    <section
      id="home"
      className="hero"
      aria-roledescription="carousel"
      aria-label="Rosmaler banners"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => {
        touchStart.current = e.touches[0].clientX
      }}
      onTouchEnd={onTouchEnd}
    >
      <h1 className="visually-hidden">Together We Grow, Together We Prosper.</h1>

      <div className="hero-viewport">
        <div
          className="hero-track"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: animate && !reduceMotion ? undefined : 'none',
          }}
        >
          {items.map((src, i) => {
            const real = multiple ? (i - 1 + count) % count : i
            const isClone = multiple && (i === 0 || i === items.length - 1)
            return (
              <div
                key={`${src}-${i}`}
                className="hero-slide"
                role="group"
                aria-roledescription="slide"
                aria-label={`${real + 1} of ${count}`}
                aria-hidden={isClone || real !== active}
              >
                <img
                  className="hero-image"
                  src={src}
                  alt={real === 0 ? ALT_FIRST : `Rosmaler banner ${real + 1}`}
                  width="1832"
                  height="859"
                  fetchPriority={i === (multiple ? 1 : 0) ? 'high' : 'auto'}
                  loading={i <= 1 ? 'eager' : 'lazy'}
                />
              </div>
            )
          })}
        </div>

        {multiple && (
          <>
            <button type="button" className="hero-arrow hero-arrow--prev" aria-label="Previous banner" onClick={() => step(-1)}>
              <Arrow direction="prev" />
            </button>
            <button type="button" className="hero-arrow hero-arrow--next" aria-label="Next banner" onClick={() => step(1)}>
              <Arrow direction="next" />
            </button>

            <div className="hero-dots">
              {SLIDES.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className={`hero-dot ${i === active ? 'hero-dot--active' : ''}`}
                  aria-label={`Go to banner ${i + 1}`}
                  aria-current={i === active}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
