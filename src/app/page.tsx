import HeroSection from '@/components/sections/hero';
import IntroductionSection from '@/components/sections/introduction';
import ProcessSection from '@/components/sections/process';
import BenefitsSection from '@/components/sections/benefits';
import CtaSection from '@/components/sections/cta';
import PricingSection from '@/components/sections/pricing';
import TestimonialsSection from '@/components/sections/testimonials';
import FaqSection from '@/components/sections/faq';
import GsapScrollAnimator from '@/components/gsap-scroll-animator';

export default function Home() {
  return (
    <>
      <GsapScrollAnimator />
      <HeroSection />
      <div className="gsap-animated-section">
        <IntroductionSection />
      </div>
      <div className="gsap-animated-section">
        <ProcessSection />
      </div>
      <div className="gsap-animated-section">
        <BenefitsSection />
      </div>
      <div className="gsap-animated-section">
        <PricingSection />
      </div>
      <div className="gsap-animated-section">
        <TestimonialsSection />
      </div>
      <div className="gsap-animated-section">
        <FaqSection />
      </div>
      <div className="gsap-animated-section">
        <CtaSection />
      </div>
    </>
  );
}
