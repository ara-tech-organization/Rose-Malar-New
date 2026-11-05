import { lazy } from 'react'
import LazySection from '../../components/LazySection'
import Hero from './Hero'
import AboutTeaser from './AboutTeaser'

const WatchStory = lazy(() => import('./WatchStory'))
const Solutions = lazy(() => import('./Solutions'))
const Loans = lazy(() => import('./Loans'))
const Regions = lazy(() => import('./Regions'))
const Team = lazy(() => import('./Team'))
const Testimonials = lazy(() => import('./Testimonials'))
const JoinCta = lazy(() => import('./JoinCta'))

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <LazySection><WatchStory /></LazySection>
      <LazySection><Solutions /></LazySection>
      <LazySection><Loans /></LazySection>
      <LazySection><Regions /></LazySection>
      <LazySection><Team /></LazySection>
      <LazySection><Testimonials /></LazySection>
      <LazySection minHeight={200}><JoinCta /></LazySection>
    </>
  )
}
