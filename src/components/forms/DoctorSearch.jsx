import { Search, SlidersHorizontal } from 'lucide-react'
import { specialities } from '../../data/specialities'

const experienceOptions = [
  { value: '', label: 'Any Experience' },
  { value: '5', label: '5+ years' },
  { value: '10', label: '10+ years' },
  { value: '15', label: '15+ years' },
  { value: '20', label: '20+ years' },
]

const sortOptions = [
  { value: 'experience', label: 'Sort by Experience' },
  { value: 'rating', label: 'Sort by Rating' },
  { value: 'name', label: 'Sort by Name (A–Z)' },
]

export default function DoctorSearch({ filters, onChange, resultCount }) {
  const set = (key) => (e) => onChange({ ...filters, [key]: e.target.value })

  return (
    <div className="rounded-2xl border border-navy-900/10 bg-white p-5 shadow-soft">
      <div className="flex flex-col gap-4">
        <label className="relative flex items-center">
          <Search className="pointer-events-none absolute left-4 h-4 w-4 text-navy-400" />
          <span className="sr-only">Search doctors by name or speciality</span>
          <input
            type="search"
            value={filters.query}
            onChange={set('query')}
            placeholder="Search by doctor name or speciality…"
            className="w-full rounded-full border border-navy-900/15 bg-ivory/50 py-3 pl-11 pr-4 text-sm text-navy-900 placeholder:text-navy-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
          />
        </label>

        <div className="flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy-400">
            <SlidersHorizontal className="h-3.5 w-3.5" /> Filters
          </span>

          <select value={filters.speciality} onChange={set('speciality')} className="filter-select">
            <option value="">All Specialities</option>
            {specialities.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>

          <select value={filters.experience} onChange={set('experience')} className="filter-select">
            {experienceOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>

          <label className="flex items-center gap-2 rounded-full border border-navy-900/15 bg-ivory/50 px-4 py-2 text-sm text-navy-700">
            <input
              type="checkbox"
              checked={filters.availableToday}
              onChange={(e) => onChange({ ...filters, availableToday: e.target.checked })}
              className="h-4 w-4 rounded border-navy-900/30 text-teal-600 focus:ring-teal-500"
            />
            Available Today
          </label>

          <select value={filters.sort} onChange={set('sort')} className="filter-select ml-auto">
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        <p className="text-sm text-navy-500">
          {resultCount} {resultCount === 1 ? 'doctor' : 'doctors'} found
        </p>
      </div>
    </div>
  )
}
