'use client';

import { useState, useEffect, useRef } from 'react';
import { PillNavbar } from '@/app/components/PillNavbar';
import { Footer } from '@/app/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Righteous } from 'next/font/google';
import { ProfessionalCursor } from '@/app/components/ProfessionalCursor';
import Link from 'next/link';

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
});
interface ServiceDetail {
  name: string;
  desc: string;
  icon: string;
  // COMMENT: Add multiple images here for each service
  // Example: images: ['/images/modeling-1.jpg', '/images/modeling-2.jpg', '/images/modeling-3.jpg', '/images/modeling-4.jpg']
  images: string[];
  // COMMENT: Edit the fullDescription text below for each service - this displays in the modal
  fullDescription: string;
}

const services: ServiceDetail[] = [
  { 
    name: 'Modeling', 
    desc: 'Fashion & Commercial',
    icon: 'modeling.svg',
    images: [
  '/images/model1.png',
  '/images/model2.png',
  '/images/model3.png',
  '/images/model4.png',
  '/images/model5.png',
  '/images/model6.png',
  '/images/model7.png',
  '/images/model8.png',
  '/images/model9.png',
  '/images/model10.png',
  '/images/model11.png',
  '/images/model12.png',
  '/images/model13.png',
  '/images/model14.png',
  '/images/model15.png',
  '/images/model16.png',

],
    fullDescription: 'I do fashion, commercial, brand, event, and creative shoot modeling. I bring confidence, versatility, and attention to detail in every project I join. With experience working on different concepts and collaborations, I’m ready to help bring your ideas to life and represent your brand in the best way possible.'
  },
  { 
    name: 'Acting', 
    desc: 'Film & Advertising',
    icon: 'acting.svg',
    images: [
  '/images/acting1.png',
  '/images/acting2.png',
  '/images/acting3.png',
  '/images/acting4.png',
  '/images/acting5.png',
  '/images/acting6.png',
  '/images/acting7.png',
  '/images/acting8.png',
  '/images/acting9.png',
  '/images/acting10.png',
],
    fullDescription: 'I do acting for advertisements, music videos, and film projects. I bring creativity, emotion, and adaptability to every role I take on. With experience in different types of productions, I’m ready to help tell your story in a natural and engaging way.'
  },
  { 
    name: 'Graphic Design', 
    desc: 'Visual Branding',
    icon: 'graphicdesign.svg',
  images: [
  '/images/gdesign1.png',
  '/images/gdesign2.png',
  '/images/gdesign3.png',
  '/images/gdesign4.png',
  '/images/gdesign5.png',
  '/images/gdesign6.png',
  '/images/gdesign7.png',
  '/images/gdesign8.png',
  '/images/gdesign9.png',
  '/images/gdesign10.png',
],
    fullDescription: 'I create visual designs for posters, advertisements, invitations, commercials, and other creative works. I aim for designs that not only look good but also communicate clearly and leave a lasting impression. With a flexible style and attention to detail, I’m ready to turn ideas into visuals that truly stand out.'
  },
  { 
    name: 'UI/UX Design', 
    desc: 'Digital Experiences',
    icon: 'uiuxdesign.svg',
    images: [
  '/images/uiux1.png',
  '/images/uiux2.png',
  '/images/uiux3.png',
  '/images/uiux4.png',
  '/images/uiux5.png',
  '/images/uiux6.png',
  '/images/uiux7.png',
  '/images/uiux8.png',
],
    fullDescription: 'I design clean, intuitive, and user-focused interfaces that make digital experiences both functional and visually engaging. I focus on understanding user needs and turning ideas into smooth, easy-to-navigate designs. To explore more of my work, click the “My Project” button.'
  },
  { 
    name: 'Front-end Developer', 
    desc: 'Web Development',
    icon: 'frontenddeveloper.svg',
    images: [
  '/images/frontend1.png',
  '/images/frontend2.png',
  '/images/frontend3.png',
  '/images/frontend4.png',
  '/images/frontend5.png',
  '/images/frontend6.png',
  '/images/frontend7.png',
  '/images/frontend8.png',
  '/images/frontend9.png',
  '/images/frontend10.png',
  '/images/frontend11.png',
],
    fullDescription: 'I build responsive and interactive websites with a strong focus on clean structure, performance, and user experience. I translate designs into smooth, functional interfaces that look great and work seamlessly across all devices. With hands-on experience delivering reliable projects, I’m ready to turn your ideas into a polished web experience.'
  },
  { 
    name: 'Arts', 
    desc: 'Fine Arts',
    icon: 'painting.svg',
    images: [
  '/images/art1.png',
  '/images/art2.png',
  '/images/art3.png',
  '/images/art4.png',
  '/images/art5.png',
  '/images/art6.png',
  '/images/art7.png',
  '/images/art8.png',
  '/images/art9.png',
  '/images/art10.png',
  '/images/art11.png',
  '/images/art12.png',
  '/images/art13.png',
  '/images/art14.png',
  '/images/art15.png',
  '/images/art16.png',
  '/images/art17.png',
  '/images/art18.png',
  '/images/art19.png',
  '/images/art20.png',
  '/images/art21.png',
  '/images/art22.png',
  '/images/art23.png',
  '/images/art24.png',
  '/images/art25.png',
  '/images/art26.png',
  '/images/art27.png',
  '/images/art28.png',
],
    fullDescription: 'I create artworks across different mediums—painting, charcoal, watercolor, and digital illustration—guided by emotion and personal expression. Each piece is shaped by feeling, turning thoughts and emotions into visual stories through my own style and interpretation.'
  },
  { 
    name: 'Photography', 
    desc: 'Visual Content',
    icon: 'photography.svg',
    images: [
  '/images/photography1.png',
  '/images/photography2.png',
  '/images/photography3.png',
  '/images/photography4.png',
  '/images/photography5.png',
  '/images/photography6.png',
  '/images/photography7.png',
  '/images/photography8.png',
  '/images/photography9.png',
  '/images/photography10.png',
  '/images/photography11.png',
  '/images/photography12.png',
  '/images/photography13.png',
  '/images/photography14.png',
  '/images/photography15.png',
  '/images/photography16.png',
  '/images/photography17.png',
  '/images/photography18.png',
  '/images/photography19.png',
  '/images/photography20.png',
  '/images/photography21.png',
  '/images/photography22.png',
  '/images/photography23.png',
  '/images/photography24.png',
  '/images/photography25.png',
  '/images/photography26.png',
  '/images/photography27.png',
  '/images/photography28.png',
  '/images/photography29.png',
  '/images/photography30.png',
  '/images/photography31.png',
  '/images/photography32.png',
  '/images/photography33.png',
  '/images/photography34.png',
  '/images/photography35.png',
  '/images/photography36.png',
  '/images/photography37.png',
  '/images/photography38.png',
],
    fullDescription: 'I specialize in fashion, commercial, and creative photography, focusing on capturing mood, detail, and story in every frame. I turn concepts into compelling visuals that feel natural yet striking, creating images that are both expressive and ready for professional and commercial use.'
  },
  { 
    name: 'Video Editing', 
    desc: 'Content Production',
    icon: 'videoediting.svg',
    images: [
  '/images/videoedit1.png',
  '/images/videoedit2.png',
  '/images/videoedit3.png',
],
    fullDescription: 'I edit videos for creative, commercial, and personal projects, focusing on pacing, storytelling, and visual impact. I shape raw footage into engaging content that feels smooth, intentional, and aligned with the message or brand.'
  },
  { 
    name: 'Content Creation', 
    desc: 'Social Media',
    icon: 'contentcreation.svg',
    images: [
  '/images/content1.png',
  '/images/content2.png',
  '/images/content3.png',
  '/images/content4.png',
  '/images/content5.png',
],
    fullDescription: 'I create content for digital platforms that feels real, engaging, and intentional. I focus on simple storytelling and creative ideas that connect with people and bring your brand or message to life in a natural way.'
  },
  { 
    name: 'Music & Singing', 
    desc: 'Audio & Performance',
    icon: 'musicsinging.svg',
  images: [
  '/images/sing1.png',
  '/images/sing2.png',
  '/images/sing3.png',
  '/images/sing4.png',
  '/images/sing5.png',
  '/images/sing6.png',
  '/images/sing7.png',
],
    fullDescription: 'I sing and perform for events, creative projects, and music recordings, focusing on emotion, vibe, and genuine expression. I aim to bring feeling into every performance and connect with listeners in a natural way through music.'
  },
  { 
    name: 'Social Media Manager', 
    desc: 'Community Building',
    icon: 'socialmediamanager.svg',
  images: [
  '/images/socialmediamanager1.png',
  '/images/socialmediamanager2.png',
  '/images/socialmediamanager3.png',
],
    fullDescription: 'I manage and create content for social media with a focus on engagement, consistency, and storytelling. I’ve helped reach up to 1.9M Instagram impressions through strategic and creative content, aiming to grow presence and connect authentically with audiences.'
  },
  { 
    name: 'Virtual Assistant', 
    desc: 'Remote Support',
    icon: 'virtualasistance.svg',
    images: [
  '/images/VA1.png',
  '/images/VA2.png',
],
    fullDescription: 'I provide virtual assistance with a focus on organization, efficiency, and reliability. From managing tasks and schedules to supporting day-to-day operations, I help keep things running smoothly so you can focus on what matters most.'
  },
];

