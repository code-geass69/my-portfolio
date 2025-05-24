'use client';

import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <motion.section
      id="about-me"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        01. About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <img
          src="/me.jpg"
          alt="Atharv More"
          className="rounded-lg w-full max-w-sm shadow-lg border border-white/10"
        />

        {/* Bio */}
        <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
          <p>
            Hello! I'm Atharv, a passionate full-stack developer and creative problem solver with a love for clean architecture and intuitive UI. My background spans AI/ML, systems design, and scalable web apps.
          </p>
          <p>
            I thrive at the intersection of design, performance, and functionality — building experiences that feel fast, thoughtful, and elegant.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase text-white">
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10">React</span>
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10">TypeScript</span>
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10">Next.js</span>
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10">NestJS</span>
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10">MongoDB</span>
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10">MySQL</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}