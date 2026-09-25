import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Impact from './pages/Impact'
import Leadership from './pages/Leadership'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
