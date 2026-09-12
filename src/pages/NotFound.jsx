import { HeartPulse } from 'lucide-react'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <div className="container-page flex flex-col items-center gap-5 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-teal-600">
          <HeartPulse className="h-8 w-8" />
        </div>
        <p className="font-display text-6xl font-medium text-navy-950">404</p>
        <h1 className="font-display text-2xl font-medium text-navy-950">Page Not Found</h1>
        <p className="max-w-sm text-navy-500">The page you're looking for doesn't exist or may have moved.</p>
        <Button to="/" variant="primary">Return Home</Button>
      </div>
    </section>
  )
}
