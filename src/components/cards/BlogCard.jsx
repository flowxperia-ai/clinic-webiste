import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

export default function BlogCard({ post, index = 0 }) {
  const date = new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: 'easeOut' }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <Link to={`/blog/${post.id}`} className="block overflow-hidden">
        <div className="aspect-[16/11] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">{post.category}</span>
        <Link to={`/blog/${post.id}`}>
          <h3 className="font-display text-lg font-medium leading-snug text-navy-950 group-hover:text-teal-700">
            {post.title}
          </h3>
        </Link>
        <p className="flex-1 text-sm leading-relaxed text-navy-500">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-2 text-xs text-navy-400">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" /> {date}
          </span>
          <span>{post.readTime}</span>
        </div>
        <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 hover:gap-2.5 transition-all">
          Read article <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  )
}
