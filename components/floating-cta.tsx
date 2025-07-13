"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export default function FloatingCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [isError, setIsError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")
    setIsError(false)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const success = Math.random() > 0.2 // 80% success rate for demo

    if (success) {
      setSubmitMessage("Thank you for reaching out! We're here for you and will connect soon.")
      setFormData({ name: "", email: "", message: "" }) // Clear form
    } else {
      setIsError(true)
      setSubmitMessage("Oops! Something went wrong. Please try again. We're here to help.")
    }
    setIsSubmitting(false)
  }

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full h-16 w-16 md:h-20 md:w-20 text-lg md:text-xl font-body font-semibold shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center text-center leading-tight"
        aria-label="Connect with Us"
      >
        Connect with Us
      </Button>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px] bg-card text-card-foreground border-border">
          <DialogHeader>
            <DialogTitle className="font-heading text-foreground">Connect with SAMVAAD</DialogTitle>
            <DialogDescription className="font-body text-muted-foreground">
              We're here to listen and support you. Fill out the form below to get in touch.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="modal-name" className="font-body">
                Name
              </Label>
              <Input
                id="modal-name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-border focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="modal-email" className="font-body">
                Email
              </Label>
              <Input
                id="modal-email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-border focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="modal-message" className="font-body">
                Message
              </Label>
              <Textarea
                id="modal-message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Share what's on your mind..."
                className="border-border focus:ring-primary focus:border-primary"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending your message..." : "Send Message"}
            </Button>
            {submitMessage && (
              <p className={cn("mt-2 text-center text-sm font-body", isError ? "text-destructive" : "text-success")}>
                {submitMessage}
              </p>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
