"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

interface FABProps {
  onOpenContactModal: () => void
}

export default function FAB({ onOpenContactModal }: FABProps) {
  return (
    <Button
      id="fab-open-modal"
      className="fixed bottom-8 right-8 bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:bg-primary/90 transition-transform transform hover:scale-110 focus:outline-none z-30"
      aria-label="Connect with Us"
      onClick={onOpenContactModal}
    >
      <MessageSquare className="w-6 h-6" />
    </Button>
  )
}
