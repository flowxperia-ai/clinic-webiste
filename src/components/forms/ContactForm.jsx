import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Send, User, Mail, Phone, MessageSquare } from 'lucide-react'
import Button from '../ui/Button'
import { useToast } from '../../context/ToastContext'

const departments = ['General Enquiry', 'Appointments', 'Billing & Insurance', 'Feedback', 'Careers']

const initialForm = { name: '', email: '', phone: '', department: 'General Enquiry', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const { showToast } = useToast()

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (form.name.trim().length < 2) next.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = 'Please enter a valid email address.'
    if (!/^[\d+\-\s()]{7,15}$/.test(form.phone.trim())) next.phone = 'Please enter a valid phone number.'
    if (form.message.trim().length < 10) next.message = 'Please enter a message (min. 10 characters).'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) {
      showToast('Please review the highlighted fields.', { type: 'error', title: 'Some details are missing' })
      return
    }
    setSent(true)
    showToast("We've received your message and will respond within one business day.", { title: 'Message sent' })
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 rounded-2xl border border-teal-500/20 bg-white p-10 text-center shadow-lift"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-teal-600">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-display text-xl font-medium text-navy-950">Thank you, {form.name.split(' ')[0]}.</h3>
        <p className="text-navy-500">Your message has been received. Our team typically responds within one business day.</p>
        <Button variant="secondary" onClick={() => { setSent(false); setForm(initialForm) }}>Send Another Message</Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 rounded-2xl border border-navy-900/10 bg-white p-6 shadow-soft sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name} icon={User}>
          <input type="text" value={form.name} onChange={update('name')} placeholder="Your name" aria-invalid={!!errors.name} className={inputClass(errors.name)} />
        </Field>
        <Field label="Phone Number" error={errors.phone} icon={Phone}>
          <input type="tel" value={form.phone} onChange={update('phone')} placeholder="+91 98765 43210" aria-invalid={!!errors.phone} className={inputClass(errors.phone)} />
        </Field>
        <Field label="Email Address" error={errors.email} icon={Mail} className="sm:col-span-2">
          <input type="email" value={form.email} onChange={update('email')} placeholder="you@example.com" aria-invalid={!!errors.email} className={inputClass(errors.email)} />
        </Field>
        <Field label="Department" icon={MessageSquare} className="sm:col-span-2">
          <select value={form.department} onChange={update('department')} className={inputClass()}>
            {departments.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </Field>
        <Field label="Message" error={errors.message} icon={MessageSquare} className="sm:col-span-2">
          <textarea value={form.message} onChange={update('message')} rows={5} placeholder="How can we help?" aria-invalid={!!errors.message} className={inputClass(errors.message)} />
        </Field>
      </div>
      <Button type="submit" variant="primary" size="lg" icon={Send} className="w-full sm:w-fit">
        Send Message
      </Button>
    </form>
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
