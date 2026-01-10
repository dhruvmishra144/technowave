import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/lib/data';

export default function FaqSection() {
  return (
    <section id="faq" className="w-full py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
            You've Got the questions, We've Got the Answers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers to common questions about our web development services.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="bg-card/50 backdrop-blur-sm border-border/50 rounded-xl">
                <AccordionTrigger className="text-lg text-left hover:no-underline px-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base px-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
