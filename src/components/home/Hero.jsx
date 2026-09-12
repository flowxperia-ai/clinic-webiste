import { motion } from 'framer-motion'
import { ShieldCheck, CalendarCheck, Clock, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory pt-12 pb-20 sm:pt-16 sm:pb-28">
      <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-start gap-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/25 bg-teal-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-700">
            <ShieldCheck className="h-3.5 w-3.5" />
            Trusted Healthcare Since 1998
          </span>

          <h1 className="text-balance-pretty font-display text-4xl font-medium leading-[1.1] text-navy-950 sm:text-5xl lg:text-[3.4rem]">
            Exceptional Healthcare,
            <br />
            Designed Around You.
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-navy-500">
            Personalized care plans, advanced diagnostics, and experienced specialists working together —
            so every visit feels considered, unhurried, and genuinely centred on you.
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button to="/appointments" variant="primary" size="lg" icon={CalendarCheck}>
              Book an Appointment
            </Button>
            <Button to="/specialities" variant="secondary" size="lg" icon={ArrowRight}>
              Explore Specialities
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-6 text-sm text-navy-500">
            <div className="flex -space-x-3">
              {[
                'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=100&q=80',
                'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=100&q=80',
                'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&q=80',
              ].map((src, i) => (
                <img key={i} src={src} alt="" className="h-9 w-9 rounded-full border-2 border-ivory object-cover" />
              ))}
            </div>
            <p>120+ specialists across 40+ specialities</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-lift">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80"
              alt="Senior physician consulting with a patient at Aurelia Medical Centre"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/25 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            className="absolute -bottom-8 -left-6 w-56 rounded-2xl border border-navy-900/10 bg-white/95 p-4 shadow-lift backdrop-blur sm:-left-10 sm:w-64"
          >
            <div className="flex items-center gap-2 text-teal-700">
              <CalendarCheck className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wide">Next Available</span>
            </div>
            <p className="mt-2 font-display text-base font-medium text-navy-950">Dr. Arjun Menon</p>
            <p className="text-xs text-navy-500">Senior Cardiologist</p>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-navy-600">
              <Clock className="h-3.5 w-3.5 text-teal-600" />
              Today, 3:00 PM
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
            className="absolute -top-6 -right-4 flex items-center gap-2 rounded-full border border-navy-900/10 bg-white/95 px-4 py-2.5 shadow-lift backdrop-blur sm:-right-8"
          >
            <ShieldCheck className="h-4 w-4 text-teal-600" />
            <span className="text-xs font-semibold text-navy-800">25+ Years of Excellence</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
