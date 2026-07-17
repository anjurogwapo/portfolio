'use client';

import { useState, useEffect } from 'react';
import { PillNavbar } from '@/app/components/PillNavbar';
import { Footer } from '@/app/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Righteous } from 'next/font/google';
import { ProfessionalCursor } from '@/app/components/ProfessionalCursor';
import { Search } from 'lucide-react';

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
});

interface Project {
  id: number;
  title: string;
  category: string;
  images: string[];
  description: string;
  links?: { title: string; url: string }[];
  detailedDescription?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Modeling Portfolio',
    category: 'Modeling',
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
      '/images/model17.png',
    ],
    description: 'Fashion, commercial, brand, event, and creative shoot modeling. I bring confidence, versatility, and attention to detail in every project I join. With experience working on different concepts and collaborations, I\'m ready to help bring your ideas to life and represent your brand in the best way possible.',
  },
  {
    id: 2,
    title: 'Acting Reel',
    category: 'Acting',
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
    description: 'Versatile acting performances across advertisements, music videos, and film productions. Bringing authentic emotion, creative depth, and adaptability to every character and role.',
    links: [
      { title: 'Masskara Festival Bacolod City 2025 - Official Music Video', url: 'https://www.facebook.com/reel/2017047525711888/?s=single_unit' },
      { title: 'VAMOS', url: 'https://www.instagram.com/reel/DJwW0b3zPWU/' },
      { title: 'VAMOS', url: 'https://www.instagram.com/reel/DBOa7dBSeIp/' },
      { title: 'VAMOS', url: 'https://www.instagram.com/reel/DA-9OTmyPGT/' },
      { title: 'VAMOS', url: 'https://www.instagram.com/reel/C7ZAptTvdLJ/' },
      { title: 'ZeroGuidance', url: 'https://www.instagram.com/reel/C_-g50dyr9z/' },
    ],
  },
  {
    id: 3,
    title: 'Graphic Design',
    category: 'Graphic Design',
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
    description: 'Visual designs for posters, advertisements, invitations, commercials, and other creative works. Designs that not only look good but also communicate clearly and leave a lasting impression. With flexible style and attention to detail, ready to turn ideas into visuals that truly stand out.',
  },
  {
    id: 4,
    title: 'UMAHAN - Farmer Support Application',
    category: 'UI/UX Design',
    images: [
      '/images/umahan1.png',
      '/images/umahan2.png',
      '/images/umahan3.png',
      '/images/umahan4.png',
      '/images/umahan5.png',
      '/images/umahan6.png',
      '/images/umahan7.png',
      '/images/umahan8.png',
      '/images/umahan9.png',
      '/images/umahan10.png',
      '/images/umahan11.png',
      '/images/umahan12.png',
      '/images/umahan13.png',
      '/images/umahan14.png',
      '/images/umahan15.png',
      '/images/umahan16.png',
      '/images/umahan17.png',
      '/images/umahan18.png',
      '/images/umahan19.png',
      '/images/umahan20.png',
      '/images/umahan21.png',
    ],
    description: 'A community-driven mobile application designed to empower local farmers and agricultural producers within our province.',
    detailedDescription: 'UMAHAN is an innovative agricultural support platform developed with a deep commitment to uplifting local farming communities. This mobile application bridges the gap between farmers and buyers through an intuitive, culturally-sensitive interface built entirely in Hiligaynon—our local language. The platform features a comprehensive marketplace ecosystem where farmers can showcase their produce, manage inventory in real-time, and connect directly with customers. The user-centered design prioritizes accessibility and ease of navigation, ensuring that farmers of all technical backgrounds can effectively manage their operations. UMAHAN represents a meaningful contribution to rural economic development and sustainable agricultural practices in our province.',
  },
  {
    id: 5,
    title: 'BAZARIO - Event & Commerce Management Platform',
    category: 'UI/UX Design',
    images: [
      '/images/bazario1.png',
      '/images/bazario2.png',
      '/images/bazario3.png',
      '/images/bazario4.png',
      '/images/bazario5.png',
      '/images/bazario6.png',
      '/images/bazario7.png',
      '/images/bazario8.png',
      '/images/bazario9.png',
      '/images/bazario10.png',
      '/images/bazario11.png',
      '/images/bazario12.png',
      '/images/bazario13.png',
      '/images/bazario14.png',
    ],
    description: 'A comprehensive mobile and web solution designed to revolutionize event management and MSME commerce.',
    detailedDescription: 'BAZARIO is a sophisticated event organization and commerce platform purposefully designed for local MSMEs and event organizers. The application comprises a seamless mobile experience for merchants and buyers, coupled with a powerful web-based admin dashboard for comprehensive event management. On the mobile side, merchants can easily showcase their products, manage real-time inventory, and process transactions while buyers discover local businesses and make purchases with confidence. The admin and web interface provides event organizers with complete operational control—including merchant management, product cataloging, real-time event flow monitoring, sales analytics, and revenue tracking. This integrated ecosystem streamlines the entire event experience, from vendor onboarding to post-event reporting, enabling organizers to focus on creating memorable experiences while empowering small business owners to reach wider audiences and drive sustainable growth.',
  },
  {
    id: 6,
    title: 'UI/UX Design',
    category: 'UI/UX Design',
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
    description: 'Clean, intuitive, and user-focused interfaces that make digital experiences both functional and visually engaging. Focus on understanding user needs and turning ideas into smooth, easy-to-navigate designs.',
  },
  {
    id: 7,
    title: 'Masskara Festival 2023 - Destination Website',
    category: 'Front-end Developer',
    images: [
      '/images/MASSKARA1.png',
      '/images/MASSKARA2.png',
      '/images/MASSKARA3.png',
      '/images/MASSKARA4.png',
      '/images/MASSKARA5.png',
    ],
    description: 'An immersive digital destination showcasing the vibrant Masskara Festival experience.',
    detailedDescription: 'The Masskara Festival 2023 website serves as a comprehensive digital gateway for travelers and tourism enthusiasts. This professionally designed platform provides visitors with essential festival information, including event schedules, cultural highlights, venue details, and travel logistics. The responsive design ensures seamless browsing across all devices, while engaging visuals and interactive elements capture the festive spirit of Bacolod City\'s most celebrated cultural event. The website features intuitive navigation, multimedia galleries, ticketing information, and practical tourism resources designed to inspire visitors and facilitate their planning process. This digital experience effectively communicates the unique cultural heritage and vibrant atmosphere that make the Masskara Festival an internationally recognized celebration.',
  },
  {
    id: 8,
    title: 'Web Development',
    category: 'Front-end Developer',
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
    description: 'Responsive and interactive websites with strong focus on clean structure, performance, and user experience. Translate designs into smooth, functional interfaces that look great and work seamlessly across all devices.',
  },
  {
    id: 9,
    title: 'Municipality of Don Salvador Benedicto - Government Portal',
    category: 'Front-end Developer',
    images: [
      '/images/DSB1.png',
      '/images/DSB2.png',
      '/images/DSB3.png',
      '/images/DSB4.png',
      '/images/DSB5.png',
      '/images/DSB6.png',
      '/images/DSB7.png',
      '/images/DSB8.png',
      '/images/DSB9.png',
      '/images/DSB10.png',
      '/images/DSB11.png',
      '/images/DSB12.png',
      '/images/DSB13.png',
      '/images/DSB14.png',
      '/images/DSB15.png',
      '/images/DSB16.png',
      '/images/DSB17.png',
    ],
    description: 'A comprehensive government digital platform serving citizens and tourists of Don Salvador Benedicto, Negros Occidental.',
    detailedDescription: 'The Municipality of Don Salvador Benedicto portal is a fully functional, dual-interface government platform designed to enhance citizen engagement and streamline municipal operations. The public-facing interface provides residents and tourists with access to event calendars, service requests, public announcements, tourism attractions, and transparent budget tracking. Citizens can post recommendations, browse upcoming municipal events, and submit service requests through an intuitive submission process. The administrative dashboard empowers municipal staff with comprehensive management capabilities—including announcement posting, account creation with role-based access control, post editing, and content moderation. Role-based permissions ensure data security and workflow integrity, with different access levels for administrators, staff, and public users. This integrated solution significantly improves government-citizen communication, promotes transparency in municipal operations, and provides residents with convenient digital access to essential services and information.',
  },
  {
    id: 10,
    title: 'Fine Arts',
    category: 'Arts',
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
    description: 'Artworks across different mediums—painting, charcoal, watercolor, and digital illustration—guided by emotion and personal expression. Each piece is shaped by feeling, turning thoughts and emotions into visual stories through unique style and interpretation.',
  },
  {
    id: 11,
    title: 'Photography',
    category: 'Photography',
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
    description: 'Fashion, commercial, and creative photography, focusing on capturing mood, detail, and story in every frame. Turn concepts into compelling visuals that feel natural yet striking, creating images that are both expressive and ready for professional and commercial use.',
  },
  {
    id: 12,
    title: 'Video Editing',
    category: 'Video Editing',
    images: [
      '/images/videoedit1.png',
      '/images/videoedit2.png',
      '/images/videoedit3.png',
    ],
    description: 'Professional video editing for creative, commercial, and personal projects focused on storytelling and visual impact.',
    links: [
      { title: 'A Day in a Life as a Lasallian', url: 'https://www.facebook.com/reel/1878651866148882' },
      { title: 'GLOBE X VAMOS', url: 'https://www.instagram.com/reel/DQMg3kWEyrR/' },
      { title: 'Umamin', url: 'https://www.instagram.com/reel/DZXPTKqztio/' },
    ],
  },
  {
    id: 13,
    title: 'Content Creation',
    category: 'Content Creation',
    images: [
      '/images/content1.png',
      '/images/content2.png',
      '/images/content3.png',
      '/images/content4.png',
      '/images/content5.png',
    ],
    description: 'Engaging digital content for social platforms that connects authentically with audiences.',
    links: [
      { title: 'Lasalle', url: 'https://www.facebook.com/reel/1878651866148882' },
      { title: 'GLOBE X VAMOS', url: 'https://www.instagram.com/reel/DQMg3kWEyrR/' },
      { title: 'Umamin', url: 'https://www.instagram.com/reel/DZXPTKqztio/' },
      { title: 'Thinking about becoming a Lasallian', url: 'https://www.facebook.com/reel/3161354754066343' },
    ],
  },
  {
    id: 14,
    title: 'Music & Singing',
    category: 'Music & Singing',
    images: [
      '/images/sing1.png',
      '/images/sing2.png',
      '/images/sing3.png',
      '/images/sing4.png',
      '/images/sing5.png',
      '/images/sing6.png',
      '/images/sing7.png',
    ],
    description: 'Singing and performing for events, creative projects, and music recordings, focusing on emotion, vibe, and genuine expression. Aim to bring feeling into every performance and connect with listeners in a natural way through music.',
  },
  {
    id: 15,
    title: 'Social Media Manager',
    category: 'Social Media Manager',
    images: [
      '/images/socialmediamanager1.png',
      '/images/socialmediamanager2.png',
      '/images/socialmediamanager3.png',
    ],
    description: 'Strategic social media management and creative content creation with proven track record of audience engagement.',
    detailedDescription: 'Experienced social media manager specializing in brand growth and audience engagement across multiple platforms. Demonstrated expertise in developing and executing content strategies that drive meaningful engagement and community building. Track record includes building and managing social media campaigns that achieved 1.9M+ Instagram impressions through strategic planning, creative content development, and consistent community interaction. Skilled in content calendar management, audience analytics, trend awareness, and brand voice development.',
    links: [
      { title: 'VAMOS Instagram', url: 'https://www.instagram.com/vamos.bcd/' },
      { title: 'Personal Instagram', url: 'https://www.instagram.com/chim_anjuro/' },
    ],
  },
  {
    id: 16,
    title: 'Virtual Assistance',
    category: 'Virtual Assistant',
    images: [
      '/images/VA1.png',
      '/images/VA2.png',
    ],
    description: 'Virtual assistance with focus on organization, efficiency, and reliability. From managing tasks and schedules to supporting day-to-day operations, helping keep things running smoothly so you can focus on what matters most.',
  },
];

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

