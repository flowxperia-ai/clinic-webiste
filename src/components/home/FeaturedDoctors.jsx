import { ArrowRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import DoctorCard from '../cards/DoctorCard'
import Button from '../ui/Button'
import { doctors } from '../../data/doctors'

const featuredIds = ['arjun-menon', 'meera-nair', 'rahul-kapoor', 'ananya-rao']

export default function FeaturedDoctors() {
  const featured = featuredIds.map((id) => doctors.find((d) => d.id === id)).filter(Boolean)

  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            align="left"
            eyebrow="Meet Our Specialists"
            title="Doctors Who Take the Time to Listen"
            description="A team of senior specialists trained across leading institutions, each committed to unhurried, transparent care."
            className="sm:items-start sm:text-left"
          />
          <Button to="/doctors" variant="secondary" icon={ArrowRight} className="shrink-0">
            View All Doctors
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((doc, i) => (
            <DoctorCard key={doc.id} doctor={doc} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
