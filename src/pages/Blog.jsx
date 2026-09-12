import PageHero from '../components/layout/PageHero'
import BlogCard from '../components/cards/BlogCard'
import { blogPosts } from '../data/blog'

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Health Insights"
        title="Articles Worth Your Time"
        description="Practical, physician-reviewed guidance to help you make informed decisions about your health."
        image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80"
        breadcrumbs={[{ label: 'Blog' }]}
      />
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
