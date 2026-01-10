'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const dots: HTMLDivElement[] = [];
    const numDots = 50;

    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement('div');
      dot.className = 'absolute rounded-full bg-primary/30';
      gsap.set(dot, {
        x: gsap.utils.random(0, window.innerWidth, true),
        y: gsap.utils.random(0, container.scrollHeight, true),
        width: gsap.utils.random(2, 12),
        height: 'auto',
        aspectRatio: '1 / 1',
      });
      container.appendChild(dot);
      dots.push(dot);
    }

    // Parallax effect for dots
    dots.forEach((dot) => {
      gsap.to(dot, {
        y: '+=200', // Move dots down
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: gsap.utils.random(1, 3), // Creates the parallax effect
        },
      });
    });

    return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        if (container) {
          container.innerHTML = '';
        }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-20 h-full w-full"></div>;
}
