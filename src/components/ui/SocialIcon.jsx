const paths = {
  facebook: 'M13.5 9H15V6.5h-1.75C11.26 6.5 10 7.76 10 9.75V11H8.5v2.5H10V20h2.5v-6.5h1.9l.35-2.5h-2.25v-1c0-.62.25-1 1-1Z',
  instagram:
    'M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm4 3.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2ZM17.4 6.6a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z',
  linkedin:
    'M6.94 8.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.25 10.25h3.38V19H5.25v-8.75Zm6.13 0h3.24v1.2h.05a3.55 3.55 0 0 1 3.2-1.76c3.42 0 4.05 2.25 4.05 5.18V19h-3.38v-3.68c0-.88-.02-2-1.22-2s-1.41.95-1.41 1.94V19h-3.38l-.15-8.75Z',
  twitter:
    'M18.9 5h2.4l-5.25 6 6.18 8.5h-4.84l-3.79-4.96L9.24 19.5H6.83l5.62-6.42L6.5 5h4.96l3.42 4.53L18.9 5Z',
}

export default function SocialIcon({ name, className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}
