'use client';

import { motion } from 'framer-motion';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'Flipkart',
    role: 'Data Science Intern',
    period: 'Jan 2025 – Apr 2025',
    location: 'Remote',
    description: 'Worked on customer behavior analytics and real-time dashboard insights using PostgreSQL, Flask, and Python scripts.',
  },
  {
    company: 'TCS',
    role: 'GenAI Intern',
    period: 'Jul 2024 – Aug 2024',
    location: 'Remote',
    description: 'Built ESG report generation pipeline using Azure + OpenAI + FastAPI with Copilot integration.',
  },
  {
    company: 'Knowles Corp',
    role: 'GenAI Intern',
    period: 'May 2024 – Jul 2024',
    location: 'Remote (USA)',
    description: 'Developed GPT knowledge assistant with Graphana logs, Airflow pipelines, and prompt-based search tools.',
  },
];

export default function Experience() {
  return (
    <motion.section
      id="work-experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        02. Work Experience
      </h2>

      <ol className="relative border-l border-white/10 space-y-12">
        {experiences.map((item, index) => (
          <li key={index} className="ml-6">
            <span className="absolute left-0 top-1.5 w-3 h-3 bg-purple-500 rounded-full ring-4 ring-black" />
            <div className="bg-white/5 p-4 rounded-md border border-white/10 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-semibold text-white">{item.role} @ {item.company}</h3>
                <span className="text-sm text-gray-400">{item.period}</span>
              </div>
              <p className="text-sm text-gray-400 mb-1">{item.location}</p>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </motion.section>
  );
}
