import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { getIcon } from '../../lib/iconMap'

export default function SpecialityCard({ speciality, index = 0 }) {
  const Icon = getIcon(speciality.icon)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: 'easeOut' }}
    >
      <Link
        to={`/specialities/${speciality.id}`}
        className="group relative flex h-full flex-col gap-5 rounded-2xl border border-navy-900/10 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift hover:border-teal-500/30"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-600 group-hover:text-white">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-xl font-medium text-navy-950">{speciality.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-navy-500">{speciality.shortDescription}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700">
          Explore
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </motion.div>
  )
}
