'use client';

import { motion } from 'framer-motion';

interface ExperienceCardProps {
  title: string;
  organization: string;
  period: string;
  description?: string;
  achievements?: string[];
}

export function ExperienceCard({
  title,
  organization,
  period,
  description,
  achievements,
}: ExperienceCardProps) {
  return (
    <motion.div
      className="glass-effect p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-500/5 transition-all group overflow-hidden relative"
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-cyan-400/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-cyan-400 group-hover:text-orange-400 transition-colors">{title}</h3>
            <p className="text-cyan-500/70 group-hover:text-cyan-400 transition-colors">{organization}</p>
          </div>
          <span className="text-gray-500 text-sm px-3 py-1 bg-cyan-500/10 rounded-full group-hover:bg-orange-500/10 transition-colors">{period}</span>
        </div>

        {description && (
          <p className="text-gray-300 mb-4">{description}</p>
        )}

        {achievements && achievements.length > 0 && (
          <ul className="space-y-2">
            {achievements.map((achievement, idx) => (
              <li key={idx} className="text-gray-400 text-sm flex items-start">
                <span className="text-cyan-400 mr-2">✦</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
