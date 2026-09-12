import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { getIcon } from '../../lib/iconMap'

export default function ServiceCard({ service, index = 0 }) {
  const Icon = getIcon(service.icon)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-display text-lg font-medium text-navy-950">{service.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-navy-500">{service.description}</p>
        <Link to={`/services#${service.slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 hover:gap-2.5 transition-all">
          Learn more <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}
