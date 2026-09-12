import PageHero from '../components/layout/PageHero'
import ServiceCard from '../components/cards/ServiceCard'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Healthcare Services Built Around Every Need"
        description="From advanced diagnostics to critical care, explore the full breadth of services available at Aurelia Medical Centre."
        image="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1600&q=80"
        breadcrumbs={[{ label: 'Services' }]}
      />
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={s.id} id={s.slug}>
                <ServiceCard service={s} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
