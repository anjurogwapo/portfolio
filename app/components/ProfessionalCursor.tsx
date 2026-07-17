'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function ProfessionalCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer');

      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Main Cursor - Outer Glow */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-screen"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Outer Ring - Larger, Subtle Glow */}
        <div
          className="absolute rounded-full border-2 border-white/30"
          style={{
            width: '32px',
            height: '32px',
            left: '-16px',
            top: '-16px',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.3), inset 0 0 15px rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(2px)',
          }}
        />

        {/* Middle Ring */}
        <div
          className="absolute rounded-full border border-white/50"
          style={{
            width: '22px',
            height: '22px',
            left: '-11px',
            top: '-11px',
            boxShadow: '0 0 12px rgba(255, 255, 255, 0.5)',
          }}
        />

        {/* Inner Dot - Core */}
        <motion.div
          className="absolute rounded-full bg-gradient-to-br from-white to-white/80"
          style={{
            width: '8px',
            height: '8px',
            left: '-4px',
            top: '-4px',
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.8), 0 0 16px rgba(255, 255, 255, 0.4)',
          }}
          animate={{
            scale: isPointer ? 1.3 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 25,
          }}
        />

      

        
      </motion.div>

      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        button,
        a,
        [role='button'] {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}