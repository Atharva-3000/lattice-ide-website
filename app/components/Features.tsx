'use client'

import { useRef, useState, useEffect } from 'react'
import { Code, Layers, Zap, Globe, PenToolIcon as Tool, Cpu } from 'lucide-react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const features = [
  { icon: Code, title: "Multi-Language Support", description: "Develop with AssemblyScript, Move, and Kotlin" },
  { icon: Layers, title: "Comprehensive SDKs", description: "Built-in support for ERC-20, ERC-721, and ERC-1155 contracts" },
  { icon: Zap, title: "Seamless Development", description: "Integrated IDE for all Arbitrum chains" },
  { icon: Globe, title: "Cross-Platform", description: "Develop for web and mobile platforms" },
  { icon: Tool, title: "No-Code Automation", description: "Build applications with minimal coding" },
  { icon: Cpu, title: "WASM Compatibility", description: "Optimized for WebAssembly performance" },
]

const FeatureItem = ({ feature, index }) => {
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0, 1])
  )
  const x = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [index % 2 === 0 ? -50 : 50, 0])
  )

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(v => {
      if (v > 0.5 && !hasAnimated) {
        setHasAnimated(true)
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress, hasAnimated])

  return (
    <motion.div
      ref={ref}
      style={{ 
        opacity: hasAnimated ? 1 : opacity, 
        x: hasAnimated ? 0 : x 
      }}
      className="flex flex-col md:flex-row items-center bg-[#0F1218] rounded-xl p-8 border border-[#213147] hover:border-[#28A0F0] transition-all duration-300 transform hover:scale-105 hover:shadow-lg mb-12"
    >
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
        <feature.icon className="w-12 h-12 text-[#28A0F0]" />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
        <p className="text-gray-400">{feature.description}</p>
      </div>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section id="features" className="py-20 bg-[#0A0B0E]">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#28A0F0] to-[#0B3794]"
        >
          Powerful Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}