const getViewButtonText = (category: string): string => {
  const buttonTexts: { [key: string]: string } = {
    'Modeling': 'View Portfolio',
    'Acting': 'View Reel',
    'Graphic Design': 'View Design',
    'UI/UX Design': 'View Design',
    'Front-end Developer': 'View Website',
    'Arts': 'View Artwork',
    'Photography': 'View Gallery',
    'Video Editing': 'View Video',
    'Content Creation': 'View Content',
    'Music & Singing': 'View Performance',
    'Social Media Manager': 'View Campaign',
    'Virtual Assistant': 'View Work',
  };
  return buttonTexts[category] || 'View Project';
};

const getImageAspectRatio = (category: string): string => {
  if (category === 'Modeling') {
    return 'aspect-[4/5]';
  }
  return 'aspect-square';
};

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const selectedProject = projects.find((p) => p.id === selectedProjectId);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProjectId(null);
        setCurrentImageIndex(0);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  const closeModal = () => {
    setSelectedProjectId(null);
    setCurrentImageIndex(0);
  };

  return (
    <>
      <ProfessionalCursor />
      <PillNavbar />
      <main className="min-h-screen bg-background text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header with Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-16">
            <motion.div
              className="text-center sm:text-left"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative inline-block">
                <motion.div
                  className="absolute inset-0 rounded-lg blur-3xl -z-10"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 70%, transparent 100%)',
                  }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <h1
                  className={`${righteous.className} text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent relative z-10`}
                >
                  Projects
                </h1>
              </div>
              <p className="text-white/60 text-lg md:text-xl tracking-wide mt-4">
                Portfolio of my creative and technical work
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              className="w-full sm:w-72"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-xl bg-white/10 border border-white/30 text-white text-sm placeholder-white/40 focus:outline-none focus:border-white/60 focus:bg-white/20 focus:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
              </div>
            </motion.div>
          </div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 rounded-lg transition-all duration-300 font-medium text-sm sm:text-base border backdrop-blur-xl ${
                  selectedCategory === category
                    ? 'bg-white/20 border-white/60 text-white shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                    : 'bg-white/5 border-white/20 text-white/70 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {filteredProjects.map((project, idx) => (
              <motion.button
                key={project.id}
                onClick={() => {
                  setSelectedProjectId(project.id);
                  setCurrentImageIndex(0);
                }}
                className="group relative h-80 text-left focus:outline-none focus:ring-2 focus:ring-white/50 rounded-2xl cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                whileHover={{ y: -12 }}
                type="button"
              >
                {/* Glow Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-300 -z-10"
                  whileHover={{ scale: 1.15 }}
                />

                {/* Glass Card */}
                <div className="relative w-full h-full p-5 sm:p-6 rounded-2xl border border-white/20 bg-white/5 backdrop-filter backdrop-blur-xl transition-all duration-500 group-hover:border-white/60 group-hover:bg-white/15 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.35)] flex flex-col justify-between overflow-hidden">
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    style={{
                      background:
                        'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                      width: '200%',
                    }}
                  />

                  {/* Image Preview */}
                  <div className="relative z-10 mb-4 overflow-hidden rounded-xl h-40 sm:h-48">
                    <motion.img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      whileHover={{ scale: 1.1 }}
                    />

                    {/* Image Count Badge */}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white/80 z-20">
                      {project.images.length} images
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-white/50 text-xs sm:text-sm font-medium uppercase tracking-widest mb-2 transition-colors group-hover:text-white/70">
                        {project.category}
                      </p>
                      <h3
                        className={`${righteous.className} text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-white/95 transition-colors line-clamp-2`}
                      >
                        {project.title}
                      </h3>
                      <p className="text-white/50 text-xs sm:text-sm line-clamp-2 group-hover:text-white/70 transition-colors">
                        {project.description}
                      </p>
                    </div>

                    {/* View Project Button */}
                    <motion.div
                      className="mt-4 flex items-center text-white/60 group-hover:text-white transition-colors cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm font-medium">{getViewButtonText(project.category)}</span>
                      <motion.span className="ml-2" whileHover={{ x: 3 }}>
                        →
                      </motion.span>
                    </motion.div>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-white/60 text-lg">No projects found matching your search.</p>
            </motion.div>
          )}
        </div>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-7xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-2xl max-h-[95vh] shadow-2xl flex flex-col lg:flex-row gap-6 lg:gap-8 overflow-hidden"
            >
              {/* Close Button */}
              <motion.button
                onClick={closeModal}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              {/* Left Side - Image Gallery */}
              <div className="w-full lg:w-2/3 flex flex-col gap-3 sm:gap-4 min-w-0">
                {/* Main Image */}
                <div className={`relative w-full bg-black/40 rounded-2xl overflow-hidden border border-white/20 flex items-center justify-center ${getImageAspectRatio(selectedProject.category)}`}>
                  <motion.img
                    key={currentImageIndex}
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full object-contain"
                  />

                  {/* Navigation Buttons */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <motion.button
                        onClick={prevImage}
                        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 z-20 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </motion.button>

                      <motion.button
                        onClick={nextImage}
                        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 z-20 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </motion.button>

                      {/* Image Counter */}
                      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm text-white/80 z-20">
                        {currentImageIndex + 1} / {selectedProject.images.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Thumbnail Gallery */}
                {selectedProject.images.length > 1 && (
                  <motion.div
                    className="flex gap-2 overflow-x-auto pb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selectedProject.images.map((image, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          currentImageIndex === idx
                            ? 'border-white/60 shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                            : 'border-white/20 hover:border-white/40'
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Right Side - Content */}
              <div className="w-full lg:w-1/3 flex flex-col gap-4 sm:gap-6 overflow-y-auto max-h-[calc(95vh-60px)] pr-2">
                <div>
                  <p className="text-white/50 text-xs sm:text-sm font-medium uppercase tracking-widest mb-2">
                    {selectedProject.category}
                  </p>
                  <h2 className={`${righteous.className} text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4`}>
                    {selectedProject.title}
                  </h2>

                  {selectedProject.detailedDescription ? (
                    <p className="text-white/80 text-xs sm:text-sm lg:text-base leading-relaxed">
                      {selectedProject.detailedDescription}
                    </p>
                  ) : (
                    <p className="text-white/80 text-xs sm:text-sm lg:text-base leading-relaxed">
                      {selectedProject.description}
                    </p>
                  )}
                </div>

                {/* Links Section */}
                {selectedProject.links && selectedProject.links.length > 0 && (
                  <motion.div
                    className="pt-4 sm:pt-6 border-t border-white/20 space-y-2 sm:space-y-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-3">Featured Works</p>
                    <div className="space-y-2">
                      {selectedProject.links.map((link, idx) => (
                        <motion.a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-white/5 border border-white/20 hover:border-white/60 hover:bg-white/15 transition-all duration-300 group cursor-pointer"
                          whileHover={{ x: 3, backgroundColor: 'rgba(255,255,255,0.15)' }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-white/90 text-xs sm:text-sm font-medium group-hover:text-white transition-colors truncate">
                              {link.title}
                            </p>
                          </div>
                          <motion.span
                            className="text-white/60 group-hover:text-white transition-colors flex-shrink-0 text-sm"
                            whileHover={{ x: 2 }}
                          >
                            ↗
                          </motion.span>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}