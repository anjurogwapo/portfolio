'use client';

import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden px-4"
      style={{
        fontFamily:
          'Helvetica Neue, Helvetica, Arial, sans-serif',
        fontWeight: 700,
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8 }}
      onAnimationComplete={() => {
        if (onComplete) {
          setTimeout(onComplete, 3500);
        }
      }}
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/loading.gif')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* CONTENT */}
      <div className="text-center relative z-10 w-full max-w-md">
        
        {/* LOGO */}
        <motion.div
          className="w-56 h-56 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto relative flex items-center justify-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: 'spring',
            stiffness: 150,
          }}
        >
          <motion.img
            src="/images/anjurologo.png"
            alt="Loading Logo"
            className="w-full h-full object-contain drop-shadow-2xl"
            animate={{
              filter: [
                'drop-shadow(0 0 10px rgba(255, 253, 250, 0.5))',
                'drop-shadow(0 0 20px rgba(248, 198, 137, 0.8))',
                'drop-shadow(0 0 10px rgb(248, 243, 147))',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <motion.p
          className="text-white/80 text-sm sm:text-base md:text-lg tracking-widest px-2 mt-4 sm:mt-6"
          style={{
            fontFamily:
              'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontWeight: 600,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          ✧YOU&apos;VE FOUND THE COOLEST KID✧
        </motion.p>

        {/* LOADING BAR CONTAINER */}
        <motion.div
          className="mt-6 sm:mt-8 flex flex-col items-center gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {/* NEON GLOWING LOADING BAR */}
          <div className="relative w-48 sm:w-56 md:w-64 h-2 rounded-full overflow-hidden">
            {/* Outer glow effect */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.3)',
                background: 'rgba(30, 30, 30, 0.9)',
              }}
            />
            
            {/* Progress bar with neon effect */}
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5))',
                boxShadow: '0 0 15px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 0.8), 0 0 45px rgba(255, 255, 255, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.5)',
              }}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{
                delay: 1.2,
                duration: 3,
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* ENHANCED DISCLAIMER TEXT */}
          <motion.div
            className="mt-3 sm:mt-4 max-w-xs sm:max-w-sm px-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <p
              className="text-white/60 text-xs sm:text-sm font-light tracking-wide leading-relaxed"
              style={{
                fontFamily: "'Inter', 'Segoe UI', sans-serif",
                fontWeight: 300,
                letterSpacing: '0.05em',
              }}
            >
              Best experienced on a web browser.
              <br />
              Loading times may vary on some devices.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}