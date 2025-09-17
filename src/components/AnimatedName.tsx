'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AnimatedName() {
  const [displayName, setDisplayName] = useState('Takchanwoo')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const names = ['Takchanwoo', 'Nimdal']

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)

      setTimeout(() => {
        setDisplayName(prev => prev === 'Takchanwoo' ? 'Nimdal' : 'Takchanwoo')
        setIsTransitioning(false)
      }, 500) // Half second for the transition effect

    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const letterVariants = {
    initial: {
      opacity: 0,
      y: 50,
      rotateX: -90,
      scale: 0.5
    },
    animate: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      rotateX: 90,
      scale: 0.5,
      transition: {
        duration: 0.3
      }
    }
  }

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: {
      transition: {
        staggerChildren: 0.02,
        staggerDirection: -1
      }
    }
  }

  return (
    <div className="relative inline-block">
      <AnimatePresence mode="wait">
        <motion.div
          key={displayName}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex"
          style={{ perspective: 1000 }}
        >
          {displayName.split('').map((letter, index) => (
            <motion.span
              key={`${displayName}-${index}`}
              variants={letterVariants}
              className="inline-block text-gradient"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Glowing effect during transition */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1.2 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-to-r from-web3-blue to-web3-cyan rounded-lg blur-xl"
            style={{ zIndex: -1 }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}