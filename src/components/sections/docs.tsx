import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const topics = [
  {
    title: 'Getting Started',
    description: 'An overview of the TechnoWave platform and how to set up your first project.',
    href: '#',
  },
  {
    title: 'API Integration',
    description: 'Learn how to connect your applications to our services using our REST API.',
    href: '/api-reference',
  },
  {
    title: 'Customization Guide',
    description: 'A deep dive into customizing the look and feel of your website components.',
    href: '#',
  },
  {
    title: 'Deployment',
    description: 'Step-by-step instructions for deploying your website to various hosting platforms.',
    href: '#',
  },
]

export default function DocsSection() {
  return (
    <section id="docs" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
            Documentation
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explore our comprehensive documentation to get started with building, customizing, and deploying your projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
          {topics.map((topic, index) => (
            <Link href={topic.href} key={index} className="group">
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 group-hover:border-primary/50 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{topic.title}</span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{topic.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
