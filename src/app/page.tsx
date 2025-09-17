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
                    <span className="text-gray-400">국적</span>
                    <span>{resumeData.personalInfo.nationality}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">병역</span>
                    <span>{resumeData.personalInfo.militaryService}</span>
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
                    안녕하세요, <span className="text-web3-blue font-semibold">탁찬우</span>입니다. 
                    저는 <span className="text-web3-cyan">창업 경험</span>과 <span className="text-web3-blue">다양한 마케팅 스킬</span>을 보유한 
                    Web3 마케터로, 블록체인 생태계에서의 지속적인 성장과 혁신을 추구합니다.
                  </p>
                  
                  <p>
                    2012년 마코랑랩을 창업하여 CSR 마케팅 플랫폼을 운영했고, 
                    2018년부터는 엠케이알(MKR)을 설립하여 온라인 광고대행, 웹 에이전시, MCN 운영 등 
                    다양한 디지털 마케팅 사업을 전개했습니다.
                  </p>
                  
                  <p>
                    최근 1년간 <span className="text-web3-cyan font-semibold">Web3 생태계</span>에 깊이 참여하며 
                    Ethereum, Solana, Bitcoin L2, Multi-chain 프로젝트들을 경험했고, 
                    현재는 <span className="text-web3-cyan font-semibold">071랩스</span>에서 
                    커뮤니티 매니저로 Web2와 Web3를 연결하는 브릿지 역할을 수행하고 있습니다.
                  </p>
                  
                  <p>
                    동시에 <span className="text-web3-blue font-semibold">@0xnimdal</span> 트위터 계정으로 
                    <span className="text-web3-cyan font-semibold">8,000+ 팔로워</span>를 보유한 Web3 KOL로 활동하며, 
                    Kaito 생태계 중심의 콘텐츠 제작과 프로젝트 분석을 통해 
                    평균 300-500 인게이지먼트를 기록하고 있습니다.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Personality & Hobbies */}
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-4 text-web3-teal">성격 & 특징</h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.personalInfo.personality.map((trait, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-web3-teal/20 to-web3-blue/20 rounded-full text-sm border border-web3-teal/30"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-4 text-web3-emerald">관심사 & 취미</h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.personalInfo.hobbies.map((hobby, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-web3-emerald/20 to-web3-cyan/20 rounded-full text-sm border border-web3-emerald/30"
                    >
                      {hobby}
                    </span>
                  ))}
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
            © 2024 Chanwoo Tak. Building the future of Web3.
          </p>
        </div>
      </footer>
    </main>
  )
}