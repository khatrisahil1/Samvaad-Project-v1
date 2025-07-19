// --- File: src/components/home/CorePillars.tsx ---
import React from 'react';

const pillarsData = [
    { title: "Expression", description: "Creating safe, judgment-free spaces where thoughts, emotions, and stories can be openly shared—because healing begins when we are heard." },
    { title: "Empathy", description: "Fostering understanding by listening deeply and connecting beyond labels, roles, and differences—building a culture of emotional sensitivity." },
    { title: "Empowerment", description: "Equipping individuals with awareness, tools, and confidence to take charge of their emotional, social, and digital well-being." },
    { title: "Engagement", description: "Encouraging active participation across communities through meaningful conversations, creative platforms, and collaborative action." }
];

export const CorePillars: React.FC = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold">Our Core Pillars</h2>
                    <p className="mt-4 text-lg text-slate/80 dark:text-stone/80 max-w-3xl mx-auto">
                        Our work is rooted in four foundational values that guide every conversation, workshop, and initiative we undertake.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillarsData.map((pillar) => (
                        <div key={pillar.title} className="bg-stone-100 dark:bg-slate-800 p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <h3 className="text-2xl font-serif font-bold text-sage dark:text-sage-light mb-4">{pillar.title}</h3>
                            <p>{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

