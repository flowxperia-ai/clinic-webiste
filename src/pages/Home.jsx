import Hero from '../components/home/Hero'
import TrustStats from '../components/home/TrustStats'
import SpecialitiesSection from '../components/home/SpecialitiesSection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import FeaturedDoctors from '../components/home/FeaturedDoctors'
import AppointmentCTA from '../components/home/AppointmentCTA'
import PatientStories from '../components/home/PatientStories'
import FacilitiesSection from '../components/home/FacilitiesSection'
import HealthInsights from '../components/home/HealthInsights'
import FinalCTA from '../components/home/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <SpecialitiesSection />
      <WhyChooseUs />
      <FeaturedDoctors />
      <AppointmentCTA />
      <PatientStories />
      <FacilitiesSection />
      <HealthInsights />
      <FinalCTA />
    </>
  )
}
