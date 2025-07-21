// --- NEW FILE: src/components/sections/HomeSection.tsx ---
import React from 'react';
import { HeroSection } from '../home/HeroSection';
import { MarqueeSlider } from '../home/MarqueeSlider';
import { CorePillars } from '../home/CorePillars';
import { FeaturedSection } from '../home/FeaturedSection'; 
import { ImpactSection } from '../home/ImpactSection';

export const HomeSection: React.FC = () => {
  return (
    <div id="home">
      <HeroSection />
      <FeaturedSection />
      <MarqueeSlider />
      <CorePillars />
      <ImpactSection />
    </div>
  );
};