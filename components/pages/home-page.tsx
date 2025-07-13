"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlayCircle } from "lucide-react"

interface HomePageProps {
  setPage: (page: string) => void
}

export default function HomePage({ setPage }: HomePageProps) {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-48 bg-background">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-4 animate-fade-in text-foreground">
            From Ideas to Impact
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-body text-muted-foreground mb-8 animate-fade-in delay-200">
            Empowering minds, fostering understanding, and building a better society through dialogue and insight.
          </p>
          <Button
            size="lg"
            onClick={() => setPage("services")}
            className="animate-fade-in delay-400 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Explore Our Services
          </Button>
        </div>
      </section>

      {/* Quote Slider Placeholder */}
      <section className="w-full py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
            Voices of Healing and Growth
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-6 md:p-8 bg-card text-card-foreground shadow-sm border-border">
              <CardContent className="p-0">
                <p className="text-xl md:text-2xl font-body italic text-foreground mb-4">
                  "SAMVAAD helped me find my voice and connect with a community that truly understands. It's a safe
                  space for expression and healing."
                </p>
                <p className="text-lg font-body font-semibold text-muted-foreground">- A SAMVAAD Community Member</p>
              </CardContent>
            </Card>
            {/* In a full implementation, this would be a dynamic slider component */}
          </div>
        </div>
      </section>

      {/* Video Section Placeholder */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
            Experience SAMVAAD in Action
          </h2>
          <div className="relative w-full max-w-4xl mx-auto aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden shadow-lg">
            <img
              src="/placeholder.svg?height=400&width=700"
              alt="Video Placeholder"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <Button
              variant="ghost"
              size="icon"
              className="relative z-10 h-24 w-24 rounded-full bg-primary/80 text-primary-foreground hover:bg-primary transition-all duration-300"
              aria-label="Play video"
              onClick={() => alert("Simulating video playback...")}
            >
              <PlayCircle className="h-16 w-16" />
            </Button>
          </div>
          <p className="text-muted-foreground mt-6 font-body">
            Watch our story and see how we're building a better society.
          </p>
        </div>
      </section>

      {/* Section Highlights: Podcast, Events, Campus Programs */}
      <section className="w-full py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12">
            Explore Our Pillars
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="group hover:shadow-lg transition-all duration-300 ease-in-out bg-card text-card-foreground border-border">
              <CardHeader>
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="SAMVAAD Podcast"
                  className="rounded-md object-cover w-full h-48 mb-4"
                />
                <CardTitle className="text-xl font-heading font-semibold">SAMVAAD Connect Podcast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">
                  Listen to inspiring conversations on mental wellness, resilience, and community.
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto mt-4 text-primary hover:underline"
                  onClick={() => setPage("podcast-index")}
                >
                  Tune In Now
                </Button>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300 ease-in-out bg-card text-card-foreground border-border">
              <CardHeader>
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Events & Workshops"
                  className="rounded-md object-cover w-full h-48 mb-4"
                />
                <CardTitle className="text-xl font-heading font-semibold">Engaging Events & Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">
                  Participate in interactive sessions designed for growth and understanding.
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto mt-4 text-primary hover:underline"
                  onClick={() => setPage("services")}
                >
                  View Calendar
                </Button>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300 ease-in-out bg-card text-card-foreground border-border">
              <CardHeader>
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Campus & Corporate Programs"
                  className="rounded-md object-cover w-full h-48 mb-4"
                />
                <CardTitle className="text-xl font-heading font-semibold">Campus & Corporate Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">
                  Tailored initiatives fostering mental wellness in educational and professional settings.
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto mt-4 text-primary hover:underline"
                  onClick={() => setPage("contact")}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
