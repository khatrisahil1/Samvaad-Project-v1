// --- File: src/components/home/ImpactSection.tsx ---
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
