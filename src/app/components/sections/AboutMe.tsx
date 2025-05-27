'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
export default function AboutMe() {
  const skills = ['Python', 'C++', 'MySQL', 'Django', 'Postgres', 'GraphQL'];

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

        <Image
          src="/images/me.jpg"
          alt="Atharv More"
          width={320}
          height={320}
          className="rounded-lg w-80 max-w-sm shadow-lg border border-white/10 object-cover"
        />

        {/* Text */}
        <div className="space-y-5 text-gray-300 text-sm md:text-base leading-relaxed text-justify tracking-wide md:leading-7">
          <p>
            Hi, I&apos;m <strong className="text-white font-semibold">Atharv More</strong>, a Computer Engineering student at the <span className="text-white font-semibold">University of Mumbai</span>, passionate about turning ideas into impactful digital solutions.
          </p>

          <p>
            With a foundation in <span className="text-white font-semibold">Python, Django, GraphQL, React</span>, and databases like <span className="text-white font-semibold">MySQL</span> & <span className="text-white font-semibold">PostgreSQL</span>, I build efficient and scalable systems.
          </p>

          <p>
            I&apos;m deeply fascinated by <span className="text-white font-semibold">Artificial Intelligence</span> and love exploring <span className="text-white font-semibold">research in data-driven systems and intelligent automation</span>.
          </p>

          <p>
            I&apos;m driven by <span className="text-indigo-400 font-semibold">curiosity, creativity, and clean code</span>. When I&apos;m not building software, you&apos;ll find me reading thought-provoking books, painting, or trekking through the hills.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/10"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}