'use client'

import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import Web3Experience from '@/components/Web3Experience'
import CareerTimeline from '@/components/CareerTimeline'
import SocialInfluenceSection from '@/components/SocialInfluenceSection'
import SkillsVisualization from '@/components/SkillsVisualization'
import ContactSection from '@/components/ContactSection'
import { motion } from 'framer-motion'
import { resumeData } from '@/data/resume'
import { useTranslations } from 'next-intl'

// Dynamic import for heavy 3D components
const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), {
  ssr: false,
})

export default function Home() {
  const t = useTranslations();
  return (
    <main className="min-h-screen transition-colors duration-300">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="text-gradient">{t('about.title')}</span>
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Personal Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-4 text-web3-blue">{t('about.personalInfo')}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('about.fields.name')}</span>
                    <span>{resumeData.personalInfo.fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('about.fields.nickname')}</span>
                    <span>{resumeData.personalInfo.nickname}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('about.fields.birthDate')}</span>
                    <span>{resumeData.personalInfo.birthDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('about.fields.age')}</span>
                    <span>{resumeData.personalInfo.age}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('about.fields.location')}</span>
                    <span>{resumeData.personalInfo.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('about.fields.education')}</span>
                    <span>동명대학교 중퇴</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('about.fields.militaryService')}</span>
                    <span>{resumeData.personalInfo.militaryService}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('about.fields.volunteerHours')}</span>
                    <span>{resumeData.personalInfo.volunteerHours}</span>
                  </div>
                </div>
              </motion.div>

              {/* Professional Summary */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="lg:col-span-2 glass rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-4 text-web3-cyan">{t('about.professionalSummary')}</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    {t('about.bio.intro')}
                  </p>

                  <p>
                    {t('about.bio.founding')}
                  </p>

                  <p>
                    {t('about.bio.web3Journey')}
                  </p>

                  <p>
                    {t('about.bio.influence')}
                  </p>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Web3 Experience */}
      <section id="web3">
        <Web3Experience />
      </section>

      {/* Career Timeline */}
      <section id="career">
        <CareerTimeline />
      </section>

      {/* Social Media Influence */}
      <SocialInfluenceSection />

      {/* Skills Visualization */}
      <section id="skills">
        <SkillsVisualization />
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            {t('footer.copyright')}
          </p>
        </div>
      </footer>
    </main>
  )
}