'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import AboutMe from '@/app/components/sections/AboutMe';
import Experience from '@/app/components/sections/Experience';
import Projects from '@/app/components/sections/Projects';

const sections = [
  'About Me',
  'Work Experience',
  'Projects',
  'Resume',
  'Achievements',
  'Blog',
];

export default function PortfolioPage() {
  const [active, setActive] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  // IntersectionObserver for scroll-activated nav highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace(/-/g, ' ');
            setActive(sections.find((s) => s.toLowerCase() === id) || '');
          }
        });
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.toLowerCase().replace(/\s/g, '-'));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll progress bar logic
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="bg-black text-white font-sans scroll-smooth">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 z-[60] h-1 bg-indigo-500 transition-width duration-200" style={{ width: `${scrollProgress}%` }} />

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">
          {/* Center Nav Links */}
          <nav className="flex gap-6 text-sm md:text-base font-medium">
            {sections.map((section) => {
              const isActive = active === section;
              return (
                <a
                  key={section}
                  href={`#${section.toLowerCase().replace(/\s/g, '-')}`}
                  className={`relative px-2 text-gray-400 hover:text-white transition-all duration-300 ${
                    isActive ? 'text-white font-semibold' : ''
                  }`}
                >
                  {section}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Top-right Social Icons */}
          <div className="absolute right-6 flex gap-4 text-gray-400">
            <a
              href="https://github.com/code-geass69"
              target="_blank"
              aria-label="GitHub"
              className="hover:text-white"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/atharv-more"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-white"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Page Content */}
      <main className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        <AboutMe />
        <Experience />
        <Projects />
        {/* Resume, Achievements, Blog sections can go here */}
      </main>

      {/* Footer */}
      <footer className="mt-32 border-t border-white/10 py-6 text-center text-sm text-gray-500">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-6 gap-4">
          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download
            className="text-white bg-indigo-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
          >
            📄 Download Resume
          </a>

          {/* Footer Social Links */}
          <div className="flex gap-4 text-gray-400">
            <a
              href="https://github.com/code-geass69"
              target="_blank"
              className="hover:text-white"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/atharv-more"
              target="_blank"
              className="hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              className="hover:text-white"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}