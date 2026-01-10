import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { portfolioProjects } from '@/lib/data';
import InspirationForm from '../ai/inspiration-form';

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
            Our Creative Showcase
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore a selection of our finest work and see how we've helped clients achieve their goals.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {portfolioProjects.map((project) => (
              <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden group">
                    <CardContent className="flex flex-col aspect-[4/3] items-center justify-center p-0">
                      <Image
                        src={project.image.imageUrl}
                        alt={project.title}
                        width={600}
                        height={400}
                        data-ai-hint={project.image.imageHint}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/50 flex flex-col items-start justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-xl font-bold text-white font-headline">{project.title}</h3>
                        <p className="text-sm text-gray-300 mt-1">{project.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
        
        <div className="mt-24 md:mt-32">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
              Project Inspiration Tool
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Need an idea for your next project? Describe your niche and let our AI generate a website mockup for you.
            </p>
          </div>
          <InspirationForm />
        </div>
      </div>
    </section>
  );
}
