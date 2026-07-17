'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Righteous, Poppins } from 'next/font/google';
import { PillNavbar } from '@/app/components/PillNavbar';
import { Footer } from '@/app/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const righteous = Righteous({ weight: ['400'], subsets: ['latin'] });
const poppins = Poppins({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] });

// BACKGROUND IMAGE 1 - Hero Section (Experience + Scroll to Explore)
const BACKGROUND_IMAGE_HERO_SCROLL = '/images/experiencebg1.gif';

// BACKGROUND IMAGE 2 - Professional Experience Section
const BACKGROUND_IMAGE_EXPERIENCE = '/images/experiencebg2.png';

// BACKGROUND IMAGE 3 - What I Use Section
const BACKGROUND_IMAGE_TOOLS = '/images/experiencebg3.png';

// Experience data
const experiences = [
  {
    title: 'Social Media Manager',
    organization: 'Content Creator',
    period: '2024 - Present',
    description: 'Managing social media presence and creating engaging content',
    achievements: ['1.9M views on Instagram', 'Growing follower base', 'High engagement rates'],
  },
  {
    title: 'Marketing Team',
    organization: 'Multiple Organizations',
    period: '2023 - Present',
    description: 'Collaborating on marketing strategies and campaigns',
    achievements: ['Campaign management', 'Analytics tracking', 'Content strategy'],
  },
  {
    title: 'Internship',
    organization: 'Center for Marketing & Communications',
    period: '2026',
    description: 'Professional experience at University of Saint La Salle. I also do coding there for various projects and initiatives.',
    achievements: ['Project coordination', 'Content creation', 'Client relations', 'Coding & Development'],
  },
  {
    title: 'UI/UX Lead',
    organization: 'Google Developer Groups Campus',
    period: '2023 - 2024',
    description: 'Leading UI/UX initiatives and design projects',
    achievements: ['Design leadership', 'User research', 'Prototyping & testing'],
  },
  {
    title: 'Owner',
    organization: 'Anjuro Clothing Brand',
    period: '2022 - Present',
    description: 'Building and managing my own fashion brand',
    achievements: ['Brand development', 'Product design', 'Business management'],
  },
];

// Seminars and workshops data
const seminarsWorkshops = [
  {
    title: 'TechTrack: Mapping Your Future in Tech',
    organization: 'USLS CCS Student Council',
    date: 'November 29, 2025',
    location: 'University of St. La Salle - Bacolod City',
  },
  {
    title: 'The Digital Foundation: Governance and Trust',
    organization: 'USLS ISACA Student Group',
    date: 'November 8, 2025',
    location: 'University of St. La Salle - Bacolod City',
  },
  {
    title: 'Cybersecurity for National Security',
    organization: 'College of Computing Studies',
    date: 'August 20, 2025',
    location: 'University of St. La Salle - Bacolod City',
  },
  {
    title: 'Human Firewall: Strengthening Cyber Security',
    organization: 'Philippine Institute of Cyber Security Professionals',
    date: 'May 16, 2025',
    location: 'University of St. La Salle - Bacolod City',
  },
  {
    title: 'Beyond Boundaries: Unveiling IT\'s Vast Horizons',
    organization: 'Information Technology Society - USLS',
    date: 'February 23, 2024',
    location: 'University of St. La Salle - Bacolod City',
  },
  {
    title: 'DAYTONA Developers Club Tour\'24',
    organization: 'Google Developer Groups Bacolod',
    date: 'November 23, 2024',
    location: 'BGC Taguig, Metro Manila',
  },
  {
    title: 'GDG Bacolod DevFest 2023',
    organization: 'Google Developer Groups Bacolod',
    date: 'October 20-21, 2023',
    location: 'Ayala Malls Bacolod',
  },
];

