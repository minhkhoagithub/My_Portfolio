import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import { skills } from '../../data/skills'

const categoryKeys = ['frontend', 'backend', 'tools']

export default function Skills() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="skills" className="bg-gray-50 dark:bg-gray-900/50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {t('skills.title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categoryKeys.map((category) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800"
          >
            <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
              {t(`skills.${category}`)}
            </h3>
            <div className="space-y-4">
              {skills[category].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
