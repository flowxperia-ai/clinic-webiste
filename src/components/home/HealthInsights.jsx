import { ArrowRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import BlogCard from '../cards/BlogCard'
import Button from '../ui/Button'
import { blogPosts } from '../../data/blog'

export default function HealthInsights() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            align="left"
            eyebrow="Health Insights"
            title="Articles Worth Your Time"
            description="Practical, physician-reviewed guidance for making informed health decisions."
            className="sm:items-start sm:text-left"
          />
          <Button to="/blog" variant="secondary" icon={ArrowRight} className="shrink-0">
            All Articles
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
