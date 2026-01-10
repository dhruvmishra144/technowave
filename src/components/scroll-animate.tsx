'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimateProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function ScrollAnimate({
  children,
  className,
  delay = 0,
  once = true,
}: ScrollAnimateProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay,
      },
    },
  };

  return (
    <div ref={ref} className={className}>
        <motion.div
          variants={variants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {children}
        </motion.div>
    </div>
  );
}
