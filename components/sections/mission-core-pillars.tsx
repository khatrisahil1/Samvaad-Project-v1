import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MissionCorePillars() {
  const pillars = [
    {
      title: "Expression",
      description:
        "Creating safe, judgment-free spaces where thoughts, emotions, and stories can be openly shared—because healing begins when we are heard.",
    },
    {
      title: "Empathy",
      description:
        "Fostering understanding by listening deeply and connecting beyond labels, roles, and differences—building a culture of emotional sensitivity.",
    },
    {
      title: "Empowerment",
      description:
        "Equipping individuals with awareness, tools, and confidence to take charge of their emotional, social, and digital well-being.",
    },
    {
      title: "Engagement",
      description:
        "Encouraging active participation across communities through meaningful conversations, creative platforms, and collaborative action.",
    },
  ]

  return (
    <section id="mission" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-2 text-foreground">Our Mission: Core Pillars</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
            Our work is rooted in four core values that guide every conversation, workshop, and initiative we undertake.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="bg-background p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1 border-border text-foreground"
            >
              <CardHeader className="p-0 mb-3">
                <CardTitle className="text-2xl font-heading font-bold text-primary">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="font-body text-muted-foreground">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
