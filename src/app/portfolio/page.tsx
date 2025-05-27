'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import AboutMe from '@/app/components/sections/AboutMe';
import Experience from '@/app/components/sections/Experience';
import Projects from '@/app/components/sections/Projects';
import Education from '@/app/components/sections/Education';
import Certificate from '@/app/components/sections/Certificate';

const sections = [
  'About Me',
  'Work Experience',
  'Projects',
  'Education',
  'Certificates',

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
                  className={`relative px-2 text-gray-400 hover:text-white transition-all duration-300 ${isActive ? 'text-white font-semibold' : ''
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
            <a
              href="mailto:atharvmore30@gmail.com"
              aria-label="Send Email"
              className="hover:text-white"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Page Content */}
      <main className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        <AboutMe />
        <Experience />
        <Projects />
        <Education />
        <Certificate />
      </main>

      {/* Footer */}
      <footer className="mt-32 border-t border-white/10 py-10 text-sm text-gray-400 bg-black">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Left: Personal Info */}
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-white text-lg font-semibold"> Atharv More</h4>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <a href="mailto:atharvmore30@gmail.com" className="font-bold hover:underline">✉ atharvmore30@gmail.com</a>
            </div>
            <div className="font-bold text-center md:text-left">
              <a className="hover:underline">☏ +91-9167356290</a>
            </div>
          </div>

          <div className="hidden md:block" />

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-8 text-gray-400 pr-6">
              <a href="https://github.com/code-geass69" target="_blank" className="hover:text-white" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/atharv-more" target="_blank" className="hover:text-white" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:atharvmore30@gmail.com" className="hover:text-white" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>

            <a
              href="https://drive.google.com/file/d/1CzIZ7I-tb0Be_8BzOyNfHz5MADdqn1i0/view?usp=drive_link"
              download
              className="inline-flex items-center gap-2 text-white bg-indigo-600 px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition"
            >
               📝 Download Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}