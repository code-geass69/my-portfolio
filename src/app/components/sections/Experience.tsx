'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Web Developer Associate @ Brimo Software Solutions',
    date: 'Sept 2024 – June 2025',
    location: 'Remote',
    description:
      'Perform the development and maintenance of backend systems using Python Django and GraphQL, ensuring seamless API integration and optimized data handling.',
    certificateUrl: 'https://drive.google.com/file/d/1LrZaY9EKGtNvtl8tyQXTW47Gb8hENGeB/view?usp=drive_link', 
  },
  {
    title: 'Web Development Intern @ CodSoft',
    date: 'Oct 2023 – Nov 2023',
    location: 'Remote',
    description:
      'Developed a dynamic, business-focused company website under a project-based contract, using HTML, CSS, and JavaScript to create a responsive and visually appealing web presence.',
    certificateUrl: 'https://drive.google.com/file/d/1CLN8u9yc6HOSzRyJdvv7O2pFmZvqqhL6/view?usp=drive_link',
  },
];

export default function Experience() {
  return (
    <section id="work-experience" className="scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
        02. Work Experience
      </h2>

      <div className="relative border-l border-white/10 ml-3">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative mb-10 ml-4"
          >
            {/* Purple dot */}
            <span className="absolute -left-[22px] top-2 w-3 h-3 bg-purple-500 rounded-full"></span>

            {/* Card */}
            <div className="bg-white/5 p-5 rounded-md border border-white/10">
              <div className="flex justify-between items-start flex-col md:flex-row">
                <h3 className="text-white font-semibold text-lg mb-2 md:mb-0">
                  {exp.title}
                </h3>
                <span className="text-sm text-gray-400">{exp.date}</span>
              </div>
              <p className="text-sm text-gray-400 mb-1">{exp.location}</p>
              <p className="text-sm text-gray-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Certificate Link */}
              {exp.certificateUrl && (
                <a
                  href={exp.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-purple-400 hover:underline"
                >
                  📄 View Certificate
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
