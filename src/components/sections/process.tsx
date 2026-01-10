import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { processSteps } from '@/lib/data';

export default function ProcessSection() {
  return (
    <section id="process" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary mb-4">
            How it Works
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
            Our Simple, Smart, and Scalable Process
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-px bg-border/50 hidden md:block transform -translate-x-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className={`relative flex items-center gap-6 ${
                  index % 2 === 1 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                <div 
                  className={`hidden md:flex absolute top-1/2 -translate-y-1/2 bg-primary text-primary-foreground h-12 w-12 rounded-full items-center justify-center font-bold text-xl z-10
                    ${index % 2 === 0 ? 'right-[calc(50%-3rem)]' : 'left-[calc(50%-3rem)]'}`
                  }
                >
                  {step.step}
                </div>
                 <div className="flex md:hidden bg-primary text-primary-foreground h-10 w-10 rounded-full items-center justify-center font-bold text-lg shrink-0">
                    {step.step}
                </div>
                <Card className={`w-full max-w-md bg-card/50 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <CardHeader>
                    <div className={`p-3 bg-primary/10 rounded-full mb-3 inline-block ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-xl">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
