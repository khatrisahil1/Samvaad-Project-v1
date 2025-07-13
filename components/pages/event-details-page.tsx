"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Clock, User, Tag } from "lucide-react"

interface EventDetailsPageProps {
  setPage: (page: string) => void
}

export default function EventDetailsPage({ setPage }: EventDetailsPageProps) {
  const event = {
    title: "Mindful Living: A Workshop on Inner Peace",
    date: "November 15, 2024",
    time: "10:00 AM - 1:00 PM IST",
    location: "Online (Zoom Link will be provided)",
    description:
      "Join us for an immersive workshop designed to introduce you to the principles of mindful living. Learn practical techniques to reduce stress, enhance focus, and cultivate a deeper sense of inner peace. This session is perfect for anyone looking to bring more calm and clarity into their daily life.",
    image: "/placeholder.svg?height=400&width=700",
    tags: ["#Healing", "#Mindfulness", "#Workshop"],
    sessions: [
      {
        title: "Introduction to Mindfulness",
        speaker: "Dr. Anya Sharma",
        time: "10:00 AM - 10:45 AM",
        description: "Understanding the basics and benefits of mindfulness.",
      },
      {
        title: "Guided Meditation Practice",
        speaker: "Dr. Anya Sharma",
        time: "10:45 AM - 11:30 AM",
        description: "A practical session to experience guided meditation.",
      },
      {
        title: "Mindful Communication & Q&A",
        speaker: "Dr. Anya Sharma",
        time: "11:45 AM - 1:00 PM",
        description: "Applying mindfulness in daily interactions and open discussion.",
      },
    ],
    speakers: [
      {
        name: "Dr. Anya Sharma",
        title: "Lead Mindfulness Coach, SAMVAAD",
        bio: "Dr. Sharma is a renowned expert in mindfulness and cognitive behavioral therapy, with over 15 years of experience helping individuals achieve mental well-being.",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  }

  const handleRSVP = () => {
    alert(`You have RSVP'd for "${event.title}"! We're excited to have you join us.`)
  }

  return (
    <main className="flex-1 py-16 md:py-24 bg-background animate-fade-in">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-8 text-foreground">{event.title}</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Event Details Column */}
          <div className="md:col-span-2">
            <img
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              className="w-full h-auto rounded-lg object-cover mb-6 shadow-lg"
            />
            <div className="flex flex-wrap gap-2 mb-6">
              {event.tags.map((tag, index) => (
                <span key={index} className="text-sm font-body px-3 py-1 rounded-full bg-accent text-accent-foreground">
                  <Tag className="inline-block h-4 w-4 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-lg font-body text-muted-foreground leading-relaxed mb-6">{event.description}</p>

            <Card className="p-6 bg-card text-card-foreground shadow-sm border-border mb-6">
              <CardTitle className="text-xl font-heading font-semibold mb-4">Event Details</CardTitle>
              <CardContent className="p-0 space-y-3 font-body text-foreground">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{event.location}</span>
                </div>
              </CardContent>
            </Card>

            {/* Sessions */}
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Workshop Sessions</h2>
            <div className="space-y-4">
              {event.sessions.map((session, index) => (
                <Card key={index} className="p-4 bg-card text-card-foreground shadow-sm border-border">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-heading font-semibold text-foreground">{session.title}</h3>
                    <p className="text-sm font-body text-muted-foreground mb-1">
                      <Clock className="inline-block h-3 w-3 mr-1" /> {session.time}
                    </p>
                    <p className="text-sm font-body text-muted-foreground mb-2">
                      <User className="inline-block h-3 w-3 mr-1" /> {session.speaker}
                    </p>
                    <p className="font-body text-foreground">{session.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar: Speakers & CTA */}
          <div className="md:col-span-1">
            <Card className="p-6 bg-card text-card-foreground shadow-sm border-border mb-6">
              <CardTitle className="text-xl font-heading font-semibold mb-4">About the Speaker</CardTitle>
              <CardContent className="p-0 text-center">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      className="h-24 w-24 rounded-full object-cover mb-3 border-2 border-primary"
                    />
                    <h3 className="text-lg font-heading font-semibold text-foreground">{speaker.name}</h3>
                    <p className="text-sm font-body text-muted-foreground mb-2">{speaker.title}</p>
                    <p className="text-sm font-body text-foreground leading-relaxed">{speaker.bio}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="p-6 bg-card text-card-foreground shadow-lg border-border">
              <CardTitle className="text-xl font-heading font-semibold mb-4">Ready to Join?</CardTitle>
              <CardContent className="p-0">
                <p className="font-body text-muted-foreground mb-4">
                  Secure your spot for this transformative workshop. We're excited to welcome you!
                </p>
                <Button
                  onClick={handleRSVP}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body"
                >
                  RSVP Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
