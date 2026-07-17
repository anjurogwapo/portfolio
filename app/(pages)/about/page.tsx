'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { PillNavbar } from '@/app/components/PillNavbar';
import { Footer } from '@/app/components/Footer';

import { Righteous } from 'next/font/google';

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
});

gsap.registerPlugin(ScrollTrigger);

// CHANGE THIS TO YOUR BACKGROUND IMAGE URL
const BACKGROUND_IMAGE = '/images/aboutbg.gif';

// FULL NOTES CONTENT
const notesPages = [
`I am Chim Anjuro, and maybe I have no meaning.

Maybe that's what frightens us the most.

We spend so much of our lives trying to find the meaning of our existence in this world. We chase labels, titles, achievements, and things we hope will finally make us feel enough. We try so hard to prove something, to make our parents proud, to become someone worth introducing.

But maybe we were never meant to spend our whole lives proving that we deserve to exist.

Maybe being alive is already enough.

I am just here to survive and to make an impact.

To be someone people can look up to.

To be someone who gives comfort.

To be someone who doesn't make life harder for others.

And maybe that's enough.

It's okay if you still haven't found the meaning of your existence. It's okay if you don't have everything figured out. It's okay if all you have right now is your name.

Be someone who inspires.

Be the reason someone smiled.

Be the reason someone felt less alone.

Be someone they miss.

Be someone who makes people believe in themselves because you believed in them first.

Be someone you are proud of.

Not because of a title.

Not because of a label.

But because you chose to remain kind in a world that often forgets how.

Life doesn't always have a meaning.

Sometimes there are no answers.

Sometimes there is no one to blame.

Life wasn't meant to be brutal.

And sometimes, it is a privilege to become the person you once prayed to be.

And that's okay.

You will eventually become who you are meant to become if you don't give up.

Everything happening to you is meant for you.

Even the hardest seasons.

Even the nights that almost broke you.

Even the tears nobody saw.

Believe that.

Because pain is not always punishment.

Sometimes pain is the road that leads you home.

The journey of finding yourself doesn't always end with an answer.

Sometimes the journey itself is already the answer.

Continue to dream.

But dream deeply enough to know why.

Know the roots of your dreams.

Know what makes your heart beat.

Know what makes you cry.

Know what makes you stay.

And continue to create.

Human beings were born to create.

Our world needs your creativity.

Your ideas.

Your voice.

Your art.

Your existence.

You do not lose your talent.

You do not lose your passion.

The fire inside you never truly dies.

You are the art itself.

And if life forced you to choose practicality over passion, that's okay too.

Life is hard.

Surviving is hard.

And there is no shame in choosing survival.

You did what you had to do.

You didn't betray your passion by surviving.

And I'm proud of you for that.

You rise.

You thrive.

You continue.

And that's beautiful.

It's okay if you couldn't choose yourself first.

It's okay.

Art has always connected us.

And even if your hands stopped creating, your soul never stopped being an artist.

So don't say, "Maybe in another lifetime."

No.

Not in another lifetime.

This lifetime.

This story.

This one.

Because this is your story.

Do what you can.

Don't wait for the perfect moment.

Don't wait until you're ready.

You are already ready.

"Ready" is sometimes just fear wearing a different name.

Do it scared.

Do it nervous.

Do it anxious.

Do it with trembling hands.

Do it with tears in your eyes.

Do it even when your voice shakes.

Because courage was never the absence of fear.

Courage is choosing to move while carrying it.

The journey of becoming you was never meant for anyone else.

It was meant for you.

Not just to exist.

Not just to survive.

But to love.

To create.

To feel.

To leave behind kindness.

And to make an impact.

Because at the end of our lives, people may forget our achievements.

They may forget our titles.

They may forget the awards hanging on our walls.

But they will remember how we made them feel.

They will remember who stayed.

Who listened.

Who loved.

Who believed in them when they couldn't believe in themselves.

Maybe that is enough.

Maybe that is what it means to matter.

So please—

Live before you leave.

Cry when you need to.

Love deeply.

Forgive yourself.

Create something.

Call the people you miss.

Tell people you love them.

Take the picture.

Sing the song.

Wear the clothes.

Chase the dream.

And become the person your younger self needed.

Because one day, when your story comes to an end, I hope people won't remember you because you had everything.

I hope they remember you because you gave something.

Hope.

Comfort.

Kindness.

Love.

And I hope, when you finally look back at your life, you smile and say—

"I lived."

Not perfectly.

Not without scars.

But fully.

And before I left—

I truly lived.`
];

const NOTES_BACKGROUND =
  'https://your-image-url.jpg';

// EDUCATION CAROUSEL IMAGES - REPLACE WITH YOUR IMAGE URLS
const educationImages = [
  { url: '/images/grad1.jpg', alt: 'Education moment 1' },
  { url: '/images/grad2.jpg', alt: 'Education moment 2' },
  { url: '/images/grad3.jpg', alt: 'Education moment 3' },
  { url: '/images/grad4.jpg', alt: 'Education moment 4' },
  { url: '/images/grad5.jpg', alt: 'Education moment 5' },
];

