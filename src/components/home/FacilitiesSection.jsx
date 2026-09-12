import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { facilities } from '../../data/facilities'

export default function FacilitiesSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our Facilities"
          title="Purpose-Built for Precision and Comfort"
          description="Every space at Aurelia is designed with both clinical precision and patient comfort in mind."
          className="mx-auto"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: 'easeOut' }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft"
            >
              <img
                src={f.image}
                alt={f.name}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-lg font-medium text-ivory">{f.name}</h3>
                <p className="mt-1 text-sm text-ivory/70">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
