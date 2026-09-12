export const services = [
  {
    id: 'diagnostics',
    slug: 'advanced-diagnostics',
    name: 'Advanced Diagnostics',
    icon: 'ScanLine',
    description:
      'State-of-the-art imaging and laboratory diagnostics — including 3T MRI, 128-slice CT and a full-service pathology lab — deliver precise answers quickly, so treatment can begin without delay.',
    features: ['3T MRI & 128-slice CT', 'Digital X-ray & mammography', 'Full-service pathology lab', 'Genomic & molecular diagnostics'],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'critical-care',
    slug: 'critical-care',
    name: 'Critical & Emergency Care',
    icon: 'Siren',
    description:
      'Our 24/7 emergency department and multi-specialty ICUs are staffed by critical care specialists trained to respond to time-sensitive conditions with speed and precision.',
    features: ['24/7 emergency department', 'Multi-specialty ICUs', 'Advanced life support ambulances', 'Rapid response teams'],
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'surgery',
    slug: 'surgical-services',
    name: 'Surgical Services',
    icon: 'Scissors',
    description:
      'Modern operation theatres equipped for robotic and minimally invasive surgery across specialities, supported by dedicated surgical ICUs and recovery care.',
    features: ['Robotic-assisted surgery', 'Minimally invasive procedures', 'Dedicated surgical ICU', 'Day-care surgery options'],
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'maternity',
    slug: 'maternity-newborn-care',
    name: 'Maternity & Newborn Care',
    icon: 'Baby',
    description:
      'From prenatal screening to delivery and neonatal intensive care, our maternity programme is designed around comfort, safety and family-centred birth experiences.',
    features: ['Private birthing suites', 'High-risk pregnancy care', 'Level III NICU', 'Lactation & postnatal support'],
    image: 'https://images.unsplash.com/photo-1632053002434-f3a4a4d1a1b6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'rehabilitation',
    slug: 'rehabilitation-physiotherapy',
    name: 'Rehabilitation & Physiotherapy',
    icon: 'Activity',
    description:
      'Personalised rehabilitation programmes combining physiotherapy, occupational therapy and pain management to restore mobility and independence.',
    features: ['Sports injury rehab', 'Neuro-rehabilitation', 'Post-surgical physiotherapy', 'Pain management clinic'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'wellness',
    slug: 'preventive-wellness',
    name: 'Preventive Wellness Programmes',
    icon: 'Leaf',
    description:
      'Tailored health check-up packages and executive wellness programmes designed to catch risk factors early and support long-term wellbeing.',
    features: ['Executive health check-ups', 'Nutrition & lifestyle counselling', 'Cardiac & cancer risk screening', 'Corporate wellness plans'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
  },
]

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug)
