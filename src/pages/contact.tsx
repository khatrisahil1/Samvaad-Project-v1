"use client";

import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/libs/particles/particles.min.js";
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#000000" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: { enable: true, color: "#cccccc" },
            move: { enable: true, speed: 1 }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true
            },
            modes: {
              repulse: { distance: 150, duration: 0.4 },
              push: { particles_nb: 8 }
            }
          },
          retina_detect: true
        });
      }
    };
    document.body.appendChild(script);
  }, []);

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
    <div className="relative min-h-screen">
      {/* Background white layer */}
      <div className="absolute inset-0 z-0 bg-[#ffffff]" />
      {/* Particles.js layer */}
      <div id="particles-js" className="absolute inset-0 z-0 pointer-events-none"></div>
      {/* Content wrapper */}
      <div className="relative z-10">
        <div className="bg-transparent text-[#222] flex flex-col min-h-screen">
          <main className="flex-1 flex items-center justify-center py-16 px-4">
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl flex flex-col md:flex-row w-full max-w-6xl overflow-hidden">
              <div className="md:w-1/2 flex items-center justify-center bg-[#ffffff] p-8">
                <video
                  src="/hero-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D14A2C] bg-[#FFFCF9]" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
                  <input type="email" id="email" name="email" required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D14A2C] bg-[#FFFCF9]" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-1">Mobile No</label>
                  <input type="tel" id="phone" name="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      const input = e.target.value.replace(/\D/g, "");
                      setFormData((prev) => ({ ...prev, phone: input }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D14A2C] bg-[#FFFCF9]" />
                </div>
                <div>
                  <label htmlFor="reason" className="block text-sm font-semibold mb-1">Reason for Contact</label>
                  <select id="reason" name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D14A2C] bg-[#FFFCF9]">
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D14A2C] bg-[#FFFCF9]" />
                </div>
                <button
                  type="submit"
                  className="bg-[#D14A2C] text-white py-3 rounded-md font-semibold hover:bg-[#9b3d2e] transition-colors mt-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </main>

          {showConfirmation && (
            <div className="fixed bottom-8 right-8 bg-[#222] text-white px-6 py-2 rounded shadow-lg font-semibold z-[100] transition">
              Message sent!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
