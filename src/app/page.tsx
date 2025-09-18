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

// Dynamic import for heavy 3D components
const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), {
  ssr: false,
})

export default function Home() {
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
              <span className="text-gradient">About Me</span>
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
                <h3 className="text-xl font-bold mb-4 text-web3-blue">기본 정보</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">이름</span>
                    <span>{resumeData.personalInfo.fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">닉네임</span>
                    <span>{resumeData.personalInfo.nickname}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">생년월일</span>
                    <span>{resumeData.personalInfo.birthDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">나이</span>
                    <span>{resumeData.personalInfo.age}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">거주지</span>
                    <span>{resumeData.personalInfo.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">학력</span>
                    <span>동명대학교 중퇴</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">병역</span>
                    <span>{resumeData.personalInfo.militaryService}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">봉사시간</span>
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
                <h3 className="text-xl font-bold mb-4 text-web3-cyan">프로페셔널 소개</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    안녕하세요, Web3에서 제2의 커리어를 만들어가고 있는 마케터 <span className="text-web3-blue font-semibold">탁찬우</span>입니다.
                  </p>

                  <p>
                    저는 <span className="text-web3-cyan font-semibold">2012년 CSR 마케팅 플랫폼 '마코랑랩' 창업</span>을 시작으로 Web2 마케팅에 입문했습니다.
                    <span className="text-web3-cyan font-semibold">2018년</span>에는 온라인 마케팅 에이전시 <span className="text-web3-blue font-semibold">'MKR'을 설립</span>하여
                    온라인 광고부터 MCN 인플루언서 마케팅, 옥외광고, 플랫폼 개발까지 총괄하며 비즈니스 성장의 핵심을 경험했습니다.
                  </p>

                  <p>
                    이러한 Web2에서의 창업과 비즈니스 경험을 바탕으로 최근 <span className="text-web3-cyan font-semibold">Web3의 가능성을 발견</span>했고,
                    지난 1년간 <span className="text-web3-blue font-semibold">Ethereum, Solana, Bitcoin L2</span> 등 다양한 체인의 여러 프로젝트에 참여하며
                    Web3 생태계 경험을 키웠습니다. 현재는 <span className="text-web3-cyan font-semibold">071랩스의 CM</span>으로서 역할을 수행하고 있습니다.
                  </p>

                  <p>
                    또한, <span className="text-web3-cyan font-semibold">8,000명 이상의 팔로워</span>와 함께하는
                    트위터(<span className="text-web3-blue font-semibold">@0xnimdal</span>)를 통해
                    <span className="text-web3-cyan font-semibold">Kaito 생태계 중심의 인사이트</span>와 생태계 참여를 하며,
                    평균 300-500의 인게이지먼트, 최대 80,000의 인게이지먼트를 기록하는 등 Web3 유저로서도 활발히 활동 중입니다.
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
            © 2025 Chanwoo Tak. Building the future of Web3.
          </p>
        </div>
      </footer>
    </main>
  )
}