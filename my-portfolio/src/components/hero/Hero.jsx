import { useTranslation } from 'react-i18next'
import { FiDownload } from 'react-icons/fi'

export default function Hero() {
  const { t } = useTranslation()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 dark:from-blue-600/10 dark:to-purple-600/10" />

      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium mb-4">
          {t('hero.greeting')}
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          {t('hero.name')}
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-medium mb-6">
          {t('hero.role')}
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto">
          {t('hero.tagline')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('projects')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer"
          >
            {t('hero.viewProjects')}
          </button>
          <a
            href="/cv.pdf"
            download
            className="flex items-center justify-center gap-2 px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <FiDownload className="w-4 h-4" />
            {t('hero.downloadCV')}
          </a>
          <button
            onClick={() => scrollTo('contact')}
            className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            {t('hero.contactMe')}
          </button>
        </div>
      </div>
    </section>
  )
}
