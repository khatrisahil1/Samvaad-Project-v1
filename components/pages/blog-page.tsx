"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const blogPosts = [
    {
      category: "Mental Health",
      title: "Understanding Anxiety: A Comprehensive Guide",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
      tags: ["#Healing", "#Awareness"],
    },
    {
      category: "Well-being",
      title: "5 Simple Habits for Daily Mindfulness",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
      tags: ["#Expression", "#Healing"],
    },
    {
      category: "Community",
      title: "The Power of Connection: Building Supportive Networks",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
      tags: ["#SAMVAADConnect", "#Community"],
    },
    {
      category: "Personal Growth",
      title: "Setting Healthy Boundaries for a Balanced Life",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
      tags: ["#Expression", "#SelfCare"],
    },
    {
      category: "Coping Strategies",
      title: "Navigating Stress: Practical Tips for Resilience",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
      tags: ["#Healing", "#CyberWellness"],
    },
    {
      category: "Awareness",
      title: "Breaking the Stigma: Why We Need to Talk About Mental Health",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
      tags: ["#Awareness", "#Community"],
    },
  ]

  return (
    <main className="flex-1 py-16 md:py-24 bg-background animate-fade-in">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-foreground">
          Insights & Stories
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 ease-in-out bg-card text-card-foreground border-border"
            >
              <CardHeader>
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="rounded-md object-cover w-full h-48 mb-4"
                />
                <p className="text-sm text-primary font-body font-semibold mb-2">{post.category}</p>
                <CardTitle className="text-xl font-heading font-semibold">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags?.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-body px-2 py-1 rounded-full bg-accent text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="link"
                  className="p-0 h-auto text-primary hover:underline font-body"
                  onClick={() => window.open(post.link, "_blank")}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
