'use client'

import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const timelineItems = [
  { title: "AssemblyScript Support", description: "Developing SDKs for compatibility with AssemblyScript", completed: true },
  { title: "Move Support", description: "Developing SDKs for compatibility with Move", completed: false },
  { title: "Kotlin Support", description: "Developing SDK's for compatibility with Kotlin", completed: false }, { title: "Smart Contract Development", description: "Creating smart contracts for ERC-20, ERC-721, and ERC-1155", completed: false },
  { title: "IDE Support", description: "Building an IDE with support for all Arbitrum chains and developed languages", completed: false },
  { title: "Automation Integration", description: "Implementing no-code automation features similar to n8n", completed: false },
  { title: "Resource Integration", description: "Integrating existing resources for immediate development start", completed: false },
  { title: "SDK Launch", description: "Releasing initial SDKs for developer use and feedback", completed: false },
  { title: "IDE Release", description: "Launching the IDE with all developed SDKs and Arbitrum-specific features", completed: false },
  { title: "Automation Release", description: "Extending the IDE with automation capabilities for minimal coding", completed: false },
]

export default function Timeline() {
  return (
    <section id="timeline" className="pt-20 pb-8 bg-[#0F1218]">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#28A0F0] to-[#0B3794]"
        >
          Development Roadmap
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#28A0F0] to-[#0B3794]" />
          {timelineItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-12 flex items-center justify-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-1/2 flex ${index % 2 === 0 ? 'justify-start pl-4' : 'justify-end pr-4'}`}>
                <div className={`${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <h3 className="text-xl font-semibold mb-2 text-[#28A0F0]">{item.title}</h3>
                  <p className="text-gray-400 hidden md:block">{item.description}</p>
                </div>
              </div>
              <div className="flex-shrink-0 w-12 h-12 rounded-full border-4 border-[#28A0F0] bg-[#0A0B0E] flex items-center justify-center z-10">
                {item.completed ? (
                  <CheckCircle size={20} className="text-green-500" />
                ) : (
                  <div className="w-4 h-4 rounded-full bg-gray-400" />
                )}
              </div>
              <div className="w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

