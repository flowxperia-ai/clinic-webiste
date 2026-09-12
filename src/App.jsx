import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import EmergencyBanner from './components/layout/EmergencyBanner'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { useScrollToTop } from './hooks/useScrollToTop'

import Home from './pages/Home'
import About from './pages/About'
import Specialities from './pages/Specialities'
import SpecialityDetails from './pages/SpecialityDetails'
import Doctors from './pages/Doctors'
import DoctorDetails from './pages/DoctorDetails'
import Appointments from './pages/Appointments'
import Services from './pages/Services'
import PatientCare from './pages/PatientCare'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()
  useScrollToTop()

  return (
    <div className="flex min-h-svh flex-col bg-ivory">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:rounded-lg focus:bg-navy-950 focus:px-4 focus:py-2 focus:text-ivory"
      >
        Skip to main content
      </a>
      <EmergencyBanner />
      <Navbar />
      <main id="main-content" className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/specialities" element={<PageTransition><Specialities /></PageTransition>} />
            <Route path="/specialities/:id" element={<PageTransition><SpecialityDetails /></PageTransition>} />
            <Route path="/doctors" element={<PageTransition><Doctors /></PageTransition>} />
            <Route path="/doctors/:id" element={<PageTransition><DoctorDetails /></PageTransition>} />
            <Route path="/appointments" element={<PageTransition><Appointments /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/patient-care" element={<PageTransition><PatientCare /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
            <Route path="/blog/:id" element={<PageTransition><BlogDetails /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
