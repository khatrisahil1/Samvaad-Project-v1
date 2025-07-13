import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
  ]

  return (
    <main className="flex-1 py-16 md:py-24 bg-background animate-fade-in">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-foreground">What We Offer</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 ease-in-out bg-card text-card-foreground border-border"
            >
              <CardHeader>
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="rounded-md object-cover w-full h-48 mb-4"
                />
                <CardTitle className="text-xl font-heading font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
