import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PreFooterContact() {
  return (
    <section
      id="contact"
      className="bg-cover bg-center"
      style={{ backgroundImage: `url('/placeholder.svg?height=1080&width=1920')` }} // Placeholder for "Hands Together" image
    >
      <div className="bg-foreground/70 py-20 md:py-32">
        <div className="container mx-auto px-6 text-center text-primary-foreground">
          <h2 className="text-4xl font-heading font-bold mb-4">Let's Build a Better Society Together</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-body">
            Whether you're an individual with a story, an expert with knowledge, or an organization with a cause,
            there's a place for you here.
          </p>
          <Link href="#contact-modal" passHref>
            <Button
              id="open-modal-btn"
              className="bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-transform transform hover:scale-105"
            >
              Reach Out to Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
