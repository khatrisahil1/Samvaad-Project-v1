// --- MODIFIED FILE: src/pages/index.tsx ---
// This is your main homepage. It no longer needs its own layout.
import { HeroSection } from "@/components/home/HeroSection";
import { MarqueeSlider } from "@/components/home/MarqueeSlider";
import { CorePillars } from "@/components/home/CorePillars";
import { ImpactSection } from "@/components/home/ImpactSection";
import FeaturedSection from '@/components/home/FeaturedSection';
import { PreFooterCTA } from "@/components/home/PreFooterCTA";


interface HomePageProps {
  onOpenModal: () => void;
}

export default function HomePage({ onOpenModal }: HomePageProps) {
  return (
    <>
      <HeroSection />
      <MarqueeSlider />
      <FeaturedSection />
      <CorePillars />
      <ImpactSection />
      <PreFooterCTA onOpenModal={onOpenModal} />
    </>
  );
}
