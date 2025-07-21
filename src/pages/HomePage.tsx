// --- File: src/pages/HomePage.tsx ---
import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturedSection } from '../components/home/FeaturedSection';
import { MarqueeSlider } from '../components/home/MarqueeSlider';
import { CorePillars } from '../components/home/CorePillars';
import { ImpactSection } from '../components/home/ImpactSection';
import { PreFooterCTA } from '../components/home/PreFooterCTA';


export const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
      <MarqueeSlider />
      <CorePillars />
      <ImpactSection />
      <PreFooterCTA onOpenModal={() => setIsModalOpen(true)} />
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Coming Soon</h2>
            <p>Stay tuned for exciting updates!</p>
            <button
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};