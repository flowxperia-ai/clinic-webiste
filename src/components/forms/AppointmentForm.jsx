import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CalendarCheck, Clock, Stethoscope, User, Phone, Mail, FileText, CheckCircle2, Star } from 'lucide-react'
import { specialities } from '../../data/specialities'
import { doctors, getDoctorById } from '../../data/doctors'
import Button from '../ui/Button'
import { useToast } from '../../context/ToastContext'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  date: '',
  time: '',
  specialityId: '',
  doctorId: '',
  reason: '',
}

function todayISO() {
  const d = new Date()
  return d.toISOString().split('T')[0]
}

export default function AppointmentForm() {
  const [searchParams] = useSearchParams()
  const presetDoctor = searchParams.get('doctor') || ''
  const presetDoctorObj = presetDoctor ? getDoctorById(presetDoctor) : null

  const [form, setForm] = useState({
    ...initialForm,
    doctorId: presetDoctor,
    specialityId: presetDoctorObj?.specialityId || '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [reference, setReference] = useState('')
  const { showToast } = useToast()

  const availableDoctors = useMemo(
    () => (form.specialityId ? doctors.filter((d) => d.specialityId === form.specialityId) : doctors),
    [form.specialityId],
  )

  const selectedDoctor = useMemo(() => getDoctorById(form.doctorId), [form.doctorId])

  const update = (field) => (e) => {
    const value = e.target.value
    setForm((prev) => {
      const next = { ...prev, [field]: value }
      if (field === 'specialityId') next.doctorId = ''
      return next
    })
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (form.name.trim().length < 2) next.name = 'Please enter your full name.'
    if (!/^[\d+\-\s()]{7,15}$/.test(form.phone.trim())) next.phone = 'Please enter a valid phone number.'
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = 'Please enter a valid email address.'
    if (!form.date) next.date = 'Please select a date.'
    else if (form.date < todayISO()) next.date = 'Date cannot be in the past.'
    if (!form.time) next.time = 'Please select a preferred time.'
    if (!form.specialityId) next.specialityId = 'Please select a speciality.'
    if (!form.doctorId) next.doctorId = 'Please select a doctor.'
    if (form.reason.trim().length < 10) next.reason = 'Please briefly describe your reason for visit (min. 10 characters).'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) {
      showToast('Please review the highlighted fields.', { type: 'error', title: 'Some details are missing' })
      return
    }
    setReference(`AUR-${Math.floor(100000 + Math.random() * 900000)}`)
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (submitted) {
    return (
      <ConfirmationCard
        form={form}
        doctor={selectedDoctor}
        reference={reference}
        onReset={() => { setSubmitted(false); setForm(initialForm) }}
      />
    )
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6 rounded-2xl border border-navy-900/10 bg-white p-6 shadow-soft sm:p-8">
        <fieldset className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <legend className="sr-only">Patient details</legend>
          <Field label="Patient Name" error={errors.name} icon={User}>
            <input
              type="text"
              value={form.name}
              onChange={update('name')}
              placeholder="Full name"
              aria-invalid={!!errors.name}
              className={inputClass(errors.name)}
            />
          </Field>
          <Field label="Phone Number" error={errors.phone} icon={Phone}>
            <input
              type="tel"
              value={form.phone}
              onChange={update('phone')}
              placeholder="+91 98765 43210"
              aria-invalid={!!errors.phone}
              className={inputClass(errors.phone)}
            />
          </Field>
          <Field label="Email Address" error={errors.email} icon={Mail} className="sm:col-span-2">
            <input
              type="email"
              value={form.email}
              onChange={update('email')}
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              className={inputClass(errors.email)}
            />
          </Field>
          <Field label="Preferred Date" error={errors.date} icon={CalendarCheck}>
            <input
              type="date"
              min={todayISO()}
              value={form.date}
              onChange={update('date')}
              aria-invalid={!!errors.date}
              className={inputClass(errors.date)}
            />
          </Field>
          <Field label="Preferred Time" error={errors.time} icon={Clock}>
            <select value={form.time} onChange={update('time')} aria-invalid={!!errors.time} className={inputClass(errors.time)}>
              <option value="">Select a time</option>
              {(selectedDoctor?.slots || ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM']).map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </Field>
          <Field label="Speciality" error={errors.specialityId} icon={Stethoscope}>
            <select value={form.specialityId} onChange={update('specialityId')} aria-invalid={!!errors.specialityId} className={inputClass(errors.specialityId)}>
              <option value="">Select a speciality</option>
              {specialities.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </Field>
          <Field label="Doctor" error={errors.doctorId} icon={User}>
            <select value={form.doctorId} onChange={update('doctorId')} aria-invalid={!!errors.doctorId} className={inputClass(errors.doctorId)}>
              <option value="">Select a doctor</option>
              {availableDoctors.map((d) => (
                <option key={d.id} value={d.id}>{d.name} — {d.specialityName}</option>
              ))}
            </select>
          </Field>
          <Field label="Reason for Visit" error={errors.reason} icon={FileText} className="sm:col-span-2">
            <textarea
              value={form.reason}
              onChange={update('reason')}
              placeholder="Briefly describe your symptoms or reason for the visit"
              rows={4}
              aria-invalid={!!errors.reason}
              className={inputClass(errors.reason)}
            />
          </Field>
        </fieldset>

        <Button type="submit" variant="primary" size="lg" className="w-full sm:w-fit">
          Confirm Appointment Request
        </Button>
        <p className="text-xs text-navy-400">Our care team will call to confirm your appointment within 2 working hours.</p>
      </form>

      <aside className="flex flex-col gap-5">
        <div className="rounded-2xl border border-navy-900/10 bg-teal-50/60 p-6">
          <h3 className="font-display text-lg font-medium text-navy-950">Appointment Summary</h3>
          <dl className="mt-4 flex flex-col gap-3 text-sm">
            <SummaryRow label="Speciality" value={specialities.find((s) => s.id === form.specialityId)?.name} />
            <SummaryRow label="Doctor" value={selectedDoctor?.name} />
            <SummaryRow label="Date" value={form.date} />
            <SummaryRow label="Time" value={form.time} />
          </dl>
        </div>

        {selectedDoctor && (
          <div className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-4">
              <img src={selectedDoctor.image} alt={selectedDoctor.name} className="h-16 w-16 rounded-full object-cover" />
              <div>
                <p className="font-medium text-navy-950">{selectedDoctor.name}</p>
                <p className="text-sm text-teal-700">{selectedDoctor.specialityName}</p>
                <p className="flex items-center gap-1 text-xs text-navy-500">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> {selectedDoctor.rating} · {selectedDoctor.experienceYears} yrs experience
                </p>
              </div>
            </div>
            <div className="mt-4 border-t border-navy-900/10 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">Available Days</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {selectedDoctor.availability.map((day) => (
                  <span key={day} className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-700">{day}</span>
                ))}
              </div>
              <p className="mt-3 text-sm text-navy-600">Consultation fee: <span className="font-medium text-navy-950">₹{selectedDoctor.consultationFee}</span></p>
            </div>
          </div>
        )}
      </aside>
    </div>
  )
}

function Field({ label, error, icon: Icon, children, className = '' }) {
  return (
    <label className={`flex flex-col gap-1.5 text-sm ${className}`}>
      <span className="flex items-center gap-1.5 font-medium text-navy-800">
        <Icon className="h-3.5 w-3.5 text-teal-600" /> {label}
      </span>
      {children}
      {error && <span role="alert" className="text-xs text-red-600">{error}</span>}
    </label>
  )
}

function inputClass(error) {
  return `w-full rounded-lg border bg-ivory/50 px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-teal-500/40 ${
    error ? 'border-red-400' : 'border-navy-900/15 focus:border-teal-500'
  }`
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-navy-900/5 pb-2 last:border-0">
      <dt className="text-navy-500">{label}</dt>
      <dd className="font-medium text-navy-950">{value || '—'}</dd>
    </div>
  )
}

function ConfirmationCard({ form, doctor, reference, onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mx-auto flex max-w-xl flex-col items-center gap-5 rounded-2xl border border-teal-500/20 bg-white p-10 text-center shadow-lift"
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-teal-600"
      >
        <CheckCircle2 className="h-9 w-9" />
      </motion.div>
      <h3 className="font-display text-2xl font-medium text-navy-950">Appointment Request Received</h3>
      <p className="text-navy-500">
        Thank you, {form.name.split(' ')[0]}. Your request with {doctor?.name || 'our specialist'} for{' '}
        <span className="font-medium text-navy-900">{form.date}</span> at{' '}
        <span className="font-medium text-navy-900">{form.time}</span> has been received. Our care team will call{' '}
        <span className="font-medium text-navy-900">{form.phone}</span> shortly to confirm.
      </p>
      <dl className="grid w-full grid-cols-2 gap-3 rounded-xl bg-ivory p-4 text-left text-sm">
        <SummaryRow label="Speciality" value={doctor?.specialityName} />
        <SummaryRow label="Reference" value={reference} />
      </dl>
      <Button onClick={onReset} variant="secondary">Book Another Appointment</Button>
    </motion.div>
  )
}
