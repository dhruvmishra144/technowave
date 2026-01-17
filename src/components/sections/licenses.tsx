import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LicensesSection() {
  return (
    <section id="licenses" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
            Licenses
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We believe in the power of open source. This project is built with some amazing open-source libraries.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-16 prose prose-invert prose-lg">
          <p>
            The TechnoWave website template is licensed under the MIT License. You are free to use, modify, and distribute this code as you see fit, for personal or commercial projects.
          </p>
          <p>
            We utilize several third-party libraries, each with its own license. Below is a summary of the main dependencies and their licenses.
          </p>
          <Card className="bg-card/50 my-8">
            <CardHeader>
              <CardTitle>Core Libraries</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Next.js</strong> - MIT License</li>
                <li><strong>React</strong> - MIT License</li>
                <li><strong>Tailwind CSS</strong> - MIT License</li>
                <li><strong>ShadCN/UI</strong> - MIT License</li>
                <li><strong>Lucide Icons</strong> - ISC License</li>
                <li><strong>GSAP</strong> - Standard GreenSock License</li>
              </ul>
            </CardContent>
          </Card>
          <p>
            For a complete list of dependencies and their licenses, please refer to the `package.json` file in the project repository. It is your responsibility to comply with all third-party licenses.
          </p>
        </div>
      </div>
    </section>
  );
}
