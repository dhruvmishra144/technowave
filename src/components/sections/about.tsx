import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/data';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary">
              Our Philosophy
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
              Driven by Passion and Innovation
            </h2>
            <p className="text-lg text-muted-foreground">
              Xtract was founded on the principle that AI automation should be a force for growth and creativity. We are a team of dedicated developers, designers, and strategists who are passionate about building exceptional digital experiences. Our collaborative approach ensures we understand your vision and deliver solutions that not only meet but exceed your expectations. We believe in transparency, quality, and building long-lasting partnerships with our clients.
            </p>
          </div>
          <div className="space-y-8">
            <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold font-headline">Meet the Team</h3>
                <p className="text-muted-foreground">The creative minds behind your next project.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
                    <AvatarImage src={member.image.imageUrl} alt={member.name} data-ai-hint={member.image.imageHint} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h4 className="text-lg font-bold font-headline">{member.name}</h4>
                  <p className="text-sm text-primary">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
