import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, BriefcaseMedical, Languages, GraduationCap, IndianRupee, CalendarCheck, CheckCircle2 } from 'lucide-react'
import Button from '../components/ui/Button'
import { getDoctorById } from '../data/doctors'
import { getSpecialityById } from '../data/specialities'

export default function DoctorDetails() {
  const { id } = useParams()
  const doctor = getDoctorById(id)

  if (!doctor) return <Navigate to="/doctors" replace />

  const speciality = getSpecialityById(doctor.specialityId)

  return (
    <section className="py-14 sm:py-20">
      <div className="container-page">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-sm text-navy-400">
          <Link to="/" className="hover:text-teal-700">Home</Link>
          <span>/</span>
          <Link to="/doctors" className="hover:text-teal-700">Doctors</Link>
          <span>/</span>
          <span className="text-navy-700">{doctor.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[380px_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col gap-5"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-lift">
              <img src={doctor.image} alt={doctor.name} className="h-full w-full object-cover" />
            </div>
            <div className="rounded-2xl border border-navy-900/10 bg-white p-5 shadow-soft">
              <dl className="flex flex-col gap-3 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="flex items-center gap-1.5 text-navy-500"><IndianRupee className="h-4 w-4 text-teal-600" /> Consultation Fee</dt>
                  <dd className="font-medium text-navy-950">₹{doctor.consultationFee}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="flex items-center gap-1.5 text-navy-500"><BriefcaseMedical className="h-4 w-4 text-teal-600" /> Experience</dt>
                  <dd className="font-medium text-navy-950">{doctor.experienceYears} years</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="flex items-center gap-1.5 text-navy-500"><Languages className="h-4 w-4 text-teal-600" /> Languages</dt>
                  <dd className="font-medium text-navy-950 text-right">{doctor.languages.join(', ')}</dd>
                </div>
              </dl>
              <Button to={`/appointments?doctor=${doctor.id}`} variant="primary" className="mt-5 w-full" icon={CalendarCheck}>
                Book Appointment
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-col gap-10"
          >
            <div>
              {speciality && (
                <Link to={`/specialities/${speciality.id}`} className="text-xs font-semibold uppercase tracking-wider text-teal-600 hover:underline">
                  {speciality.name}
                </Link>
              )}
              <h1 className="mt-2 font-display text-3xl font-medium text-navy-950 sm:text-4xl">{doctor.name}</h1>
              <p className="mt-1 text-lg text-navy-500">{doctor.specialityName}</p>
              <div className="mt-3 flex items-center gap-2 text-sm">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.round(doctor.rating) ? 'fill-amber-400' : 'fill-transparent'}`} />
                  ))}
                </div>
                <span className="font-medium text-navy-800">{doctor.rating}</span>
                <span className="text-navy-400">({doctor.reviewCount} reviews)</span>
              </div>
            </div>

            <div>
              <h2 className="flex items-center gap-2 font-display text-xl font-medium text-navy-950">
                <GraduationCap className="h-5 w-5 text-teal-600" /> Qualifications
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {doctor.qualifications.map((q) => (
                  <span key={q} className="rounded-full border border-navy-900/10 bg-white px-3.5 py-1.5 text-sm text-navy-700">{q}</span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl font-medium text-navy-950">About {doctor.name.split(' ').slice(-1)[0] ? doctor.name : ''}</h2>
              <p className="mt-3 leading-relaxed text-navy-500">{doctor.about}</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-medium text-navy-950">Areas of Expertise</h2>
              <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {doctor.expertise.map((e) => (
                  <li key={e} className="flex items-start gap-2 text-sm text-navy-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" /> {e}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-medium text-navy-950">Available Appointment Slots</h2>
              <p className="mt-1 text-sm text-navy-500">Available: {doctor.availability.join(', ')}</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {doctor.slots.map((s) => (
                  <Link
                    key={s}
                    to={`/appointments?doctor=${doctor.id}`}
                    className="rounded-full border border-navy-900/15 bg-white px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700"
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
