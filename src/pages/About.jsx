import { motion } from 'framer-motion'
import { HeartHandshake, Award, Lightbulb, ShieldCheck, CalendarCheck } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import Stats from '../components/ui/Stats'
import Button from '../components/ui/Button'

const values = [
  { icon: HeartHandshake, title: 'Compassion', desc: 'We treat every patient with dignity, empathy and unhurried attention.' },
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to rigorous clinical and safety standards, always.' },
  { icon: ShieldCheck, title: 'Integrity', desc: 'Transparent communication and honest guidance, even when it is difficult.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We invest continually in technology that improves patient outcomes.' },
]

const timeline = [
  { year: '1998', title: 'Aurelia Founded', desc: 'Opened as a 60-bed multi-speciality hospital in Bengaluru.' },
  { year: '2006', title: 'Cardiac Sciences Wing', desc: 'Launched a dedicated cardiac cath lab and cardiac ICU.' },
  { year: '2013', title: 'Robotic Surgery Programme', desc: 'Introduced robotic-assisted joint replacement and general surgery.' },
  { year: '2019', title: 'Cancer Centre Opened', desc: 'A dedicated oncology centre with day-care chemotherapy and radiation therapy.' },
  { year: '2026', title: '500,000+ Patients Served', desc: 'Now a 400-bed quaternary care centre across 40+ specialities.' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Advanced Care, Rooted in Human Connection"
        description="Since 1998, Aurelia Medical Centre has combined clinical excellence with a deeply personal approach to healthcare — because the best outcomes start with being truly heard."
        image="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80"
        breadcrumbs={[{ label: 'About' }]}
      />

      <section className="py-20 sm:py-28">
        <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-lift"
          >
            <img
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1000&q=80"
              alt="Aurelia Medical Centre hospital corridor"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600">Our Mission</span>
            <h2 className="text-balance-pretty text-3xl font-medium leading-tight text-navy-950 sm:text-4xl">
              To deliver advanced, evidence-based healthcare with genuine humanity at its centre.
            </h2>
            <p className="text-navy-500 leading-relaxed">
              We believe exceptional healthcare requires both clinical rigour and emotional intelligence. Every
              specialist at Aurelia is selected not only for their expertise, but for their ability to communicate
              clearly and treat patients as partners in their own care. This philosophy shapes everything from how
              we design our patient rooms to how our doctors structure a first consultation.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              {values.map((v) => (
                <div key={v.title} className="flex gap-3 rounded-xl border border-navy-900/10 bg-white p-4">
                  <v.icon className="h-5 w-5 shrink-0 text-teal-600" />
                  <div>
                    <p className="text-sm font-medium text-navy-950">{v.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-navy-500">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-navy-900/[0.06] bg-white py-16">
        <div className="container-page">
          <Stats />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader eyebrow="Our Journey" title="Nearly Three Decades of Growth" className="mx-auto" />
          <div className="relative mt-14 flex flex-col gap-10 sm:gap-0">
            <div className="absolute left-[18px] top-2 bottom-2 hidden w-px bg-navy-900/10 sm:block" aria-hidden="true" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                className="relative flex gap-6 pb-10 sm:pl-12"
              >
                <div className="absolute left-0 top-1 hidden h-[38px] w-[38px] items-center justify-center rounded-full border-2 border-teal-500 bg-ivory text-xs font-semibold text-teal-700 sm:flex">
                  •
                </div>
                <div>
                  <p className="font-display text-xl font-medium text-teal-700">{item.year}</p>
                  <p className="mt-1 font-medium text-navy-950">{item.title}</p>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-navy-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-page">
          <div className="flex flex-col items-center gap-6 rounded-[1.75rem] bg-navy-950 px-8 py-14 text-center sm:px-16">
            <h2 className="max-w-xl text-balance-pretty font-display text-3xl font-medium text-ivory sm:text-4xl">
              Experience Healthcare Designed Around You.
            </h2>
            <Button to="/appointments" variant="teal" size="lg" icon={CalendarCheck}>
              Book an Appointment
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
