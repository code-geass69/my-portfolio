'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { UserRound } from 'lucide-react';
const sections = [
  'About Me',
  'Work Experience',
  'Projects',
  'Resume',
  'Contact',
  'Achievements',
  'Hobbies',
];

export default function PortfolioPage() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      sections.forEach((section) => {
        const el = document.getElementById(section.toLowerCase().replace(/\s/g, '-'));
        if (el && scrollY >= el.offsetTop - 100) {
          setActive(section);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white scroll-smooth">
      {/* Modern Navbar */}
      <header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-sm border-b border-indigo-400 shadow-lg">
        <nav className="flex items-center justify-between px-6 py-4">
          {/* Left: Logo + Name */}
          <div className="flex items-center space-x-2">
            <UserRound className="text-indigo-400" />
            <span className="font-semibold text-white text-lg tracking-wide">Atharv More</span>
          </div>

          {/* Right: Section Links */}
          <div className="flex flex-wrap gap-4 text-sm md:text-base">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase().replace(/\s/g, '-')}`}
                className={`transition-all duration-300 ${active === section ? 'text-indigo-400 font-semibold' : 'text-white hover:text-indigo-300'
                  }`}
              >
                {section}
              </a>
            ))}
          </div>
        </nav>
      </header>
      {/* Sections */}
      <main className="pt-24 space-y-32 px-6 max-w-4xl mx-auto">
        {sections.map((section) => (
          <section
            key={section}
            id={section.toLowerCase().replace(/\s/g, '-')}
            className="scroll-mt-24"
          >
            <h2 className="text-3xl font-bold mb-4 border-b border-indigo-500 pb-2">
              {section}
            </h2>
            <p className="text-gray-300">🚧 {section} content coming soon.</p>
          </section>
        ))}
      </main>
    </div>
  );
}