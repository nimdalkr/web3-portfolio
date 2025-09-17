'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Twitter, TrendingUp, Users, BarChart3, Calendar, MessageCircle } from 'lucide-react'
import { resumeData } from '@/data/resume'

export default function SocialInfluenceSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { socialMediaInfluence } = resumeData

  return (
    <section className="py-20 relative" ref={ref} id="social-influence">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Social Media Influence</span>
          </h2>
          <p className="text-xl text-gray-400">
            Web3 콘텐츠 제작과 커뮤니티 영향력
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8 border border-white/10 mb-12"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-web3-blue to-web3-cyan p-3 flex items-center justify-center">
                <Twitter className="w-full h-full text-white" />
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">{socialMediaInfluence.handle}</h3>
              <p className="text-web3-cyan text-lg mb-4">{socialMediaInfluence.specialization}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-web3-blue mb-1">{socialMediaInfluence.followers}</div>
                  <div className="text-sm text-gray-400">팔로워</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-web3-cyan mb-1">80,000+</div>
                  <div className="text-sm text-gray-400">최대 인게이지먼트</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-web3-teal mb-1">53</div>
                  <div className="text-sm text-gray-400">Yaps</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-web3-emerald mb-1">Emerging CT</div>
                  <div className="text-sm text-gray-400">등급</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-web3-blue" />
                주요 성과
              </h3>
              <div className="space-y-3">
                {socialMediaInfluence.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-web3-cyan mt-1 flex-shrink-0">▸</span>
                    <span className="text-sm text-gray-300">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Content Types */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-web3-cyan" />
                콘텐츠 유형
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialMediaInfluence.contentTypes.map((type, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="px-3 py-2 bg-gradient-to-r from-web3-blue/20 to-web3-cyan/20 rounded-full border border-web3-blue/30 text-sm"
                  >
                    {type}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Growth Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass rounded-2xl p-6 border border-white/10 mt-8"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-web3-teal" />
              성장 마일스톤
            </h3>
            <div className="space-y-4">
              {socialMediaInfluence.milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="w-3 h-3 rounded-full bg-web3-blue flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <span className="text-web3-cyan font-medium text-sm">{milestone.date}</span>
                      <span className="text-gray-300 text-sm">{milestone.event}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}