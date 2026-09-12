import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, description, align = 'center', className = '' }) {
  const alignClasses = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col gap-4 ${alignClasses} ${className}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-600">
          <span className="h-px w-6 bg-teal-500" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance-pretty text-3xl font-medium leading-tight text-navy-950 sm:text-4xl">{title}</h2>
      {description && <p className="max-w-2xl text-base leading-relaxed text-navy-500">{description}</p>}
    </motion.div>
  )
}
