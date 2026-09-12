import SectionHeader from '../ui/SectionHeader'
import TestimonialCard from '../cards/TestimonialCard'
import { testimonials } from '../../data/testimonials'

export default function PatientStories() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Patient Stories"
          title="Real Experiences, Real Outcomes"
          description="Hear from patients and families who trusted us with their care."
          className="mx-auto"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