export default function ServicesPage() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedService = selectedServiceIndex !== null ? services[selectedServiceIndex] : null;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedServiceIndex(null);
        setCurrentImageIndex(0);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  const nextImage = () => {
    if (selectedService) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedService.images.length);
    }
  };

  const prevImage = () => {
    if (selectedService) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedService.images.length) % selectedService.images.length);
    }
  };

  const closeModal = () => {
    setSelectedServiceIndex(null);
    setCurrentImageIndex(0);
  };

  return (
    <>
      <PillNavbar />
      <main 
        className="min-h-screen text-white relative overflow-x-hidden"
        style={{
          background: 'url(/images/servicebg.png) center/cover no-repeat fixed',
        }}
      >
        {/* 
          OPACITY ADJUSTMENT: Change the value in bg-black/XX to control the darkness of the overlay
          Current opacity: 60 (bg-black/60)
          Higher number = darker (bg-black/80, bg-black/90)
          Lower number = lighter (bg-black/40, bg-black/50)
        */}
        <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />

        {/* Enhanced Animated Lava Lamp Gradient Overlay */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
            animate={{
              x: ['0%', '150%', '0%'],
              y: ['-20%', '100%', '-20%'],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ 
              top: '-10%', 
              left: '-20%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 40%, transparent 70%)',
            }}
          />
          
          <motion.div
            className="absolute w-[450px] h-[450px] rounded-full blur-3xl"
            animate={{
              x: ['150%', '-50%', '150%'],
              y: ['100%', '-20%', '100%'],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 3,
            }}
            style={{ 
              bottom: '-10%', 
              right: '-20%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 40%, transparent 70%)',
            }}
          />

          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
            animate={{
              x: ['-50%', '100%', '-50%'],
              y: ['50%', '-50%', '50%'],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 6,
            }}
            style={{ 
              top: '30%', 
              left: '40%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, transparent 80%)',
            }}
          />
        </div>

        <div className="relative z-10 pt-24 pb-24 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header with Logo and Title */}
            <motion.div
              className="text-center mb-12 -mt-12 sm:mb-16 md:mb-20"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Logo - Anjuro Logo */}
              <div className="flex justify-center">
                <motion.img
                  src="/images/anjurologo.png"
                  alt="Anjuro Logo"
                  className="w-50 sm:w-54 md:w-58 h-auto object-contain"
                 
                />
              </div>

              {/* Title with Subtle Pulsing Glow */}
              <motion.div
                animate={{
                  textShadow: [
                    '0 0 20px rgba(255, 255, 255, 0.3)',
                    '0 0 40px rgba(255, 255, 255, 0.5)',
                    '0 0 20px rgba(255, 255, 255, 0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <h1 
                  className={`${righteous.className} text-4xl -mt-14 sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent`}
                >
                  My Services
                </h1>
              </motion.div>

              <p className="text-white/60 text-base sm:text-lg md:text-xl tracking-wide">
                Diverse creative & technical capabilities
              </p>
            </motion.div>

            {/* Service Cards Grid */}
            <div 
              ref={containerRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-16"
            >
              {services.map((service, idx) => (
                <motion.button
                  key={service.name}
                  onClick={() => {
                    setSelectedServiceIndex(idx);
                    setCurrentImageIndex(0);
                  }}
                  className="group relative h-64 sm:h-72 md:h-80 text-left focus:outline-none focus:ring-2 focus:ring-white/50 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  type="button"
                  style={{ cursor: 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%278%27 fill=%22white%22 opacity=%220.8%22/%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%275%27 fill=%22none%22 stroke=%22white%22 stroke-width=%221%22 opacity=%220.6%22/%3E%3C/svg%3E") 10 10, pointer' }}
                >
                  {/* Glowing Background Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"
                    whileHover={{ scale: 1.1 }}
                  />

                  {/* Glass Card with Shine Effect */}
                  <div className="relative w-full h-full p-5 sm:p-6 md:p-6 rounded-2xl border border-white/20 bg-white/5 backdrop-filter backdrop-blur-xl transition-all duration-500 group-hover:border-white/50 group-hover:bg-white/10 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] flex flex-col justify-between overflow-hidden">
                    
                    {/* Shine Effect - Linear Gradient Moving */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                        width: '200%',
                      }}
                    />
                    
                    {/* Icon */}
                    <motion.div
                      className="mb-4 relative z-10"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <img
                        src={`/images/${service.icon}`}
                        alt={service.name}
                        className="w-14 sm:w-16 md:w-16 h-14 sm:h-16 md:h-16 object-contain drop-shadow-lg filter brightness-0 invert"
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className={`${righteous.className} text-lg sm:text-xl md:text-xl font-bold text-white mb-1 group-hover:text-white/90 transition-colors line-clamp-2`}>
                        {service.name}
                      </h3>
                      
                      {/* Divider Line */}
                      <motion.div
                        className="h-px bg-gradient-to-r from-white via-white to-transparent my-2"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      <p className="text-white/50 text-xs sm:text-sm md:text-sm group-hover:text-white/70 transition-colors line-clamp-1">
                        {service.desc}
                      </p>
                    </div>

                    {/* Circle Dot Indicator */}
                    <motion.div
                      className={`absolute top-4 right-4 w-3 h-3 rounded-full border-2 border-white/40 transition-all z-20 ${
                        selectedServiceIndex === idx
                          ? 'bg-white border-white scale-125'
                          : 'bg-transparent group-hover:border-white/80'
                      }`}
                      initial={false}
                      animate={{
                        scale: selectedServiceIndex === idx ? 1.3 : 1,
                        backgroundColor: selectedServiceIndex === idx ? 'rgba(255,255,255,1)' : 'transparent',
                      }}
                    />

                    {/* Bottom Accent */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-white via-white to-transparent"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Call to Action Section */}
            {selectedServiceIndex === null && (
              <motion.div
                className="text-center py-12 sm:py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <p className={`${righteous.className} text-white/60 text-base sm:text-lg md:text-xl mb-6`}>
                  Click on any service to view what i can offer
                </p>

                {/* Portfolio Button with Glow Effect */}
                <Link href="/projects">
                  <motion.button
                    className="px-8 py-3 sm:px-10 sm:py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-xl text-white text-base sm:text-lg font-semibold relative overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(255, 255, 255, 0.2)',
                        '0 0 40px rgba(255, 255, 255, 0.4)',
                        '0 0 20px rgba(255, 255, 255, 0.2)',
                      ],
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                    style={{
                      cursor: 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2720%22 height=%2720%22 viewBox=%220 0 20 20%22%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%278%27 fill=%22white%22 opacity=%220.8%22/%3E%3C/svg%3E") 10 10, pointer',
                    }}
                  >
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                      }}
                    />
                    <span className="relative z-10">View my portfolio</span>
                  </motion.button>
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedService && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                style={{ cursor: 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2720%22 viewBox=%220 0 20 20%22%3E%3Cpath d=%22M10 2L15 8H5Z%22 fill=%22white%22 opacity=%220.8%22/%3E%3C/svg%3E") 10 10, pointer' }}
              />

              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
                style={{ cursor: 'auto' }}
              >
                <div className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto rounded-3xl border border-white/30 bg-white/10 backdrop-filter backdrop-blur-2xl shadow-2xl p-6 sm:p-8 md:p-10">
                  
                  <motion.button
                    onClick={closeModal}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ cursor: 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2720%22 height=%2720%22 viewBox=%220 0 20 20%22%3E%3Cpath d=%22M5 5L15 15M15 5L5 15%22 stroke=%22white%22 stroke-width=%222%22 fill=%22none%22 opacity=%220.8%22/%3E%3C/svg%3E") 10 10, pointer' }}
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
                    
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="pt-2 md:pt-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                        <img
                          src={`/images/${selectedService.icon}`}
                          alt={selectedService.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-lg flex-shrink-0 filter brightness-0 invert"
                        />
                        <div>
                          <h2 className={`${righteous.className} text-3xl sm:text-4xl font-bold text-white mb-2`}>
                            {selectedService.name}
                          </h2>
                          <p className="text-white/60 text-sm sm:text-base">{selectedService.desc}</p>
                        </div>
                      </div>

                      <div className="space-y-4 mt-6 sm:mt-8">
                        <p className="text-white/70 text-sm sm:text-base leading-relaxed">
  {selectedService.fullDescription}
</p>

                        <div className="space-y-3 mt-6">
                          <div className="flex items-center gap-3 text-white/80 text-sm sm:text-base">
                            <span className="text-white/50 text-xl flex-shrink-0">✦</span>
                            <span>Creative Direction & Vision</span>
                          </div>
                          <div className="flex items-center gap-3 text-white/80 text-sm sm:text-base">
                            <span className="text-white/50 text-xl flex-shrink-0">✦</span>
                            <span>Refined, High-Impact Output</span>
                          </div>
                          <div className="flex items-center gap-3 text-white/80 text-sm sm:text-base">
                            <span className="text-white/50 text-xl flex-shrink-0">✦</span>
                            <span>End-to-End Project Execution</span>
                          </div>
                        </div>
                      </div>

                      <motion.button
                        onClick={closeModal}
                        className="mt-8 px-6 py-2.5 sm:px-8 sm:py-3 rounded-full border border-white/20 bg-white/[0.08] hover:bg-white/[0.15] text-white text-sm sm:text-base transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ cursor: 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2720%22 height=%2720%22 viewBox=%220 0 20 20%22%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%278%27 fill=%22white%22 opacity=%220.8%22/%3E%3C/svg%3E") 10 10, pointer' }}
                      >
                        Explore More
                      </motion.button>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-full"
                    >
                      <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/20 bg-white/5 mb-4 group">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentImageIndex}
                            src={selectedService.images[currentImageIndex]}
                            alt={`${selectedService.name} portfolio ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                          />
                        </AnimatePresence>

                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2.5 sm:px-3 py-1 bg-black/60 rounded-full text-white/80 text-xs sm:text-sm backdrop-blur-sm border border-white/10">
                          {currentImageIndex + 1} / {selectedService.images.length}
                        </div>

                        {selectedService.images.length > 1 && (
                          <>
                            <motion.button
                              onClick={prevImage}
                              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
                              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
                              whileTap={{ scale: 0.95 }}
                              style={{ cursor: 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2720%22 height=%2720%22 viewBox=%220 0 20 20%22%3E%3Cpath d=%22M12 5L7 10L12 15%22 stroke=%22white%22 stroke-width=%222%22 fill=%22none%22 opacity=%220.8%22/%3E%3C/svg%3E") 10 10, pointer' }}
                            >
                              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                              </svg>
                            </motion.button>

                            <motion.button
                              onClick={nextImage}
                              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
                              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
                              whileTap={{ scale: 0.95 }}
                              style={{ cursor: 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2720%22 height=%2720%22 viewBox=%220 0 20 20%22%3E%3Cpath d=%22M8 5L13 10L8 15%22 stroke=%22white%22 stroke-width=%222%22 fill=%22none%22 opacity=%220.8%22/%3E%3C/svg%3E") 10 10, pointer' }}
                            >
                              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </motion.button>
                          </>
                        )}
                      </div>

                      {selectedService.images.length > 1 && (
                        <div className="flex gap-2">
                          {selectedService.images.map((_, index) => (
                            <motion.button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`flex-1 h-2 sm:h-2.5 rounded-full transition-all ${
                                index === currentImageIndex
                                  ? 'bg-white/80'
                                  : 'bg-white/20 hover:bg-white/40'
                              }`}
                              whileHover={{ height: 10 }}
                              layout
                              type="button"
                              style={{ cursor: 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2720%22 height=%2720%22 viewBox=%220 0 20 20%22%3E%3Ccircle cx=%2710%27 cy=%2710%27 r=%278%27 fill=%22white%22 opacity=%220.8%22/%3E%3C/svg%3E") 10 10, pointer' }}
                            />
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
          <ProfessionalCursor />
        </AnimatePresence>

        <div className="relative z-10">
          <Footer />
        </div>
      </main>
    </>
  );
}