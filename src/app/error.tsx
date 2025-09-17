'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-web3-darker">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl p-8 border border-white/10 text-center max-w-md mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-gradient">
          Something went wrong!
        </h2>
        <p className="text-gray-400 mb-6">
          An error occurred while loading the page. Please try again.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={reset}
          className="px-6 py-3 bg-gradient-to-r from-web3-blue to-web3-cyan rounded-lg font-semibold"
        >
          Try again
        </motion.button>
      </motion.div>
    </div>
  )
}