'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ChevronDown, Github, Twitter, Send, Linkedin, Mail } from 'lucide-react'
import ParticleBackground from './ParticleBackground'
import AnimatedName from './AnimatedName'
import { resumeData } from '@/data/resume'

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-web3-blue/30 rounded-full filter blur-3xl"
          style={{
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-web3-blue/30 rounded-full filter blur-3xl"
          style={{
            right: `${mousePosition.x * 0.05}px`,
            bottom: `${mousePosition.y * 0.05}px`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Avatar with glow effect */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            className="mb-8 inline-block"
          >
            <div className="relative">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-web3-blue to-web3-cyan p-1">
                <div className="w-full h-full rounded-full bg-web3-darker flex items-center justify-center overflow-hidden">
                  <img 
                    src="/profile.jpg" 
                    alt="탁찬우 프로필" 
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* 이미지 없을 때 폴백 */}
                  {/* <span className="text-3xl font-bold text-gradient">탁찬우</span> */}
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, #3B82F6, transparent)',
                  filter: 'blur(20px)',
                  opacity: 0.5,
                }}
              />
            </div>
          </motion.div>

          {/* Name and title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-4"
          >
            <AnimatedName />
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-400 mb-8 h-12"
          >
            <TypeAnimation
              sequence={[
                'Online Marketing Specialist',
                2000,
                'InfoFi Enthusiast',
                2000,
                'Community Manager',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {resumeData.highlights.map((highlight, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="px-4 py-2 glass rounded-full text-sm border border-web3-blue/30"
              >
                {highlight}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a 
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-web3-blue to-web3-blue rounded-lg font-semibold hover:shadow-lg hover:shadow-web3-blue/50 transition-all duration-300 transform hover:scale-105 text-center"
            >
              Contact me
            </a>
            <button 
              onClick={() => window.print()}
              className="px-8 py-3 glass rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 border border-white/20"
            >
              Download Resume
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex justify-center gap-6"
          >
            {[
              { icon: Github, link: resumeData.links.github },
              { icon: Twitter, link: resumeData.links.twitter },
              { icon: Linkedin, link: resumeData.links.linkedin },
              { icon: Send, link: resumeData.links.telegram },
              { icon: Mail, link: resumeData.links.email },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: 'spring' }}
                className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:border-web3-blue/50 border border-white/10"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.6 },
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-web3-blue" />
        </motion.div>
      </div>
    </section>
  )
}