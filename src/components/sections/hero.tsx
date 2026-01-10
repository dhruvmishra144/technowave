import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary mb-4">
            Next-Generation Web Solutions
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Crafting the Future of the Web
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            At TechnoWave, we build cutting-edge websites and digital experiences that drive growth, innovation, and success for your business in the modern technological landscape.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="#portfolio">
                Our Work <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
       <div
        className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[radial-gradient(#84C87B_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-20">
      </div>
    </section>
  );
}
