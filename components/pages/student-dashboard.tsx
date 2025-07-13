"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CalendarDays, BellRing, MessageSquare, Award } from "lucide-react"

interface StudentDashboardProps {
  setPage: (page: string) => void
}

export default function StudentDashboard({ setPage }: StudentDashboardProps) {
  const opportunities = [
    {
      id: 1,
      title: "Volunteer for Mental Health Awareness Week",
      description: "Help organize events and spread awareness on campus.",
      category: "Community",
      date: "Oct 20 - Oct 27",
      tags: ["#Awareness", "#Community"],
    },
    {
      id: 2,
      title: "Workshop: Stress Management for Exams",
      description: "Learn practical techniques to cope with academic pressure.",
      category: "Workshop",
      date: "Nov 5",
      tags: ["#Healing", "#CyberWellness"],
    },
    {
      id: 3,
      title: "Peer Support Group Sign-up",
      description: "Join a confidential group for shared experiences and support.",
      category: "Support",
      date: "Ongoing",
      tags: ["#Expression", "#Healing"],
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Mindfulness Meditation Session",
      date: "Oct 15, 3:00 PM",
      location: "Online",
      tags: ["#Healing", "#Expression"],
    },
    {
      id: 2,
      title: "Guest Lecture: Building Resilience",
      date: "Oct 22, 10:00 AM",
      location: "Auditorium A",
      tags: ["#Awareness", "#Empowerment"],
    },
  ]

  return (
    <main className="flex-1 py-8 md:py-12 bg-background animate-fade-in">
      <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-3">
        {/* Welcome & Assessment Status */}
        <div className="lg:col-span-2 grid gap-6">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Welcome, Student!</h1>
          <Card className="p-6 bg-card text-card-foreground shadow-sm border-border">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl font-heading font-semibold">Your Assessment Status</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="font-body text-muted-foreground mb-2">
                You've completed 75% of your initial wellness assessment. Let's continue your journey towards better
                understanding.
              </p>
              <Progress value={75} className="w-full h-2 bg-muted" indicatorClassName="bg-primary" />
              <Button
                onClick={() => setPage("assessment-intro")}
                className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 font-body"
              >
                Continue Assessment
              </Button>
            </CardContent>
          </Card>

          {/* Personalized Opportunity Feed */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Personalized Opportunities</h2>
            <div className="grid gap-4">
              {opportunities.map((op) => (
                <Card key={op.id} className="p-4 bg-card text-card-foreground shadow-sm border-border">
                  <CardHeader className="p-0 mb-2 flex flex-row items-center justify-between">
                    <CardTitle className="text-lg font-heading font-semibold">{op.title}</CardTitle>
                    <span className="text-sm font-body text-muted-foreground px-2 py-1 rounded-full bg-muted">
                      {op.category}
                    </span>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="font-body text-muted-foreground text-sm mb-2">{op.description}</p>
                    <p className="text-xs font-body text-muted-foreground flex items-center gap-1">
                      <CalendarDays className="h-3 w-3" /> {op.date}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {op.tags?.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs font-body px-2 py-1 rounded-full bg-accent text-accent-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="link" className="p-0 h-auto mt-2 text-primary hover:underline font-body">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Upcoming Events & Quick Links */}
        <div className="lg:col-span-1 grid gap-6">
          <Card className="p-6 bg-card text-card-foreground shadow-sm border-border">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl font-heading font-semibold flex items-center gap-2">
                <BellRing className="h-5 w-5 text-primary" /> Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-3">
                {upcomingEvents.map((event) => (
                  <li key={event.id} className="border-b border-border pb-3 last:border-b-0 last:pb-0">
                    <p className="font-body font-medium text-foreground">{event.title}</p>
                    <p className="text-sm font-body text-muted-foreground">
                      {event.date} &bull; {event.location}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {event.tags?.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs font-body px-2 py-1 rounded-full bg-accent text-accent-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
              <Button
                variant="link"
                className="p-0 h-auto mt-4 text-primary hover:underline font-body"
                onClick={() => setPage("services")}
              >
                View All Events
              </Button>
            </CardContent>
          </Card>

          <Card className="p-6 bg-card text-card-foreground shadow-sm border-border">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl font-heading font-semibold">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex flex-col space-y-2">
              <Button
                variant="ghost"
                className="justify-start text-foreground hover:text-primary font-body"
                onClick={() => setPage("community-forum")}
              >
                <MessageSquare className="mr-2 h-4 w-4" /> Community Forum
              </Button>
              <Button
                variant="ghost"
                className="justify-start text-foreground hover:text-primary font-body"
                onClick={() => setPage("about")}
              >
                <Award className="mr-2 h-4 w-4" /> Resources & Guides
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
