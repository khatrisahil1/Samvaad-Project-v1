// --- CORRECTED FILE: src/app/page.tsx ---
"use client"

import { useState } from "react"
// Corrected import paths to match our file structure
import { Header } from "@/components/global/Header"
import { Footer } from "@/components/global/Footer"
import { FloatingActionButton } from "@/components/global/FloatingActionButton"
import { ContactModal } from "@/components/modals/ContactModal"

// Importing the new section components
import { HomeSection } from "@/components/sections/HomeSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { BlogsSection } from "@/components/sections/BlogsSection"
import { ContactUsSection } from "@/components/sections/ContactUsSection"

export default function InteractiveReportPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleOpenContactModal = () => {
    setIsContactModalOpen(true)
  }

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-stone dark:bg-slate text-slate dark:text-stone">
      <Header />
      <main className="flex-1">
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <BlogsSection />
        <ContactUsSection onOpenModal={handleOpenContactModal} />
      </main>
      <Footer />
      <FloatingActionButton onClick={handleOpenContactModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseContactModal} />
    </div>
  )
}
