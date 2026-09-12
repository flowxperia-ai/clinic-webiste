import { Phone } from 'lucide-react'

export default function EmergencyBanner() {
  return (
    <div className="bg-navy-950 text-ivory/80 text-xs">
      <div className="container-page flex items-center justify-between gap-4 py-1.5">
        <p className="hidden sm:block tracking-wide">
          <span className="text-teal-300">Aurelia Medical Centre</span> — Advanced Care. Human Touch.
        </p>
        <a
          href="tel:+911800123456"
          className="flex items-center gap-1.5 font-medium text-ivory hover:text-teal-300 transition-colors ml-auto"
        >
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          24/7 Emergency: 1800-123-456
        </a>
      </div>
    </div>
  )
}
