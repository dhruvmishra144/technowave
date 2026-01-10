import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="w-full py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
                    Ready to Transform Your Business?
                </h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    Become a trailblazer in your industry. Let's discuss how our AI solutions can drive your success.
                </p>
                <div className="mt-10">
                    <Button asChild size="lg">
                        <Link href="/contact">
                            Become a Creator Today
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    </section>
  );
}
