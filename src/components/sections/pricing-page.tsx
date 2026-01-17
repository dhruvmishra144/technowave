import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { pricingTiers, featureComparison } from '@/lib/data';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function PricingPageSection() {
  return (
    <section id="pricing-page" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Pricing Tiers */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
            Flexible Pricing for Every Need
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Choose the perfect plan for your business. All plans are fully
            customizable to fit your unique requirements.
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

        {/* Feature Comparison Table */}
        <div className="max-w-5xl mx-auto mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline text-center mb-12">
            Compare Features
          </h2>
          <Card className="bg-card/50">
            <Table>
              <TableHeader>
                <TableRow className="border-b-border/50">
                  <TableHead className="w-[250px] font-bold text-foreground">Feature</TableHead>
                  <TableHead className="text-center font-bold text-foreground">Starter</TableHead>
                  <TableHead className="text-center font-bold text-foreground">Business</TableHead>
                  <TableHead className="text-center font-bold text-foreground">Enterprise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {featureComparison.map((item, index) => (
                  <TableRow key={index} className="border-b-border/20">
                    <TableCell className="font-medium">{item.feature}</TableCell>
                    <TableCell className="text-center text-muted-foreground">
                      {typeof item.starter === 'boolean' ? 
                        (item.starter ? <Check className="h-5 w-5 text-primary mx-auto" /> : <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />) : 
                        item.starter
                      }
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground">
                      {typeof item.business === 'boolean' ? 
                        (item.business ? <Check className="h-5 w-5 text-primary mx-auto" /> : <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />) : 
                        item.business
                      }
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground">
                      {typeof item.enterprise === 'boolean' ? 
                        (item.enterprise ? <Check className="h-5 w-5 text-primary mx-auto" /> : <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />) : 
                        item.enterprise
                      }
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

      </div>
    </section>
  );
}
