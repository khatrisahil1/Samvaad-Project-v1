"use client"

import { useState } from "react"
import Header from "@/components/header"

import ChallengeSection from "@/components/sections/challenge-section"
import MissionCorePillars from "@/components/sections/mission-core-pillars"
import StrategicApproach from "@/components/sections/strategic-approach"
import ImpactTestimonials from "@/components/sections/impact-testimonials"
import PreFooterContact from "@/components/sections/pre-footer-contact"
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

        <ChallengeSection />
        <MissionCorePillars />
        <StrategicApproach />
        <ImpactTestimonials />
        <PreFooterContact />
      </main>
      <Footer />
      <FAB onOpenContactModal={handleOpenContactModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseContactModal} />
    </div>
  )
}
