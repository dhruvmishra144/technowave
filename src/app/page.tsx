import Header from '@/components/header';
import HeroSection from '@/components/sections/hero';
import ServicesSection from '@/components/sections/services';
import PortfolioSection from '@/components/sections/portfolio';
import AboutSection from '@/components/sections/about';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
