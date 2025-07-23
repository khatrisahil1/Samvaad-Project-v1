// FeaturedSection component highlights a featured YouTube video with interaction options,
// and displays a playlist sidebar for additional episodes.
import React from 'react';
import Link from 'next/link';


const FeaturedSection: React.FC = () => {
    // Updated with the new YouTube video ID
    const videoId = "mfn5JVRk94c"; 

    // Handles browser-native sharing if supported
    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                url: window.location.href
            }).catch(console.error);
        } else {
            // Fallback for browsers that don't support the Web Share API
            alert('Sharing is not supported on this browser.');
        }
    };

    // Main section with video embed and additional controls
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold">Featured Story</h2>
                    <p className="mt-4 text-lg text-slate/80 dark:text-stone/80 max-w-3xl mx-auto">
                        Dive deeper into our mission and see the impact of our conversations in action.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="col-span-2 space-y-4">
                        <div className="w-full h-[220px] md:h-[320px] lg:w-[95%] lg:h-[400px] rounded-lg overflow-hidden shadow-2xl mx-auto lg:ml-0 lg:mr-auto">
                            {/* Embedded YouTube video */}
                            <iframe 
                                src="https://www.youtube.com/embed/mfn5JVRk94c?list=PLmdzQWa-VTLBj3hw-vOJTqrs2M02Jar8E"
                                title="SAMVAAD Playlist"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 items-center bg-slate-100 dark:bg-slate-800 p-5 rounded-xl shadow-lg max-w-xl mx-auto lg:mx-0 transition-all duration-300">
                            <a
                                href="https://www.youtube.com/watch?v=mfn5JVRk94c&feature=like"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-700 rounded-full shadow hover:shadow-md hover:scale-110 transition-transform duration-200"
                            >
                                <img src="/logos/like.svg" alt="Like" className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.youtube.com/watch?v=mfn5JVRk94c&feature=share"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-700 rounded-full shadow hover:shadow-md hover:scale-110 transition-transform duration-200"
                            >
                                <img src="/logos/share.svg" alt="Share" className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.youtube.com/watch?v=mfn5JVRk94c&feature=watch_later"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-700 rounded-full shadow hover:shadow-md hover:scale-110 transition-transform duration-200"
                            >
                                <img src="/logos/clock.svg" alt="Watch Later" className="w-5 h-5" />
                            </a>
                            <div className="ml-auto flex items-center gap-2">
                                <a
                                    href="https://www.youtube.com/@SAMVAAD-fromideastoimpact?sub_confirmation=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full shadow hover:bg-red-700 hover:scale-105 transition-transform duration-200"
                                >
                                    <img src="/logos/bell.svg" alt="Subscribe" className="w-5 h-5" />
                                    <span className="text-sm font-semibold">Subscribe</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center lg:text-left">
                            <h3 className="text-3xl font-serif font-bold mb-4">One Conversation at a Time</h3>
                            <p className="text-slate/80 dark:text-stone/80 mb-8">
                                Our podcast, "SAMVAAD Connect," is where we host open, honest, and healing conversations with experts, artists, and leaders. Each episode is a step towards building a more emotionally intelligent world.
                            </p>
                        </div>
                        <div className="block lg:hidden w-full mt-6">
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold mb-2 text-center lg:text-left">More from this Playlist</h4>
                                {/* Sidebar playlist thumbnails */}
                                <ul className="flex gap-4 overflow-x-auto whitespace-nowrap pb-2">
                                    {[
                                        { title: "Ep 1: Mental Health Myths", id: "mfn5JVRk94c" },
                                        { title: "Ep 2: Top Cancer Surgeon in India", id: "98GORpJfgSI" },
                                        { title: "Ep 3: AI vs Real Designers", id: "CrJ6qlQRe88" },
                                    ].map((video) => (
                                        <li key={video.id} className="min-w-[220px]">
                                            <a
                                                href={`https://www.youtube.com/watch?v=${video.id}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block hover:bg-slate-100 dark:hover:bg-slate-800 p-2 rounded-md transition"
                                            >
                                                <img
                                                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                                                    alt={video.title}
                                                    className="w-full h-24 rounded-md object-cover mb-2"
                                                />
                                                <span className="block text-sm font-medium text-slate-800 dark:text-slate-200 text-center">{video.title}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold mb-2 text-left">More from this Playlist</h4>
                            {/* Sidebar playlist thumbnails */}
                            <ul className="space-y-3">
                                {[
                                    { title: "Ep 1: Mental Health Myths", id: "mfn5JVRk94c" },
                                    { title: "Ep 2: Top Cancer Surgeon in India", id: "98GORpJfgSI" },
                                    { title: "Ep 3: AI vs Real Designers", id: "CrJ6qlQRe88" },
                                ].map((video) => (
                                    <li key={video.id}>
                                        <a
                                            href={`https://www.youtube.com/watch?v=${video.id}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-3 hover:bg-slate-100 dark:hover:bg-slate-800 p-2 rounded-md transition"
                                        >
                                            <img
                                                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                                                alt={video.title}
                                                className="w-28 h-20 rounded-md object-cover"
                                            />
                                            <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{video.title}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;