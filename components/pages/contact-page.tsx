"use client"

import { cn } from "@/lib/utils"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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

    // Simulate success/failure
    const success = Math.random() > 0.2 // 80% success rate for demo

    if (success) {
      setSubmitMessage("Thank you for reaching out! We're here for you and will connect soon.")
      setFormData({ name: "", email: "", subject: "", message: "" }) // Clear form
    } else {
      setIsError(true)
      setSubmitMessage(
        "Oops! Something went wrong. Please try again, or reach out to us directly if the issue persists. We're here to help.",
      )
    }
    setIsSubmitting(false)
  }

  return (
    <main className="flex-1 py-16 md:py-24 bg-background animate-fade-in flex items-center justify-center px-4 md:px-6">
      <Card className="w-full max-w-5xl p-6 md:p-10 shadow-xl bg-card text-card-foreground border-border rounded-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <CardHeader>
            <CardTitle className="text-center md:text-left mb-8 md:mb-0 text-3xl md:text-4xl font-heading font-bold text-foreground">
              Get In Touch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-foreground">Reach Out to Us</h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  We're here to listen and support you on your journey. Whether you have a question, feedback, or just
                  want to connect, please don't hesitate to get in touch. We aim to respond within 24-48 hours.
                </p>
              </div>
              <div className="space-y-4 text-foreground">
                <div className="flex items-center gap-3 font-body">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>hello@samvaad.com</span>
                </div>
                <div className="flex items-center gap-3 font-body">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 font-body">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>123 Wellness Ave, Suite 400, Mindful City, MW 12345</span>
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8 bg-background rounded-lg border border-border shadow-inner">
              <h2 className="text-2xl font-heading font-bold text-center mb-6 text-foreground">Contact Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="font-body">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-border focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="font-body">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-border focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="font-body">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-border focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="font-body">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
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
                  <p
                    className={cn("mt-4 text-center text-sm font-body", isError ? "text-destructive" : "text-success")}
                  >
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </CardContent>
        </div>
      </Card>
    </main>
  )
}
