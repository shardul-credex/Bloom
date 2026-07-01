export function BloomMark({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M20 8c3 3 3 7 0 12-3-5-3-9 0-12ZM20 32c-3-3-3-7 0-12 3 5 3 9 0 12ZM8 20c3-3 7-3 12 0-5 3-9 3-12 0ZM32 20c-3 3-7 3-12 0 5-3 9-3 12 0Z"
        fill="currentColor"
      />
      <circle cx="20" cy="20" r="3.4" fill="currentColor" />
    </svg>
  )
}

export function BloomWordmark({ className = 'h-6 w-auto' }) {
  return (
    <span className={`font-display font-light tracking-wide ${className} flex items-center`} style={{ fontSize: '1.5rem' }}>
      Bloom
    </span>
  )
}

export function BloomLogo({ className = '', markClassName = 'h-8 w-8', wordmarkClassName = 'h-6 w-auto', stacked = false }) {
  return (
    <span className={`flex items-center ${stacked ? 'flex-col gap-1' : 'gap-2.5'} ${className}`}>
      <BloomMark className={markClassName} />
      <BloomWordmark className={wordmarkClassName} />
    </span>
  )
}
