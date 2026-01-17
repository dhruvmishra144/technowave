'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const blobRef = useRef(null); // The new blob
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const blob = blobRef.current;

    if (!cursor || !follower || !blob) return;

    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;

    // Set initial state to be invisible and positioned at the center
    gsap.set([cursor, follower, blob], {
      x: initialX,
      y: initialY,
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
    });

    // Animate to visible after a short delay
    gsap.to([cursor, follower, blob], {
      opacity: 1,
      duration: 0.5,
      delay: 0.2,
      ease: 'power2.out',
    });

    const posFollower = { x: initialX, y: initialY };
    const posBlob = { x: initialX, y: initialY };
    const mouse = { x: initialX, y: initialY };

    const speedFollower = 0.15;
    const speedBlob = 0.1;

    const xSetFollower = gsap.quickSetter(follower, 'x', 'px');
    const ySetFollower = gsap.quickSetter(follower, 'y', 'px');
    const xSetBlob = gsap.quickSetter(blob, 'x', 'px');
    const ySetBlob = gsap.quickSetter(blob, 'y', 'px');

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    gsap.ticker.add(() => {
      // Ring follower
      const dtFollower =
        1.0 - Math.pow(1.0 - speedFollower, gsap.ticker.deltaRatio());
      posFollower.x += (mouse.x - posFollower.x) * dtFollower;
      posFollower.y += (mouse.y - posFollower.y) * dtFollower;
      xSetFollower(posFollower.x);
      ySetFollower(posFollower.y);

      // Blob follower
      const dtBlob = 1.0 - Math.pow(1.0 - speedBlob, gsap.ticker.deltaRatio());
      posBlob.x += (mouse.x - posBlob.x) * dtBlob;
      posBlob.y += (mouse.y - posBlob.y) * dtBlob;
      xSetBlob(posBlob.x);
      ySetBlob(posBlob.y);
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
      <div
        ref={blobRef}
        className="pointer-events-none fixed top-0 left-0 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
      />
    </>
  );
}