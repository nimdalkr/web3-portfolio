'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Download, Moon, Sun } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // 초기 테마 로드
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
    }
  }, [])

  useEffect(() => {
    // 테마 적용
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.classList.toggle('light', !isDark)
    
    if (isDark) {
      document.body.className = 'bg-web3-darker text-white overflow-x-hidden transition-colors duration-300'
    } else {
      document.body.className = 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 overflow-x-hidden transition-colors duration-300'
    }
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Web3', href: '#web3' },
    { label: 'Career', href: '#career' },
    { label: 'Social', href: '#social-influence' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  const downloadResume = () => {
    // 이력서 PDF 다운로드 또는 인쇄 페이지로 이동
    window.print()
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass backdrop-blur-xl border-b border-white/10' : ''
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Profile Image */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full p-0.5 relative overflow-hidden">
              {/* Base background */}
              <div className="absolute inset-0 bg-gradient-to-br from-web3-blue to-web3-cyan rounded-full" />
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-web3-blue via-purple-500 via-pink-500 to-orange-500 bg-[length:300%_100%] bg-[position:-100%_50%] group-hover:bg-[position:100%_50%] transition-all duration-[2000ms] ease-in-out rounded-full opacity-0 group-hover:opacity-100" />
              <div className="w-full h-full rounded-full overflow-hidden relative z-10">
                <img
                  src="/profile.jpg"
                  alt="Nimdal Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="text-2xl font-bold relative overflow-hidden whitespace-nowrap w-[140px] group-hover:w-[180px] transition-all duration-[2000ms] ease-in-out">
              {/* Base text */}
              <span className="block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent transform group-hover:-translate-y-full transition-transform duration-[1530ms] ease-in-out">
                Nimdal
              </span>
              {/* Hover text */}
              <span className="absolute top-0 left-0 bg-gradient-to-r from-web3-blue via-purple-500 via-pink-500 to-orange-500 bg-[length:300%_100%] bg-[position:-100%_50%] group-hover:bg-[position:100%_50%] transition-all duration-[1530ms] ease-in-out bg-clip-text text-transparent transform translate-y-full group-hover:translate-y-0">
                Takchanwoo
              </span>
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-web3-blue transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 glass rounded-lg border border-white/10 hover:border-web3-blue/50 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadResume}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-web3-blue to-web3-blue rounded-lg font-semibold"
            >
              <Download className="w-4 h-4" />
              Resume
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ x: 5 }}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-400 hover:text-web3-blue hover:bg-white/5 rounded-lg transition-all"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={downloadResume}
              className="w-full px-4 py-2 bg-gradient-to-r from-web3-blue to-web3-blue rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}