// Tools data
const toolsData = [
  {
    category: 'For Codes',
    tools: [
      { name: 'Visual Studio Code', logo: '/images/logovisualstudiocode.svg' },
      { name: 'PHP', logo: '/images/logophp.svg' },
      { name: 'React', logo: '/images/logoreact.svg' },
      { name: 'Next.js', logo: '/images/logonextjs.svg' },
      { name: 'HTML', logo: '/images/logohtml.svg' },
      { name: 'CSS', logo: '/images/logocss.svg' },
      { name: 'Java', logo: '/images/logojava.svg' },
      { name: 'MySQL', logo: '/images/logomysql.svg' },
    ],
  },
  {
    category: 'AI Tools',
    tools: [
      { name: 'ChatGPT', logo: '/images/logoChatGPT.svg' },
      { name: 'Gemini', logo: '/images/logoGemini.svg' },
      { name: 'V0', logo: '/images/logov0.svg' },
      { name: 'Veo', logo: '/images/logoveo.svg' },
      { name: 'Claude', logo: '/images/logoClaude.svg' },
    ],
  },
  {
    category: 'Editing Tools',
    tools: [
      { name: 'Canva', logo: '/images/logocanva.svg' },
      { name: 'Adobe Lightroom', logo: '/images/logolightroom.svg' },
      { name: 'Affinity', logo: '/images/logoAffinity.svg' },
      { name: 'Adobe Photoshop', logo: '/images/logophotoshop.svg' },
      { name: 'Figma', logo: '/images/logofigma.svg' },
      { name: 'Adobe Premiere Pro', logo: '/images/logoadobepremiere.svg' },
      { name: 'Notion', logo: '/images/logonotion.svg' },
    ],
  },
  {
    category: 'Video Editing',
    tools: [
      { name: 'CapCut', logo: '/images/logocapcut.svg' },
      { name: 'DaVinci Resolve', logo: '/images/logoDaVinci.svg' },
    ],
  },
  {
    category: 'Art & Design',
    tools: [
      { name: 'MediBang Paint', logo: '/images/logoMedibang.svg' },
      { name: 'Procreate', logo: '/images/logoprocreate.svg' },
      { name: 'Blender', logo: '/images/logoblender.svg' },
    ],
  },
];

// Enhanced Underline Animation Component
function UnderlineAnimation({ children }) {
  const underlineRef = useRef(null);

  useEffect(() => {
    if (underlineRef.current) {
      const underline = underlineRef.current;
      gsap.fromTo(
        underline,
        { scaleX: 0, transformOrigin: 'center' },
        {
          scaleX: 1,
          duration: 1.2,
          delay: 0.3,
          ease: 'power2.inOut',
        }
      );
    }
  }, []);

  return (
    <div className="relative inline-block">
      {children}
      <div
        ref={underlineRef}
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
        style={{ transformOrigin: 'center' }}
      />
    </div>
  );
}

// Typing Animation Component for Description
function TypingAnimation({ text }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span style={{ whiteSpace: 'pre-line' }}>
      {displayedText}
    </span>
  );
}

