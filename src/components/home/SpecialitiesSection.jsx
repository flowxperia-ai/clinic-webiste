import SectionHeader from '../ui/SectionHeader'
import SpecialityCard from '../cards/SpecialityCard'
import Button from '../ui/Button'
import { specialities } from '../../data/specialities'
import { ArrowRight } from 'lucide-react'

export default function SpecialitiesSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            align="left"
            eyebrow="Our Specialities"
            title="Expertise Across Every Stage of Care"
            description="From preventive screening to advanced surgical intervention, our specialists collaborate across disciplines to deliver coordinated, evidence-based care."
            className="sm:items-start sm:text-left"
          />
          <Button to="/specialities" variant="secondary" icon={ArrowRight} className="shrink-0">
            View All Specialities
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specialities.slice(0, 8).map((s, i) => (
            <SpecialityCard key={s.id} speciality={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
