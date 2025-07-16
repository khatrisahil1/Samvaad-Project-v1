import { Card, CardContent, CardTitle } from "@/components/ui/card"

export default function StrategicApproach() {
  const phases = [
    {
      phase: "PHASE 1",
      title: "Planning & Design",
      description:
        "Establishing founder partnerships, conducting initial research, and finalizing the core platform design and architecture.",
    },
    {
      phase: "PHASE 2",
      title: "Deployment",
      description:
        "Deploying the public-facing website and the core AI-powered application platform. Target: August 2025.",
    },
    {
      phase: "PHASE 3",
      title: "Pilot Launch",
      description:
        "Rolling out the platform with a pilot group of 3-5 colleges to gather real-world feedback and refine functionalities.",
    },
    {
      phase: "PHASE 4",
      title: "Scale & Expand",
      description:
        "Scaling operations to 10-15 colleges, expanding program offerings, and beginning work on a patent for our AI methodology.",
    },
  ]

  return (
    <section id="approach" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-2 text-foreground">Our Strategic Roadmap</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
            Our journey from idea to impact is structured in clear, deliberate phases to ensure sustainable growth and a
            scalable platform.
          </p>
        </div>
        <div className="relative">
          {/* Connecting Line */}
          <div
            className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/30"
            style={{ transform: "translateY(-50%)" }}
          ></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {phases.map((phase, index) => (
              <Card
                key={index}
                className="bg-card p-6 rounded-lg shadow-sm border-t-4 border-primary hover:shadow-lg transition-shadow text-foreground"
              >
                <CardContent className="p-0">
                  <span className="text-sm font-bold text-primary font-body">{phase.phase}</span>
                  <CardTitle className="text-xl font-heading font-bold my-2">{phase.title}</CardTitle>
                  <p className="text-sm text-muted-foreground font-body">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
