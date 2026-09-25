import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'
import Home from './pages/Home'
import './App.css'

const About = lazy(() => import('./pages/About'))
const Products = lazy(() => import('./pages/Products'))
const Impact = lazy(() => import('./pages/Impact'))
const Leadership = lazy(() => import('./pages/Leadership'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App
