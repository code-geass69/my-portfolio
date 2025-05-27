'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const certificates = [
  {
    title: 'SSC Certificate',
    category: 'Class X',
    issuer: 'Maharashtra State Board',
    year: '2019',
    link: 'https://drive.google.com/file/d/1RHEbK4N26pPHzGECEMtgn6_ekf3mkrHn/view?usp=drive_link',
  },
  {
    title: 'HSC Certificate',
    category: 'Class XII',
    issuer: 'Maharashtra State Board',
    year: '2021',
    link: 'https://drive.google.com/file/d/11EI6H6Oq8xYS76Mh17TVRvRNPfINly5s/view?usp=drive_link',
  },
  {
    title: 'Bachelor of Engineering',
    category: 'Engineering',
    issuer: 'Mumbai University',
    year: '2025',
    link: 'https://drive.google.com/file/d/18YWfRJAaHEtlA3NF4qcSKCc1LHhMI9Mn/view?usp=drive_link',
  },
  {
    title: 'Multicon Paper Presentation',
    category: 'Presentation',
    issuer: 'Thakur College of Engineering and Technology',
    year: '2025',
    link: 'https://drive.google.com/file/d/1j-1eZZcoK2_T4ojr5Pw5oMNWMl04y7e3/view?usp=drive_link',
  },
  {
    title: 'Research Paper Writing',
    category: 'Online Course',
    issuer: 'WiseUp Communications',
    year: '2024',
    link: 'https://drive.google.com/file/d/141mh5W1VzUuSZ9VWgpnydIpKVCLmvv_8/view?usp=drive_link',
  },
];

export default function Certificate() {
  return (
    <section id="certificates" className="scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">05. Certificates</h2>

      <div className="space-y-10">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative pl-8 border-l-2 border-indigo-500/50 group"
          >
            <span className="absolute left-[-0.6rem] top-1 w-4 h-4 rounded-full bg-indigo-500 border-2 border-black shadow group-hover:scale-125 transition-transform" />

            <div className="bg-white/5 p-5 rounded-lg border border-white/10 hover:shadow-lg transition-all">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                <span className="text-sm text-gray-400">{cert.year}</span>
              </div>

              <p className="text-sm text-gray-300 mb-2">{cert.issuer}</p>
              <span className="text-xs text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">
                {cert.category}
              </span>

              {cert.link && (
                <div className="mt-3">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-indigo-400 hover:underline"
                  >
                    <FileText size={16} /> View Certificate
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}