// Animated heading component
function AnimatedHeading({ text, className = '' }) {
  const lettersRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(lettersRef.current, {
        y: -15,
        duration: 0.8,
        stagger: 0.05,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
   <h1 className={`${righteous.className} ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          ref={(el) => {
            if (el) lettersRef.current[index] = el;
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h1>
  );
}

// Image carousel for education with polaroid style
function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % educationImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        carouselRef.current,
        { opacity: 0, rotateY: 90 },
        {
          opacity: 1,
          rotateY: 0,
          duration: 0.8,
          ease: 'power3.out',
        }
      );
    });
    return () => ctx.revert();
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + educationImages.length) % educationImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % educationImages.length);
  };

  return (
    <div className="relative">
      {/* Polaroid card */}
      <div
        className="relative w-full max-w-sm mx-auto bg-white rounded-lg shadow-2xl p-4 transform hover:shadow-3xl transition duration-500"
        style={{
          boxShadow: '0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
        }}
      >
        <div
  ref={carouselRef}
  className="relative w-full aspect-[4/5] rounded-sm overflow-hidden bg-gray-200"
>
  <img
    src={educationImages[currentIndex].url}
    alt={educationImages[currentIndex].alt}
    className="w-full h-full object-cover"
  />
</div>
        <div className="mt-4 h-20 flex items-center justify-center">
          <p className="text-center text-gray-600 text-sm italic"> 04 / 25 / 2026 </p>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center items-center gap-3 mt-6">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-white/5 hover:bg-white/15 transition border border-white/20 text-gray-300 hover:text-white transform hover:scale-110"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-white/5 hover:bg-white/15 transition border border-white/20 text-gray-300 hover:text-white transform hover:scale-110"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

// Flipbook component with book-flip animation
function Flipbook() {
  const [currentPage, setCurrentPage] = useState(0);
  const bookRef = useRef(null);
  const contentRef = useRef(null);

 useEffect(() => {
  gsap.fromTo(
    bookRef.current,
    { opacity: 0.7 },
    {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    }
  );

  gsap.fromTo(
  contentRef.current,
  {
    opacity: 0,
    y: 20,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.4,
    ease: 'power2.out',
  }
);
}, [currentPage]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + notesPages.length) % notesPages.length);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % notesPages.length);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
      {/* Polaroid image - ADJUST SIZE HERE: change w-64 and h-80 */}
      <div className="w-full lg:w-1/3 flex justify-center">
        <div
       className="relative w-80 sm:w-96 lg:w-72 xl:w-80 aspect-square bg-white rounded-lg shadow-2xl transform -rotate-6 hover:rotate-0 transition duration-500"
  style={{
    boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
  }}
>
          <div className="absolute inset-3 bg-gray-900 rounded overflow-hidden border border-white/20">
            <img
  src="/images/aboutmekid.png"
  alt="Notes moment"
  className="w-full h-full object-cover"
/>
          </div>
        </div>
      </div>

      {/* Book flip content - FIXED SIZE CONTAINER */}
    <div className="w-full lg:w-2/3 mt-6 lg:mt-0">
      <div
  ref={bookRef}
  className="relative h-[34rem] md:h-[38rem] rounded-2xl p-8 border border-white/20 flex flex-col overflow-hidden"
  style={{
    
    backgroundImage: `url(${NOTES_BACKGROUND})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow:
      '0 8px 32px rgba(31,38,135,.37)',
      
  }}
>
  <div
  className="absolute inset-0 bg-black/55 backdrop-blur-sm rounded-2xl"
/>
          {/* Book flip effect background */}
          <div className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
            }}
          />

          {/* Content */}
         <div
  ref={contentRef}
  className="relative z-10 flex-1 overflow-y-auto pr-4 custom-scroll"
>
  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
    Live Before You Leave
  </h3>

  <p className="text-gray-400 mb-8 text-sm tracking-widest uppercase">
    Chim Anjuro • 2026
  </p>

  <div className="text-base md:text-lg text-gray-100 whitespace-pre-line leading-relaxed font-light">
    {notesPages[0]}
  </div>
</div>

         
        </div>
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
        {
          opacity: 0,
          y: 80,
        },
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
            scrub: 0.6,
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

