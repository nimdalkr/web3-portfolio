'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { resumeData } from '@/data/resume'

export default function SkillsVisualization() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeCategory, setActiveCategory] = useState<'marketing' | 'web3' | 'technical'>('web3')

  const skillCategories = {
    marketing: {
      title: 'Marketing',
      color: 'from-emerald-500 to-teal-500',
      skills: resumeData.skills.marketing,
    },
    web3: {
      title: 'Web3',
      color: 'from-web3-blue to-web3-cyan',
      skills: resumeData.skills.web3,
    },
    technical: {
      title: 'Technical',
      color: 'from-blue-500 to-cyan-500',
      skills: resumeData.skills.technical,
    },
  }

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-400">
            Bridging traditional marketing with Web3 innovation
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {(Object.keys(skillCategories) as Array<keyof typeof skillCategories>).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? `bg-gradient-to-r ${skillCategories[category].color} text-white`
                  : 'glass border border-white/10 hover:border-web3-blue/50'
              }`}
            >
              {skillCategories[category].title}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => {
            const skillName = skill
            
            return (
              <motion.div
                key={skillName}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, rotate: Math.random() * 10 - 5 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                
                <div className="relative glass rounded-xl p-4 border border-white/10 hover:border-web3-blue/50 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{skillName}</span>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color}`}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Language Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Languages</h3>
          <div className="flex justify-center gap-8">
            {resumeData.skills.languages.map((lang, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto mb-2 relative">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: '0 251' }}
                      animate={inView ? { 
                        strokeDasharray: `${
                          lang.level === 'Native' ? 251 : 
                          lang.level === 'Intermediate' ? 113 : 
                          lang.level === 'Basic' ? 63 :
                          100
                        } 251` 
                      } : {}}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7C3AED" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">
                      {lang.name === '한국어' ? '한' : lang.name === 'English' ? 'EN' : '日'}
                    </span>
                  </div>
                </div>
                <div className="text-sm font-medium">{lang.name}</div>
                <div className="text-xs text-gray-400">{lang.level}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}