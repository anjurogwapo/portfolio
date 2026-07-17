'use client';

import { PillNavbar } from '@/app/components/PillNavbar';
import { Footer } from '@/app/components/Footer';
import { motion } from 'framer-motion';
import { Righteous } from 'next/font/google';
import MeasfuckModel3D from '@/app/components/MeasfuckModel3D';
import { cn } from '@/lib/utils';

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
});

export default function ContactPage() {
  const contactInfo = [
    {
      title: 'Email',
      content: 'chimanjuro123@gmail.com',
      description: 'Send me a message anytime. I respond within 24-48 hours with thoughtful replies to all inquiries.',
    },
    {
      title: 'Location',
      content: 'Bacolod City, Philippines',
      description: 'Based in the Philippines but available for global collaborations, remote work, and projects worldwide.',
    },
    {
      title: 'Availability',
      content: 'Monday - Friday',
      description: 'Open to new opportunities, freelance projects, full-time positions, and creative collaborations.',
    },
  ];

  const socialLinks = [
    {
      name: 'Gmail',
      icon: '/images/gmail.svg',
      url: 'mailto:chimanjuro123@gmail.com',
      description: 'Send me an email directly for any inquiries or collaboration opportunities.',
    },
    {
      name: 'LinkedIn',
      icon: '/images/linkedin.svg',
      url: 'https://www.linkedin.com/in/chim-anjuro-batayola-332404339/',
      description: 'Connect with me on LinkedIn to see my professional journey and endorsements.',
    },
    {
      name: 'Facebook',
      icon: '/images/facebook.svg',
      url: 'https://www.facebook.com/chim.anjuro/',
      description: 'Follow me on Facebook for updates and behind-the-scenes content.',
    },
    {
      name: 'Instagram',
      icon: '/images/instagram.svg',
      url: 'https://www.instagram.com/chim_anjuro/',
      description: 'Check out my Instagram for portfolio updates, creative work, and daily inspiration.',
    },
    {
      name: 'TikTok',
      icon: '/images/tiktok.svg',
      url: 'https://www.tiktok.com/@chimanjuro',
      description: 'Follow my TikTok for creative content, tutorials, and entertainment.',
    },
    {
      name: 'GitHub',
      icon: '/images/github.svg',
      url: 'https://github.com/anjurogwapo',
      description: 'Check out my GitHub repositories and see my development projects and open-source contributions.',
    },
    {
      name: 'Discord',
      icon: '/images/discord.svg',
      url: 'https://discord.gg/qDMSkmFm6U',
      description: 'Join my Discord community for networking and creative discussions.',
    },
  ];

  return (
    <>
      {/* Top Right Image - Desktop Only */}
      {/* 
        ADJUST TOP RIGHT IMAGE:
        - className: Change "h-64" to "h-80" or "h-96" to make it larger/smaller
        - opacity: Change "opacity-100" to "opacity-75", "opacity-50", etc. for transparency (0-100)
      */}
      <motion.div
        className="hidden lg:block fixed top-0 right-0 z-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ opacity: 1 }} // Change this value: 1 = fully visible, 0.75 = 75% transparent, 0.5 = 50% transparent
      >
        <img
          src="/images/topcontactright.png"
          alt="Top Right"
          className="h-96 w-auto md:h-80 lg:h-96 xl:h-[800px] object-contain" // Increase h-64 to h-80, h-96, or h-[600px] for larger
        />
      </motion.div>

      <PillNavbar />
      <main className="min-h-screen bg-background text-white pt-40 pb-20 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title Section with Shiny Text Effect */}
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <style jsx>{`
              @keyframes shimmer-text {
                0% {
                  background-position: -1000px 0;
                }
                100% {
                  background-position: 1000px 0;
                }
              }
              
              .shiny-text {
                background: linear-gradient(
                  90deg,
                  rgba(255, 255, 255, 0) 0%,
                  rgba(255, 255, 255, 0.8) 25%,
                  rgba(255, 255, 255, 0.8) 75%,
                  rgba(255, 255, 255, 0) 100%
                );
                background-size: 1000px 100%;
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: shimmer-text 3s infinite;
              }
            `}</style>
            <h1
              className={cn(
                righteous.className,
                'text-5xl md:text-7xl font-bold leading-tight shiny-text'
              )}
            >
              Let&apos;s Work Together
            </h1>
          </motion.div>

          {/* Hero Section - Image Left, Text Right */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Left - Contact Me Image with Glow */}
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.div
                className="relative"
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-3xl -z-10"
                  style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                  }}
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                    scale: [0.9, 1.15, 0.9],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                <img
                  src="/images/contactme.png"
                  alt="Contact Me"
                  className="w-96 h-96 sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px] object-contain relative z-10"
                />
              </motion.div>
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <motion.p className="text-white/70 text-base md:text-lg tracking-wide leading-relaxed font-bold">
                {`I'm passionate about creating extraordinary work and collaborating on innovative projects. Whether you have a specific idea in mind, want to explore possibilities, or simply wish to connect, I'm here and ready to help bring your vision to life.`.split('').map((char, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.6 + idx * 0.01,
                      duration: 0.08,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* 3D Model - Full Width No Crop */}
          <motion.div
            className="relative -mx-4 md:-mx-8 lg:-mx-12 mb-24"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] h-[600px] md:h-[750px] lg:h-[850px] bg-gradient-to-b from-transparent via-white/5 to-transparent border-t-2 border-b-2 border-white/30 flex items-center justify-center overflow-hidden">
              <MeasfuckModel3D />
            </div>
          </motion.div>

          {/* Grid Layout - Two Per Row - Equal Heights */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[600px]">
              {/* Left Column - Connect With Me */}
              <motion.div
                className="h-full"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className={`${righteous.className} text-4xl font-bold text-white mb-8`}>
                  Connect With Me
                </h2>

                <div className="grid grid-cols-2 gap-4 h-full">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + idx * 0.05, duration: 0.5 }}
                      className="group block p-5 rounded-xl border border-white/20 bg-white/5 backdrop-filter backdrop-blur-xl transition-all duration-500 hover:border-white/60 hover:bg-white/15 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                      whileHover={{ y: -6 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <img
                          src={social.icon}
                          alt={social.name}
                          className="w-6 h-6 object-contain brightness-0 invert group-hover:scale-110 transition-transform"
                        />
                        <h3 className={`${righteous.className} text-sm font-bold text-white`}>
                          {social.name}
                        </h3>
                      </div>
                      <p className="text-white/60 text-xs leading-relaxed group-hover:text-white/70 transition-colors">
                        {social.description}
                      </p>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Right Column - Get in Touch (with mobile spacing) */}
              <motion.div
                className="h-full mt-12 lg:mt-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="p-8 rounded-lg bg-white/95 shadow-2xl h-full flex flex-col"
                >
                  {/* Image - Contact Image */}
                  <div className="mb-6 rounded-lg overflow-hidden bg-gray-200 h-48 flex items-center justify-center">
                    <img 
                      src="/images/contactimage.png" 
                      alt="Get in Touch" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h2 className={`${righteous.className} text-3xl font-bold text-black mb-6`}>
                    Get in Touch
                  </h2>

                  <div className="flex-1">
                    {contactInfo.map((info, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                        className="mb-6 pb-6 border-b border-black/10 last:border-b-0 last:pb-0 last:mb-0"
                      >
                        <h3 className="text-sm font-bold text-black/80 uppercase tracking-wider mb-2">
                          {info.title}
                        </h3>
                        <p className="text-black font-semibold text-sm mb-2 break-all">
                          {info.content}
                        </p>
                        <p className="text-black/60 text-xs leading-relaxed">
                          {info.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.a
                    href="mailto:chimanjuro123@gmail.com"
                    className="block w-full text-center px-6 py-3 bg-black text-white font-semibold rounded transition-all duration-300 hover:bg-black/80 mt-6"
                    whileHover={{ scale: 1.02 }}
                  >
                    Send Email
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}