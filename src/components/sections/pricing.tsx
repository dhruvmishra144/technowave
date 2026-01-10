import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { pricingTiers } from '@/lib/data';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary mb-4">
            Pricing
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
            The Best Web Development at the Right Price
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the perfect plan for your business. All plans are fully
            customizable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                'flex flex-col bg-card/50 backdrop-blur-sm border-border/50',
                tier.popular
                  ? 'border-primary ring-2 ring-primary shadow-lg'
                  : ''
              )}
            >
              {tier.popular && (
                <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider text-center py-1 rounded-t-lg">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-headline">
                  {tier.name}
                </CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price.toLowerCase() !== 'custom' && (
                    <span className="text-muted-foreground">/mo</span>
                  )}
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.popular ? 'default' : 'outline'}
                  asChild
                >
                  <Link href="/contact">{tier.buttonText}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
