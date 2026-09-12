import { ClipboardList, ShieldCheck, CreditCard, Clock, Phone, HeartHandshake } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import FAQ from '../components/ui/FAQ'
import Button from '../components/ui/Button'

const resources = [
  {
    icon: ClipboardList,
    title: 'Before Your Visit',
    items: ['Carry a valid photo ID and any prior medical records', 'Arrive 15 minutes early for first-time consultations', 'List current medications, including dosages', 'Fasting instructions apply for certain diagnostic tests'],
  },
  {
    icon: Clock,
    title: 'Visiting Hours',
    items: ['General wards: 11:00 AM – 1:00 PM & 5:00 PM – 7:00 PM', 'ICU: 12:00 PM – 12:30 PM & 6:00 PM – 6:30 PM', 'Maternity ward: 10:00 AM – 12:00 PM & 4:00 PM – 6:00 PM', 'Maximum two visitors per patient at a time'],
  },
  {
    icon: CreditCard,
    title: 'Insurance & Billing',
    items: ['Cashless treatment with 40+ partner insurers', 'Dedicated billing desk for claim assistance', 'Transparent estimate provided before planned procedures', 'Corporate and TPA tie-ups available'],
  },
  {
    icon: ShieldCheck,
    title: 'Patient Rights',
    items: ['Right to clear information about diagnosis and treatment', 'Right to a second opinion at any stage', 'Right to privacy and confidentiality of records', 'Right to a transparent, itemised billing statement'],
  },
]

const faqs = [
  { q: 'How do I schedule an appointment?', a: 'You can book online through our Appointments page, call our care line, or walk in to the front desk. We recommend booking online for the fastest confirmation.' },
  { q: 'What should I bring for admission?', a: 'A valid photo ID, insurance card (if applicable), referral letters or prior medical records, and a list of current medications.' },
  { q: 'Do you offer cashless insurance claims?', a: 'Yes, we are empanelled with over 40 insurance providers and TPAs for cashless treatment. Our billing desk can confirm your specific policy coverage.' },
  { q: 'Can I request my medical records?', a: 'Yes. Patients can request copies of their medical records through the Medical Records department, either in person or via a written request.' },
  { q: 'What is your discharge process?', a: 'Your care team will notify you of the planned discharge date in advance. Discharge summaries, prescriptions and follow-up instructions are provided before you leave.' },
]

export default function PatientCare() {
  return (
    <>
      <PageHero
        eyebrow="Patient Care"
        title="Everything You Need for a Comfortable Visit"
        description="Practical information to help you prepare for appointments, admissions, and your stay with us."
        image="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1600&q=80"
        breadcrumbs={[{ label: 'Patient Care' }]}
      />

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {resources.map((r) => (
              <div key={r.title} className="rounded-2xl border border-navy-900/10 bg-white p-7 shadow-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-medium text-navy-950">{r.title}</h3>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-navy-500">
                  {r.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-500" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader eyebrow="Common Questions" title="Patient Care FAQs" className="mx-auto" />
          <div className="mx-auto mt-10 max-w-3xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="flex flex-col items-center gap-5 rounded-[1.75rem] border border-navy-900/10 bg-white p-10 text-center shadow-soft sm:p-14">
            <HeartHandshake className="h-10 w-10 text-teal-600" />
            <h2 className="max-w-lg text-balance-pretty font-display text-2xl font-medium text-navy-950 sm:text-3xl">
              Need help planning your visit or understanding your bill?
            </h2>
            <p className="max-w-md text-navy-500">Our patient support team is available 24/7 to help you navigate every step.</p>
            <Button href="tel:+911800123456" variant="primary" icon={Phone}>Call Patient Support</Button>
          </div>
        </div>
      </section>
    </>
  )
}
