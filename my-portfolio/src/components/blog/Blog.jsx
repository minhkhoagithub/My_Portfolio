import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import { blogPosts } from '../../data/blog'

export default function BlogSection() {
  const { t, i18n } = useTranslation()
  const isVi = i18n.language === 'vi'
  const recentPosts = [...blogPosts].slice(0, 3)

  return (
    <SectionWrapper id="blog">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {t('blog.title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recentPosts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <Link to={`/blog/${post.slug}`} className="block p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {isVi ? post.titleVi : post.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {new Date(post.date).toLocaleDateString(isVi ? 'vi-VN' : 'en-US', {
                  year: 'numeric', month: 'long', day: 'numeric',
                })}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {isVi ? post.excerptVi : post.excerpt}
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                {t('blog.readMore')} →
              </span>
            </Link>
          </motion.article>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/blog"
          className="inline-block px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {t('blog.viewAll')} →
        </Link>
      </div>
    </SectionWrapper>
  )
}
