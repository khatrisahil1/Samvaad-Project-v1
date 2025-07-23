import React from 'react';
import { useRouter } from 'next/navigation';


export const EventsSlider: React.FC = () => {
  const router = useRouter();

  const eventsData = [
    {
      title: "SAMVAAD for Sustainability",
      image: "/events/sustainability.png",
      slug: "sustainability",
    },
    {
      title: "Mental & Emotional Wellbeing",
      image: "/events/mental-health.png",
      slug: "mental-health",
    },
    {
      title: "The Art of Expression",
      image: "/events/art-expression.png",
      slug: "art-expression",
    },
    {
      title: "Founder's Summit 2025",
      image: "/events/founders-summit.png",
      slug: "founders-summit-2025",
    },
    
  ];

  return (
    <div>
      <h3 className="text-3xl font-serif font-bold text-center mb-8">Past Events Catalogue</h3>
      <div className="flex justify-center">
        <div className="flex gap-6 overflow-x-auto py-4 px-2">
          {eventsData.map((event, idx) => (
            <div
              key={event.slug}
              className="min-w-[260px] max-w-xs bg-white dark:bg-slate-800 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all flex-shrink-0"
              onClick={() => router.push('/events')}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-44 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h4 className="font-bold text-lg text-slate dark:text-stone text-center">{event.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
