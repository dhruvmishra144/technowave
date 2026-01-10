import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';

const findImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id "${id}" not found.`);
  }
  return image;
};
const introImage = findImage('introduction');


const features = [
    "Easy Customization & High Conversions",
    "SEO Optimized & Mobile Ready",
    "Measure Performance With Advanced Analytics",
    "100% responsive & Mobile friendly",
    "Tons of CMS-powered sections"
]

export default function IntroductionSection() {
    return (
        <section className="w-full py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary">
                            Introducing Xtract
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                            The Best AI Automation on the Right Track
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Xtract is the most versatile Framer template for AI startups and businesses, made for you to stand out from the rest. Customize your site easily, create attractive lead magnets, & convert more leads.
                        </p>
                        <ul className="space-y-3">
                            {features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <Check className="h-5 w-5 text-primary" />
                                    <span className="text-muted-foreground">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative aspect-[3/4]">
                        <Image 
                            src={introImage.imageUrl}
                            alt="AI Automation Interface"
                            fill
                            className="object-cover rounded-xl"
                            data-ai-hint={introImage.imageHint}
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