// Handle resume download
const handleDownloadResume = () => {
  // REPLACE '/resume.pdf' WITH YOUR ACTUAL RESUME FILE PATH
  const link = document.createElement('a');
  link.href = '/images/chimanjurocv.pdf';
  link.download = 'chimanjurocv.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function AboutPage() {
  return (
    <>
      <PillNavbar />

     <main
  className="relative bg-cover bg-center bg-fixed text-white overflow-x-hidden"
  style={{
    backgroundImage: `url('${BACKGROUND_IMAGE}')`,
  }}
>
  <div className="absolute inset-0 bg-black/65 pointer-events-none"></div>

  <div className="relative z-10">

          {/* Hero Section */}
          <section className="min-h-screen flex items-center pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <ScrollReveal>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Left Content */}
                  <div>
                    <AnimatedHeading
                      text="Who Am I"
                      className="text-5xl md:text-6xl lg:text-7xl mb-6 text-white leading-tight"
                    />

                    <div className="glass-frame rounded-2xl p-6 md:p-8 mb-8 border border-white/10">
  <p className="text-base md:text-lg text-gray-200 leading-relaxed font-light">
  I&apos;m <span className="font-bold">Chim Anjuro M. Batayola</span>, a creative person from the Philippines who enjoys exploring different paths, passions, and side quests in life. I love blending creativity with technology and design, and I always put my heart into the things I do. I&apos;m an empath, so I value connection, understanding, and sincerity. You can trust me to show up with honesty, care, and intention.
</p>
</div>

                    {/* CTA Buttons - Responsive mobile sizing */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleDownloadResume}
                        className="px-4 sm:px-5 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap shadow-lg hover:shadow-2xl"
                      >
                        <Download size={16} />
                        <span>Resume</span>
                      </button>

                      <Link
                        href="/experience"
                        className="px-4 sm:px-5 py-2.5 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition duration-300 text-center text-sm sm:text-base whitespace-nowrap shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                      >
                        Experience
                      </Link>
                    </div>
                  </div>

                  
{/* Right Image */}
<ScrollReveal delay={0.2}>
  <div className="flex justify-center lg:justify-end">
    <div className="about-wrapper animate-float">
      <img
        src="/images/aboutme.gif"
        alt="Chim Anjuro"
        className="about-image"
      />
    </div>
  </div>
</ScrollReveal>

</div> {/* end grid */}
</ScrollReveal>
</div> {/* end max-w */}
</section>

          {/* Education Section - Closer spacing */}
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <ScrollReveal>
                <h2
  className={`${righteous.className} text-4xl md:text-5xl lg:text-6xl mb-10 text-white`}
>
  My Education
</h2>

                {/* Bachelor's Degree */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
                  {/* Education Info */}
                  <div>
                    <div className="glass-frame rounded-2xl p-6 md:p-8 border border-white/10">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Bachelor of Science in Information Technology</h3>
                      <p className="text-lg text-gray-300 mb-3 font-semibold">University of Saint La Salle</p>
                      <p className="text-gray-400 mb-6">Graduation Year: 2026</p>
                      <p className="text-gray-200 leading-relaxed">
  I studied at the university as a cultural scholar, and the scholarship helped ease part of my education. My degree was not originally my own choice, but along the way, I learned to embrace it and discovered a stronger connection to front-end development, where creativity and technology come together. What began as an unexpected path slowly turned into something I truly appreciated. Through this experience, I learned that passion often finds us in the most unexpected places.
</p>
                    </div>
                  </div>

                  {/* Image Carousel */}
                  <ScrollReveal delay={0.2}>
                    <ImageCarousel />
                  </ScrollReveal>
                </div>

                {/* Senior High School */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Education Info - Smaller on desktop, full-width on mobile */}
                  <div className="lg:col-start-2 lg:max-w-lg lg:-ml-12">
                    <div className="glass-frame rounded-2xl p-6 md:p-8 border border-white/10">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Academic Foundation in Business & Marketing</h3>
                      <p className="text-lg text-gray-300 mb-3 font-semibold">Colegio San Agustin</p>
                      <p className="text-gray-400 mb-6">Senior High School</p>
                      <p className="text-gray-200 leading-relaxed text-sm md:text-base">
 I completed my Senior High School education in the Accountancy, Business, and Management strand with a specialization in Marketing. This experience gave me a strong foundation in business, marketing strategy, consumer behavior, and strategic thinking, which continues to complement my creative and technical work today.
</p>
                    </div>
                  </div>
                </div>

              </ScrollReveal>
            </div>
          </section>

          {/* Notes Section */}
          <section className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <ScrollReveal>
                <div className="mb-12">
                <h2
  className={`${righteous.className} text-4xl md:text-5xl lg:text-6xl mb-2 text-white`}
>
  Notes on Being Human
</h2>
                  <p className="text-gray-400 text-lg">The Meaning I Chose</p>
                </div>

                <Flipbook />
              </ScrollReveal>
            </div>
          </section>

         
        
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .glass-frame {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .glass-premium {
          perspective: 1000px;
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(255, 255, 255, 0.2);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        @supports (backdrop-filter: blur(1px)) {
          .glass-premium {
            background: rgba(253, 249, 249, 0.08);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
          }
        }

        /* Scrollable content in fixed container */
        .h-96 {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
}