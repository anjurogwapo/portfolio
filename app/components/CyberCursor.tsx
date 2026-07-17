'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CyberCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Move cursor immediately
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0,
      });

      // Move follower with delay
      gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 0.5,
      });

      // Add glow effect on movement
      gsap.to(cursor, {
        boxShadow: '0 0 30px rgba(255, 140, 0, 0.8), 0 0 60px rgba(255, 140, 0, 0.4)',
        duration: 0.3,
      });
    };

    const handleMouseEnter = () => {
      gsap.to([cursor, follower], {
        opacity: 1,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, follower], {
        opacity: 0,
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 w-3 h-3 bg-orange-500 rounded-full z-50 transform -translate-x-1/2 -translate-y-1/2 opacity-0"
        style={{
          boxShadow: '0 0 20px rgba(255, 140, 0, 0.6)',
        }}
      />
      <div
        ref={followerRef}
        className="pointer-events-none fixed top-0 left-0 w-8 h-8 border-2 border-orange-500/60 rounded-full z-50 transform -translate-x-1/2 -translate-y-1/2 opacity-0"
        style={{
          boxShadow: '0 0 20px rgba(255, 140, 0, 0.3), inset 0 0 10px rgba(255, 140, 0, 0.2)',
        }}
      />
    </>
  );
}
