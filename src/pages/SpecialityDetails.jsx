import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, CalendarCheck } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import FAQ from '../components/ui/FAQ'
import DoctorCard from '../components/cards/DoctorCard'
import Button from '../components/ui/Button'
import { getSpecialityById } from '../data/specialities'
import { getDoctorsBySpeciality } from '../data/doctors'

export default function SpecialityDetails() {
  const { id } = useParams()
  const speciality = getSpecialityById(id)

  if (!speciality) return <Navigate to="/specialities" replace />

  const specialityDoctors = getDoctorsBySpeciality(speciality.id)

  return (
    <>
      <PageHero
        eyebrow="Speciality"
        title={speciality.name}
        description={speciality.shortDescription}
        image={speciality.heroImage}
        breadcrumbs={[{ label: 'Specialities', to: '/specialities' }, { label: speciality.name }]}
      />

      <section className="py-20 sm:py-24">
        <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-14">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="font-display text-2xl font-medium text-navy-950">About This Speciality</h2>
              <p className="mt-4 leading-relaxed text-navy-500">{speciality.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-xl font-medium text-navy-950">Common Conditions</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {speciality.commonConditions.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-navy-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-navy-950">Treatments & Procedures</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {speciality.treatments.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-navy-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-medium text-navy-950">Facilities</h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {speciality.facilities.map((f) => (
                  <span key={f} className="rounded-full border border-teal-500/20 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {speciality.faqs?.length > 0 && (
              <div>
                <h3 className="font-display text-xl font-medium text-navy-950">Frequently Asked Questions</h3>
                <div className="mt-4">
                  <FAQ items={speciality.faqs} />
                </div>
              </div>
            )}
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-2xl border border-navy-900/10 bg-teal-50/60 p-6">
              <h3 className="font-display text-lg font-medium text-navy-950">Ready to Get Started?</h3>
              <p className="mt-2 text-sm text-navy-600">
                Book a consultation with one of our {speciality.name.toLowerCase()} specialists today.
              </p>
              <Button to={`/appointments?speciality=${speciality.id}`} variant="primary" className="mt-5 w-full" icon={CalendarCheck}>
                Book an Appointment
              </Button>
            </div>

            {specialityDoctors.length > 0 && (
              <div>
                <h3 className="mb-4 font-display text-lg font-medium text-navy-950">Our {speciality.name} Specialists</h3>
                <div className="flex flex-col gap-6">
                  {specialityDoctors.map((doc, i) => (
                    <DoctorCard key={doc.id} doctor={doc} index={i} />
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  )
}
