import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import Header from '@/components/header';
import Footer from '@/components/footer';
import CustomCursor from '@/components/custom-cursor';
import ParallaxBackground from '@/components/parallax-background';

export const metadata: Metadata = {
  title: 'TechnoWave - Modern Web Development Agency',
  description: 'Building beautiful, high-performance websites for your business.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <Script id="touch-detector" strategy="beforeInteractive">
          {`
              const isTouchDevice = 'ontouchstart' in window;
              if (isTouchDevice) {
                document.documentElement.classList.add('touchevents');
              } else {
                document.documentElement.classList.remove('touchevents');
              }
          `}
        </Script>
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased'
        )}
      >
        <CustomCursor />
        <ParallaxBackground />
        <Header />
        <div className="container mx-auto">
          <main className="flex-grow">{children}</main>
        </div>
        <Footer />
        <Toaster />
        <Script id="tawk-to-script" strategy="afterInteractive">
          {`
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6988b6f83202f91c36de08b5/1jgv0lfnj';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
          `}
        </Script>
      </body>
    </html>
  );
}
