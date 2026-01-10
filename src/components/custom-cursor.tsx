'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.15;

    const xSet = gsap.quickSetter(follower, 'x', 'px');
    const ySet = gsap.quickSetter(follower, 'y', 'px');

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out' });
    };

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });
    
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [role="button"]')) {
        gsap.to(follower, { scale: 3, duration: 0.3 });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [role="button"]')) {
        gsap.to(follower, { scale: 1, duration: 0.3 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[100] h-2 w-2 rounded-full bg-primary"
      />
      <div
        ref={followerRef}
        className="pointer-events-none fixed top-0 left-0 z-[100] h-8 w-8 rounded-full border-2 border-primary mix-blend-difference"
      />
    </>
  );
}