'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = ['Hello', 'नमस्ते', 'こんにちは', 'Bonjour', 'Hola', 'Ciao'];

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const timeout = setTimeout(() => setIndex(index + 1), 700);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(onFinish, 1000);
    }
  }, [index, onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[9999]">
      <AnimatePresence mode="wait">
        <motion.h1
          key={greetings[index]}
          className="text-4xl md:text-6xl font-bold text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
        >
          • {greetings[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
