import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiExternalLink, FiChevronLeft, FiChevronRight, FiCheck, FiUser, FiCpu, FiImage } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const modal = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
}

export default function ProjectModal({ project, onClose }) {
  const { t, i18n } = useTranslation()
  const isVi = i18n.language === 'vi'
  const [slideIndex, setSlideIndex] = useState(0)
  const [showArch, setShowArch] = useState(false)

  const screenshots = project.images?.screenshots || []
  const current = slideIndex

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const prev = () => setSlideIndex((i) => (i === 0 ? screenshots.length - 1 : i - 1))
  const next = () => setSlideIndex((i) => (i === screenshots.length - 1 ? 0 : i + 1))

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          variants={modal}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>

          {screenshots.length > 0 && (
            <div className="relative bg-gray-100 dark:bg-gray-800 rounded-t-2xl overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={screenshots[current]}
                  alt={`${project.title} screenshot ${current + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {screenshots.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/70 dark:bg-gray-800/70 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
                  >
                    <FiChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/70 dark:bg-gray-800/70 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
                  >
                    <FiChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {screenshots.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSlideIndex(i)}
                        className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          <div className="p-6 md:p-8 space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {isVi ? project.description.vi : project.description.en}
              </p>
            </div>

            {project.features?.length > 0 && (
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
                  <FiCheck className="w-5 h-5 text-green-500" />
                  {t('projects.features')}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.role && (
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
                  <FiUser className="w-5 h-5 text-blue-500" />
                  {t('projects.myRole')}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {isVi ? project.role.vi : project.role.en}
                </p>
              </div>
            )}

            {project.images?.architecture && (
              <div>
                <button
                  onClick={() => setShowArch(!showArch)}
                  className="flex items-center gap-2 text-lg font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <FiImage className="w-5 h-5 text-purple-500" />
                  {t('projects.architecture')}
                  <span className="text-xs text-gray-400 ml-1">{showArch ? '▲' : '▼'}</span>
                </button>
                {showArch && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <img
                      src={project.images.architecture}
                      alt={`${project.title} architecture`}
                      className="w-full h-auto"
                    />
                  </motion.div>
                )}
              </div>
            )}

            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
                <FiCpu className="w-5 h-5 text-purple-500" />
                {t('projects.techStack')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  <FiExternalLink className="w-4 h-4" />
                  {t('projects.viewProject')}
                </a>
              )}
              <Link
                to={`/blog/${project.slug}`}
                onClick={onClose}
                className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors text-sm font-medium"
              >
                {t('projects.readBlog')}
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
