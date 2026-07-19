import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from '../ui/ThemeToggle'
import LanguageToggle from '../ui/LanguageToggle'

const navItems = ['home', 'about', 'experience', 'skills', 'projects', 'blog', 'contact']

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    if (id === 'blog') {
      window.location.href = '/blog'
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo('home')} className="text-xl font-bold tracking-tight cursor-pointer">
          Portfolio
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {t(`nav.${item}`)}
            </button>
          ))}
          <div className="ml-2 flex items-center gap-1">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            {menuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          <div className="px-4 py-2 flex flex-col">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="px-3 py-3 text-sm font-medium text-left rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                {t(`nav.${item}`)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
