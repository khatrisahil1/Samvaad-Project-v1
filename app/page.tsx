"use client"

import { useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HomePage from "@/components/pages/home-page"
import AboutPage from "@/components/pages/about-page"
import ServicesPage from "@/components/pages/services-page"
import BlogPage from "@/components/pages/blog-page"
import ContactPage from "@/components/pages/contact-page"
import StudentDashboard from "@/components/pages/student-dashboard"
import AssessmentIntro from "@/components/pages/assessment-intro"
import LoginScreen from "@/components/pages/login-screen"
import CommunityForum from "@/components/pages/community-forum"
import EventDetailsPage from "@/components/pages/event-details-page"
import PodcastIndex from "@/components/pages/podcast-index"
import MerchPage from "@/components/pages/merch-page"
import FloatingCTA from "@/components/floating-cta"

// Define a type for the page names
type PageName =
  | "home"
  | "about"
  | "services"
  | "blog"
  | "contact"
  | "student-dashboard"
  | "assessment-intro"
  | "login-screen"
  | "community-forum"
  | "event-details"
  | "podcast-index"
  | "merch"

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageName>("home")
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Handle page transitions with a fade effect
  const setPage = (page: PageName) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPage(page)
      setIsTransitioning(false)
    }, 300) // Duration of the fade-out animation
  }

  // Render the current page component
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setPage={setPage} />
      case "about":
        return <AboutPage />
      case "services":
        return <ServicesPage />
      case "blog":
        return <BlogPage />
      case "contact":
        return <ContactPage />
      case "student-dashboard":
        return <StudentDashboard setPage={setPage} />
      case "assessment-intro":
        return <AssessmentIntro setPage={setPage} />
      case "login-screen":
        return <LoginScreen setPage={setPage} />
      case "community-forum":
        return <CommunityForum />
      case "event-details":
        return <EventDetailsPage setPage={setPage} />
      case "podcast-index":
        return <PodcastIndex />
      case "merch":
        return <MerchPage />
      default:
        return <HomePage setPage={setPage} />
    }
  }

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header currentPage={currentPage} setPage={setPage} />
        <div
          className={`flex-1 transition-opacity duration-300 ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {renderPage()}
        </div>
        <Footer />
        <FloatingCTA />
      </div>
    </ThemeProvider>
  )
}
