import React, { useState } from 'react';

// Tailwind CSS is assumed to be set up in your React project.
// This single component contains the entire landing page for a quick setup.
// For your demo, you can walk through each section from top to bottom.

// IMPORTANT: For the "Hands Together" background, make sure you have an SVG or image
// named 'footer-hands.svg' inside your project's 'public' folder.

// --- Reusable UI Components ---

// A single product card for the merchandise section
const ProductCard = ({ product, onAddToCart }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
        <img 
            src={product.image} 
            alt={product.name} 
            className="mb-4 rounded" 
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/300x300/cccccc/333333?text=Image+Error'; }}
        />
        <h3 className="text-xl font-bold font-serif text-[#879A74] mb-2">{product.name}</h3>
        <p className="text-[#36454F]/80 mb-2 flex-1">{product.description}</p>
        <div className="font-semibold text-lg mb-4">₹{product.price}</div>
        <button 
            onClick={() => onAddToCart(product)} 
            className="mt-auto bg-[#879A74] text-white py-2 rounded font-semibold hover:bg-[#6f815a] transition-colors"
        >
            Add to Cart
        </button>  
    </div>
);

// The contact modal for reaching out
const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-[#F5F5F4] w-full max-w-lg rounded-lg shadow-xl p-8 transform transition-transform duration-300 scale-100" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold font-serif text-[#36454F]">Connect With Us</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-black text-3xl leading-none">&times;</button>
                </div>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-[#36454F]/80 mb-1">Name</label>
                        <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#879A74]" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-[#36454F]/80 mb-1">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#879A74]" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="reason" className="block text-sm font-medium text-[#36454F]/80 mb-1">Reason for Connecting</label>
                        <select id="reason" name="reason" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#879A74] bg-white">
                            <option>Partnership</option>
                            <option>Merchandise Inquiry</option>
                            <option>General Inquiry</option>
                        </select>
                    </div>
                    <button type="submit" className="w-full bg-[#879A74] text-white py-3 rounded-md font-semibold hover:bg-[#6f815a] transition-colors">Send Message</button>
                </form>
            </div>
        </div>
    );
};

