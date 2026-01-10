import HeroSection from '@/components/sections/hero';
import IntroductionSection from '@/components/sections/introduction';
import BenefitsSection from '@/components/sections/benefits';
import CtaSection from '@/components/sections/cta';


export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <BenefitsSection />
      <CtaSection />
    </>
  );
}
