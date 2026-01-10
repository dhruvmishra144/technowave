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
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="p-4 bg-primary/10 rounded-full inline-block">
                    <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className='pt-1'>
                    <h3 className="font-headline text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
