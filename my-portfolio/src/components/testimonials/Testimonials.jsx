import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="testimonials" className="bg-gray-50 dark:bg-gray-900/50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {t('testimonials.title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800"
          >
            <svg className="w-8 h-8 text-blue-500/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
            </svg>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 italic">
              &ldquo;{item.content}&rdquo;
            </p>
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
