import { MapPin, Phone, Mail, Clock, Siren } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import ContactForm from '../components/forms/ContactForm'

const departments = [
  { name: 'General Enquiries', phone: '+91 80 4567 8900' },
  { name: 'Appointments', phone: '+91 80 4567 8901' },
  { name: 'Emergency', phone: '1800-123-456' },
  { name: 'Billing & Insurance', phone: '+91 80 4567 8902' },
]

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're Here to Help"
        description="Reach out for appointments, billing questions, or general enquiries — our team typically responds within one business day."
        image="https://images.unsplash.com/photo-1666887360742-976020a58b96?auto=format&fit=crop&w=1600&q=80"
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-16 sm:py-24">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <div className="flex items-center gap-2 text-red-700">
                <Siren className="h-5 w-5" />
                <p className="font-semibold">Medical Emergency?</p>
              </div>
              <p className="mt-1 text-sm text-red-700/90">Call our 24/7 emergency line immediately at <a href="tel:1800123456" className="font-semibold underline">1800-123-456</a>.</p>
            </div>

            <div className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-soft">
              <h3 className="font-display text-lg font-medium text-navy-950">Visit Us</h3>
              <ul className="mt-4 flex flex-col gap-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-teal-600" />
                  <span className="text-navy-600">221 Meridian Avenue, Whitefield, Bengaluru 560066, India</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-teal-600" />
                  <span className="text-navy-600">+91 80 4567 8900</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-teal-600" />
                  <span className="text-navy-600">care@aureliamedical.in</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-teal-600" />
                  <span className="text-navy-600">OPD: Mon–Sat, 8:00 AM – 8:00 PM<br />Emergency: 24/7, all days</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-soft">
              <h3 className="font-display text-lg font-medium text-navy-950">Department Contacts</h3>
              <ul className="mt-4 flex flex-col divide-y divide-navy-900/5 text-sm">
                {departments.map((d) => (
                  <li key={d.name} className="flex items-center justify-between py-2.5">
                    <span className="text-navy-600">{d.name}</span>
                    <a href={`tel:${d.phone.replace(/\s|-/g, '')}`} className="font-medium text-teal-700 hover:underline">{d.phone}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <ContactForm />
            <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-navy-900/10">
              <div
                role="img"
                aria-label="Map showing Aurelia Medical Centre location at 221 Meridian Avenue, Whitefield, Bengaluru"
                className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,var(--color-teal-50),var(--color-cream))] text-navy-400"
              >
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="h-8 w-8 text-teal-500" />
                  <span className="text-sm">Interactive map available on request</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
