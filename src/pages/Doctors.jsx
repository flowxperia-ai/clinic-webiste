import { useMemo, useState } from 'react'
import { SearchX } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import DoctorSearch from '../components/forms/DoctorSearch'
import DoctorCard from '../components/cards/DoctorCard'
import Button from '../components/ui/Button'
import { doctors } from '../data/doctors'

const initialFilters = { query: '', speciality: '', experience: '', availableToday: false, sort: 'experience' }

const todayShort = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(new Date())

export default function Doctors() {
  const [filters, setFilters] = useState(initialFilters)

  const results = useMemo(() => {
    let list = doctors.filter((d) => {
      const q = filters.query.trim().toLowerCase()
      const matchesQuery = !q || d.name.toLowerCase().includes(q) || d.specialityName.toLowerCase().includes(q)
      const matchesSpeciality = !filters.speciality || d.specialityId === filters.speciality
      const matchesExperience = !filters.experience || d.experienceYears >= Number(filters.experience)
      const matchesAvailability = !filters.availableToday || d.availability.includes(todayShort)
      return matchesQuery && matchesSpeciality && matchesExperience && matchesAvailability
    })

    list = [...list].sort((a, b) => {
      if (filters.sort === 'rating') return b.rating - a.rating
      if (filters.sort === 'name') return a.name.localeCompare(b.name)
      return b.experienceYears - a.experienceYears
    })

    return list
  }, [filters])

  return (
    <>
      <PageHero
        eyebrow="Doctor Directory"
        title="Find the Right Specialist for You"
        description="Search and filter our full team of specialists by speciality, experience, and availability."
        image="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1600&q=80"
        breadcrumbs={[{ label: 'Doctors' }]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <DoctorSearch filters={filters} onChange={setFilters} resultCount={results.length} />

          {results.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((doc, i) => (
                <DoctorCard key={doc.id} doctor={doc} index={i} />
              ))}
            </div>
          ) : (
            <div className="mt-16 flex flex-col items-center gap-4 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900/5 text-navy-400">
                <SearchX className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-medium text-navy-950">No doctors match your filters</h3>
              <p className="max-w-sm text-sm text-navy-500">Try adjusting your search terms or clearing a filter to see more results.</p>
              <Button variant="secondary" onClick={() => setFilters(initialFilters)}>Clear Filters</Button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
