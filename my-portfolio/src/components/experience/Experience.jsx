import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import { experience } from '../../data/experience'

export default function Experience() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="experience">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {t('experience.title')}
      </h2>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 -translate-x-1/2" />

        <div className="space-y-12">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-6 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="hidden md:block flex-1" />
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-blue-600 rounded-full -translate-x-1/2 mt-1.5 ring-4 ring-white dark:ring-gray-950 z-10" />
              <div className="flex-1 pl-10 md:pl-0">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {item.startDate} — {item.endDate}
                  </span>
                  <h3 className="text-xl font-semibold mt-1">{item.role}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{item.company} — {item.location}</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
