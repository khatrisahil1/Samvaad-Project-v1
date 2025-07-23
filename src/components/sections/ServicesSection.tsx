'use client';
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const services = [
    {
      title: "Individual Counseling",
      description:
        "Personalized one-on-one sessions with certified therapists to address specific mental health concerns.",
      details:
        "This is a detailed explanation about Individual Counseling, what to expect, benefits, and how to book a session.",
      image: "/logos/individual-counseling.png",
      tags: ["Campus Connect", "Corporate Connect"],
    },
    {
      title: "Group Therapy",
      description:
        "Supportive group environments for shared experiences and collective healing.",
      details:
        "Details about how group therapy works and how it helps people connect through shared experiences.",
      image: "/logos/group-therapy.png",
      tags: ["Campus Connect"],
    },
    {
      title: "Workshops & Webinars",
      description:
        "Educational sessions on stress management, resilience, mindfulness, and more.",
      details:
        "Upcoming webinars include 'Managing Exam Stress' and 'Mindfulness for Beginners'.",
      image: "/logos/workshops-webinars.png",
      tags: ["Events"],
    },
    {
      title: "Corporate Wellness Programs",
      description:
        "Tailored mental health initiatives for businesses to support employee well-being.",
      details:
        "Programs include team mental health checkups, seminars, and leadership coaching.",
      image: "/logos/corporate-wellness.png",
      tags: ["Corporate Connect"],
    },
    {
      title: "Campus Outreach",
      description:
        "Programs designed for students and faculty to promote mental health awareness in educational settings.",
      details:
        "Workshops and campus events, mental health clubs, peer support training.",
      image: "/logos/campus-outreach.png",
      tags: ["Campus Connect"],
    },
    {
      title: "Motivational Talks",
      description:
        "Engaging and inspiring talks on various aspects of mental wellness and personal growth. Pricing: Starting from $500.",
      details:
        "Renowned speakers share insights on personal growth, leadership, and resilience.",
      image: "/logos/motivational-talks.png",
      tags: ["Podcast", "Events"],
    },
  ];

  const portals = [
    { name: "Podcast" },
    { name: "Campus Connect" },
    { name: "Corporate Connect" },
    { name: "Events" },
    { name: "Coming Soon" },
  ];

  const [activePortal, setActivePortal] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  const handleKnowMore = (service: any) => {
    setSelectedService(service);
    setOpenModal(true);
  };

  const handleShare = (service: any) => {
    const text = `Check out this service: ${service.title} - ${service.description}`;
    navigator.clipboard.writeText(text);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 1500);
  };

  const filteredServices = services.filter(
    (s) =>
      (!activePortal || s.tags.includes(activePortal)) &&
      (s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       s.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <main className="flex-1 py-16 md:py-24 px-4 md:px-6 bg-background animate-fade-in">
      <div className="container mx-auto">
        <p className="text-center text-red-600 font-bold mb-4">DEBUG: Services Section Active</p>
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {portals.map((portal, idx) => (
            <button
              key={idx}
              onClick={() => setActivePortal(portal.name)}
              className={`px-6 py-3 ${
                activePortal === portal.name
                  ? "bg-orange-500 text-white"
                  : "bg-orange-200 hover:bg-orange-300 text-orange-900"
              } text-base font-semibold rounded-full shadow transition`}
            >
              {portal.name}
            </button>
          ))}
          {activePortal && (
            <button
              onClick={() => setActivePortal(null)}
              className="px-4 py-2 bg-gray-300 text-black text-base rounded-full ml-2"
            >
              Clear Filter
            </button>
          )}
        </div>

        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-foreground">
          What We Offer
        </h1>

        <div className="mb-8 text-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search services..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-slate-800 dark:text-white"
          />
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.length === 0 ? (
            <p className="text-center col-span-full text-muted-foreground">
              No services match your search and filter criteria.
            </p>
          ) : (
            filteredServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 ease-in-out bg-card text-card-foreground border border-border"
              >
                <CardHeader>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-md object-cover w-full h-48 mb-4"
                  />
                  <CardTitle className="text-xl font-heading font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="flex justify-between gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleKnowMore(service)}
                    >
                      Know More
                    </Button>
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleShare(service)}
                      >
                        Share
                      </Button>
                      {showTooltip && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs text-white bg-black px-2 py-1 rounded">
                          Copied!
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedService?.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <p className="text-sm text-muted-foreground">
              {selectedService?.details}
            </p>
            {selectedService?.title === "Motivational Talks" && (
              <div className="w-full aspect-video rounded-md overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/ScMzIvxBSi4"
                  title="YouTube video player"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}

export { ServicesPage };