'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: 'Smart Inventory System',
    description:
      'Smart inventory management system is tailored for e-commerce companies, it is versatile enough to meet the needs of any business requiring meticulous stock control. Explore its power to streamline your operations, providing a comprehensive solution for overseeing your stock and optimizing business processes.',
    tech: ['Next.js', 'Postgres', 'DrizzleORM', 'Tailwind CSS'],
    github: 'https://github.com/code-geass69/smart_inventory_management',
    demo: 'https://smart-inventory-management-nu.vercel.app/',
    image: '/images/inventory.png',
  },
  {
    title: 'Online Art Gallery',
    description:
      'Welcome to the Online Art Gallery — where art meets technology. This platform offers a visually immersive journey through my curated collection. Each piece is thoughtfully presented for a smooth and engaging experience. Designed to inspire, connect, and celebrate creativity in every form.',
    tech: ['Node.js', 'Express.js', 'EJS', 'Tailwind CSS', 'MongoDB'],
    github: 'https://github.com/code-geass69/Online_Art_Gallery',
    demo: 'https://a-raandom-artist.onrender.com/',
    image: '/images/art.png',
  },
  {
    title: 'Student Performance Predictor',
    description:
      'Our project harnesses the power of machine learning to forecast student performance in mathematics, unveiling the intricate interplay of various factors. By accurately predicting outcomes, we pave the way for tailored interventions and targeted support, ensuring no student is left behind.',
    tech: ['Python', 'Pandas & Numpy', 'Scikit-learn', 'Flask'],
    github: 'https://github.com/code-geass69/Student-Performance-Prediction',
    demo: 'https://yourportfolio.vercel.app',
    image: '/images/student.png',
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ amount: 0.3 }}
      className="scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        03. Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ amount: 0.3 }}
            className="bg-white/5 border border-white/10 p-5 rounded-xl shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Image */}
            {proj.image && (
              <div className="relative w-full h-90 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
            )}

            {/* Text Content */}
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-semibold text-white mb-2">{proj.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{proj.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/10 text-white px-2 py-1 rounded border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-300 hover:text-white"
                >
                  <Github size={16} /> Code
                </a>
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-300 hover:text-white"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
