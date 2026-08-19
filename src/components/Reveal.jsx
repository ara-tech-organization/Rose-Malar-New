import { useReveal } from '../hooks/useReveal'

export default function Reveal({ children, className = '' }) {
  const [ref, visible] = useReveal()

  return (
    <div ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}
