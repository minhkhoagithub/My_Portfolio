import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { blogPosts } from '../../data/blog'

export default function BlogPage() {
  const { t, i18n } = useTranslation()
  const isVi = i18n.language === 'vi'

  return (
    <>
      <Helmet>
        <title>Blog - Portfolio</title>
      </Helmet>
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">{t('blog.title')}</h1>

          {blogPosts.length === 0 ? (
            <p className="text-gray-500">{t('blog.noPosts')}</p>
          ) : (
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to={`/blog/${post.slug}`} className="block group">
                    <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {isVi ? post.titleVi : post.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {new Date(post.date).toLocaleDateString(isVi ? 'vi-VN' : 'en-US', {
                      year: 'numeric', month: 'long', day: 'numeric',
                    })}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {isVi ? post.excerptVi : post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-block mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {t('blog.readMore')} →
                  </Link>
                </article>
              ))}
            </div>
          )}

          <div className="mt-8">
            <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              ← {t('nav.home')}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
