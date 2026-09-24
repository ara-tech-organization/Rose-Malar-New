import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Growth from './components/Growth'
import About from './components/About'
import Solutions from './components/Solutions'
import WhyUs from './components/WhyUs'
import Members from './components/Members'
import Products from './components/Products'
import Loans from './components/Loans'
import Impact from './components/Impact'
import Leadership from './components/Leadership'
import Archive from './components/Archive'
import Regions from './components/Regions'
import Contact from './components/Contact'
import JoinCta from './components/JoinCta'
import Footer from './components/Footer'
import './App.css'

const PATH_TO_SECTION = {
  '/': 'home',
  '/about': 'about',
  '/products': 'products',
  '/impact': 'impact',
  '/leadership': 'leadership',
  '/contact': 'contact',
}

function App() {
  const location = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    const id = PATH_TO_SECTION[location.pathname]
    const target = id ? document.getElementById(id) : null
    if (!target) return

    target.scrollIntoView({ behavior: isFirstRender.current ? 'auto' : 'smooth' })
    isFirstRender.current = false
  }, [location.pathname])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Growth />
        <About />
        <Solutions />
        <WhyUs />
        <Members />
        <Products />
        <Loans />
        <Impact />
        <Leadership />
        <Archive />
        <Regions />
        <Contact />
        <JoinCta />
      </main>
      <Footer />
    </>
  )
}

export default App
