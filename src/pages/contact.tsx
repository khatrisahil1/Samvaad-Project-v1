// --- UPDATED FILE: src/pages/contact.tsx ---
// import React from 'react';
// import { Header } from '@/components/global/Header';
// import { Footer } from '@/components/global/Footer';

// const ContactPage = () => {
//     return (
//         <div className="bg-[#F5F5F4] text-[#36454F] flex flex-col min-h-screen">

//             <main className="flex-1 flex items-center justify-center py-16 px-4">
//                 <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-6xl overflow-hidden">
//                     <div className="md:w-1/2 flex items-center justify-center bg-[#879A74]/10 p-8">
//                         <img
//                             src="/contact-image.png"
//                             alt="Contact Us"
//                             className="rounded-lg w-100 h-100 object-cover"
//                         />
//                     </div>
//                     <form className="md:w-1/2 p-8 flex flex-col gap-4">
//                         <h2 className="text-3xl font-bold mb-2 font-serif">Contact Us</h2>
//                         <div>
//                             <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
//                             <input type="text" id="name" name="name" required
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#879A74] bg-[#FFFFF0]" />
//                         </div>
//                         <div>
//                             <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
//                             <input type="email" id="email" name="email" required
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#879A74] bg-[#FFFFF0]" />
//                         </div>
//                         <div>
//                             <label htmlFor="mobile" className="block text-sm font-semibold mb-1">Mobile No</label>
//                             <input type="tel" id="mobile" name="mobile"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#879A74] bg-[#FFFFF0]" />
//                         </div>
//                         <div>
//                             <label htmlFor="reason" className="block text-sm font-semibold mb-1">Reason for Contact</label>
//                             <select id="reason" name="reason"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#879A74] bg-[#FFFFF0]">
//                                 <option value="">Select a reason</option>
//                                 <option>Podcast Appearance</option>
//                                 <option>Events & Summits</option>
//                                 <option>Campus Connect</option>
//                                 <option>Corporate Connect</option>
//                                 <option>General Inquiry</option>
//                             </select>
//                         </div>
//                         <div>
//                             <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
//                             <textarea id="message" name="message" rows={4} required
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#879A74] bg-[#FFFFF0]" />
//                         </div>
//                         <button
//                             type="submit"
//                             className="bg-[#879A74] text-white py-3 rounded-md font-semibold hover:bg-[#6f815a] transition-colors mt-2"
//                         >
//                             Send Message
//                         </button>
//                     </form>
//                 </div>
//             </main>

//         </div>
//     );
// };
// export default ContactPage;





"use client";

import React, { useState } from 'react';
import { database, ref, push, set } from '../../lib/firebase';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.reason) {
      alert("Please fill required fields for connecting.");
      return;
    }

    try {
      const contactFormRef = ref(database, "contactForm-bwit");
      const newContactRef = push(contactFormRef);

      await set(newContactRef, {
        Name: formData.name,
        Email_Id: formData.email,
        Phone_Number: formData.phone,
        Service_Name: formData.reason,
        Message_Content: formData.message,
      });

      // Send Emails via /api/contact route (Resend handler)
    //   await fetch("/api/contact", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(formData)
    //   });

      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000);

      setFormData({
        name: "",
        email: "",
        phone: "",
        reason: "",
        message: "",
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

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
          <form onSubmit={handleSubmit} className="md:w-1/2 p-8 flex flex-col gap-4">
            <h2 className="text-3xl font-bold mb-2 font-serif">Contact Us</h2>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
              <input type="text" id="name" name="name" required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#879A74] bg-[#FFFFF0]" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
              <input type="email" id="email" name="email" required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#879A74] bg-[#FFFFF0]" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-1">Mobile No</label>
              <input type="tel" id="phone" name="phone"
                value={formData.phone}
                onChange={(e) => {
                  const input = e.target.value.replace(/\D/g, "");
                  setFormData((prev) => ({ ...prev, phone: input }));
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#879A74] bg-[#FFFFF0]" />
            </div>
            <div>
              <label htmlFor="reason" className="block text-sm font-semibold mb-1">Reason for Contact</label>
              <select id="reason" name="reason"
                value={formData.reason}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
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

      {showConfirmation && (
        <div className="fixed bottom-8 right-8 bg-[#199908] text-white px-6 py-2 rounded shadow-lg font-semibold z-[100] transition">
          Message sent!
        </div>
      )}
    </div>
  );
};

export default ContactPage;
