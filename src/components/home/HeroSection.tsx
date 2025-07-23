"use client" // Add this for Next.js App Router compatibility

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation'; // Correct hook for Next.js App Router

export const HeroSection: React.FC = () => {
    const router = useRouter();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoEnded, setIsVideoEnded] = useState(false);

    const handleVideoEnd = () => {
        setIsVideoEnded(true);
        const video = videoRef.current;
        if (video) {
            // Freeze on last frame by pausing the video
            video.currentTime = video.duration;
        }
    };

    return (
        <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[#ffffff]" />
            {/* Animated radial glow background effect */}
            <div className="absolute inset-0 z-0 pointer-events-none animate-[pulse-bg_10s_linear_infinite] bg-[radial-gradient(circle_at_30%_30%,rgba(226,74,20,0.04)_0%,transparent_60%),radial-gradient(circle_at_70%_70%,rgba(0,0,0,0.03)_0%,transparent_60%)]" />
            <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center">
                <div className="relative flex items-center justify-center mb-8">
                    <video 
                      ref={videoRef}
                      src="/videos/hero-video.mp4" 
                      autoPlay 
                      muted
                      controls={false}
                      className="w-full max-w-md sm:max-w-lg md:max-w-xl h-auto"
                      playsInline
                      onEnded={handleVideoEnd}
                      poster={isVideoEnded ? "/videos/hero-video-thumbnail.jpg" : undefined}
                    />
                </div>
                <button
                    onClick={() => router.push('/services')}
                    className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-white transition duration-300 ease-out rounded-full shadow-md bg-black hover:bg-blue-600"
                >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#a0bfff] via-[#d68c6b] to-[#f2855e] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
                    <span className="relative z-10">Explore Our Services</span>
                </button>
            </div>
        </section>
    );
};
