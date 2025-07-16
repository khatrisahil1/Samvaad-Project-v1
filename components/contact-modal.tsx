"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, reason: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for connecting! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      reason: "",
      message: "",
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-card text-card-foreground p-8 rounded-lg shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold text-foreground">Connect With Us</DialogTitle>
          <DialogDescription className="text-muted-foreground font-body">
            Fill out the form below to get in touch with the SAMVAAD team.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-sm font-medium text-foreground">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-input text-foreground border-border focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-input text-foreground border-border focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone" className="text-sm font-medium text-foreground">
              Phone (Optional)
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="bg-input text-foreground border-border focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="reason" className="text-sm font-medium text-foreground">
              Reason for Connecting
            </Label>
            <Select value={formData.reason} onValueChange={handleSelectChange}>
              <SelectTrigger className="bg-input text-foreground border-border focus:ring-primary focus:border-primary">
                <SelectValue placeholder="Select a reason" />
              </SelectTrigger>
              <SelectContent className="bg-card text-card-foreground">
                <SelectItem value="podcast">Podcast Appearance</SelectItem>
                <SelectItem value="events">Events & Summits</SelectItem>
                <SelectItem value="campus">Campus Connect</SelectItem>
                <SelectItem value="corporate">Corporate Connect</SelectItem>
                <SelectItem value="general">General Inquiry</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message" className="text-sm font-medium text-foreground">
              Message (Optional)
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="bg-input text-foreground border-border focus:ring-primary focus:border-primary"
            />
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
