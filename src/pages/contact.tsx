// --- UPDATED FILE: src/pages/contact.tsx ---
import React from 'react';
import { Header } from '@/components/global/Header';
import { Footer } from '@/components/global/Footer';

const ContactPage = () => {
    return (
        <div className="bg-[#F5F5F4] text-[#36454F] flex flex-col min-h-screen">

            <main className="flex-1 flex items-center justify-center py-16 px-4">
                <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-6xl overflow-hidden">
                    <div className="md:w-1/2 flex items-center justify-center bg-[#879A74]/10 p-8">
                        <img
                            src="/contact-image.png"
                            alt="Contact Us"
                            className="rounded-lg w-100 h-100 object-cover"
                        />
                    </div>
                    <form className="md:w-1/2 p-8 flex flex-col gap-4">
                        <h2 className="text-3xl font-bold mb-2 font-serif">Contact Us</h2>
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
                            <input type="text" id="name" name="name" required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#879A74] bg-[#FFFFF0]" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
                            <input type="email" id="email" name="email" required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#879A74] bg-[#FFFFF0]" />
                        </div>
                        <div>
                            <label htmlFor="mobile" className="block text-sm font-semibold mb-1">Mobile No</label>
                            <input type="tel" id="mobile" name="mobile"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#879A74] bg-[#FFFFF0]" />
                        </div>
                        <div>
                            <label htmlFor="reason" className="block text-sm font-semibold mb-1">Reason for Contact</label>
                            <select id="reason" name="reason"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#879A74] bg-[#FFFFF0]">
                                <option value="">Select a reason</option>
                                <option>Podcast Appearance</option>
                                <option>Events & Summits</option>
                                <option>Campus Connect</option>
                                <option>Corporate Connect</option>
                                <option>General Inquiry</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
                            <textarea id="message" name="message" rows={4} required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#879A74] bg-[#FFFFF0]" />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#879A74] text-white py-3 rounded-md font-semibold hover:bg-[#6f815a] transition-colors mt-2"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </main>

        </div>
    );
};
export default ContactPage;
