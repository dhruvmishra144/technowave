import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { features } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';

const findImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id "${id}" not found.`);
  }
  return image;
};

export default function IntroductionSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Digital Experiences That Take Your Business to the Next Level
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We specialize in creating bespoke websites that integrate
            seamlessly into your brand, driving growth and user engagement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const image = findImage(feature.imageId);
            return (
              <Card
                key={i}
                className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
              >
                <CardHeader className="p-0">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={image.imageUrl}
                      alt={feature.title}
                      fill
                      className="object-cover rounded-t-lg"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-headline mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground flex-grow">
                    {feature.description}
                  </p>
                  <Button variant="link" className="p-0 mt-4 self-start" asChild>
                    <Link href="#">Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
