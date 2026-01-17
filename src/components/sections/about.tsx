import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/data';
import {
  Users,
  Clock,
  TrendingUp,
  Lightbulb,
  ShieldCheck,
  Rocket,
  Handshake,
  Check,
  X,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const stats = [
  {
    icon: Users,
    value: '50+',
    label: 'Happy Clients',
    description:
      'We have successfully partnered with over 50 businesses, helping them achieve their digital goals.',
  },
  {
    icon: Clock,
    value: '24H',
    label: 'Avg. Response Time',
    description:
      'Our team is committed to providing fast and effective communication, with an average response time of 24 hours.',
  },
  {
    icon: TrendingUp,
    value: '99%',
    label: 'Client Satisfaction',
    description:
      'We pride ourselves on delivering exceptional results, reflected in our high client satisfaction rate.',
  },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Driving Innovation Forward',
    description:
      'We embrace the latest technologies to build cutting-edge solutions that are both creative and efficient.',
  },
  {
    icon: ShieldCheck,
    title: 'Committed to Integrity & Trust',
    description:
      'We believe in transparency and honesty in all our partnerships, ensuring you can trust us with your vision.',
  },
  {
    icon: Rocket,
    title: 'Empowering Business Growth',
    description:
      'Our primary goal is to create digital experiences that drive real, measurable growth for your business.',
  },
  {
    icon: Handshake,
    title: 'Putting Customers First',
    description:
      'We prioritize your needs and work collaboratively to ensure the final product exceeds your expectations.',
  },
];

const comparison = {
  traditional: [
    'Slow, outdated processes',
    'High overhead costs',
    'Generic, template-based designs',
    'Lack of scalability',
    'Limited ongoing support',
  ],
  technowave: [
    'Modern, agile development',
    'Efficient & cost-effective',
    'Custom, user-centric designs',
    'Built for growth & scalability',
    'Dedicated long-term partnership',
  ],
};

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 space-y-24">
        {/* Who We Are Section */}
        <div className="text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary mb-4">
            Who We Are
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Driven by Passion and Innovation
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            TechnoWave was founded on the principle that great web design should
            be a force for growth and creativity. We are a team of dedicated
*            developers, designers, and strategists passionate about building
            exceptional digital experiences.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-primary/20 p-6 text-center"
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-foreground font-headline">
                  {stat.value}
                </h3>
                <p className="font-semibold">{stat.label}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {stat.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* The Values Section */}
        <div className="text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary mb-4">
            Our Values
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            The Values Behind TechnoWave
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Our values guide every decision we make and every line of code we
            write. They are the foundation of our commitment to building a
            better, more connected web.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 p-6 text-left"
              >
                <CardHeader className="p-0 flex-row items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="p-0 pt-4">
                  <h3 className="font-headline text-lg font-bold">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What makes us stand out */}
        <div className="text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary mb-4">
            Our Approach
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            What Makes Us Different
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We move beyond traditional, slow-moving development to offer a
            modern, agile approach that delivers superior results faster.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card/30 border-destructive/50 p-6">
              <h3 className="text-xl font-bold font-headline mb-4 text-left">
                Traditional Methods
              </h3>
              <ul className="space-y-3 text-left">
                {comparison.traditional.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-destructive/80 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="bg-card/50 border-primary/50 p-6 ring-2 ring-primary/50">
              <h3 className="text-xl font-bold font-headline mb-4 text-left">
                The TechnoWave Way
              </h3>
              <ul className="space-y-3 text-left">
                {comparison.technowave.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary mb-4">
            Our Team
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Meet the Minds Behind TechnoWave
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We bring together technology and strategy to create amazing
            results.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center p-4 rounded-lg bg-card/40 border border-transparent hover:border-primary/30 transition-colors duration-300"
              >
                <Avatar className="w-32 h-32 mb-4 border-4 border-primary/50">
                  <AvatarImage
                    src={member.image.imageUrl}
                    alt={member.name}
                    data-ai-hint={member.image.imageHint}
                  />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h4 className="text-xl font-bold font-headline">
                  {member.name}
                </h4>
                <p className="text-md text-primary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
