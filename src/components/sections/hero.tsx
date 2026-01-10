'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroSection() {
  const blob1 = useRef(null);
  const blob2 = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const heroElement = heroRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      if (heroElement) {
        const { top, left } = (heroElement as HTMLElement).getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        gsap.to(blob1.current, {
          x: x,
          y: y,
          duration: 1.5,
          ease: 'power3.out',
        });
        gsap.to(blob2.current, {
          x: x,
          y: y,
          duration: 2,
          ease: 'power3.out',
          delay: 0.1,
        });
      }
    };

    if (heroElement) {
      (heroElement as HTMLElement).addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroElement) {
        (heroElement as HTMLElement).removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section ref={heroRef} className="relative w-full py-20 md:py-32 lg:py-40 bg-background overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[radial-gradient(hsl(var(--primary)/0.1)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

        <div
          ref={blob1}
          className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full filter blur-[150px] opacity-40 -translate-x-1/2 -translate-y-1/2"
        />
        <div
          ref={blob2}
          className="absolute top-0 left-0 w-80 h-80 bg-accent/30 rounded-full filter blur-[120px] opacity-40 -translate-x-1/2 -translate-y-1/2"
        />
      </div>


      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Beautiful Websites That Perform
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            TechnoWave is a premium web development agency that builds
            stunning, high-performance websites for modern businesses.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">
                <PlayCircle className="mr-2" /> View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[30rem] bg-primary/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
