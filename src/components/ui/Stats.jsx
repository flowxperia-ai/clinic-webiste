import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ value, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1600
    const start = performance.now()
    let frame

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <span ref={ref}>
      {display.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  { value: 25, suffix: '+', label: 'Years of Excellence' },
  { value: 120, suffix: '+', label: 'Specialist Doctors' },
  { value: 40, suffix: '+', label: 'Medical Specialities' },
  { value: 500, suffix: 'K+', label: 'Patients Served' },
]

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:gap-6 lg:grid-cols-4">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
          className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left"
        >
          <p className="font-display text-4xl font-medium text-navy-950 sm:text-5xl">
            <Counter value={s.value} suffix={s.suffix} />
          </p>
          <p className="text-sm text-navy-500">{s.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
