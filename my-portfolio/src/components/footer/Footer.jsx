import { useTranslation } from 'react-i18next'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const { t } = useTranslation()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Portfolio. {t('footer.copyright')}
        </p>

        <div className="flex items-center gap-4">
          <a href="mailto:minhkhoa0753@gmail.com" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <FiMail className="w-5 h-5" />
          </a>
          <a href="https://github.com/minhkhoagithub" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <FiGithub className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/minhkhoa0753" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <FiLinkedin className="w-5 h-5" />
          </a>
          <button
            onClick={scrollToTop}
            className="ml-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            aria-label={t('footer.backToTop')}
          >
            <FiArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
