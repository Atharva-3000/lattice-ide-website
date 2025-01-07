'use client'

import { Github, Twitter, Linkedin, Send } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <div>


      <footer id='contact' className="bg-[#0F1218] text-white py-20 border-t border-[#213147] flex justify-center items-center min-h-screen flex-col">
        <div className="container mx-auto px-6 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#0A0B0E] p-8 rounded-2xl shadow-lg border border-[#213147] w-full max-w-md"
          >
            <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#28A0F0] to-[#0B3794]">
              Get in Touch
            </h3>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded text-black" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <textarea id="message" className="w-full p-2 border border-gray-300 rounded text-black"></textarea>
              </div>
              <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-[#0B3794] transition-colors duration-300">Submit</button>
            </form>
          </motion.div>
        </div>
        <div>
        </div>
        <div className='pt-12'>
          Made with Love by <a className='font-bold' href="https://x.com/0x_atharva">0x_atharva</a>
        </div>
      </footer>
    </div>
  );
}
