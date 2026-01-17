import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { MapPin, Briefcase, Clock } from 'lucide-react';
import Link from 'next/link';

const jobOpenings = [
  {
    title: 'Senior Frontend Developer',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are looking for an experienced Frontend Developer to help us build beautiful, high-performance web applications using Next.js and React.',
  },
  {
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Join our creative team to design intuitive and engaging user experiences for our clients. A strong portfolio is a must.',
  },
  {
    title: 'Backend Developer (Node.js)',
    location: 'Remote',
    type: 'Contract',
    description: 'Seeking a skilled backend developer to build and maintain scalable server-side applications and APIs.',
  },
];

export default function CareersSection() {
  return (
    <section id="careers" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
            Join Our Team
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We're building the future of the web, and we need your help. Explore our open positions and find your next great opportunity.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline mb-8">
            Open Positions
          </h2>
          <div className="grid gap-8">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <div className="flex items-center gap-4 text-muted-foreground text-sm pt-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{job.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/contact">Apply Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
              <h3 className="text-2xl font-bold font-headline">Don't see a role for you?</h3>
              <p className="text-muted-foreground mt-2">We're always looking for talented people. Send us your resume!</p>
              <Button variant="outline" className="mt-4" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
