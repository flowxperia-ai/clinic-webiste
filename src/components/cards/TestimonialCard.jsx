import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      className="flex h-full flex-col gap-5 rounded-2xl border border-navy-900/10 bg-white p-7 shadow-soft"
    >
      <Quote className="h-6 w-6 text-teal-300" aria-hidden="true" />
      <p className="flex-1 text-[0.95rem] leading-relaxed text-navy-700">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="flex items-center gap-3 pt-2">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-100 font-display text-sm font-medium text-teal-800">
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-medium text-navy-950">{testimonial.name}</p>
          <p className="text-xs text-navy-500">{testimonial.treatment}</p>
        </div>
        <div className="ml-auto flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
