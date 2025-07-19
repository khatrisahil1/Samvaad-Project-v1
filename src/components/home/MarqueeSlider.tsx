// --- MODIFIED FILE: src/components/home/MarqueeSlider.tsx ---
import React from 'react';

export const MarqueeSlider: React.FC = () => {
    const marqueeItems = ["Our Story", "Our Founders", "Our Mission", "Expression", "Healing", "Awareness"];

    // We create two identical lists to ensure a seamless loop
    const MarqueeContent = () => (
        <div className="flex items-center space-x-8 mx-4 flex-shrink-0">
            {marqueeItems.map((item, index) => (
                <React.Fragment key={index}>
                    <span className="text-lg font-semibold">{item}</span>
                    <span className="text-sage dark:text-sage-light">•</span>
                </React.Fragment>
            ))}
        </div>
    );

    return (
        <div className="bg-slate dark:bg-stone-100 text-stone dark:text-slate py-4 overflow-hidden">
            <div className="flex marquee-container">
                <MarqueeContent />
                <MarqueeContent />
            </div>
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-100%); }
                }
                .marquee-container {
                    animation: marquee 40s linear infinite;
                }
            `}</style>
        </div>
    );
};
