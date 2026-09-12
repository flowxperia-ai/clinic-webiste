import { Link } from 'react-router-dom'
import { Star, BriefcaseMedical } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

export default function DoctorCard({ doctor, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: 'easeOut' }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <Link to={`/doctors/${doctor.id}`} className="block overflow-hidden">
        <div className="aspect-[4/5] overflow-hidden bg-navy-100">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <Link to={`/doctors/${doctor.id}`}>
            <h3 className="font-display text-lg font-medium text-navy-950 hover:text-teal-700">{doctor.name}</h3>
          </Link>
          <p className="text-sm text-teal-700">{doctor.specialityName}</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-navy-500">
          <span className="flex items-center gap-1.5">
            <BriefcaseMedical className="h-4 w-4 text-navy-400" />
            {doctor.experienceYears} yrs
          </span>
          <span className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            {doctor.rating} <span className="text-navy-400">({doctor.reviewCount})</span>
          </span>
        </div>
        <div className="mt-auto flex gap-2 pt-2">
          <Button to={`/doctors/${doctor.id}`} variant="secondary" size="sm" className="flex-1">
            View Profile
          </Button>
          <Button to={`/appointments?doctor=${doctor.id}`} variant="primary" size="sm" className="flex-1">
            Book
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
