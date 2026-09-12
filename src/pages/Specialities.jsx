import PageHero from '../components/layout/PageHero'
import SpecialityCard from '../components/cards/SpecialityCard'
import { specialities } from '../data/specialities'

export default function Specialities() {
  return (
    <>
      <PageHero
        eyebrow="Specialities"
        title="Expertise Across Every Stage of Care"
        description="Explore our medical specialities — each led by experienced consultants and supported by dedicated diagnostic and surgical infrastructure."
        image="https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&w=1600&q=80"
        breadcrumbs={[{ label: 'Specialities' }]}
      />
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialities.map((s, i) => (
              <SpecialityCard key={s.id} speciality={s} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
