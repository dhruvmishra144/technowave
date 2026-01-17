import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { LifeBuoy, BookOpen, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function SupportSection() {
  return (
    <section id="support" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
            Support Center
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            How can we help you? Find answers to your questions, contact our team, and explore our resources.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
            <div className="relative mb-12">
                <Input type="search" placeholder="Search for answers..." className="w-full p-6 text-lg" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <Card className="bg-card/50 border-border/50">
                    <CardHeader className="items-center">
                        <div className="p-4 bg-primary/10 rounded-full mb-4">
                            <BookOpen className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle>Documentation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">Browse our detailed guides and API references.</p>
                        <Button variant="outline" asChild>
                            <Link href="/docs">Explore Docs</Link>
                        </Button>
                    </CardContent>
                </Card>
                 <Card className="bg-card/50 border-border/50">
                    <CardHeader className="items-center">
                        <div className="p-4 bg-primary/10 rounded-full mb-4">
                            <LifeBuoy className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle>FAQs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">Find answers to frequently asked questions.</p>
                         <Button variant="outline" asChild>
                            <Link href="/#faq">View FAQs</Link>
                        </Button>
                    </CardContent>
                </Card>
                 <Card className="bg-card/50 border-border/50">
                    <CardHeader className="items-center">
                        <div className="p-4 bg-primary/10 rounded-full mb-4">
                            <MessageSquare className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle>Contact Us</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">Get in touch with our support team for personal assistance.</p>
                         <Button variant="outline" asChild>
                            <Link href="/contact">Get in Touch</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
