'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Code, Terminal, Database, Server } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function InteractiveCube() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const cube = cubeRef.current;

    if (!container || !cube) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const rotateY = gsap.utils.mapRange(0, width, -35, 35, x);
      const rotateX = gsap.utils.mapRange(0, height, 25, -25, y);

      gsap.to(cube, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.7,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cube, {
        rotateX: -15,
        rotateY: 20,
        duration: 0.7,
        ease: 'power2.out',
      });
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    // Set initial rotation
    handleMouseLeave();

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const faceClasses = "absolute flex items-center justify-center w-full h-full bg-card/60 border border-primary/30 backdrop-blur-sm";
  const iconClasses = "w-1/2 h-1/2 text-primary/70";

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center p-8 perspective-[1000px] overflow-hidden rounded-t-xl">
      <div ref={cubeRef} className="w-40 h-40 relative transform-style-3d">
        <div className={cn(faceClasses, 'translate-z-20')}><Code className={iconClasses} /></div>
        <div className={cn(faceClasses, 'rotate-y-180 -translate-z-20')}><Terminal className={iconClasses} /></div>
        <div className={cn(faceClasses, 'rotate-y-90 translate-x-20')}><Database className={iconClasses} /></div>
        <div className={cn(faceClasses, 'rotate-y-[-90deg] -translate-x-20')}><Server className={iconClasses} /></div>
        <div className={cn(faceClasses, 'rotate-x-90 translate-y-20')}></div>
        <div className={cn(faceClasses, 'rotate-x-[-90deg] -translate-y-20')}></div>
      </div>
    </div>
  );
}

// Add these to your CSS, for example in src/app/globals.css or a relevant stylesheet
/*
.perspective-\[1000px\] {
  perspective: 1000px;
}
.transform-style-3d {
  transform-style: preserve-3d;
}
.translate-z-20 {
  transform: translateZ(5rem);
}
.-translate-z-20 {
  transform: rotateY(180deg) translateZ(5rem);
}
.rotate-y-90 {
  transform: rotateY(90deg) translateZ(5rem);
}
.rotate-y-\[-90deg\] {
  transform: rotateY(-90deg) translateZ(5rem);
}
.rotate-x-90 {
  transform: rotateX(90deg) translateZ(5rem);
}
.rotate-x-\[-90deg\] {
  transform: rotateX(-90deg) translateZ(5rem);
}
*/