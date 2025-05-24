'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        04. Contact
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Info & Links */}
        <div className="space-y-4">
          <p className="text-gray-300 text-sm md:text-base">
            Whether you want to collaborate, hire me, or just say hi — my inbox is always open.
          </p>

          <div className="space-y-2 text-gray-300 text-sm">
            <p className="flex items-center gap-2">
              <Mail size={16} /> atharv.more@email.com
            </p>
            <a
              href="https://github.com/yourhandle"
              target="_blank"
              className="flex items-center gap-2 hover:text-white"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourhandle"
              target="_blank"
              className="flex items-center gap-2 hover:text-white"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right: (Fake) Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 rounded-md bg-white/5 border border-white/10 text-white text-sm"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-3 rounded-md bg-white/5 border border-white/10 text-white text-sm"
          />
          <textarea
            placeholder="Your message"
            rows={4}
            className="w-full p-3 rounded-md bg-white/5 border border-white/10 text-white text-sm"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}
