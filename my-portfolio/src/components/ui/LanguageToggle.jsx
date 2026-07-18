import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n } = useTranslation()

  const toggleLang = () => {
    const newLang = i18n.language === 'en' ? 'vi' : 'en'
    i18n.changeLanguage(newLang)
    localStorage.setItem('lang', newLang)
  }

  return (
    <button
      onClick={toggleLang}
      className="px-2 py-1 text-sm font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
      aria-label="Toggle language"
    >
      {i18n.language === 'en' ? '🇻🇳 VI' : '🇺🇸 EN'}
    </button>
  )
}
