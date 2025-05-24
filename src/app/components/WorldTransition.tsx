'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WorldTransition({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timeout = setTimeout(onComplete, 3000);
    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Glowing Center */}
        <div className="absolute w-16 h-16 bg-purple-500 rounded-full blur-2xl" />

        {/* Animated Time Rings */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-purple-400"
            style={{
              width: `${100 + i * 100}px`,
              height: `${100 + i * 100}px`,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.1, 0.5, 0],
              scale: [0.5, 1.2],
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Tunnel Message */}
        <motion.p
          className="absolute bottom-10 text-sm text-purple-300 tracking-wide font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          Traveling through the codeverse...
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
