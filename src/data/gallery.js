// Gallery photos. To add one, import the file and append an entry; `group` must match a GROUPS id.
import banner1 from '../assets/hero.jpg'
import banner2 from '../assets/hero2.jpg'
import banner3 from '../assets/hero3.jpg'
import film30 from '../assets/videos/ad-30s.jpg'
import film59 from '../assets/videos/ad-59s.jpg'
import film79 from '../assets/videos/ad-79s.jpg'

export const GROUPS = [
  { id: 'all', label: 'All' },
  { id: 'banners', label: 'Campaign banners' },
  { id: 'films', label: 'From our films' },
]

export const PHOTOS = [
  { id: 'banner-1', group: 'banners', src: banner1, caption: 'Together We Grow, Together We Prosper', alt: 'Rose Malar banner: Together We Grow, Together We Prosper', width: 1920, height: 900 },
  { id: 'film-30', group: 'films', src: film30, caption: 'Introduction film', alt: 'Still from the 30-second introduction film', width: 960, height: 540 },
  { id: 'banner-2', group: 'banners', src: banner2, caption: 'Empowering communities for a brighter tomorrow', alt: 'Rose Malar banner: Empowering Communities for a Brighter Tomorrow', width: 1983, height: 793 },
  { id: 'film-59', group: 'films', src: film59, caption: 'Our services film', alt: 'Still from the Our Services film', width: 960, height: 540 },
  { id: 'banner-3', group: 'banners', src: banner3, caption: 'Supporting people, strengthening communities', alt: 'Rose Malar campaign banner', width: 1983, height: 793 },
  { id: 'film-79', group: 'films', src: film79, caption: 'Our story film', alt: 'Still from the Our Story film', width: 960, height: 540 },
]
