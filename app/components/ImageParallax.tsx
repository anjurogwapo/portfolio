'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface ImageParallaxProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
}

export default function ImageParallax({
  src,
  alt,
  speed = 0.5,
  className = '',
}: ImageParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const image = imageRef.current;

    if (!image) return;

    gsap.to(image, {
      y: 100 * (1 - speed),
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [speed]);

  return (
    <div ref={containerRef} className={`overflow-hidden rounded-xl ${className}`}>
      <div ref={imageRef} className="relative w-full h-full scale-110">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          onError={(e) => {
            // Placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%232a2a2a" width="400" height="300"/%3E%3C/svg%3E';
          }}
        />
      </div>
    </div>
  );
}
