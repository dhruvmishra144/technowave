'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function InteractiveBlob() {
  const blob1 = useRef(null);
  const blob2 = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(blob1.current, {
        x: clientX,
        y: clientY,
        duration: 2,
        ease: 'power3.out',
      });
      gsap.to(blob2.current, {
        x: clientX,
        y: clientY,
        duration: 3,
        ease: 'power3.out',
        delay: 0.1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1]">
      <div
        ref={blob1}
        className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={blob2}
        className="absolute top-0 left-0 w-80 h-80 bg-accent/30 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
