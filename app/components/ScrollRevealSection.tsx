'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function ScrollRevealSection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [leftInView, setLeftInView] = useState(false);
  const [rightInView, setRightInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === leftRef.current) {
            setLeftInView(entry.isIntersecting);
          }
          if (entry.target === rightRef.current) {
            setRightInView(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative h-96 flex items-center overflow-hidden">
      {/* Left Image - REPLACE THIS with your actual image */}
      <motion.div
        ref={leftRef}
        className="absolute left-0 top-1/2 -translate-y-1/2"
        initial={{ opacity: 0, x: -100 }}
        animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="w-40 h-40 bg-gradient-to-br from-orange-500/50 to-orange-600/50 rounded-lg glass-effect" />
      </motion.div>

      {/* Center Content */}
      <div className="relative z-10 text-center w-full">
        <h2 className="text-4xl font-bold text-white mb-4">Scroll to Explore</h2>
        <p className="text-gray-400">Discover my creative journey</p>
      </div>

      {/* Right Image - REPLACE THIS with your actual image */}
      <motion.div
        ref={rightRef}
        className="absolute right-0 top-1/2 -translate-y-1/2"
        initial={{ opacity: 0, x: 100 }}
        animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="w-40 h-40 bg-gradient-to-bl from-orange-500/50 to-orange-600/50 rounded-lg glass-effect" />
      </motion.div>
    </section>
  );
}
