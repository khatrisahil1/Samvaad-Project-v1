// --- MODIFIED FILE: src/components/home/HeroSection.tsx ---
"use client" // Add this for Next.js App Router compatibility

import React from 'react';
import { useRouter } from 'next/navigation'; // Correct hook for Next.js App Router
import Image from 'next/image'; // Correct component for images in Next.js

export const HeroSection: React.FC = () => {
    const router = useRouter();

    return (
        <section className="bg-stone-100 dark:bg-slate-800 py-20">
            <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
                <div className="text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                        From Ideas to Impact
                    </h1>
                    <p className="mt-4 text-lg text-slate/80 dark:text-stone/80">
                        Empowering minds, fostering understanding, and building a better society through dialogue and insight.
                    </p>
                    <button 
                        onClick={() => router.push('/services')} 
                        className="mt-8 bg-sage dark:bg-sage-light text-white dark:text-slate px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-transform transform hover:scale-105"
                    >
                        Explore Our Services
                    </button>
                </div>
                <div className="relative flex items-center justify-center">
                    {/* The 'src' prop now uses a direct path from the public folder.
                      No import statement is needed.
                    */}
                    <Image 
                        src="/samvaad-main-logo.png" 
                        alt="SAMVAAD Initiative" 
                        width={600}
                        height={600}
                        className="w-full h-auto max-w-md mx-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};
