import { useEffect, useRef, useState } from 'react'
import './CustomSelect.css'

function normalize(options) {
  return options.map((option) =>
    typeof option === 'string' ? { label: option, value: option } : option,
  )
}

export default function CustomSelect({ label, name, value, onChange, options }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const normalized = normalize(options)
  const selected = normalized.find((option) => option.value === value)

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function selectOption(option) {
    onChange({ target: { name, value: option.value } })
    setOpen(false)
  }

  return (
    <div className="custom-select" ref={containerRef}>
      {label && <span className="custom-select-label">{label}</span>}
      <button
        type="button"
        className={`custom-select-trigger ${open ? 'custom-select-trigger--open' : ''}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{selected ? selected.label : ''}</span>
        <svg className="custom-select-chevron" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul className="custom-select-list" role="listbox">
          {normalized.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                role="option"
                aria-selected={option.value === value}
                className={`custom-select-option ${option.value === value ? 'custom-select-option--active' : ''}`}
                onClick={() => selectOption(option)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
