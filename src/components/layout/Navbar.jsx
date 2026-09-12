import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, CalendarPlus, Search } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'
import Button from '../ui/Button'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/specialities', label: 'Specialities' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/services', label: 'Services' },
  { to: '/patient-care', label: 'Patient Care' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled || open
          ? 'bg-ivory/90 backdrop-blur-md shadow-soft border-b border-navy-900/[0.06]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between" aria-label="Primary">
        <Logo />

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative py-2 text-[0.925rem] font-medium transition-colors hover:text-teal-700 ${
                    isActive ? 'text-teal-700' : 'text-navy-800'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-teal-600" aria-hidden="true" />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Button to="/doctors" variant="ghost" size="sm" icon={Search} iconPosition="left">
            Find a Doctor
          </Button>
          <Button to="/appointments" variant="primary" size="md" icon={CalendarPlus}>
            Book an Appointment
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center rounded-full p-2 text-navy-900 hover:bg-navy-900/5"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden overflow-hidden bg-ivory border-t border-navy-900/[0.06]"
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-3 text-base font-medium ${
                        isActive ? 'bg-teal-50 text-teal-700' : 'text-navy-800 hover:bg-navy-900/5'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="container-page flex flex-col gap-3 pb-6">
              <Button to="/doctors" variant="secondary" onClick={() => setOpen(false)} icon={Search} iconPosition="left">
                Find a Doctor
              </Button>
              <Button to="/appointments" variant="primary" onClick={() => setOpen(false)} icon={CalendarPlus}>
                Book an Appointment
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
