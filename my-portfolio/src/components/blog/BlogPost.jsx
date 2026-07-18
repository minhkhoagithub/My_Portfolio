import { useTranslation } from 'react-i18next'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { blogPosts } from '../../data/blog'

export default function BlogPost() {
  const { t, i18n } = useTranslation()
  const { slug } = useParams()
  const isVi = i18n.language === 'vi'

  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
            ← {t('blog.viewAll')}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{isVi ? post.titleVi : post.title} - Portfolio</title>
      </Helmet>
      <article className="min-h-screen pt-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-bold mb-4">
            {isVi ? post.titleVi : post.title}
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mb-8">
            {new Date(post.date).toLocaleDateString(isVi ? 'vi-VN' : 'en-US', {
              year: 'numeric', month: 'long', day: 'numeric',
            })}
          </p>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <Link
              to="/blog"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← {t('blog.viewAll')}
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
