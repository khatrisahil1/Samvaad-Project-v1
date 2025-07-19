// --- File: src/components/home/TestimonialsSlider.tsx ---
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