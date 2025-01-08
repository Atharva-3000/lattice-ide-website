"use client";

import { Send, Check } from "lucide-react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function Footer() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  async function handleSubmit(event: any) {
    event.preventDefault();
    setStatus('loading');

    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3_FORMS_API_KEY as string);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        toast.success("Message sent successfully!");
        setTimeout(() => setStatus('idle'), 3000); // Reset after success
      } else {
        setStatus('idle');
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus('idle');
      toast.error("An error occurred. Please try again.");
      console.error("Error submitting the form:", error);
    }
  }

  return (
    <footer
      id="contact"
      className="bg-[#0F1218] text-white py-20 border-t border-[#213147]"
    >
      <div className="container mx-auto px-6 ">
        <div
          className="mx-auto w-full md:w-[40%] bg-[#000000] p-6 rounded-lg"
          style={{ textAlign: "center" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-14 bg-clip-text text-transparent bg-gradient-to-r from-[#28A0F0] to-[#0B3794]"
          >
            Contact Us
          </motion.h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full p-4 bg-[#1A1D24] border border-[#213147] rounded-lg focus:outline-none focus:border-[#28A0F0]"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full p-4 bg-[#1A1D24] border border-[#213147] rounded-lg focus:outline-none focus:border-[#28A0F0]"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your message"
                rows={5}
                className="w-full p-4 bg-[#1A1D24] border border-[#213147] rounded-lg focus:outline-none focus:border-[#28A0F0]"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full py-4 px-8 rounded-lg font-bold transition duration-300 flex items-center justify-center gap-2 ${
    status === 'success'
      ? 'bg-green-500 text-white'
      : 'bg-gradient-to-r from-[#28A0F0] to-[#0B3794] text-white hover:opacity-90'
  }`}
            >
              {status === 'loading' ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : status === 'success' ? (
                <>
                  Success
                  <Check size={20} />
                </>
              ) : (
                <>
                  Submit Form
                  <Send size={20} />
                </>
              )}
            </button>
          </form>
        </div>
        <div className="items-center justify-center text-center pt-6">
          Made with ❤️ by{" "}
          <a
            href="https://x.com/0x_atharva"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#28A0F0] hover:underline"
          >
            0x_Atharva
          </a>
        </div>
      </div>
      <Toaster />
    </footer>
  );
}
