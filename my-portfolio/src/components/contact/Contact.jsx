import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import SectionWrapper from '../ui/SectionWrapper'

export default function Contact() {
  const { t } = useTranslation()
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        'service_jl2wrgv',
        'template_lxqytag',
        formRef.current,
        { publicKey: 'n-Yl5Cju-gSBhPZte' },
      )
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <SectionWrapper id="contact" className="bg-gray-50 dark:bg-gray-900/50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {t('contact.title')}
      </h2>

      <div className="flex flex-col md:flex-row gap-12 max-w-4xl mx-auto">
        <form ref={formRef} onSubmit={handleSubmit} className="flex-1 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t('contact.name')}</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t('contact.placeholderName')}
              required
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t('contact.email')}</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t('contact.placeholderEmail')}
              required
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t('contact.message')}</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t('contact.placeholderMessage')}
              required
              rows={5}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <FiSend className="w-4 h-4" />
            {status === 'sending' ? t('contact.sending') : status === 'sent' ? t('contact.sent') : status === 'error' ? t('contact.error') : t('contact.send')}
          </button>
        </form>

        <div className="flex flex-row md:flex-col gap-6 justify-center md:justify-start">
          <a href="mailto:minhkhoa0753@gmail.com" className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
              <FiMail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="hidden md:inline text-sm">minhkhoa0753@gmail.com</span>
          </a>
          <a href="https://github.com/minhkhoagithub" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
              <FiGithub className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="hidden md:inline text-sm">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/minhkhoa0753" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
              <FiLinkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="hidden md:inline text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
