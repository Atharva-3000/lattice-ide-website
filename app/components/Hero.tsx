'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0B0E]">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video_preview_h264-AScux9zbgcSgxNaMr87JXiWPt7nfBs.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </motion.div>
      <motion.div style={{ opacity }} className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl md:text-8xl font-extrabold mb-6 text-white leading-tight"
          >
            Lattice <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#28A0F0] to-[#0B3794]">IDE</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-3xl mb-10 max-w-3xl text-gray-300 font-light"
          >
            Revolutionize your Arbitrum development with our cutting-edge, multi-language IDE platform
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-x-4"
          >
            <Link href="#features" className="bg-gradient-to-r from-[#28A0F0] to-[#0B3794] text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition duration-300 inline-block">
              Explore Features
            </Link>
            <Link href="#contact" className="border border-[#28A0F0] text-[#28A0F0] px-8 py-3 rounded-full font-bold hover:bg-[#28A0F0] hover:text-white transition duration-300 inline-block">
             Coming Soon ...
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

