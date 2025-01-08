'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const whyReasons = [
  { number: "01", title: "Arbitrum Ecosystem", content: "Aims to provide a platform for developers to build applications on the Arbitrum Ecosystem, with less hassle." },
  { number: "02", title: "Extended SDK Support", content: "Comes OOTB with support for languages like AssemblyScript, Move, and Kotlin, and also has a built-in support for ERC-20, ERC-721, and ERC-1155 smart contracts." },
  { number: "03", title: "Automation", content: "Bundled with n8n like automation features, with drag and drop capabilities, making it easy to build applications with minimal coding." }
]

const WhyReason = ({ reason, index }: { reason: typeof whyReasons[0], index: number }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="mb-12 last:mb-0"
    >
      <div className="flex items-start">
        <div className="text-4xl font-bold text-[#28A0F0] mr-6">{reason.number}</div>
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2">{reason.title}</h3>
          <p className="text-gray-400">{reason.content}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Why() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section ref={sectionRef} className="py-20 bg-[#0A0B0E] relative overflow-hidden" id="why">
      <motion.div 
        className="absolute inset-0 z-0 opacity-5"
        style={{ y: backgroundY }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#28A0F0] to-[#0B3794]"
        >
          Why Lattice IDE?
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          {whyReasons.map((reason, index) => (
            <WhyReason key={index} reason={reason} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a 
            href="#features" 
            className="inline-block bg-gradient-to-r from-[#28A0F0] to-[#0B3794] text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition duration-300"
          >
            Explore Our Features
          </a>
        </motion.div>
      </div>
    </section>
  )
}

