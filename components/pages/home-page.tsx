// --- MODIFIED FILE: src/pages/HomePage.tsx ---
import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { MarqueeSlider } from '../components/home/MarqueeSlider';
import { CorePillars } from '../components/home/CorePillars';
import { ImpactSection } from '../components/home/ImpactSection';
import { PreFooterCTA } from '../components/home/PreFooterCTA';

export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <MarqueeSlider />
      <CorePillars />
      <ImpactSection />
      <PreFooterCTA />
    </div>
  );
};


// --- MODIFIED FILE: src/components/home/HeroSection.tsx ---
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
// Note: You will need to find a suitable Lottie JSON file and place it in 'src/assets/'.
// For now, a placeholder is used.
// import animationData from '../../assets/samvaad-animation.json';

export const HeroSection: React.FC = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/contact');
    };

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
                        onClick={() => navigate('/services')} 
                        className="mt-8 bg-sage dark:bg-sage-light text-white dark:text-slate px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-transform transform hover:scale-105"
                    >
                        Explore Our Services
                    </button>
                </div>
                <div className="relative">
                    <div className="w-full h-auto max-w-lg mx-auto">
                         <Lottie 
                            // animationData={animationData} // Use this once you have the file
                            loop={true}
                            // Placeholder style until we have the animation
                            style={{ background: '#EAEAEA', borderRadius: '1rem', height: '400px' }}
                         />
                    </div>
                     {/* This is an invisible overlay for the clickable logo area in the animation */}
                    <div 
                        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-24 h-24 bg-transparent cursor-pointer" 
                        onClick={handleLogoClick}
                        title="Navigate to Contact Page"
                    ></div>
                </div>
            </div>
        </section>
    );
};


// --- MODIFIED FILE: src/components/home/MarqueeSlider.tsx ---
import React from 'react';

