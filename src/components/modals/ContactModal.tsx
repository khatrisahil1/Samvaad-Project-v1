"use client";

import React, { useState } from "react";
import { database, ref, push, set } from "../../../lib/firebase";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
      // 1. Save to Firebase
      const contactFormRef = ref(database, "contactForm-bwit");
      const newContactRef = push(contactFormRef);

      await set(newContactRef, {
        Name: formData.name,
        Email_Id: formData.email,
        Phone_Number: formData.phone,
        Service_Name: formData.reason,
        Message_Content: formData.message,
      });

      // 2. Send emails to both user and team via /api/send
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const responseData = await res.json();
      if (!res.ok) {
        console.error("Email sending failed. Status:", res.status, "Details:", responseData);
        throw new Error("Failed to send email");
      }

      alert("Form submitted!");

      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000);

      setFormData({
        name: "",
        email: "",
        phone: "",
        reason: "",
        message: "",
      });

      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };


  return (
    <>
      <div
        className="fixed inset-0 backdrop-blur-sm bg-black/40 backdrop-saturate-150 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="bg-white dark:bg-white w-full max-w-lg rounded-lg shadow-2xl p-8 border border-stone-300 dark:border-slate-700 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-3xl font-serif font-bold">
              Interested in our services?
            </h2>
            <button
              onClick={onClose}
              className="text-2xl font-bold hover:opacity-70"
            >
              &times;
            </button>
          </div>
          <p className="mb-6 text-sm text-stone-600 dark:text-stone-300">
            Fill out the form and we’ll get back to you soon.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 bg-white dark:bg-slate-800"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 bg-white dark:bg-slate-800"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-1"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  const input = e.target.value.replace(/\D/g, "");
                  setFormData((prev) => ({ ...prev, phone: input }));
                }}
                placeholder="10-digit number"
                maxLength={10}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 bg-white dark:bg-slate-800"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="reason"
                className="block text-sm font-medium mb-1"
              >
                Reason for Contact <span className="text-red-500">*</span>
              </label>
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 bg-white dark:bg-slate-800"
                required
              >
                <option value="">Select a reason</option>
                <option>Podcast Appearance</option>
                <option>Events & Summits</option>
                <option>Campus Connect</option>
                <option>Corporate Connect</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Type your message here..."
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 bg-white dark:bg-slate-800"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#e24a14] dark:bg-[#e24a14] text-white py-3 rounded-md font-semibold hover:brightness-110 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {showConfirmation && (
        <div className="fixed bottom-6 right-6 bg-[#e24a14] text-white px-6 py-3 rounded shadow-lg font-semibold z-[100] transition duration-300 ease-in-out">
          Message sent!
        </div>
      )}
    </>
  );
};
