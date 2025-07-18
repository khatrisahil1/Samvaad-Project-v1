"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"

interface ContactUsSectionProps {
  onOpenModal: () => void
}

export default function ContactUsSection({ onOpenModal }: ContactUsSectionProps) {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-samvaad-light-stone-gray">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-samvaad-dark-slate font-heading">
              Get Involved with SAMVAAD
            </h2>
            <p className="max-w-[700px] text-samvaad-dark-slate/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              Whether you want to volunteer, partner with us, or simply learn more, we&apos;d love to hear from you.
              Reach out and let&apos;s build a better future together.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-samvaad-dark-slate font-body">
                <MailIcon className="h-5 w-5 text-samvaad-serene-sage" />
                <span>info@samvaad.org</span>
              </div>
              <div className="flex items-center gap-3 text-samvaad-dark-slate font-body">
                <PhoneIcon className="h-5 w-5 text-samvaad-serene-sage" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-start gap-3 text-samvaad-dark-slate font-body">
                <MapPinIcon className="h-5 w-5 text-samvaad-serene-sage flex-shrink-0 mt-1" />
                <span>123 Dialogue Street, Harmony City, HC 98765</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-samvaad-dark-slate font-heading">Send us a message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-samvaad-dark-slate font-body">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  className="mt-1 block w-full border-samvaad-dark-slate/30 focus:border-samvaad-serene-sage focus:ring-samvaad-serene-sage font-body"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-samvaad-dark-slate font-body">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="mt-1 block w-full border-samvaad-dark-slate/30 focus:border-samvaad-serene-sage focus:ring-samvaad-serene-sage font-body"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-samvaad-dark-slate font-body">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  rows={5}
                  className="mt-1 block w-full border-samvaad-dark-slate/30 focus:border-samvaad-serene-sage focus:ring-samvaad-serene-sage font-body"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-samvaad-dark-slate text-samvaad-light-stone-gray hover:bg-samvaad-dark-slate/90 font-body"
              >
                Send Message
              </Button>
            </form>
            <Button
              onClick={onOpenModal}
              variant="outline"
              className="w-full mt-4 border-samvaad-dark-slate text-samvaad-dark-slate hover:bg-samvaad-off-white font-body bg-transparent"
            >
              Open Contact Modal
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