// The main App component
export default function App() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isContactModalOpen, setContactModalOpen] = useState(false);
    const [cart, setCart] = useState([]);

    const products = [
        { id: 1, name: "SAMVAAD T-Shirt", price: 499, image: "https://placehold.co/300x300/879A74/FFFFF0?text=T-Shirt", description: "Soft, premium cotton. Show your support in style." },
        { id: 2, name: "SAMVAAD Mug", price: 299, image: "https://placehold.co/300x300/36454F/F5F5F4?text=Mug", description: "Ceramic mug for your daily inspiration." },
        { id: 3, name: "SAMVAAD Notebook", price: 199, image: "https://placehold.co/300x300/879A74/36454F?text=Notebook", description: "Jot down your thoughts and ideas." },
        { id: 4, name: "Sticker Pack", price: 99, image: "https://placehold.co/300x300/36454F/879A74?text=Sticker+Pack", description: "Decorate your world with SAMVAAD stickers." }
    ];

    const handleAddToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                );
            }
            return [...prevCart, { ...product, qty: 1 }];
        });
        // Give user feedback
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className="bg-[#F5F5F4] font-sans text-[#36454F]">
            {/* Header */}
            <header className="bg-[#F5F5F4]/80 backdrop-blur-lg sticky top-0 z-40">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold font-serif">SAMVAAD</h1>
                    <nav className="hidden md:flex space-x-8">
                        <a href="#mission" className="hover:text-[#879A74] transition-colors">Mission</a>
                        <a href="#shop" className="hover:text-[#879A74] transition-colors">Shop</a>
                        <a href="#contact" className="hover:text-[#879A74] transition-colors">Contact</a>
                    </nav>
                    <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <a href="#mission" className="block py-2 px-6 hover:bg-[#FFFFF0]" onClick={() => setMobileMenuOpen(false)}>Mission</a>
                        <a href="#shop" className="block py-2 px-6 hover:bg-[#FFFFF0]" onClick={() => setMobileMenuOpen(false)}>Shop</a>
                        <a href="#contact" className="block py-2 px-6 hover:bg-[#FFFFF0]" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                    </div>
                )}
            </header>

            <main>
                {/* Hero Section */}
                <section className="py-20 md:py-32 text-center bg-[#FFFFF0]">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="w-full max-w-lg mx-auto mb-8 h-80">
                                {/* Lottie Animation Player */}
                                <lottie-player src="https://lottie.host/b2a8e0e9-3c6c-4b8a-9e3a-5f0a8e0e9b2c/Uq6s4a4f3X.json" background="transparent" speed="1" style={{ width: '100%', height: '100%' }} loop autoplay></lottie-player>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-extrabold font-serif text-[#36454F] mb-4">From Ideas to Impact</h1>
                            <p className="text-lg md:text-xl text-[#36454F]/80 mb-8">Empowering minds and fostering understanding through dialogue, healing, and awareness.</p>
                            <a href="#mission" className="bg-[#879A74] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6f815a] transition-transform transform hover:scale-105 inline-block">Discover Our Mission</a>
                        </div>
                    </div>
                </section>

                {/* Mission & Core Pillars Section */}
                <section id="mission" className="py-16 md:py-24">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold font-serif mb-2">Our Mission: Core Pillars</h2>
                            <p className="text-lg text-[#36454F]/70 max-w-3xl mx-auto">Our work is rooted in four core values that guide every conversation, workshop, and initiative we undertake.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                                <h3 className="text-2xl font-bold font-serif text-[#879A74] mb-3">Expression</h3>
                                <p>Creating safe, judgment-free spaces where thoughts, emotions, and stories can be openly shared.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                                <h3 className="text-2xl font-bold font-serif text-[#879A74] mb-3">Empathy</h3>
                                <p>Fostering understanding by listening deeply and connecting beyond labels and differences.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                                <h3 className="text-2xl font-bold font-serif text-[#879A74] mb-3">Empowerment</h3>
                                <p>Equipping individuals with awareness and tools for their emotional and social well-being.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                                <h3 className="text-2xl font-bold font-serif text-[#879A74] mb-3">Engagement</h3>
                                <p>Encouraging active participation through meaningful conversations and collaborative action.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Merchandise "Sneak Peek" Section */}
                <section id="shop" className="py-16 md:py-24 bg-[#FFFFF0]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold font-serif mb-2">Featured Merchandise</h2>
                            <p className="text-lg text-[#36454F]/70 max-w-3xl mx-auto">Every purchase supports our mission. Wear your values.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                            {products.map(product => (
                                <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call To Action Section */}
                <section 
                    id="contact" 
                    className="bg-cover bg-center" 
                    style={{ backgroundImage: "url('/footer-hands.svg')" }}
                >
                    <div className="bg-[#36454F]/80 py-20 md:py-32">
                        <div className="container mx-auto px-6 text-center text-white">
                            <h2 className="text-4xl font-bold font-serif mb-4">Let's Build a Better Society Together</h2>
                            <p className="text-lg mb-8 max-w-2xl mx-auto">Join the conversation. Whether you have a story, expertise, or a cause, there's a place for you here.</p>
                            <button 
                                onClick={() => setContactModalOpen(true)}
                                className="bg-[#879A74] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#6f815a] transition-transform transform hover:scale-105"
                            >
                                Reach Out to Us
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="relative">
                <div className="w-full flex justify-center relative z-10" style={{ marginBottom: "-3rem" }}>
                    <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                        <path d="M40 50C50 30 70 30 80 50" stroke="#879A74" strokeWidth="5" strokeLinecap="round"/>
                        <path d="M120 50C130 30 150 30 160 50" stroke="#879A74" strokeWidth="5" strokeLinecap="round"/>
                    </svg>
                </div>
                <div className="bg-[#36454F] text-[#F5F5F4]/70 pt-20 pb-8">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                            <div className="mb-6 md:mb-0">
                                <h3 className="text-2xl font-bold font-serif text-white mb-2">SAMVAAD</h3>
                                <p className="text-sm">&copy; 2025 SAMVAAD. All Rights Reserved.</p>
                            </div>
                            <div className="flex space-x-6 text-sm">
                                <a href="#mission" className="hover:text-white transition-colors">Mission</a>
                                <a href="#shop" className="hover:text-white transition-colors">Shop</a>
                                <a href="https://github.com/khatrisahil1/Samvaad-Project-v1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            
            {/* Modals */}
            <ContactModal isOpen={isContactModalOpen} onClose={() => setContactModalOpen(false)} />
        </div>
    );
}
