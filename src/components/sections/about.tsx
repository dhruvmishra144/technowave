import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/data';
import { Target, Eye, Gem } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary">
                Our Philosophy
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                Driven by Passion and Innovation
              </h2>
              <p className="text-lg text-muted-foreground">
                TechnoWave was founded on the principle that great web design
                should be a force for growth and creativity. We are a team of
                dedicated developers, designers, and strategists who are
                passionate about building exceptional digital experiences. Our
                collaborative approach ensures we understand your vision and
                deliver solutions that not only meet but exceed your
                expectations. We believe in transparency, quality, and building
                long-lasting partnerships with our clients.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Target className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold font-headline">
                  Our Mission
                </h3>
              </div>
              <p className="text-muted-foreground">
                To empower businesses of all sizes to thrive in the digital
                world by crafting beautiful, high-performance websites that
                drive results and create lasting value.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Eye className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold font-headline">Our Vision</h3>
              </div>
              <p className="text-muted-foreground">
                To be a leading web development agency recognized for our
                creativity, technical excellence, and unwavering commitment to
                client success, shaping the future of the web one project at a
                time.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Gem className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold font-headline">
                  Our Core Values
                </h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">
                    Innovation:
                  </span>{' '}
                  We constantly explore new technologies to deliver cutting-edge
                  solutions.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Quality:
                  </span>{' '}
                  We are committed to the highest standards of excellence in
                  every line of code and pixel we design.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Partnership:
                  </span>{' '}
                  We build strong, collaborative relationships with our clients,
                  acting as a true extension of their team.
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold font-headline">
                Meet the Team
              </h3>
              <p className="text-muted-foreground">
                The creative minds behind your next project.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center text-center"
                >
                  <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
                    <AvatarImage
                      src={member.image.imageUrl}
                      alt={member.name}
                      data-ai-hint={member.image.imageHint}
                    />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h4 className="text-lg font-bold font-headline">
                    {member.name}
                  </h4>
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