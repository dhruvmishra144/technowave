import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';
import { portfolioProjects } from '@/lib/data';
import { Badge } from '../ui/badge';

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
           <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary mb-4">
            Our Work
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
            Explore Our Portfolio
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of our recent projects. See how we've helped businesses like yours succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {portfolioProjects.map((project, i) => (
              <Card key={project.id} className="group overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-colors duration-300">
                <CardHeader className="p-0">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={project.image.imageHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                   <Badge variant="outline" className="mb-2 border-primary/50 text-primary">Case Study</Badge>
                  <h3 className="text-xl font-bold font-headline text-foreground mb-2">{project.title}</h3>
                   <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
