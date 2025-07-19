// --- File: src/components/modals/EventDetailModal.tsx ---
import React from 'react';

export interface Event { title: string; description: string; image: string; }
interface ModalProps { isOpen: boolean; onClose: () => void; event: Event; }

export const EventDetailModal: React.FC<ModalProps> = ({ isOpen, onClose, event }) => {
    if (!isOpen) return null;
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
                        <button className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 text-sm font-semibold">WhatsApp</button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 text-sm font-semibold">LinkedIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
