import PageHero from '../components/layout/PageHero'
import AppointmentForm from '../components/forms/AppointmentForm'

export default function Appointments() {
  return (
    <>
      <PageHero
        eyebrow="Book a Visit"
        title="Schedule Your Appointment"
        description="Tell us a little about your needs and preferred timing — our care team will confirm your appointment within 2 working hours."
        image="https://images.unsplash.com/photo-1666887360742-976020a58b96?auto=format&fit=crop&w=1600&q=80"
        breadcrumbs={[{ label: 'Appointments' }]}
      />
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <AppointmentForm />
        </div>
      </section>
    </>
  )
}
