'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Coins, Shield, Database, Layers, Link2, Sparkles, Brain, Users, BarChart3, Globe } from 'lucide-react'
import { resumeData } from '@/data/resume'

const chainColors: { [key: string]: string } = {
  'Solana': 'from-blue-500 to-cyan-500',
  'Multi-chain': 'from-cyan-500 to-teal-500',
  'Stacks': 'from-orange-500 to-yellow-500',
  'Bitcoin L2': 'from-yellow-500 to-orange-500',
  'Cosmos': 'from-purple-500 to-blue-500',
  'Ethereum': 'from-blue-600 to-indigo-600',
  'Base': 'from-blue-400 to-blue-600',
  'Arbitrum': 'from-blue-500 to-blue-700',
}

const typeIcons: { [key: string]: any } = {
  'DePIN': Database,
  'NFT Marketplace': Sparkles,
  'Security': Shield,
  'DeFi': Coins,
  'Bitcoin DeFi': Layers,
  'AI Infrastructure': Brain,
  'Social Infrastructure': Users,
  'Decentralized AI': Brain,
  'Privacy Infrastructure': Shield,
  'AI Agents': Brain,
  'InfoFi': BarChart3,
  'Ecosystem': Globe,
  'Infrastructure': Database,
  'Zero-Knowledge': Shield,
  'Launchpad': Sparkles,
  'Content Creation': Users,
}

// 프로젝트별 로고 매핑
const projectLogos: { [key: string]: string } = {
  'Kaito AI': '/kaito.jpg',
  'UXLINK': '/uxlink.jpg',
  'Allora Network': '/allora.jpg',
  'Zama': '/zama.jpg',
  'Sahara AI': '/sahara.jpg',
  'Theoriq': '/theoriq.png',
  'Boundless': '/boundless.jpg',
  'OpenSea': '/opensea.png',
  'Magic Eden': '/magiceden.png',
}

export default function Web3Experience() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Web3 Journey</span>
          </h2>
          <p className="text-xl text-gray-400">
            Building the decentralized future, one block at a time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.web3Experience.filter(exp => exp.project !== "Other Projects").map((exp, index) => {
            const Icon = typeIcons[exp.type] || Link2
            const logoSrc = projectLogos[exp.project]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-web3-blue/20 to-web3-blue/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative glass rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-web3-blue/50 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden">
                      {logoSrc ? (
                        <img
                          src={logoSrc}
                          alt={`${exp.project} logo`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <Icon className="w-6 h-6 text-web3-blue" />
                      )}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${chainColors[exp.chain] || 'from-gray-500 to-gray-600'} text-white`}>
                      {exp.chain}
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{exp.project}</h3>
                    <p className="text-sm text-web3-blue mb-2">{exp.type}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 flex-1">{exp.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-gray-600 dark:text-gray-500">{exp.role}</span>
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="w-6 h-6 rounded-full bg-gradient-to-r from-web3-blue to-web3-cyan opacity-50"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      ✨ {exp.achievement}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Other Projects - Separate Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="group relative mt-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative glass rounded-xl p-8 border border-gray-200 dark:border-white/10 hover:border-purple-500/50 transition-all duration-300 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-orange-500 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">다양한 Web3 생태계 참여</h3>
              <p className="text-lg text-purple-500 mb-4 font-semibold">100+ 프로젝트 경험</p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                DeFi, GameFi, SocialFi 등 다양한 Web3 생태계에서 활발한 커뮤니티 활동과 프로젝트 참여를 통해
                폭넓은 경험과 네트워크를 구축했습니다.
              </p>

              <div className="flex flex-wrap gap-3 justify-center">
                {['DeFi', 'GameFi', 'SocialFi', 'NFT', 'Layer1', 'Layer2', 'DePIN', 'AI', 'RWA'].map((category, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full text-sm font-medium border border-purple-500/30 text-purple-600 dark:text-purple-400"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-white/10">
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Web3 생태계의 다양한 영역에서 지속적인 학습과 기여를 통해 종합적인 이해도를 높여왔습니다"
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Stats Infographic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-2">
              <span className="text-gradient">Web3 Impact</span>
            </h3>
            <p className="text-gray-400">Real numbers, real engagement</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                label: 'Protocols Used',
                value: '30+',
                icon: Layers,
                gradient: 'from-purple-500 to-pink-500',
                description: 'DeFi & Infrastructure'
              },
              {
                label: 'Chains Explored',
                value: '10+',
                icon: Link2,
                gradient: 'from-blue-500 to-cyan-500',
                description: 'Multi-chain Experience'
              },
              {
                label: 'NFTs Collected',
                value: '200+',
                icon: Sparkles,
                gradient: 'from-yellow-500 to-orange-500',
                description: 'Digital Assets'
              },
              {
                label: 'Transactions',
                value: '3,000+',
                icon: Coins,
                gradient: 'from-green-500 to-teal-500',
                description: 'On-chain Activity'
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />

                {/* Card */}
                <div className="relative glass rounded-2xl p-8 border border-gray-200 dark:border-white/20 hover:border-gray-300 dark:hover:border-white/40 transition-all duration-300">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.gradient} p-4 shadow-lg`}>
                    <stat.icon className="w-full h-full text-white" />
                  </div>

                  {/* Value */}
                  <div className={`text-4xl font-black mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{stat.label}</div>

                  {/* Description */}
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</div>

                  {/* Decorative element */}
                  <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r ${stat.gradient} animate-pulse`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}