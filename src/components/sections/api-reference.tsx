import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ApiReferenceSection() {
  return (
    <section id="api-reference" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
            API Reference
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Detailed information about our API endpoints. Integrate with our services programmatically.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-16 space-y-12">
          <div>
            <h2 className="text-2xl font-bold font-headline mb-4">Authentication</h2>
            <Card className="bg-card/50">
              <CardContent className="p-6">
                <p className="text-muted-foreground">API requests are authenticated using API keys. Include your API key in the `Authorization` header of your request.</p>
                <pre className="bg-muted p-4 rounded-md mt-4 text-sm"><code>{'Authorization: Bearer <YOUR_API_KEY>'}</code></pre>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-headline mb-4">Endpoints</h2>
            
            <div className="space-y-8">
              <Card className="bg-card/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4">
                    <Badge variant="outline" className="text-green-400 border-green-400/50">GET</Badge>
                    <span>/v1/projects</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Retrieve a list of your projects.</p>
                  <h4 className="font-semibold mb-2">Response</h4>
                  <pre className="bg-muted p-4 rounded-md text-sm">{`[
  {
    "id": "proj_123",
    "name": "My First Project",
    "created_at": "2023-10-27T10:00:00Z"
  }
]`}</pre>
                </CardContent>
              </Card>

              <Card className="bg-card/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4">
                    <Badge variant="outline" className="text-blue-400 border-blue-400/50">POST</Badge>
                    <span>/v1/projects</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Create a new project.</p>
                  <h4 className="font-semibold mb-2">Body</h4>
                   <pre className="bg-muted p-4 rounded-md text-sm">{`{
  "name": "New Awesome Project"
}`}</pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
