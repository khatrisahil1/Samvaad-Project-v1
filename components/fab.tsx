"use client"

import { Button } from "@/components/ui/button"
import { MessageSquareTextIcon } from "lucide-react"

interface FABProps {
  onOpenContactModal: () => void
}

export default function FAB({ onOpenContactModal }: FABProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="rounded-full w-16 h-16 shadow-lg bg-samvaad-serene-sage hover:bg-samvaad-serene-sage/90 text-white"
        onClick={onOpenContactModal}
        aria-label="Open contact form"
      >
        <MessageSquareTextIcon className="w-8 h-8" />
      </Button>
    </div>
  )
}
