import Link from 'next/link';
import { motion } from 'framer-motion';
import { Righteous } from 'next/font/google';

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
});

export function Footer() {
  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="relative mt-16 px-4 md:px-8 overflow-hidden"
    >
      {/* LIQUID LIGHT 1 */}
<motion.div
  animate={{
    x: ['0%', '85%', '85%', '0%', '0%'],
    y: ['0%', '0%', '75%', '75%', '0%'],
    scale: [1, 1.15, 1, 1.2, 1],
  }}
  transition={{
    duration: 28,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
  className="
    absolute
    top-0
    left-0
    w-[450px]
    h-[450px]
    rounded-full
    bg-white/10
    blur-[140px]
    pointer-events-none
  "
/>

{/* LIQUID LIGHT 2 */}
<motion.div
  animate={{
    x: ['85%', '0%', '0%', '85%', '85%'],
    y: ['75%', '75%', '0%', '0%', '75%'],
    scale: [1.2, 1, 1.15, 1, 1.2],
  }}
  transition={{
    duration: 34,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
  className="
    absolute
    top-0
    left-0
    w-[380px]
    h-[380px]
    rounded-full
    bg-white/10
    blur-[130px]
    pointer-events-none
  "
/>

      {/* GLASS FOOTER */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-3xl
          shadow-[0_20px_80px_rgba(255,255,255,0.05)]
        "
      >
       {/* FOOTER HEIGHT - adjust py values here */}
<div className="px-8 md:px-14 py-8 md:py-10">

          {/* TOP SECTION */}
      <div className="grid lg:grid-cols-[1fr_1.4fr_1fr] gap-10 items-center">

            {/* BRAND */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
             className="flex flex-col items-start justify-center"
            >
              

              <h3
                className={`text-3xl md:text-4xl text-white ${righteous.className}`}
              >
                Chim Anjuro
              </h3>
              <div className="flex items-center gap-2 mt-3">
  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />

  <span className="text-xs tracking-[0.2em] uppercase text-gray-500">
    Open for Projects
  </span>
</div>

           <p className="text-gray-400 text-sm mt-3 max-w-sm leading-relaxed text-left">
  From the Philippines.
</p>
              {/* BACK TO TOP BUTTON */}
              <button
                onClick={scrollToTop}
                className="
                  mt-5
                  w-fit
                  px-5
                  py-2.5
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.05]
                  backdrop-blur-xl
                  text-sm
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-white/[0.08]
                  hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]
                "
              >
                ↑ BACK TO TOP
              </button>
            </motion.div>

           {/* CTA SECTION */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
  viewport={{ once: true }}
  className="flex flex-col items-center text-center"
>
  {/* LOGO */}
  <img
    src="/images/anjurologo.png"
    alt="logo"
    className="w-34 md:w-38 mb-5"
  />

  <span
    className="
      text-xs
      uppercase
      tracking-[0.35em]
      text-gray-500
      mb-3
    "
  >
    Available for Collaborations
  </span>

  <h3 className="text-white text-2xl md:text-3xl font-semibold">
    Let's Create Something Exceptional
  </h3>

  <p className="text-gray-400 text-sm mt-4 max-w-md leading-relaxed">
    I'm always open to
    meaningful collaborations and ambitious ideas.
  </p>
</motion.div>

            {/* GET IN TOUCH */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center items-center"
            >
              <h4 className="text-white font-semibold mb-5 text-center">
                Get in Touch
              </h4>

              <div className="flex justify-center gap-5">

                {/* Replace links below */}

                <a
                  href="mailto:chimanjuro123@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/gmail.svg"
                    alt="gmail"
                    className="w-7 brightness-0 invert transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.9)]"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/chim-anjuro-batayola-332404339/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/linkedin.svg"
                    alt="linkedin"
                    className="w-7 brightness-0 invert transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.9)]"
                  />
                </a>

                <a
                  href="https://www.facebook.com/chim.anjuro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/facebook.svg"
                    alt="facebook"
                    className="w-7 brightness-0 invert transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.9)]"
                  />
                </a>

                <a
                  href="https://www.instagram.com/chim_anjuro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/instagram.svg"
                    alt="instagram"
                    className="w-7 brightness-0 invert transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.9)]"
                  />
                </a>

                <a
                  href="https://www.tiktok.com/@chimanjuro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/tiktok.svg"
                    alt="tiktok"
                    className="w-7 brightness-0 invert transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.9)]"
                  />
                </a>

              </div>
            </motion.div>

          </div>

          {/* BOTTOM */}
         <div className="mt-8 border-t border-white/10 pt-4 text-center">

            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Chim Anjuro. All rights reserved.
            </p>

            <p className="mt-2 text-xs text-gray-600 tracking-[0.25em] uppercase">
              Designed with Passion • Built with Precision
            </p>

          </div>

        </div>
      </div>
    </motion.footer>
  );
}