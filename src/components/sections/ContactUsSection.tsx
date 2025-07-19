// --- NEW FILE: src/components/sections/ContactUsSection.tsx ---
import React from 'react';

interface Props {
    onOpenModal: () => void;
}

export const ContactUsSection: React.FC<Props> = ({ onOpenModal }) => {
    return (
        <section id="contact" className="bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x800/36454F/F5F5F4?text=Community')" }}>
            <div className="bg-slate/70 backdrop-brightness-75 py-20 md:py-32">
                 <div className="container mx-auto px-6 text-center text-white">
                      <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Let's Build a Better Society Together</h2>
                      <p className="text-lg mb-8 max-w-2xl mx-auto text-stone-200">Whether you're an individual with a story, an expert with knowledge, or an organization with a cause, there's a place for you here.</p>
                      <button onClick={onOpenModal} className="bg-sage text-white px-10 py-4 rounded-lg font-semibold hover:bg-sage-light hover:text-slate transition-all transform hover:scale-105">
                          Reach Out to Us
                      </button>
                 </div>
            </div>
        </section>
    );
};