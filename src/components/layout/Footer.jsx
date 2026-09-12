import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import Logo from './Logo'
import SocialIcon from '../ui/SocialIcon'
import { specialities } from '../../data/specialities'
import { useToast } from '../../context/ToastContext'

const quickLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/doctors', label: 'Our Doctors' },
  { to: '/services', label: 'Services' },
  { to: '/blog', label: 'Health Insights' },
  { to: '/contact', label: 'Contact' },
]

const patientResources = [
  { to: '/patient-care', label: 'Visitor Information' },
  { to: '/patient-care', label: 'Insurance & Billing' },
  { to: '/appointments', label: 'Book an Appointment' },
  { to: '/patient-care', label: 'Patient Rights' },
  { to: '/contact', label: 'Feedback & Support' },
]

export default function Footer() {
  const { showToast } = useToast()
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      showToast('Please enter a valid email address.', { type: 'error', title: 'Subscription failed' })
      return
    }
    showToast(`You're subscribed with ${email}.`, { title: 'Welcome to Aurelia Health Insights' })
    setEmail('')
  }

  return (
    <footer className="bg-navy-950 text-ivory/70">
      <div className="container-page py-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <Logo dark />
          <p className="text-sm leading-relaxed max-w-xs">
            A premier private hospital delivering advanced clinical care with a human touch — trusted by families since 1998.
          </p>
          <div className="flex items-center gap-3 pt-2">
            {['facebook', 'instagram', 'linkedin', 'twitter'].map((name) => (
              <a
                key={name}
                href="#"
                aria-label={`Aurelia Medical Centre on ${name}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 hover:border-teal-400 hover:text-teal-300 transition-colors"
              >
                <SocialIcon name={name} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ivory mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-teal-300 transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ivory mb-4">Specialities</h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {specialities.slice(0, 6).map((s) => (
              <li key={s.id}>
                <Link to={`/specialities/${s.id}`} className="hover:text-teal-300 transition-colors">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ivory mb-4">Patient Resources</h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {patientResources.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-teal-300 transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ivory mb-4">Contact</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-teal-400" />
              <span>221 Meridian Avenue, Whitefield, Bengaluru 560066</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="h-4 w-4 shrink-0 mt-0.5 text-teal-400" />
              <span>+91 80 4567 8900 <br /><span className="text-ivory">Emergency: 1800-123-456</span></span>
            </li>
            <li className="flex gap-2.5">
              <Mail className="h-4 w-4 shrink-0 mt-0.5 text-teal-400" />
              <span>care@aureliamedical.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-page py-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ivory mb-1">Stay Informed</h3>
            <p className="text-sm">Subscribe for health insights and hospital updates.</p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full max-w-sm gap-2">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-full border border-ivory/15 bg-transparent px-4 py-2.5 text-sm text-ivory placeholder:text-ivory/40 focus:border-teal-400 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex shrink-0 items-center justify-center rounded-full bg-teal-600 p-2.5 text-white hover:bg-teal-500 transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-page py-5 flex flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aurelia Medical Centre. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-teal-300">Privacy Policy</a>
            <a href="#" className="hover:text-teal-300">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
