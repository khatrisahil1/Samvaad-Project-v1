"use client"

import { Button } from "@/components/ui/button"

interface MerchPreFooterContactProps {
  onOpenContactModal: () => void
}

export default function MerchPreFooterContact({ onOpenContactModal }: MerchPreFooterContactProps) {
  return (
    <section
      id="contact"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url('/placeholder.svg?height=1080&width=1920')` }}
    >
      <div className="absolute inset-0 bg-foreground/70 dark:bg-background/70" /> {/* Overlay */}
      <div className="relative py-20 md:py-32">
        <div className="container mx-auto px-6 text-center text-primary-foreground">
          <h2 className="text-4xl font-heading font-bold mb-4">Questions about Merchandise?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-body">
            Reach out for bulk orders, collaborations, or any queries!
          </p>
          <Button
            onClick={onOpenContactModal}
            className="bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-transform transform hover:scale-105"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
