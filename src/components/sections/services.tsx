import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { services } from '@/lib/data';

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
            Our Expertise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From concept to launch, we provide comprehensive AI automation services to bring your digital vision to life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="items-center text-center p-8">
                <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground pt-2">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
