import HeroSection from '@/components/sections/hero';
import IntroductionSection from '@/components/sections/introduction';
import ProcessSection from '@/components/sections/process';
import BenefitsSection from '@/components/sections/benefits';
import CtaSection from '@/components/sections/cta';
import PricingSection from '@/components/sections/pricing';
import TestimonialsSection from '@/components/sections/testimonials';
import FaqSection from '@/components/sections/faq';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <ProcessSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
