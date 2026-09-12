import { motion } from 'framer-motion'
import { CalendarCheck, MessageCircle } from 'lucide-react'
import Button from '../ui/Button'

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[1.75rem] border border-navy-900/10 bg-teal-50/60 px-8 py-16 text-center sm:px-16"
        >
          <h2 className="mx-auto max-w-xl text-balance-pretty font-display text-3xl font-medium leading-tight text-navy-950 sm:text-4xl">
            Take the First Step Towards Better Health.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-navy-500">
            Book a consultation with one of our specialists, or reach out to our care team with any questions.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to="/appointments" variant="primary" size="lg" icon={CalendarCheck}>
              Book an Appointment
            </Button>
            <Button to="/contact" variant="secondary" size="lg" icon={MessageCircle}>
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