export const MarqueeSlider: React.FC = () => {
    const marqueeItems = ["Our Story", "Our Founders", "Our Mission", "Expression", "Healing", "Awareness"];

    return (
        <div className="bg-slate dark:bg-stone-100 text-stone dark:text-slate py-4 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap flex">
                {/* We render the list twice for a seamless loop */}
                {[...marqueeItems, ...marqueeItems].map((item, index) => (
                    <React.Fragment key={index}>
                        <span className="text-lg font-semibold mx-4">{item}</span>
                        <span className="text-sage dark:text-sage-light">•</span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};


// --- MODIFIED FILE: src/components/home/CorePillars.tsx ---
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


// --- MODIFIED FILE: src/components/home/ImpactSection.tsx ---
import React, { useState } from 'react';
import { EventsSlider } from './EventsSlider';
import { TestimonialsSlider } from './TestimonialsSlider';
import { EventDetailModal, Event } from '../modals/EventDetailModal';

export const ImpactSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    const handleOpenEventModal = (eventData: Event) => {
        setSelectedEvent(eventData);
        setIsModalOpen(true);
    };

    return (
        <section className="py-20 bg-stone-100 dark:bg-slate-800 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold">Our Impact</h2>
                    <p className="mt-4 text-lg text-slate/80 dark:text-stone/80 max-w-3xl mx-auto">
                        Through our events and community engagement, we've already begun to create ripples of change.
                    </p>
                </div>
            </div>
            <div className="space-y-16">
                <EventsSlider onCardClick={handleOpenEventModal} />
                <TestimonialsSlider />
            </div>
            {selectedEvent && (
                <EventDetailModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    event={selectedEvent}
                />
            )}
        </section>
    );
};


// --- MODIFIED FILE: src/components/home/EventsSlider.tsx ---
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Event } from '../modals/EventDetailModal';

const eventsData: Event[] = [
    { title: "SAMVAAD for Sustainability", description: "Our inaugural event explored how conscious living and digital safety are deeply tied to emotional and societal well-being.", image: "https://placehold.co/600x400/879A74/FFFFFF?text=Sustainability" },
    { title: "Mental Health & Emotional Wellbeing", description: "This edition took a bold leap into normalizing conversations around mental health, with panel discussions, performances, and expert keynotes.", image: "https://placehold.co/600x400/36454F/FFFFFF?text=Mental+Health" },
    { title: "The Art of Expression", description: "A workshop focused on using creative arts as a medium for emotional expression and healing.", image: "https://placehold.co/600x400/A7B894/FFFFFF?text=Art+Workshop" },
    { title: "Founder's Summit 2025", description: "Bringing together industry leaders and mentors to connect with high-intent students.", image: "https://placehold.co/600x400/475867/FFFFFF?text=Founder's+Summit" },
];

export const EventsSlider: React.FC<{ onCardClick: (eventData: Event) => void }> = ({ onCardClick }) => {
    return (
        <div>
            <h3 className="text-3xl font-serif font-bold text-center mb-8">Past Events Catalogue</h3>
            <Swiper modules={[Autoplay]} spaceBetween={30} slidesPerView={1.5} centeredSlides={true} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false, reverseDirection: true }} breakpoints={{ 640: { slidesPerView: 2.5 }, 1024: { slidesPerView: 3.5 } }} className="!py-4">
                {eventsData.map((event, index) => (
                    <SwiperSlide key={index} onClick={() => onCardClick(event)} className="cursor-pointer">
                        <div className="bg-white dark:bg-slate p-4 rounded-lg shadow-md h-full group">
                            <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-md mb-4 group-hover:opacity-90 transition-opacity" />
                            <h4 className="font-bold text-lg text-slate dark:text-stone">{event.title}</h4>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};


// --- MODIFIED FILE: src/components/home/TestimonialsSlider.tsx ---
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const testimonialsData = [
    { quote: "SAMVAAD provided a space where I felt truly heard for the first time. It's more than just an event; it's a community.", author: "University Student" },
    { quote: "As a professional, the insights on emotional intelligence and leadership were invaluable. A much-needed conversation.", author: "Corporate Partner" },
    { quote: "The workshop on healing through art was transformative. It unlocked a part of me I didn't know existed.", author: "Workshop Attendee" },
    { quote: "An incredibly well-organized and impactful initiative. SAMVAAD is leading the way in youth mental wellness.", author: "Guest Speaker" }
];

export const TestimonialsSlider: React.FC = () => {
    return (
        <div>
            <h3 className="text-3xl font-serif font-bold text-center mb-8">Voices of Our Community</h3>
            <Swiper modules={[Autoplay]} spaceBetween={30} slidesPerView={1} centeredSlides={true} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false }} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
                {testimonialsData.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white dark:bg-slate p-8 rounded-lg shadow-md h-full">
                            <p className="italic text-slate/80 dark:text-stone/80">"{testimonial.quote}"</p>
                            <p className="mt-4 font-semibold text-right text-sage dark:text-sage-light">- {testimonial.author}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};


// --- MODIFIED FILE: src/components/modals/EventDetailModal.tsx ---
import React from 'react';

export interface Event { title: string; description: string; image: string; }
interface ModalProps { isOpen: boolean; onClose: () => void; event: Event; }

export const EventDetailModal: React.FC<ModalProps> = ({ isOpen, onClose, event }) => {
    if (!isOpen) return null;

    const shareOnWhatsApp = () => {
        const text = `Check out this event from SAMVAAD: ${event.title}. Learn more at www.samvaadconnect.com`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    };

    const shareOnLinkedIn = () => {
        const url = `https://www.linkedin.com/shareArticle?mini=true&url=www.samvaadconnect.com&title=${encodeURIComponent(event.title)}&summary=${encodeURIComponent(event.description)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-stone dark:bg-slate w-full max-w-2xl rounded-lg shadow-xl p-8 transform transition-all" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-start">
                    <h2 className="text-3xl font-serif font-bold mb-4">{event.title}</h2>
                    <button onClick={onClose} className="text-2xl font-bold hover:opacity-70">&times;</button>
                </div>
                <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-md mb-6" />
                <p className="mb-6">{event.description}</p>
                <div className="flex items-center justify-between">
                    <p className="font-semibold">Share this event:</p>
                    <div className="flex space-x-4">
                        <button onClick={shareOnWhatsApp} className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 text-sm font-semibold">WhatsApp</button>
                        <button onClick={shareOnLinkedIn} className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 text-sm font-semibold">LinkedIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- MODIFIED FILE: src/components/home/PreFooterCTA.tsx ---
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const PreFooterCTA: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x800/36454F/F5F5F4?text=Community')" }}>
            <div className="bg-slate/70 backdrop-brightness-75 py-20 md:py-32">
                 <div className="container mx-auto px-6 text-center text-white">
                      <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Let's Build a Better Society Together</h2>
                      <p className="text-lg mb-8 max-w-2xl mx-auto text-stone-200">Whether you're an individual with a story, an expert with knowledge, or an organization with a cause, there's a place for you here.</p>
                      <button onClick={() => navigate('/contact')} className="bg-sage text-white px-10 py-4 rounded-lg font-semibold hover:bg-sage-light hover:text-slate transition-all transform hover:scale-105">
                          Reach Out to Us
                      </button>
                 </div>
            </div>
        </section>
    );
};
