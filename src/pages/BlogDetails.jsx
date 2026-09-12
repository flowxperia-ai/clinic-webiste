import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import BlogCard from '../components/cards/BlogCard'
import { blogPosts, getBlogPostById } from '../data/blog'

export default function BlogDetails() {
  const { id } = useParams()
  const post = getBlogPostById(id)

  if (!post) return <Navigate to="/blog" replace />

  const date = new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <img src={post.image} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/60" />
        </div>
        <div className="container-page relative py-20 sm:py-28">
          <Link to="/blog" className="mb-6 inline-flex items-center gap-1.5 text-sm text-teal-300 hover:text-teal-200">
            <ArrowLeft className="h-4 w-4" /> Back to Health Insights
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">{post.category}</span>
            <h1 className="mt-3 text-balance-pretty font-display text-3xl font-medium leading-tight text-ivory sm:text-4xl">{post.title}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-ivory/60">
              <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {date}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 aspect-[16/9] overflow-hidden rounded-2xl shadow-lift">
              <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col gap-5">
              {post.content.map((para, i) => (
                <p key={i} className="leading-relaxed text-navy-600">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-cream py-20 sm:py-24">
          <div className="container-page">
            <h2 className="font-display text-2xl font-medium text-navy-950">More Health Insights</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <BlogCard key={p.id} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
