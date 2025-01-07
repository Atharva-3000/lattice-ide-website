import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lattice IDE - Arbitrum Ecosystem Development Platform',
  description: 'Lattice is an IDE for the Arbitrum Ecosystem, enabling fullstack application development with multi-language support.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${outfit.className} bg-[#0A0B0E] text-gray-100`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

