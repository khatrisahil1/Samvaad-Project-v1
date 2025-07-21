// --- MODIFIED FILE: src/components/home/FeaturedSection.tsx ---
import React from 'react';
import Link from 'next/link';

export const FeaturedSection: React.FC = () => {
    // Updated with the new YouTube video ID
    const videoId = "CrJ6qlQRe88"; 

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'SAMVAAD: From Ideas to Impact',
                text: 'Check out this inspiring initiative from SAMVAAD.',
                url: window.location.href,
            }).catch(console.error);
        } else {
            // Fallback for browsers that don't support the Web Share API
            alert('Sharing is not supported on this browser.');
        }
    };

    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold">Featured Story</h2>
                    <p className="mt-4 text-lg text-slate/80 dark:text-stone/80 max-w-3xl mx-auto">
                        Dive deeper into our mission and see the impact of our conversations in action.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
                        <iframe 
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0`}
                            title="SAMVAAD Featured Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                    <div className="text-center lg:text-left">
                        <h3 className="text-3xl font-serif font-bold mb-4">One Conversation at a Time</h3>
                        <p className="text-slate/80 dark:text-stone/80 mb-8">
                            Our podcast, "SAMVAAD Connect," is where we host open, honest, and healing conversations with experts, artists, and leaders. Each episode is a step towards building a more emotionally intelligent world.
                        </p>
                        <div className="flex justify-center lg:justify-start space-x-4">
                            <Link href="/blog" className="bg-sage dark:bg-sage-light text-white dark:text-slate px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
                                Know More
                            </Link>
                            <button 
                                onClick={handleShare}
                                className="bg-stone-100 dark:bg-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
                            >
                                Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};