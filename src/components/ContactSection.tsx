'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Send, MessageCircle, Twitter, Github, Linkedin, Phone } from 'lucide-react'
import { resumeData } from '@/data/resume'

export default function ContactSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent('Portfolio Contact Form')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoLink = `mailto:0xnimdal@gmail.com?subject=${subject}&body=${body}`
    window.open(mailtoLink, '_blank')
  }

  return (
    <section className="py-20 relative" ref={ref} id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-xl text-gray-400">
            Ready to build the future of Web3 together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <div className="glass rounded-2xl p-8 border border-white/10 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-web3-blue transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-web3-blue transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-web3-blue transition-colors flex-1 resize-none min-h-[8rem]"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-web3-blue to-web3-blue rounded-lg font-semibold hover:shadow-lg hover:shadow-web3-blue/50 transition-all duration-300 flex items-center justify-center gap-2 mt-auto"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 h-full flex flex-col"
          >
            {/* Location & Availability */}
            <div className="glass rounded-2xl p-6 border border-white/10 flex-1">
              <h3 className="text-xl font-bold mb-4">Availability</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm">Available for new opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Remote & On-site work</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <span className="text-sm">Web3 & Blockchain focused</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="glass rounded-2xl p-6 border border-white/10 flex-1">
              <h3 className="text-xl font-bold mb-4">Quick Connect</h3>
              <div className="space-y-3 h-full flex flex-col">
                {[
                  { icon: Twitter, label: 'X', value: '@0xnimdal', link: 'https://x.com/0xnimdal' },
                  { icon: MessageCircle, label: 'Discord', value: '@nimdal', link: resumeData.links.discord },
                  { icon: Send, label: 'Telegram', value: '@nimdal', link: resumeData.links.telegram },
                  { icon: Phone, label: 'Phone', value: '010-4935-8531', link: 'tel:010-4935-8531' },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-web3-blue/20 to-web3-blue/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-web3-blue" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}