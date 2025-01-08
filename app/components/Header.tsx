'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false)
    if (href === '/') {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0A0B0E]/80 backdrop-blur-md text-white sticky top-0 z-50 border-b border-[#213147]"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#28A0F0] to-[#0B3794]"
            whileHover={{ scale: 1.05 }}
          >
            <Link  href="/" onClick={(e) => handleLinkClick(e, '/')}>
              Lattice IDE
            </Link>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'Features', 'Timeline', 'Contact'].map((item) => (
              <motion.div key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href={item === 'Home' ? '/' : `#${item.toLowerCase()}`} 
                  onClick={(e) => item === 'Home' ? handleLinkClick(e, '/') : handleLinkClick(e, `#${item.toLowerCase()}`)} 
                  className="text-gray-300 hover:text-[#28A0F0] transition-colors"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="md:hidden">
            <motion.button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="space-y-2">
                {['Home', 'Features', 'Timeline', 'Contact'].map((item) => (
                  <Link 
                    key={item} 
                    href={item === 'Home' ? '/' : `#${item.toLowerCase()}`} 
                    onClick={(e) => item === 'Home' ? handleLinkClick(e, '/') : handleLinkClick(e, `#${item.toLowerCase()}`)} 
                    className="block py-2 px-4 text-sm text-gray-300 hover:text-[#28A0F0] hover:bg-[#213147] rounded transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
