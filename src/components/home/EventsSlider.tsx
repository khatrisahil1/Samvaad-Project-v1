// --- File: src/components/home/EventsSlider.tsx ---
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
