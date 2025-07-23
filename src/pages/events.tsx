import React, { useState } from 'react';
import { Header } from '@/components/global/Header';
import { Footer } from '@/components/global/Footer';

const events = [
  {
    title: "SAMVAAD for Sustainability",
    description: "Our inaugural event explored how conscious living and digital safety are deeply tied to emotional and societal well-being.",
    image: "/events/sustainability.png",
    tags: ["Sustainability", "Wellbeing"],
    story: "This session emphasized mindful technology use, waste management habits, and included a powerful student-led panel on eco-emotions and burnout.",
  },
  {
    title: "Mental Health & Emotional Wellbeing",
    description: "This edition took a bold leap into normalizing conversations around mental health, with panel discussions, performances, and expert keynotes.",
    image: "/events/mental-health.png",
    tags: ["Mental Health", "Awareness"],
  },
  {
    title: "The Art of Expression",
    description: "A workshop focused on using creative arts as a medium for emotional expression and healing.",
    image: "/events/art-expression.png",
    tags: ["Arts", "Healing"],
  },
  {
    title: "Founder's Summit 2025",
    description: "Bringing together industry leaders and mentors to connect with high-intent students.",
    image: "/events/founders-summit.png",
    tags: ["Leadership", "Summit"],
  },
];

const tagOptions = ['All', ...Array.from(new Set(events.flatMap(e => e.tags)))];

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const filteredEvents = events.filter(
    (e) =>
      (selectedTag === 'All' || (e.tags && e.tags.includes(selectedTag))) &&
      (e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-stone dark:bg-slate text-slate dark:text-stone flex flex-col min-h-screen">

      <main className="flex-1 py-20">
        <div className="container mx-auto px-6">
          <section className="text-center max-w-4xl mx-auto mb-6">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Events</h1>
            <p className="text-lg text-slate/80 dark:text-stone/80 mb-1">
              Explore our past and upcoming events focused on wellbeing, leadership, and creative expression.
            </p>
          </section>
          <div className="flex flex-col items-center gap-4 mb-8">
            <p>Search Events</p>
            <input
              type="text"
              placeholder="Search events..."
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
            {filteredEvents.length === 0 ? (
              <p className="text-center col-span-full text-muted-foreground">
                No matching events found.
              </p>
            ) : (
              filteredEvents.map((event, index) => (
                <div key={event.title} className="bg-stone-100 dark:bg-slate-800 rounded-lg overflow-hidden border border-stone-200 dark:border-slate-700 group flex flex-col shadow-md hover:shadow-xl transition-shadow duration-200">
                  <img src={event.image} alt={event.title} className="w-full h-56 object-cover" />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-serif font-bold mb-3">{event.title}</h3>
                    <p className="flex-grow mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {event.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs rounded-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex justify-end items-center gap-2">
                      <button
                        className="text-sm px-4 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                        onClick={() => {
                          setSelectedEvent(event);
                          setIsModalOpen(true);
                        }}
                      >
                        Know More
                      </button>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(`${event.title}: ${event.description}`);
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
      {/* Modal for event details */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black dark:hover:text-white"
              onClick={() => setIsModalOpen(false)}
            >
              
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
            <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-48 object-cover rounded mb-4" />
            <p>{selectedEvent.description}</p>
            {selectedEvent.story && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-1">Story</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{selectedEvent.story}</p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default EventsPage;