// Experience card component
function ExperienceCard({ title, organization, period, description, achievements, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 0.4,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group relative glass-frame rounded-2xl p-6 md:p-8 border border-white/20 hover:border-white/50 transition-all duration-500 overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.12)',
      }}
      onMouseEnter={() => {
        gsap.to(cardRef.current, {
          boxShadow: '0 0 40px rgba(255,255,255,0.3), inset 0 0 0 1px rgba(255,255,255,0.3)',
          duration: 0.4,
        });
      }}
      onMouseLeave={() => {
        gsap.to(cardRef.current, {
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.2)',
          duration: 0.4,
        });
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
          <div className="flex-1">
            <h3 className={`${righteous.className} text-2xl md:text-3xl text-white mb-2 group-hover:text-gray-100 transition duration-300`}>
              {title}
            </h3>
            <p className="text-lg text-gray-300 font-semibold">{organization}</p>
          </div>
          <span className="text-xs md:text-sm px-4 py-2 bg-white/15 border border-white/30 rounded-full text-gray-200 whitespace-nowrap group-hover:bg-white/25 group-hover:border-white/50 transition-all duration-300">
            {period}
          </span>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed text-base">{description}</p>

        <div className="flex flex-wrap gap-2">
          {achievements.map((achievement) => (
            <span
              key={achievement}
              className="text-xs md:text-sm px-3 py-1.5 bg-white/10 border border-white/25 rounded-full text-gray-200 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            >
              {achievement}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Workshop card component
function WorkshopCard({ title, organization, date, location, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.08,
          ease: 'back.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            end: 'top 45%',
            scrub: 0.3,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group relative glass-frame rounded-xl p-5 md:p-6 border border-white/20 hover:border-white/50 transition-all duration-500 overflow-hidden cursor-pointer"
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
      }}
      onMouseEnter={() => {
        gsap.to(cardRef.current, {
          boxShadow: '0 0 30px rgba(255,255,255,0.25), inset 0 0 0 1px rgba(255,255,255,0.3)',
          scale: 1.05,
          duration: 0.3,
        });
      }}
      onMouseLeave={() => {
        gsap.to(cardRef.current, {
          boxShadow: '0 4px 20px rgba(31, 38, 135, 0.15)',
          scale: 1,
          duration: 0.3,
        });
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10">
        <h3 className={`${righteous.className} text-lg md:text-xl text-white mb-3 group-hover:text-gray-100 transition duration-300 line-clamp-2`}>
          {title}
        </h3>
        <p className="text-gray-300 text-sm font-semibold mb-2 group-hover:text-gray-200 transition">{organization}</p>
        <p className="text-gray-400 text-xs mb-2">{date}</p>
        <p className="text-gray-500 text-xs group-hover:text-gray-400 transition">{location}</p>
      </div>
    </div>
  );
}

// Tool logo card component
function ToolCard({ name, logo, index }) {
  const cardRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50, rotateZ: -8 },
        {
          opacity: 1,
          y: 0,
          rotateZ: 0,
          duration: 0.6,
          delay: index * 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.3,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group relative glass-frame rounded-2xl p-3 md:p-4 border border-white/20 hover:border-white/60 transition-all duration-500 overflow-hidden flex flex-col items-center justify-center"
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
      }}
      onMouseEnter={() => {
        gsap.to(cardRef.current, {
          boxShadow: '0 0 50px rgba(255,255,255,0.35), inset 0 0 0 1px rgba(255,255,255,0.4)',
          duration: 0.4,
        });
        gsap.to(logoRef.current, {
          scale: 1.15,
          duration: 0.4,
          ease: 'back.out',
        });
      }}
      onMouseLeave={() => {
        gsap.to(cardRef.current, {
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
          duration: 0.4,
        });
        gsap.to(logoRef.current, {
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
        });
      }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full">
        <div
          ref={logoRef}
          className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        >
          <img
            src={logo}
            alt={name}
            className={`w-full h-full object-contain ${
              [
                'Next.js',
                'ChatGPT',
                'V0',
                'Veo',
                'Canva',
                'CapCut',
              ].includes(name)
                ? 'brightness-0 invert'
                : ''
            }`}
          />
        </div>

        <p className={`${righteous.className} text-center text-white text-sm md:text-base group-hover:text-gray-100 transition duration-300`}>
          {name}
        </p>
      </div>
    </div>
  );
}

// Scroll reveal component
function ScrollReveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            end: 'top 35%',
            scrub: 0.5,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <>
      <PillNavbar />
      
      {/* HEADER SECTION WITH BACKGROUND IMAGE 1 */}
      <section
        className="py-8 sm:min-h-screen sm:flex sm:items-center justify-center text-white relative pt-0 sm:pt-2 md:pt-4"
        style={{
          backgroundImage: `url('${BACKGROUND_IMAGE_HERO_SCROLL}')`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center flex flex-col items-center justify-center">
          {/* Anjuro Logo - Closer spacing to Experience text */}
          <div className="flex justify-center mt-16 sm:-mt-16 -mb-8 sm:-mb-20">
            <div className="animate-logo-glow">
              <img
                src="/images/anjurologo.png"
                alt="Anjuro Logo"
                className="h-60 sm:h-72 md:h-72 lg:h-[19rem] object-contain drop-shadow-lg"
              />
            </div>
          </div>

          {/* Experience Title with Animated Underline */}
          <h1 className={`${righteous.className} relative inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg mb-3 sm:mb-2 hero-title`}>
            <UnderlineAnimation>
              Experience
            </UnderlineAnimation>
          </h1>

          {/* Experience Description - Exact font and styling from service page */}
          <div className="text-gray-200 max-w-4xl mx-auto px-2 sm:px-0 mb-6 sm:mb-8 text-center font-light">
            {/* Mobile */}
            <p className="block sm:hidden text-sm leading-relaxed">
              <TypingAnimation text="Driven by creativity and innovation, I turn ideas into meaningful digital experiences. Every experience fuels my growth and passion for creating with purpose." />
            </p>

            {/* Desktop */}
            <div className="hidden sm:flex justify-center mt-8 text-base md:text-lg leading-loose">
              <TypingAnimation
                text={`Driven by creativity and innovation, I turn ideas into meaningful digital experiences.
Every experience fuels my growth and passion for creating with purpose.`}
              />
            </div>
          </div>

          {/* Scroll to explore text */}
          <div className="flex justify-center mt-16 sm:mt-28 lg:mt-40">
            <p className={`text-center text-white/70 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] animate-pulse ${righteous.className}`}>
              ✦ SCROLL TO EXPLORE ✦
            </p>
          </div>
        </div>
      </section>

      <main className="text-white">
        <div>
          {/* Professional Experience Section */}
          <section
            className="py-16 md:py-24 lg:py-32 relative"
            style={{
              backgroundImage: `url('${BACKGROUND_IMAGE_EXPERIENCE}')`,
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)' }} />
            <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
              <ScrollReveal className="mb-12">
                <h2 className={`${righteous.className} text-4xl sm:text-5xl md:text-6xl text-white drop-shadow-lg`}>
                  <UnderlineAnimation>
                    Professional Experience
                  </UnderlineAnimation>
                </h2>
              </ScrollReveal>

              <div className="grid gap-6 md:gap-8">
                {experiences.map((experience, index) => (
                  <ExperienceCard
                    key={experience.title}
                    {...experience}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Seminars & Workshops Section */}
          <section className="py-16 md:py-24 lg:py-32 relative">
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 100%)' }} />
            <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
              <ScrollReveal className="mb-12">
                <h2 className={`${righteous.className} text-4xl sm:text-5xl md:text-6xl text-white drop-shadow-lg`}>
                  <UnderlineAnimation>
                    Seminars & Workshops
                  </UnderlineAnimation>
                </h2>
              </ScrollReveal>

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {seminarsWorkshops.map((workshop, index) => (
                  <WorkshopCard
                    key={workshop.title}
                    {...workshop}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* What I Use Section */}
          <section
            className="py-16 md:py-24 lg:py-32 relative"
            style={{
              backgroundImage: `url('${BACKGROUND_IMAGE_TOOLS}')`,
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)' }} />
            <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
              <ScrollReveal className="mb-12">
                <h2 className={`${righteous.className} text-4xl sm:text-5xl md:text-6xl text-white drop-shadow-lg`}>
                  <UnderlineAnimation>
                    What I Use
                  </UnderlineAnimation>
                </h2>
              </ScrollReveal>

              <div className="space-y-16">
                {toolsData.map((category, categoryIndex) => (
                  <div key={category.category}>
                    <h3 className={`${righteous.className} text-2xl sm:text-3xl text-white mb-8 drop-shadow-lg`}>
                      {category.category}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                      {category.tools.map((tool, toolIndex) => (
                        <ToolCard
                          key={tool.name}
                          {...tool}
                          index={categoryIndex * 10 + toolIndex}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}