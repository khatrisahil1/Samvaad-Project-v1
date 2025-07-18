"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-samvaad-light-stone-gray text-samvaad-dark-slate">
        <DialogHeader>
          <DialogTitle className="text-samvaad-dark-slate font-heading">Get in Touch</DialogTitle>
          <DialogDescription className="text-samvaad-dark-slate/80 font-body">
            Fill out the form below and we'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium text-samvaad-dark-slate font-body">
              Name
            </label>
            <Input
              id="name"
              placeholder="Your Name"
              className="border-samvaad-dark-slate/30 focus:border-samvaad-serene-sage focus:ring-samvaad-serene-sage font-body"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-samvaad-dark-slate font-body">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Your Email"
              className="border-samvaad-dark-slate/30 focus:border-samvaad-serene-sage focus:ring-samvaad-serene-sage font-body"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium text-samvaad-dark-slate font-body">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Your Message"
              className="border-samvaad-dark-slate/30 focus:border-samvaad-serene-sage focus:ring-samvaad-serene-sage font-body"
            />
          </div>
          <Button
            type="submit"
            className="bg-samvaad-dark-slate hover:bg-samvaad-dark-slate/90 text-samvaad-light-stone-gray font-body"
          >
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
