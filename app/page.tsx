"use client"

import { useState } from "react"
import Header from "@/components/header"
import HomeSection from "@/components/sections/home-section"
import AboutSection from "@/components/sections/about-section"
import ServicesSection from "@/components/sections/services-section"
import BlogsSection from "@/components/sections/blogs-section"
import ContactUsSection from "@/components/sections/contact-us-section"
import Footer from "@/components/footer"
import FAB from "@/components/fab"
import ContactModal from "@/components/contact-modal"

export default function InteractiveReportPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleOpenContactModal = () => {
    setIsContactModalOpen(true)
  }

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <BlogsSection />
        <ContactUsSection onOpenModal={handleOpenContactModal} />
      </main>
      <Footer />
      <FAB onOpenContactModal={handleOpenContactModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseContactModal} />
    </div>
  )
}
