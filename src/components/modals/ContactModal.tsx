import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
    // Optionally, clear form fields here
  };

  return (
    <>
      <div 
        className="fixed inset-0 backdrop-blur-sm bg-black/40 backdrop-saturate-150 z-50 flex items-center justify-center p-4 transition-opacity duration-300" 
        onClick={onClose}
      >
        <div 
          className="bg-[#fefcf6] dark:bg-slate-800 w-full max-w-lg rounded-lg shadow-2xl p-8 transform transition-all duration-300 border border-stone-300 dark:border-slate-700 relative" 
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-3xl font-serif font-bold">Interested in our services?</h2>
            <button onClick={onClose} className="text-2xl font-bold hover:opacity-70">&times;</button>
          </div>
          <p className="mb-6 text-sm text-stone-600 dark:text-stone-300">Fill out the form and we’ll get back to you soon.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" className="w-full px-3 py-2 border border-stone-300 dark:border-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-sage bg-white dark:bg-slate-800" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input type="email" id="email" name="email" placeholder="you@email.com" className="w-full px-3 py-2 border border-stone-300 dark:border-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-sage bg-white dark:bg-slate-800" required />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
              <input type="tel" id="phone" name="phone" placeholder="Mobile Number" className="w-full px-3 py-2 border border-stone-300 dark:border-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-sage bg-white dark:bg-slate-800" />
            </div>
            <div className="mb-4">
              <label htmlFor="reason" className="block text-sm font-medium mb-1">Reason for Contact</label>
              <select id="reason" name="reason" className="w-full px-3 py-2 border border-stone-300 dark:border-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-sage bg-white dark:bg-slate-800" required>
                <option value="">Select a reason</option>
                <option>Podcast Appearance</option>
                <option>Events & Summits</option>
                <option>Campus Connect</option>
                <option>Corporate Connect</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea id="message" name="message" rows={3} placeholder="Type your message here..." className="w-full px-3 py-2 border border-stone-300 dark:border-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-sage bg-white dark:bg-slate-800" required />
            </div>
            <button type="submit" className="w-full bg-[#879973] dark:bg-[#a6b58a] text-white py-3 rounded-md font-semibold hover:brightness-110 transition duration-200">
              Send Message
            </button>
          </form>
        </div>
      </div>
      {/* Confirmation Popup at bottom right */}
      {showConfirmation && (
        <div className="fixed bottom-8 right-8 bg-[#199908] text-white px-6 py-2 rounded shadow-lg font-semibold z-[100] transition">
          Message sent!
        </div>
      )}
    </>
  );
};
