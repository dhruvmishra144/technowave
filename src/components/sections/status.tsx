import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const services = [
    { name: 'Website & API', status: 'operational' },
    { name: 'Customer Support', status: 'operational' },
    { name: 'Payment Gateway', status: 'degraded' },
    { name: 'Analytics Services', status: 'outage' },
];

const getStatusInfo = (status: string) => {
    switch(status) {
        case 'operational':
            return {
                icon: <CheckCircle className="w-6 h-6 text-green-500" />,
                text: 'All systems operational',
                badge: <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30 border-green-500/30">Operational</Badge>
            };
        case 'degraded':
            return {
                icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
                text: 'Degraded Performance',
                badge: <Badge className="bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30 border-yellow-500/30">Degraded</Badge>
            };
        case 'outage':
             return {
                icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
                text: 'Major Outage',
                badge: <Badge className="bg-red-500/20 text-red-500 hover:bg-red-500/30 border-red-500/30">Outage</Badge>
            };
        default:
             return {
                icon: <Clock className="w-6 h-6 text-gray-500" />,
                text: 'Under Maintenance',
                badge: <Badge variant="secondary">Maintenance</Badge>
            };
    }
}

export default function StatusSection() {
  return (
    <section id="status" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
            Service Status
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Current status of all TechnoWave services.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto mt-16 bg-card/50">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Current Status</CardTitle>
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-semibold text-green-500">All Systems Operational</span>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                {services.map(service => {
                    const statusInfo = getStatusInfo(service.status);
                    return (
                        <div key={service.name} className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                           <span className="font-medium">{service.name}</span>
                           {statusInfo.badge}
                        </div>
                    );
                })}
            </CardContent>
        </Card>

        <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-3xl font-bold font-headline mb-8 text-center">Recent Incidents</h2>
            <div className="space-y-6">
                <Card className="bg-card/50">
                    <CardHeader>
                        <CardTitle className="text-xl">Minor Payment Gateway Issues</CardTitle>
                        <p className="text-sm text-muted-foreground">July 26, 2024</p>
                    </CardHeader>
                    <CardContent>
                        <p><strong className="text-yellow-500">Monitoring</strong> - A fix has been implemented and we are monitoring the results. We've seen a significant improvement in payment processing success rates.</p>
                        <p className="text-sm text-muted-foreground mt-4">Jul 26, 14:30 UTC</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
