import { Link } from 'react-router-dom'
import './Hero.css'

// Photo slot: replace the gradient with a real image, e.g. in Hero.css
// `.hero { background-image: url('../../assets/photos/hero.jpg') }`.
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <h1>Together We Grow, Together We Prosper.</h1>
        <p className="hero-lead">
          Empowering Communities, Enriching Lives, Enhancing Growth.
        </p>
        <Link to="/about" className="btn btn-primary">
          Know More
        </Link>
      </div>
    </section>
  )
}
