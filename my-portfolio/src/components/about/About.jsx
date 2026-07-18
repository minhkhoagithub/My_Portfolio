import { useTranslation } from 'react-i18next'
import SectionWrapper from '../ui/SectionWrapper'

export default function About() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="about" className="bg-gray-50 dark:bg-gray-900/50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {t('about.title')}
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0" />

        <div className="flex-1">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            {t('about.description')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex gap-2">
              <span className="font-medium text-gray-500 dark:text-gray-400 min-w-24">{t('about.name')}:</span>
              <span>{t('about.nameValue')}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium text-gray-500 dark:text-gray-400 min-w-24">{t('about.email')}:</span>
              <span>{t('about.emailValue')}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium text-gray-500 dark:text-gray-400 min-w-24">{t('about.location')}:</span>
              <span>{t('about.locationValue')}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium text-gray-500 dark:text-gray-400 min-w-24">{t('about.phone')}:</span>
              <span>{t('about.phoneValue')}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium text-gray-500 dark:text-gray-400 min-w-24">{t('about.availability')}:</span>
              <span className="text-green-600 dark:text-green-400 font-medium">{t('about.availabilityValue')}</span>
            </div>
          </div>

          <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">{t('about.education')}</h3>
            <p className="font-medium">{t('about.major')}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t('about.school')}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t('about.year')} — {t('about.gpa')}</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
