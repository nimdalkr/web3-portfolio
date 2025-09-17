'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Users, BarChart3, Calendar, MessageCircle, ExternalLink, Heart, Star, Trophy, Target, Award, Zap, CheckCircle } from 'lucide-react'
import { resumeData } from '@/data/resume'

// X (Twitter) Logo Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

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
                <XIcon className="w-full h-full text-white" />
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">{socialMediaInfluence.handle}</h3>
              <p className="text-web3-cyan text-lg mb-4">{socialMediaInfluence.specialization}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    value: socialMediaInfluence.followers,
                    label: 'Followers',
                    icon: Users,
                    gradient: 'from-blue-500 to-cyan-500',
                    bgColor: 'bg-blue-500/20'
                  },
                  {
                    value: '80,000+',
                    label: 'Max Engagement',
                    icon: Heart,
                    gradient: 'from-pink-500 to-red-500',
                    bgColor: 'bg-pink-500/20'
                  },
                  {
                    value: '53',
                    label: 'Yaps',
                    icon: Star,
                    gradient: 'from-yellow-500 to-orange-500',
                    bgColor: 'bg-yellow-500/20'
                  },
                  {
                    value: 'Emerging CT',
                    label: 'Grade',
                    icon: Trophy,
                    gradient: 'from-green-500 to-teal-500',
                    bgColor: 'bg-green-500/20'
                  }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative group"
                  >
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />

                    <div className={`relative ${stat.bgColor} rounded-xl p-6 border border-white/20 group-hover:border-white/40 transition-all duration-300`}>
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${stat.gradient} p-3 flex items-center justify-center shadow-lg`}>
                        <stat.icon className="w-full h-full text-white" />
                      </div>
                      <div className={`text-2xl font-bold mb-1 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* X Feed Highlights CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-8 text-center"
              >
                <motion.a
                  href="https://x.com/0xnimdal/highlights"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                >
                  <XIcon className="w-5 h-5" />
                  Feed Highlights
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              </motion.div>
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
                    className="flex items-center gap-3"
                  >
                    <span className="text-web3-cyan flex-shrink-0">▸</span>
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
              {socialMediaInfluence.milestones.map((milestone, index) => {
                // 마일스톤 유형에 따른 아이콘 선택
                const getIcon = (event: string) => {
                  if (event.includes('시작') || event.includes('시작')) return Star
                  if (event.includes('LEADERBOARD') || event.includes('위')) return Trophy
                  if (event.includes('Yaps') || event.includes('돌파')) return Target
                  if (event.includes('획득') || event.includes('CARD')) return Award
                  if (event.includes('참여')) return Zap
                  return CheckCircle
                }

                const getGradient = (index: number) => {
                  const gradients = [
                    'from-blue-500 to-cyan-500',
                    'from-purple-500 to-pink-500',
                    'from-green-500 to-teal-500',
                    'from-yellow-500 to-orange-500',
                    'from-red-500 to-pink-500',
                    'from-indigo-500 to-purple-500',
                    'from-cyan-500 to-blue-500',
                    'from-teal-500 to-green-500',
                    'from-orange-500 to-red-500'
                  ]
                  return gradients[index % gradients.length]
                }

                const Icon = getIcon(milestone.event)
                const gradient = getGradient(index)

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group relative"
                  >
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-lg blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

                    <div className="relative flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-white/10 group-hover:border-gray-300 dark:group-hover:border-white/30 transition-all duration-300 bg-gray-50 dark:bg-white/5">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${gradient} p-3 flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <Icon className="w-full h-full text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                          <span className={`font-semibold text-sm bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                            {milestone.date}
                          </span>
                          <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{milestone.event}</span>
                        </div>
                      </div>

                      {/* Decorative element */}
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient} animate-pulse flex-shrink-0`} />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}