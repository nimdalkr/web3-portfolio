'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', isDark)
      document.documentElement.classList.toggle('light', !isDark)
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    }
  }, [isDark, mounted])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={isDark ? 'dark bg-web3-darker text-white' : 'light bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900'}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}