import { CheckCircle } from "lucide-react";

const benefits = [
    {
        title: "Boost Efficiency",
        description: "Automate repetitive tasks to free up your team for more strategic work."
    },
    {
        title: "Reduce Costs",
        description: "Lower operational costs by optimizing processes and reducing manual labor."
    },
    {
        title: "Increase Accuracy",
        description: "Minimize human error in data entry and processing with AI-powered precision."
    },
    {
        title: "Scale Operations",
        description: "Handle growing workloads without a proportional increase in staff or resources."
    }
]

export default function BenefitsSection() {
    return (
        <section className="w-full py-20 md:py-32 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                        The Key Benefits of AI for Your Business Growth
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Unlock your business's potential by leveraging the power of artificial intelligence.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit) => (
                        <div key={benefit.title} className="bg-card p-6 rounded-lg border border-border/50">
                            <CheckCircle className="h-8 w-8 text-primary mb-4" />
                            <h3 className="text-xl font-bold font-headline mb-2">{benefit.title}</h3>
                            <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
