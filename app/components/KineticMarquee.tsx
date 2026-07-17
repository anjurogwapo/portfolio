'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface KineticMarqueeProps {
  text: string;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export default function KineticMarquee({
  text,
  speed = 80,
  direction = 'left',
  className = '',
}: KineticMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let distance = 0;

    const calculate = () => {
      distance = track.scrollWidth / 2;
    };

    calculate();

    // 🔥 smoother + more stable movement
    const pixelsPerSecond = 140; // SLOW + PREMIUM FEEL

    const duration = distance / pixelsPerSecond;

    const tween = gsap.to(track, {
      x: direction === 'left' ? -distance : distance,
      duration,
      ease: 'none',
      repeat: -1,

      // 🔥 THIS removes the “jump/snapping” completely
      modifiers: {
        x: (x) => {
          const mod = parseFloat(x) % distance;
          return direction === 'left' ? `${mod}px` : `${-mod}px`;
        },
      },
    });

    return () => {
      tween.kill();
    };
  }, [direction]);

  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <div ref={trackRef} className="flex w-max whitespace-nowrap">

        {/* COPY 1 */}
        <div className="flex items-center gap-10 pr-10">
          <span className="marquee-text text-2xl font-semibold tracking-wider">
            {text}
          </span>
          <span className="marquee-dot">✦</span>
        </div>

        {/* COPY 2 */}
        <div className="flex items-center gap-10 pr-10">
          <span className="marquee-text text-2xl font-semibold tracking-wider">
            {text}
          </span>
          <span className="marquee-dot">✦</span>
        </div>

      </div>
    </div>
  );
}