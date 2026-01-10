import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { testimonials } from '@/lib/data';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
            What Our Clients Are Saying About Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real stories from businesses we've helped transform.
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
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <Card className="h-full flex flex-col">
                    <CardContent className="p-6 flex-grow flex flex-col justify-between">
                      <blockquote className="text-muted-foreground text-lg italic mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <Avatar className="w-14 h-14 border-2 border-primary">
                          <AvatarImage
                            src={testimonial.image.imageUrl}
                            alt={testimonial.name}
                            data-ai-hint={testimonial.image.imageHint}
                          />
                          <AvatarFallback>
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold font-headline">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-primary">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-12" />
          <CarouselNext className="hidden sm:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
}
