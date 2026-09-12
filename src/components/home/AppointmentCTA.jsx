import { motion } from 'framer-motion'
import { CalendarCheck, PhoneCall, MapPin } from 'lucide-react'
import Button from '../ui/Button'

export default function AppointmentCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <h2 className="max-w-2xl text-balance-pretty font-display text-3xl font-medium leading-tight text-ivory sm:text-4xl">
            Your Health Deserves the Best Care.
          </h2>
          <p className="max-w-xl text-navy-300">
            Whether it's a routine consultation or an urgent concern, our team is ready — day or night.
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button to="/appointments" variant="teal" size="lg" icon={CalendarCheck}>
              Book an Appointment
            </Button>
            <Button href="tel:+911800123456" variant="light" size="lg" icon={PhoneCall}>
              Call Emergency
            </Button>
            <Button to="/contact" variant="ghost" size="lg" icon={MapPin} className="text-ivory hover:text-teal-300">
              Find Nearest Centre
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
