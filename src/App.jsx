import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Members from './components/Members'
import Products from './components/Products'
import Loans from './components/Loans'
import Leadership from './components/Leadership'
import Archive from './components/Archive'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const PATH_TO_SECTION = {
  '/': 'home',
  '/members': 'members',
  '/products': 'products',
  '/loans': 'loans',
  '/leadership': 'leadership',
  '/archive': 'archive',
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
        <About />
        <Members />
        <Products />
        <Loans />
        <Leadership />
        <Archive />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
