"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayCircle, Headphones, Mic, MessageSquare } from "lucide-react"

export default function PodcastIndex() {
  const podcasts = [
    {
      id: 1,
      title: "Episode 1: The Power of Vulnerability",
      episodeType: "Interview",
      thumbnail: "/placeholder.svg?height=200&width=200",
      link: "#",
      tags: ["#Expression", "#Healing"],
    },
    {
      id: 2,
      title: "Episode 2: Navigating Digital Well-being",
      episodeType: "Solo Talk",
      thumbnail: "/placeholder.svg?height=200&width=200",
      link: "#",
      tags: ["#CyberWellness", "#Awareness"],
    },
    {
      id: 3,
      title: "Episode 3: Art as Therapy",
      episodeType: "Discussion",
      thumbnail: "/placeholder.svg?height=200&width=200",
      link: "#",
      tags: ["#ArtTherapy", "#Healing"],
    },
    {
      id: 4,
      title: "Episode 4: Law and Emotions: A Dialogue",
      episodeType: "Interview",
      thumbnail: "/placeholder.svg?height=200&width=200",
      link: "#",
      tags: ["#LawAndEmotions", "#Awareness"],
    },
  ]

  return (
    <main className="flex-1 py-16 md:py-24 bg-background animate-fade-in">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-foreground">
          SAMVAAD Connect Podcast
        </h1>
        <p className="max-w-3xl mx-auto text-lg font-body text-muted-foreground text-center mb-12">
          Tune into our latest episodes where we explore diverse topics on mental wellness, emotional expression, and
          building a compassionate community.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {podcasts.map((podcast) => (
            <Card
              key={podcast.id}
              className="group hover:shadow-lg transition-all duration-300 ease-in-out bg-card text-card-foreground border-border"
            >
              <CardHeader className="p-0 mb-4">
                <img
                  src={podcast.thumbnail || "/placeholder.svg"}
                  alt={podcast.title}
                  className="rounded-t-lg object-cover w-full h-48"
                />
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm font-body text-muted-foreground mb-1 flex items-center gap-1">
                  {podcast.episodeType === "Interview" && <Mic className="h-4 w-4" />}
                  {podcast.episodeType === "Solo Talk" && <Headphones className="h-4 w-4" />}
                  {podcast.episodeType === "Discussion" && <MessageSquare className="h-4 w-4" />}
                  {podcast.episodeType}
                </p>
                <CardTitle className="text-xl font-heading font-semibold mb-3">{podcast.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                  {podcast.tags?.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-body px-2 py-1 rounded-full bg-accent text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  onClick={() => window.open(podcast.link, "_blank")}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body"
                >
                  <PlayCircle className="mr-2 h-5 w-5" /> Play Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
