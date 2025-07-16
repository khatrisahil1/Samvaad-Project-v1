'use client';
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicesPage() {
  const services = [
    {
      title: "Individual Counseling",
      description:
        "Personalized one-on-one sessions with certified therapists to address specific mental health concerns.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Group Therapy",
      description: "Supportive group environments for shared experiences and collective healing.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Workshops & Webinars",
      description: "Educational sessions on stress management, resilience, mindfulness, and more.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Corporate Wellness Programs",
      description: "Tailored mental health initiatives for businesses to support employee well-being.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Campus Outreach",
      description:
        "Programs designed for students and faculty to promote mental health awareness in educational settings.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Motivational Talks",
      description:
        "Engaging and inspiring talks on various aspects of mental wellness and personal growth. Pricing: Starting from $500.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  const portals = [
    {
      name: "Student Portal",
      description: "For taking assessments, accessing curated content and workshops, and participating in the community.",
    },
    {
      name: "College Administrator Portal",
      description: "To onboard students and view an anonymized insights dashboard on student wellness trends.",
    },
    {
      name: "Founder/Partner Portal",
      description: "For mentors and experts to manage their profiles, schedule talks, and engage with students.",
    },
    {
      name: "Community Hub",
      description: "A safe, vibrant community for peer support and expert help, featuring forums or chat functions.",
    },
    {
      name: "Curated Resource Hub",
      description: "Exclusive access to expert talks, workshops, and curated opportunities.",
    },
  ];

  const [activePortal, setActivePortal] = useState(null);

  return (
    <main className="flex-1 py-16 md:py-24 px-4 md:px-6 bg-background animate-fade-in">
      <div className="container mx-auto">

        {/* Horizontal Portal Panel */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {portals.map((portal, idx) => (
            <button
              key={idx}
              onClick={() => setActivePortal(portal)}
              className="px-4 py-2 bg-orange-100 hover:bg-orange-200 text-foreground dark:text-background text-sm font-medium rounded-full shadow transition"
            >
              {portal.name}
            </button>
          ))}
        </div>

        {/* Section Title */}
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-foreground">
          What We Offer
        </h1>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
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
                <p className="font-body text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Floating Modal for Portal */}
      {activePortal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center px-4">
          <div className="bg-card text-card-foreground p-6 rounded-xl w-full max-w-2xl relative shadow-xl border border-border animate-fade-in">
            <h2 className="text-2xl font-heading font-semibold mb-4">
              {activePortal.name}
            </h2>
            <p className="text-muted-foreground font-body mb-4">
              {activePortal.description}
            </p>

            {/* Dummy YouTube video as requested */}
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-md"
                src="https://www.youtube.com/embed/D0UnqGm_miA?si=pUikU1XBYqRX5Kbg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <button
              onClick={() => setActivePortal(null)}
              aria-label="Close"
              className="absolute top-3 right-4 text-2xl text-muted-foreground hover:text-foreground"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
