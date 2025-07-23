// --- File: src/components/home/CorePillars.tsx ---
import React from 'react';

const pillarsData = [
    { 
        title: "Expression", 
        description: "Creating safe judgment-free spaces.",
        icon: "/logos/expression.png"
    },
    { 
        title: "Empathy", 
        description: "Fostering understanding through deep listening and connection.",
        icon: "/logos/empathy.png"
    },
    { 
        title: "Empowerment", 
        description: "Equipping individuals with awareness.",
        icon: "/logos/empowerment.png"
    },
    { 
        title: "Engagement", 
        description: "Encouraging participation through meaningful conversations.",
        icon: "/logos/engagement.png"
    }
];

export const CorePillars: React.FC = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold">Our Core Pillars</h2>
                    <p className="mt-4 text-lg text-slate/80 dark:text-stone/80 max-w-3xl mx-auto">
                        Four values guide every conversation, workshop, and initiative.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillarsData.map((pillar) => (
                        <div key={pillar.title} className="bg-stone-100 dark:bg-slate-800 p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center">
                            <img src={pillar.icon} alt={pillar.title} className="w-14 h-14 mb-4" />
                            <h3 className="text-2xl font-serif font-bold text-sage dark:text-sage-light mb-4">{pillar.title}</h3>
                            <p className="text-center">{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

