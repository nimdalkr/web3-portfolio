'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Building2, TrendingUp, Users, Rocket, Heart, MessageCircle, ExternalLink } from 'lucide-react'
import { resumeData } from '@/data/resume'

// 회사별 로고 매핑
const companyLogos: { [key: string]: string } = {
  '알파를 듀오': '/alphaduo.jpg',
  '071랩스': '/071.jpg',
  '북부산JC': '/jci.png',
  '엠케이알 (MKR)': '/mkr.png',
  '바보클럽 인재양성콘텐츠랩': '/baboclub.png',
  '마코랑(주)': '/makorang.jpg',
  // '마코랑랩': '/makorang.jpg', // 로고 제거, 기본 아이콘 사용
}

export default function CareerTimeline() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Career Journey</span>
          </h2>
          <p className="text-xl text-gray-400">
            From traditional marketing to Web3 innovation
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-web3-blue via-web3-blue to-web3-cyan opacity-30" />

          {resumeData.experience.map((exp, index) => {
            const isLeft = index % 2 === 0
            const getIcon = (type: string) => {
              switch(type) {
                case 'Web3': return Rocket
                case 'Agency': return TrendingUp
                case 'Startup': return Building2
                case 'Non-Profit': return Heart
                case 'Organization': return Users
                case 'Social Media': return MessageCircle
                default: return Building2
              }
            }
            const Icon = getIcon(exp.type)
            const logoSrc = companyLogos[exp.company]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center mb-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${isLeft ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass rounded-xl p-6 border border-white/10 hover:border-web3-blue/50 transition-all"
                  >
                    <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:justify-end' : ''}`}>
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden">
                        {logoSrc ? (
                          <img 
                            src={logoSrc} 
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <Icon className="w-6 h-6 text-web3-blue" />
                        )}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium glass ${
                        exp.type === 'Web3' ? 'text-web3-blue border-web3-blue/50' : 'text-web3-blue border-web3-blue/50'
                      } border`}>
                        {exp.type}
                      </span>
                    </div>

                    <div className={`flex items-center gap-2 mb-1 ${isLeft ? 'md:justify-end' : ''}`}>
                      <h3 className="text-2xl font-bold">{exp.company}</h3>
                      {(exp as any).link && (
                        <a
                          href={(exp as any).link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-web3-blue/20 hover:bg-web3-blue/40 transition-all duration-300 group"
                        >
                          <ExternalLink className="w-3 h-3 text-web3-blue group-hover:text-white transition-colors duration-300" />
                        </a>
                      )}
                    </div>
                    <p className={`text-web3-blue mb-2 ${isLeft ? 'md:text-right' : ''}`}>{exp.position}</p>
                    
                    <div className={`flex items-center gap-2 mb-3 text-sm text-gray-400 ${isLeft ? 'md:justify-end' : ''}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                      <span className="text-web3-cyan">({exp.duration})</span>
                    </div>

                    <p className={`text-gray-300 mb-4 ${isLeft ? 'md:text-right' : ''}`}>{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className={`flex items-center gap-2 ${isLeft ? 'md:text-right' : ''}`}>
                          {isLeft ? (
                            <>
                              <span className="text-sm text-gray-400 flex-1 md:text-right">{achievement}</span>
                              <span className="text-web3-cyan flex-shrink-0 hidden md:block">◂</span>
                              <span className="text-web3-cyan flex-shrink-0 md:hidden">▸</span>
                            </>
                          ) : (
                            <>
                              <span className="text-web3-cyan flex-shrink-0">▸</span>
                              <span className="text-sm text-gray-400 flex-1">{achievement}</span>
                            </>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className={`flex flex-wrap gap-2 mt-4 ${isLeft ? 'md:justify-end' : ''}`}>
                      {exp.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-400">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="relative flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-4 h-4 bg-gradient-to-r from-web3-blue to-web3-blue rounded-full absolute"
                  />
                  <div className="w-8 h-8 border-2 border-web3-blue/50 rounded-full" />
                </div>

                <div className="flex-1" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}