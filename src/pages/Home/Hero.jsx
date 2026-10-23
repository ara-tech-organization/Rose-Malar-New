import heroImage from '../../assets/hero.jpg'
import './Hero.css'

// The banner artwork carries the tagline, so the hero is the image alone.
export default function Hero() {
  return (
    <section id="home" className="hero">
      <h1 className="visually-hidden">Together We Grow, Together We Prosper.</h1>
      <img
        className="hero-image"
        src={heroImage}
        alt="Smiling members of the community in front of the Rosmaler cooperative society office, under the heading Together We Grow, Together We Prosper"
        width="1832"
        height="859"
        fetchPriority="high"
      />
    </section>
  )
}
