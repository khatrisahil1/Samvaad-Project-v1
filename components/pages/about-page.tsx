export default function AboutPage() {
  return (
    <main className="flex-1 py-16 md:py-24 bg-background animate-fade-in">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-8 text-foreground">Our Story</h1>
        <p className="text-lg font-body text-muted-foreground text-center mb-12 leading-relaxed">
          SAMVAAD is a pioneering mental wellness initiative dedicated to fostering open dialogue, promoting
          understanding, and building a more empathetic society. Founded on the belief that mental well-being is a
          cornerstone of a thriving community, we strive to break down stigmas and provide accessible resources for
          everyone.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
              Behtar Samaaj with Behtar Samajh
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Our vision, "Behtar Samaaj with Behtar Samajh" (A Better Society with Better Understanding), encapsulates
              our core mission. We believe that true societal progress comes from a deeper understanding of ourselves
              and others, especially concerning mental health. Through education, support, and community engagement, we
              aim to cultivate environments where individuals feel safe, heard, and empowered to seek help and grow.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              We are committed to creating a ripple effect of positive change, one conversation at a time. Join us in
              building a future where mental wellness is prioritized and celebrated.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Our Vision"
              className="rounded-lg object-cover w-full h-auto shadow-lg"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
