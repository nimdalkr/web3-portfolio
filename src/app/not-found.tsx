import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-web3-darker text-white">
      <div className="glass rounded-2xl p-8 border border-white/10 text-center max-w-md mx-auto">
        <h2 className="text-6xl font-bold mb-4 text-gradient">404</h2>
        <h3 className="text-2xl font-bold mb-4">Page Not Found</h3>
        <p className="text-gray-400 mb-6">
          The page you are looking for does not exist.
        </p>
        <Link href="/">
          <button className="px-6 py-3 bg-gradient-to-r from-web3-blue to-web3-cyan rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  )
}