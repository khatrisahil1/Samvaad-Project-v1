import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BlogsSection() {
  const blogPosts = [
    {
      id: 1,
      title: "The Power of Dialogue in Divided Times",
      description: "Exploring how open conversations can bridge societal gaps and foster unity.",
      image: "/placeholder.svg?height=200&width=300",
      date: "July 10, 2025",
      link: "#",
    },
    {
      id: 2,
      title: "Youth as Catalysts for Change: SAMVAAD's Impact",
      description: "Highlighting stories of young leaders empowered by our programs.",
      image: "/placeholder.svg?height=200&width=300",
      date: "June 25, 2025",
      link: "#",
    },
    {
      id: 3,
      title: "Building Resilient Communities: A Holistic Approach",
      description: "Our strategies for sustainable development and conflict prevention.",
      image: "/placeholder.svg?height=200&width=300",
      date: "June 1, 2025",
      link: "#",
    },
  ]

  return (
    <section id="blogs" className="w-full py-12 md:py-24 lg:py-32 bg-samvaad-off-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-samvaad-dark-slate font-heading">
              Our Latest Insights
            </h2>
            <p className="max-w-[900px] text-samvaad-dark-slate/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              Stay updated with our thoughts, research, and success stories.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-white shadow-lg">
              <CardHeader>
                <Image
                  src={post.image || "/placeholder.svg"}
                  width={300}
                  height={200}
                  alt={post.title}
                  className="rounded-md object-cover w-full h-48"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <CardTitle className="text-samvaad-dark-slate font-heading">{post.title}</CardTitle>
                <CardDescription className="text-samvaad-dark-slate/70 font-body">{post.description}</CardDescription>
                <p className="text-sm text-samvaad-dark-slate/60 font-body">{post.date}</p>
              </CardContent>
              <CardFooter>
                <Link href={post.link} passHref>
                  <Button variant="link" className="text-samvaad-serene-sage hover:text-samvaad-dark-slate font-body">
                    Read More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="#" passHref>
            <Button className="bg-samvaad-dark-slate text-samvaad-light-stone-gray hover:bg-samvaad-dark-slate/90 font-body">
              View All Blogs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
