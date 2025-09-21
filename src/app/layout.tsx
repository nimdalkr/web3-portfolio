import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chanwoo Tak | Web3 Marketing Specialist',
  description: 'Web3 Marketing Specialist & Community Builder with 10+ years of Web2 marketing experience',
  keywords: 'Web3, Blockchain, Marketing, Community Management, DeFi, NFT, Crypto',
  openGraph: {
    title: 'Chanwoo Tak | Web3 Marketing Specialist',
    description: 'Building bridges between Web2 and Web3 through innovative marketing strategies',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}