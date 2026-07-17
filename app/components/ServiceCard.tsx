'use client';

import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export function ServiceCard({ title, isSelected = false, onClick }: ServiceCardProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`p-6 rounded-lg transition-all duration-300 group ${
        isSelected
          ? 'glass-effect neon-glow-lg border-cyan-400/70 bg-cyan-500/10'
          : 'glass-effect hover:neon-glow border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-500/5'
      }`}
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className={`font-semibold text-lg transition-colors duration-300 ${isSelected ? 'text-cyan-400' : 'text-gray-300 group-hover:text-cyan-400'}`}>
        {title}
      </h3>
    </motion.button>
  );
}
