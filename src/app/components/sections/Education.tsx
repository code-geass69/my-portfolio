'use client';

import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Bachelor of Engineering in Computer Engineering',
    college: 'Thakur College of Engineering and Technology',
    university: 'Mumbai University',
    location: 'Mumbai, India',
    duration: '2021 – 2025',
    highlights: [
      'CGPA: 9.19 / 10',
      'AI/ML, Data Structures, DBMS, OS, Data Science',
    ],
  },
  {
    degree: 'Higher Secondary (Class XII)',
    school: 'Nirmala Memorial Foundation Degree College of Commerce and Science',
    university: 'Mumbai University',
    location: 'Mumbai, India',
    duration: '2019 – 2021',
    highlights: ['Percentage: 95.83%', 'PCM with Computer Science'],
  },
  {
    degree: 'Secondary (Class X)',
    school: 'Thakur Vidya Mandir High School',
    university: 'Mumbai University',
    location: 'Mumbai, India',
    duration: '2018 – 2019',
    highlights: ['Percentage: 92.20%', 'Vice Captain of Football Team'],
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
        04. Education
      </h2>

      <div className="space-y-10">
        {education.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-8 border-l-2 border-purple-500/50 group"
          >
            <span className="absolute left-[-0.6rem] top-1 w-4 h-4 rounded-full bg-purple-500 border-2 border-black shadow-lg group-hover:scale-125 transition-transform" />

            <div className="bg-white/5 p-5 rounded-lg border border-white/10 hover:shadow-lg transition-all">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-semibold text-white">
                  {item.degree}
                </h3>
                <span className="text-sm text-gray-400">{item.duration}</span>
              </div>

              <p className="text-sm text-gray-300 mb-1 font-medium">
                {item.college || item.school}
              </p>
              <p className="text-sm text-gray-400 italic">
                {item.location}
              </p>
              {item.university && (
                <p className="text-sm text-gray-500 italic">
                  University: {item.university}
                </p>
              )}

              <ul className="text-sm text-gray-400 list-disc list-inside mt-2 space-y-1">
                {item.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}