'use client';
import Link from 'next/link';
import { useState } from 'react';
import SplashScreen from '@/app/components/SplashScreen';
import { motion } from 'framer-motion';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              I’m <span className="text-indigo-400">Atharv More</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              A passionate developer crafting modern and interactive web experiences.
            </p>
            <Link href="/portfolio">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 border border-indigo-500 hover:border-purple-400 cursor-pointer">
                Explore my world!
              </button>
            </Link>
          </motion.div>
        </main>
      )}
    </>
  );
}
