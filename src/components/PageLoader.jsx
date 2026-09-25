import './PageLoader.css'

export default function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite">
      <span className="page-loader-spinner" aria-hidden="true" />
      <span className="page-loader-text">Loading&hellip;</span>
    </div>
  )
}
