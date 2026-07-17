'use client';

import { useState, useEffect } from 'react';
import { UnifrakturCook, Righteous } from 'next/font/google';

import { PillNavbar } from './components/PillNavbar';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollRevealSection } from './components/ScrollRevealSection';
import { Footer } from './components/Footer';
import KineticMarquee from './components/KineticMarquee';
import AnjuroLogo3D from './components/AnjuroLogo3D';

import { motion } from 'framer-motion';
import Link from 'next/link';

/* Fonts */
const unifraktur = UnifrakturCook({
  subsets: ['latin'],
  weight: '700',
});

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoading && (
        <LoadingScreen onComplete={() => setShowLoading(false)} />
      )}

      {!showLoading && (
        <main className="min-h-screen bg-black text-white relative overflow-hidden">

          {/* SIDE GIFS */}
          <div className="hidden md:block fixed left-0 top-0 h-screen w-24 md:w-36 lg:w-48 opacity-30 pointer-events-none z-0">
            <img src="/images/side.gif" className="w-full h-full object-cover" alt="side decoration" />
          </div>

          <div className="hidden md:block fixed right-0 top-0 h-screen w-24 md:w-36 lg:w-48 opacity-30 pointer-events-none z-0">
            <img src="/images/right.gif" className="w-full h-full object-cover scale-x-[-1]" alt="right decoration" />
          </div>

          {/* GLOBAL STYLES */}
          <style jsx>{`
            .chrome-text {
              background: linear-gradient(
                120deg,
                #f8f8f8 0%,
                #abaaaaa0 20%,
                #ffffff 40%,
                #bdbdbd 60%,
                #ffffff 80%,
                #eaeaea 100%
              );
              background-size: 250% auto;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: chromeShine 4s linear infinite;
            }

            @keyframes chromeShine {
              0% { background-position: 0% center; }
              100% { background-position: 250% center; }
            }

            .blink-glow {
              text-shadow:
                0 0 6px rgba(255, 255, 255, 0.39),
                0 0 14px rgba(210, 210, 204, 0.32),
                0 0 22px rgba(255, 255, 255, 0.31);
              animation: blinkGlow 2.8s infinite;
            }

            @keyframes blinkGlow {
              0%, 100% {
                opacity: 1;
                text-shadow:
                  0 0 6px rgba(162, 162, 156, 0.37),
                  0 0 14px rgba(237, 226, 174, 0.31);
              }
              50% {
                opacity: 0.85;
                text-shadow:
                  0 0 10px rgba(255, 255, 255, 0.34),
                  0 0 22px rgba(249, 249, 249, 0.52);
              }
            }

            .glow-text {
              text-shadow:
                0 0 10px rgba(247, 244, 210, 0.25),
                0 0 20px rgba(243, 245, 233, 0.15);
            }

            /* =========================================
               GLASS FRAME WITH GLOWING WHITE OUTLINE
               (NO BLUR - CLEAN LOOK)
            ========================================= */
            .glass-frame {
              position: relative;
              overflow: hidden;
              background: transparent;
              border: 1px solid rgba(255, 255, 255, 0.12);
              border-radius: 32px;
              box-shadow: 0 0 25px rgba(255,255,255,0.08);
            }

            /* Glowing white outline effect - ADJUST GLOW INTENSITY HERE */
            .glass-frame::before {
              content: "";
              position: absolute;
              inset: 0;
              border-radius: 32px;
              padding: 1.5px;
              background: linear-gradient(
                135deg,
                rgba(255,255,255,0.9),
                rgba(255,255,255,0.2),
                rgba(255,255,255,0.9)
              );
              -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              opacity: 0.9;
              box-shadow:
                0 0 15px rgba(255,255,255,0.5),
                0 0 35px rgba(255,255,255,0.25);
              pointer-events: none;
            }

            /* GLASS BOX */
            .glass-box {
              background: rgba(255, 255, 255, 0.05);
              backdrop-filter: blur(18px);
              -webkit-backdrop-filter: blur(18px);
              border: 1px solid rgba(255, 255, 255, 0.12);
              border-radius: 22px;
              box-shadow:
                0 10px 40px rgba(0,0,0,0.6),
                0 0 25px rgba(255,255,255,0.08);
              position: relative;
              overflow: hidden;
            }

            .glass-box::after {
              content: "";
              position: absolute;
              inset: 0;
              background: radial-gradient(
                circle at center,
                rgba(255,255,255,0.08),
                transparent 60%
              );
              pointer-events: none;
            }

            /* =========================================
               POLAROID GLASS SPECIALTY CARDS
            ========================================= */
            .specialty-card {
              position: relative;
              height: 380px;
              overflow: hidden;
              background: rgba(255, 255, 255, 0.03);
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.15);
              border-radius: 12px;
              transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
              box-shadow: 0 8px 32px rgba(0,0,0,0.3);
              cursor: pointer;
            }

            .specialty-card:hover {
              background: rgba(255, 255, 255, 0.08);
              border-color: rgba(255, 255, 255, 0.3);
              box-shadow: 
                0 15px 50px rgba(0,0,0,0.4),
                0 0 30px rgba(255,255,255,0.2);
              transform: translateY(-8px) scale(1.02);
            }

            .specialty-card-image {
              width: 100%;
              height: 260px;
              background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
              border-radius: 8px;
              margin-bottom: 12px;
              overflow: hidden;
              position: relative;
            }

            .specialty-card-image img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.4s ease;
            }

            .specialty-card:hover .specialty-card-image img {
              transform: scale(1.08);
            }

            .specialty-card-content {
              padding: 0 12px 12px 12px;
              text-align: center;
            }

            .specialty-card-title {
              font-size: 1.25rem;
              font-weight: 700;
              background: linear-gradient(135deg, #f0ad4e, #ffc107);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              margin-bottom: 4px;
              transition: all 0.3s ease;
            }

            .specialty-card:hover .specialty-card-title {
              letter-spacing: 1px;
            }

            .specialty-card-desc {
              font-size: 0.875rem;
              color: rgba(255,255,255,0.7);
              transition: color 0.3s ease;
            }

            .specialty-card:hover .specialty-card-desc {
              color: rgba(255,255,255,0.9);
            }
          `}</style>

          <div className="relative z-10">

            <PillNavbar />
{/* =========================
   TOP OVERLAY ELEMENTS
   LEFT + RIGHT STICKY DECOR
   HIDDEN ON MOBILE
========================= */}

{/* LEFT TOP (topl.png) */}
<motion.div
  className="
    hidden md:block
    fixed top-0 left-0 z-[999]
    pointer-events-none
  "
  initial={{ x: -150, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  {/* GLOW LAYER */}
  <div className="topl-glow" />

  {/* IMAGE */}
  <img
    src="/images/topl.png"
    alt="top left decoration"
    className="w-[750px] md:w-[950px] lg:w-[1200px] relative z-10"
  />
</motion.div>
{/* RIGHT TOP (topr.gif) */}
<motion.img
  src="/images/topr.gif"
  alt="top right decoration"
  className="
    hidden md:block
    fixed top-0 right-0 z-50
    w-[4000px] md:w-[4000px] lg:w-[900px]
    pointer-events-none
  "
  initial={{ x: 120, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
/>
            {/* =========================================
               HERO SECTION - STICKY AT TOP
               ADJUST HEIGHT: Change 'h-[700px]' or 'pt-20 pb-20' to resize container
            ========================================= */}
           <section className="pt-0 pb-16 md:pb-24 px-2 flex justify-center sticky-hero">

              {/* GLASS FRAME - GLOWING OUTLINE ONLY */}
               <div className="w-full max-w-6xl glass-frame">
                
                {/* BOTTOM RIGHT DECORATION - MOVED INSIDE BUT AT BOTTOM */}
<div className="absolute bottom-0 right-0 pointer-events-none hidden md:block z-[80]">
  
  {/* GLOW LAYER */}
  <div className="absolute bottom-0 right-0 animate-pulse-slow z-[81]">
    <img
      src="/images/bottom.png"
      alt="bottom glow"
      className="w-[450px] md:w-[600px] lg:w-[750px] object-contain opacity-80 blur-md"
      style={{
        filter:
          "drop-shadow(0 0 25px rgba(255, 255, 255, 0.32)) drop-shadow(0 0 60px rgba(255,255,255,0.3))",
      }}
    />
  </div>

  {/* MAIN IMAGE (TOP LAYER) */}
  <img
    src="/images/bottom.png"
    alt="bottom decoration"
    className="w-[450px] md:w-[600px] lg:w-[750px] object-contain relative z-[82] animate-pulse-slow"
  />
</div>


                <div className="relative z-10 px-10 py-5 md:px-14 md:py-6">

                   <div className="grid lg:grid-cols-2 gap-6 items-center">

                    {/* LEFT SIDE - CONTENT */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >

                      <motion.img
                        src="/images/logomove.gif"
                       className="w-44 md:w-64 mb-6 self-start md:self-auto -ml-8 md:ml-0"
                        alt="logo"
                      />

                      <span className="block text-4xl md:text-5xl font-bold mb-2">
                        Hello I am
                      </span>

                      {/* NAME WITH CHROME & GLOW EFFECT */}
                      <span
                        className={`
                          ${unifraktur.className}
                          chrome-text blink-glow
                          inline-block
                          leading-[0.9]
                          tracking-wide
                          text-[4.5rem] md:text-[6.5rem] lg:text-[7.5rem]
                          whitespace-nowrap
                        `}
                      >
                        Chim Anjuro
                      </span>

                    <p className="text-gray-300 mt-6 mb-6 leading-relaxed">
  I&apos;m someone who sees meaning in the quiet details of life.
  <br />
  <span className="block mt-2">
    I create from feeling, thought, and imagination.
  </span>
</p>

                      <p className={`text-2xl font-bold mb-8 ${righteous.className} glow-text`}>
                        I KNOW YOU NEED ME
                      </p>

                      {/* CTA BUTTON */}
                      <motion.a
  href="/images/chimanjuroCV.pdf"
  download="chimanjuroCV.pdf"
  className="
    inline-block
    px-8 py-4
    bg-white/10
    border border-white/20
    rounded-lg
    transition-all
  "
  whileHover={{
    boxShadow:
      '0 0 20px rgba(255, 255, 255, 0.53), 0 0 40px rgba(255,255,255,0.15)',
    backgroundColor: 'rgba(255,255,255,0.18)',
  }}
>
  Download my CV
</motion.a>
                      

                    </motion.div>

                    {/* RIGHT SIDE - PP.GIF
                        ADJUST POSITION: Change 'mr-0' to '-mr-8' or '-mr-12' to push further right
                        ADJUST SIZE: Change 'h-[620px]' to larger/smaller value (e.g., h-[700px] or h-[550px])
                    */}
                    

                    <motion.div
  className="flex justify-center md:justify-end md:-mr-16"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>

                    <motion.img
  src="/images/pp.gif"
  alt="profile"
  className="
    h-[420px] sm:h-[520px] md:h-[700px]
    object-contain

    mx-auto md:mx-0
    md:ml-auto md:-mr-20
  "
  initial={{
    filter: 'drop-shadow(0 0 0px rgba(0,0,0,0))',
  }}
  animate={{
    filter: 'drop-shadow(0 0 0px rgba(0,0,0,0))',
  }}
  whileHover={{
    filter:
      'drop-shadow(0 0 30px rgba(255,255,255,0.55)) drop-shadow(0 0 60px rgba(255,255,255,0.25)) brightness(1.1)',
  }}
  transition={{
    duration: 0.2,
    ease: 'easeOut',
    
  }}
/>


                    </motion.div>

                  </div>
                </div>
              </div>
            </section>

            
            
            {/* MARQUEE SECTION */}
            <section className="py-10 border-y border-white/10">
              <div className="kinetic-marquee text-white">
                <KineticMarquee
                  text="✦ MODELING • ACTING • FILM • DESIGN • DEVELOPMENT • CONTENT CREATION • PHOTOGRAPHY • VIDEO EDITING ✦"
                  speed={60}
                />
              </div>
            </section>

      

            {/* HOME.GIF GLASS SECTION */}
            <section className="py-16 flex justify-center">

              <div className="glass-box w-[85%] md:w-[60%] lg:w-[45%] p-4 md:p-6">

                {/* IMAGE */}
                <img
                  src="/images/home.gif"
                  className="rounded-xl w-full object-cover shadow-2xl"
                  alt="home gif"
                />

                {/* TEXT */}
                <p
                  className={`
                    text-center
                    mt-5
                    text-white/70
                    tracking-widest
                    animate-pulse
                    transition
                    ${righteous.className}
                  `}
                >
                  ✦˙⋆COOL KIDS CREATE COOL THINGS⋆˙✦
                </p>
              </div>
            </section>

            {/* ======================================
   3D CHROME LOGO
   BELOW home.gif
   ABOVE Scroll To Explore
====================================== */}

<section className="pb-8 flex flex-col items-center">

  <AnjuroLogo3D />

  <p
    className={`
      text-center
      mt-5
      text-white/70
      tracking-[0.4em]
      animate-pulse
      ${righteous.className}
    `}
  >
    ✦ SCROLL TO EXPLORE ✦
  </p>

</section>

        
{/* WHAT I CAN ASSURE YOU SECTION */}
<section className="py-20 px-4">
  <div className="max-w-6xl mx-auto">

    <h2 className={`text-4xl md:text-5xl text-center mb-16 ${righteous.className} glow-text`}>
      {/* adjust heading size here */}
      What I Can Assure You
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: 'Continuous Growth',
          subtitle: 'Always Evolving',
          text: 'I am always open to learning, growing, and embracing new challenges to continuously improve my skills and deliver better results.'
        },
        {
          title: 'Creative Powerhouse',
          subtitle: 'Driven by Passion',
          text: 'I bring creativity, dedication, and versatility to every project, allowing me to transform ideas into meaningful and impactful work.'
        },
        {
          title: 'Quality Commitment',
          subtitle: 'Excellence First',
          text: 'I am committed to delivering high-quality work with professionalism, attention to detail, and a strong focus on exceeding expectations.'
        },
      ].map((t, i) => (
        <div
          key={i}
          className="p-6 rounded-xl border border-white/10 bg-black hover:bg-black hover:border-white/30 transition-all duration-300"
        >
          <img
            src="/images/logomove.gif"
            className="w-20 mb-4"
            alt="assurance"
          />

          <p className="text-gray-300 italic leading-relaxed">
            &quot;{t.text}&quot;
          </p>

          <p className="text-orange-400 font-semibold mt-6 text-lg">
            {t.title}
          </p>

          <p className="text-gray-500 text-sm">
            {t.subtitle}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>

{/* =========================================
   MY SPECIALTIES - PREMIUM PHOTO CARD DESIGN
========================================= */}
<section className="py-20 px-4">
  <div className="max-w-6xl mx-auto">

    <h2 className={`text-4xl md:text-5xl text-center mb-16 ${righteous.className} glow-text`}>
    
      What I Can Offer 
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          title: 'Acting',
          desc: 'Professional acting and storytelling.',
          image: '/images/3.png',
        },
        {
          title: 'Modeling',
          desc: 'Fashion, commercial, and creative modeling.',
          image: '/images/4.png',
        },
        {
          title: 'Design',
          desc: 'UI/UX, branding, and visual creativity.',
          image: '/images/5.png',
        },
        {
          title: 'Development',
          desc: 'Modern web and mobile experiences.',
          image: '/images/6.png',
        },
        {
          title: 'Content Creation',
          desc: 'Photography, videos, and social media content.',
          image: '/images/7.png',
        },
        {
          title: 'Virtual Assistance',
          desc: 'Organization, communication, and productivity.',
          image: '/images/8.png',
        },
      ].map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl hover:border-orange-400/40 transition-all duration-500"
        >

          {/* PHOTO */}
          <div className="p-4 pb-0">
            <div className="relative overflow-hidden rounded-3xl">

              <img
                src={s.image}
                alt={s.title}
                className="h-[380px] w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

            </div>
          </div>

          {/* CONTENT */}
          <div className="p-6">

            <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-orange-300">
              {s.title}
            </h3>

            <p className="leading-relaxed text-gray-400">
              {s.desc}
            </p>

          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>

{/* CTA SECTION */}
<section className="py-20 text-center">
  <h2
    className={`text-5xl mb-8 chrome-text glow-text ${righteous.className}`}
  >
    Explore My Work
  </h2>

  <div className="flex gap-5 justify-center flex-wrap">
    <Link
      href="/services"
      className="
        px-8 py-4
        rounded-full
        border border-white/20
        bg-white/5
        backdrop-blur-md
        text-white
        transition-all duration-500

        hover:bg-white/10
        hover:border-white/60
        hover:scale-105

        hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]
      "
    >
      <span className={righteous.className}>
        View Services
      </span>
    </Link>

    <Link
      href="/projects"
      className="
        px-8 py-4
        rounded-full
        border border-white/20
        bg-white/10
        backdrop-blur-md
        text-white
        transition-all duration-500

        hover:bg-white/20
        hover:border-white
        hover:scale-105

        hover:shadow-[0_0_35px_rgba(255,255,255,0.5)]
      "
    >
      <span className={righteous.className}>
        View Projects
      </span>
    </Link>
  </div>
</section>

<Footer />

          </div>
        </main>
      )}
    </>
  );
}