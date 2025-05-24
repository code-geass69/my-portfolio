'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'Smart Inventory System',
    description:
      'AI-powered system for inventory tracking, sales analytics, and restock alerts with a custom dashboard.',
    tech: ['Next.js', 'MySQL', 'DrizzleORM', 'Gemini API'],
    github: 'https://github.com/yourhandle/smart-inventory',
    demo: 'https://inventory-demo.vercel.app',
  },
  {
    title: 'Meal Planner AI',
    description:
      'Personalized weekly meal plans generated using Gemini based on user goals, inventory, and health.',
    tech: ['Next.js', 'Tailwind', 'Gemini Pro', 'MySQL'],
    github: 'https://github.com/yourhandle/meal-planner',
  },
  {
    title: 'Portfolio Website',
    description:
      'Animated, fully responsive portfolio with world intro, dark theme, and Framer Motion transitions.',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/yourhandle/portfolio',
    demo: 'https://yourportfolio.vercel.app',
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        03. Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 p-5 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
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
        ))}
      </div>
    </motion.section>
  );
}
