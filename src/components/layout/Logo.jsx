import { Link } from 'react-router-dom'

export default function Logo({ dark = false }) {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 shrink-0"
      aria-label="Aurelia Medical Centre — Home"
    >
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true" className="shrink-0">
        <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.3" className={dark ? 'text-teal-400' : 'text-teal-600'} />
        <path
          d="M20 11v18M11 20h18"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          className={dark ? 'text-teal-400' : 'text-teal-600'}
        />
        <circle cx="20" cy="20" r="4.2" fill="currentColor" className={dark ? 'text-ivory' : 'text-navy-950'} opacity="0.06" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.05rem] tracking-tight ${dark ? 'text-ivory' : 'text-navy-950'}`}>
          Aurelia
        </span>
        <span className={`text-[0.6rem] uppercase tracking-[0.2em] ${dark ? 'text-teal-300' : 'text-teal-600'}`}>
          Medical Centre
        </span>
      </span>
    </Link>
  )
}
