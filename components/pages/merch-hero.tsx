import Link from "next/link"
import Image from "next/image"

export default function MerchHero() {
  return (
    <section id="merch-hero" className="py-20 md:py-32 text-center bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/placeholder.svg?height=400&width=600" // Using placeholder as per instructions
            alt="SAMVAAD Merchandise"
            width={600}
            height={400}
            className="w-full max-w-lg mx-auto mb-8"
          />
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-foreground mb-4">SAMVAAD Merchandise</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Wear the spirit of dialogue, healing, and awareness. Shop our exclusive collection!
          </p>
          <Link
            href="#shop"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-transform transform hover:scale-105"
            prefetch={false}
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  )
}
