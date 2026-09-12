import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ eyebrow, title, description, image, breadcrumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/60" />
        </div>
      )}
      <div className="container-page relative py-20 sm:py-28">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm text-ivory/50">
            <Link to="/" className="hover:text-teal-300">Home</Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" />
                {b.to ? <Link to={b.to} className="hover:text-teal-300">{b.label}</Link> : <span className="text-ivory/80">{b.label}</span>}
              </span>
            ))}
          </nav>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          {eyebrow && (
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
              {eyebrow}
            </span>
          )}
          <h1 className="text-balance-pretty text-4xl font-medium leading-tight text-ivory sm:text-5xl">{title}</h1>
          {description && <p className="mt-5 text-lg leading-relaxed text-ivory/70">{description}</p>}
        </motion.div>
      </div>
    </section>
  )
}
