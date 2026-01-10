'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Logo from './logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setSheetOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center">
        <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center space-x-2 px-4">
              <Logo />
            </Link>
        </div>
        
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className={cn(
                'transition-colors hover:text-primary',
                pathname === href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 justify-end items-center gap-2">
          <Button className="hidden md:inline-flex" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-6 px-4" onClick={handleLinkClick}>
                <Logo />
                
              </Link>
              <nav className="flex flex-col space-y-4">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className={cn(
                      'transition-colors hover:text-primary text-lg',
                      pathname === href ? 'text-primary' : 'text-foreground'
                    )}
                    onClick={handleLinkClick}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
              <Button className="mt-6 w-full" asChild>
                <Link href="/contact" onClick={handleLinkClick}>Get Started</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
