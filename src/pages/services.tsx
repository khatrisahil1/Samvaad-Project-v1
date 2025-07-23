import React, { useState } from 'react';
import { Header } from '@/components/global/Header';
import { Footer } from '@/components/global/Footer';

const services = [
    { title: "Motivational Talks", description: "Inspiring keynotes on resilience, leadership, and emotional intelligence. Our 'Campus Connect Talks' start at ₹20,000.", image: "https://placehold.co/600x400/879A74/FFFFFF?text=Talks", tags: ["Campus Connect", "Podcast"] },
    { title: "Corporate Wellness Programs", description: "Custom programs and workshops designed to foster a mentally healthy and emotionally intelligent workforce.", image: "https://placehold.co/600x400/36454F/FFFFFF?text=Corporate", tags: ["Corporate Connect"] },
    { title: "Campus Mental Health Connect", description: "We partner with colleges to provide students with proactive wellness resources, workshops, and a supportive community.", image: "https://placehold.co/600x400/A7B894/FFFFFF?text=Campus", tags: ["Campus Connect", "Events & Summits"] }
];

const ServicesPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);
    const [selectedService, setSelectedService] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTag, setSelectedTag] = useState<string>('All');
    const tagOptions = ['All', 'Podcast', 'Campus Connect', 'Corporate Connect', 'Events & Summits', 'Coming Soon'];

    const filteredServices = services.filter(
      (s) =>
        (selectedTag === 'All' || (s.tags && s.tags.includes(selectedTag))) &&
        (s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
         s.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="bg-stone dark:bg-slate text-slate dark:text-stone flex flex-col min-h-screen">

            <main className="flex-1 py-20">
                <div className="container mx-auto px-6">
                    <section className="text-center max-w-4xl mx-auto mb-10">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Services</h1>
                        <p className="text-lg text-slate/80 dark:text-stone/80 mb-2">We offer a range of services designed to support individuals, educational institutions, and corporations on their journey toward emotional wellbeing.</p>
                    </section>
                    <div className="flex flex-col items-center gap-4 mb-8">
                       <p>Search Services</p>
                      <input
                        type="text"
                        placeholder="Search services..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded dark:bg-slate-800 dark:text-white"
                      />
                      <div className="flex flex-wrap justify-center gap-2">
                        {tagOptions.map(tag => (
                          <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`px-4 py-1 text-sm rounded-full border ${
                              selectedTag === tag
                                ? 'bg-orange-500 text-white'
                                : 'border-gray-300 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700'
                            }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredServices.length === 0 ? (
                          <p className="text-center col-span-full text-muted-foreground">
                            No matching services found.
                          </p>
                        ) : (
                          filteredServices.map((service, index) => (
                            <div key={service.title} className="bg-stone-100 dark:bg-slate-800 rounded-lg overflow-hidden border border-stone-200 dark:border-slate-700 group flex flex-col shadow-md hover:shadow-xl transition-shadow duration-200">
                                <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-serif font-bold mb-3">{service.title}</h3>
                                    <p className="flex-grow mb-4">{service.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                      {service.tags?.map((tag) => (
                                        <span
                                          key={tag}
                                          className={`px-2 py-0.5 text-xs rounded-full ${
                                            tag === "Coming Soon"
                                              ? "bg-yellow-300 text-yellow-900 font-semibold"
                                              : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-100"
                                          }`}
                                        >
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                    <div className="mt-auto flex justify-end items-center gap-2">
                                      <button
                                        className="text-sm px-4 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                                        onClick={() => {
                                          setSelectedService(service);
                                          setIsModalOpen(true);
                                        }}
                                      >
                                        Know More
                                      </button>
                                      <button
                                        onClick={() => {
                                          navigator.clipboard.writeText(`${service.title}: ${service.description}`);
                                          setTooltipIndex(index);
                                          setTimeout(() => setTooltipIndex(null), 1500);
                                        }}
                                        className="text-sm px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                                      >
                                        Share
                                      </button>
                                      {tooltipIndex === index && (
                                        <span className="text-xs text-green-600 ml-2">Copied!</span>
                                      )}
                                    </div>
                                </div>
                            </div>
                          ))
                        )}
                    </section>
                </div>
            </main>

        {/* Modal for service details */}
        {isModalOpen && selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg max-w-md w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-black dark:hover:text-white"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-2">{selectedService.title}</h2>
              <p>{selectedService.description}</p>
            </div>
          </div>
        )}
      </div>
    );
};
export default ServicesPage;