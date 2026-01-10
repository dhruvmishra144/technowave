import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const findImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id "${id}" not found.`);
  }
  return image;
};
const benefitsImage = findImage('benefits-section');

export default function BenefitsSection() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square">
            <Image
              src={benefitsImage.imageUrl}
              alt="AI benefits illustration"
              fill
              className="object-contain"
              data-ai-hint={benefitsImage.imageHint}
            />
          </div>
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary">
              Why Xtract
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
              The Key Benefits of AI for Your Business Growth
            </h2>
            <p className="text-lg text-muted-foreground">
              Unlock your business's potential by leveraging the power of
              artificial intelligence. Our solutions are designed to deliver
              tangible results.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <Card key={i} className="bg-transparent border-0 shadow-none">
                  <CardHeader className="p-0 flex-row items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-xl">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-4">
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
