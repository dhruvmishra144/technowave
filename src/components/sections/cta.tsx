import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center bg-card p-8 md:p-12 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary)/0.2),rgba(255,255,255,0))] -z-10"></div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Ready to build your dream website?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Start your project today. Let's discuss how our web development expertise can drive your success.
          </p>
          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="/contact">Get a Free Proposal</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
