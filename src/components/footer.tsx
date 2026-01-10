import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './logo';

const footerLinks = {
    'Product': [
        { href: "/#features", label: 'Features' },
        { href: "/#integrations", label: 'Integrations' },
        { href: "/#pricing", label: 'Pricing' },
        { href: "/#faq", label: 'FAQ' },
    ],
    'Company': [
        { href: "/about", label: 'About' },
        { href: "#", label: 'Careers' },
        { href: "/blog", label: 'Blog' },
        { href: "/contact", label: 'Contact' },
    ],
    'Resources': [
        { href: "#", label: 'Docs' },
        { href: "#", label: 'API Reference' },
        { href: "#", label: 'Support' },
        { href: "/status", label: 'Status' },
    ],
    'Legal': [
        { href: "#", label: 'Terms' },
        { href: "#", label: 'Privacy' },
        { href: "#", label: 'Licenses' },
    ],
};

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1">
                <Link href="/" className="flex items-center space-x-2 mb-4 px-4">
                    <Logo />
                    
                </Link>
                <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} TechnoWave Inc. All rights reserved.
                </p>
                <div className="flex items-center space-x-2 mt-4">
                    <Button variant="ghost" size="icon" asChild>
                    <Link href="#" aria-label="Twitter">
                        <Twitter className="h-5 w-5" />
                    </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                    <Link href="#" aria-label="Facebook">
                        <Facebook className="h-5 w-5" />
                    </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                    <Link href="#" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                    </Link>
                    </Button>
                </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                    <h4 className="font-headline text-md font-semibold mb-4">{title}</h4>
                    <ul className="space-y-2">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

        </div>
      </div>
    </footer>
  );
}
