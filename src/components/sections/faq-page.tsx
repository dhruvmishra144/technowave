import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { detailedFaqs } from '@/lib/data';

export default function FaqPageSection() {
  return (
    <section id="faq-page" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Find answers to all your questions about our services, process, and pricing. If you can't find what you're looking for, feel free to <a href="/contact" className="text-primary underline">contact us</a>.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {detailedFaqs.map((category, catIndex) => (
            <div key={catIndex}>
              <h2 className="text-2xl font-bold font-headline mb-8 border-b border-primary/50 pb-4">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem 
                    key={faqIndex} 
                    value={`item-${catIndex}-${faqIndex}`}
                    className="bg-card/50 backdrop-blur-sm border-border/50 rounded-xl"
                  >
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
          ))}
        </div>
      </div>
    </section>
  );
}
