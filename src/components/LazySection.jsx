import { Suspense, useEffect, useRef, useState } from 'react'

export default function LazySection({ children, minHeight = 400, rootMargin = '300px' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    if (visible) return undefined
    const node = ref.current
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [visible, rootMargin])

  if (visible) {
    return <Suspense fallback={<div style={{ minHeight }} />}>{children}</Suspense>
  }
  return <div ref={ref} style={{ minHeight }} aria-hidden="true" />
}
