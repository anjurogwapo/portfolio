'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export function PillNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <motion.nav
      ref={containerRef}
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-40"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <div className="glass-effect rounded-full px-4 py-2 flex items-center gap-4 shadow-2xl border border-orange-500/20">
        {/* Logo on left */}
        <Link href="/" className="flex-shrink-0">
          <motion.img
            src="/images/anjurologo.png"
            alt="Logo"
            className="h-8 w-auto object-contain"
            whileHover={{ scale: 4 }}
            whileTap={{ scale: 2}}
          />
        </Link>

        {/* Mobile menu button - REPLACE with your hamburger icon PNG if desired */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden px-3 py-2 rounded-full text-orange-500 hover:text-orange-400 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-2">
          {navLinks.map(({ href, label }, idx) => (
            <div
              key={href}
              ref={(el) => {
                navItemsRef.current[idx] = el;
              }}
              className="relative"
            >
              <Link href={href}>
                <motion.button
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-300 relative group ${
                    isActive(href)
                      ? 'text-orange-400'
                      : 'text-gray-300 hover:text-orange-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {label}
                  {/* Underline hover effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300 rounded-full"
                  />
                </motion.button>
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            className="absolute top-16 left-1/2 transform -translate-x-1/2 w-64 bg-black/90 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-4 md:hidden z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-all text-center ${
                    isActive(href)
                      ? 'text-orange-400 font-semibold'
                      : 'text-gray-300 hover:text-orange-400'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
