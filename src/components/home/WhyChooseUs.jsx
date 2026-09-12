import { motion } from 'framer-motion'
import { Award, ScanLine, ClipboardCheck, Building2, Siren, UserRound } from 'lucide-react'

const highlights = [
  { icon: Award, title: 'World-Class Specialists', desc: '120+ specialists trained at leading institutions worldwide.' },
  { icon: ScanLine, title: 'Advanced Diagnostics', desc: '3T MRI, 128-slice CT and genomic testing under one roof.' },
  { icon: ClipboardCheck, title: 'Personalized Treatment Plans', desc: 'Care built around your history, not a standard protocol.' },
  { icon: Building2, title: 'Modern Facilities', desc: 'Purpose-built wards, ICUs and operation theatres.' },
  { icon: Siren, title: '24/7 Emergency Care', desc: 'Round-the-clock emergency and critical care teams.' },
  { icon: UserRound, title: 'Patient-First Approach', desc: 'Unhurried consultations and transparent communication.' },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-lift">
            <img
              src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1000&q=80"
              alt="Surgical team preparing in a modern operation theatre"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden w-48 rounded-2xl border border-navy-900/10 bg-white p-4 shadow-lift sm:block">
            <p className="font-display text-3xl font-medium text-navy-950">98%</p>
            <p className="text-xs text-navy-500">Patient satisfaction across all specialities</p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600">Why Aurelia</span>
            <h2 className="mt-3 text-balance-pretty text-3xl font-medium leading-tight text-navy-950 sm:text-4xl">
              Care Built on Trust, Precision and Genuine Attention
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
                className="flex gap-3.5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                  <h.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-navy-950">{h.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-navy-500">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
