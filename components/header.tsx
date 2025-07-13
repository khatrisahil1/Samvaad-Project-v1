"use client"

import { useState } from "react"
import { SamvaadButton } from "@/components/samvaad-button" // Import SamvaadButton
import { Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "./theme-provider"
import { cn } from "@/lib/utils"

interface HeaderProps {
  currentPage: string
  setPage: (page: string) => void
}

export default function Header({ currentPage, setPage }: HeaderProps) {
  const { theme, toggleTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Services", path: "services" },
    { name: "Blog", path: "blog" },
    { name: "Contact", path: "contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <SamvaadButton
          variant="ghost" // Use shadcn's ghost variant for the logo button
          onClick={() => setPage("home")}
          className="text-2xl font-heading font-bold text-foreground hover:bg-transparent"
        >
          SAMVAAD
        </SamvaadButton>

        {/* Desktop Navigation Links (Centered) */}
        <nav className="hidden md:flex items-center flex-grow justify-center space-x-4">
          {navLinks.map((link) => (
            <SamvaadButton
              key={link.path}
              variant="samvaad-ghost" // Use the custom samvaad-ghost variant for nav links
              onClick={() => setPage(link.path)}
              className={cn(
                "text-base font-body font-medium",
                currentPage === link.path && "text-primary font-semibold", // Active page styling
              )}
            >
              {link.name}
            </SamvaadButton>
          ))}
        </nav>

        {/* Desktop Theme Toggle & Get Involved Button (Right) */}
        <div className="hidden md:flex items-center space-x-4">
          <SamvaadButton
            variant="ghost" // Use shadcn's ghost variant for the theme toggle icon button
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-foreground hover:bg-muted"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </SamvaadButton>
          <SamvaadButton
            onClick={() => setPage("contact")}
            variant="samvaad-primary" // Use the custom samvaad-primary variant
          >
            Get Involved
          </SamvaadButton>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <SamvaadButton
            variant="ghost" // Use shadcn's ghost variant for the theme toggle icon button
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-foreground hover:bg-muted"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </SamvaadButton>
          <SamvaadButton
            variant="ghost" // Use shadcn's ghost variant for the mobile menu toggle icon button
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="text-foreground hover:bg-muted"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </SamvaadButton>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
          <nav className="flex flex-col items-center py-4 space-y-2">
            {navLinks.map((link) => (
              <SamvaadButton
                key={link.path}
                variant="samvaad-ghost" // Use the custom samvaad-ghost variant for mobile nav links
                onClick={() => {
                  setPage(link.path)
                  setIsMobileMenuOpen(false)
                }}
                className={cn(
                  "w-full text-lg font-body font-medium py-3",
                  currentPage === link.path && "text-primary font-semibold", // Active page styling
                )}
              >
                {link.name}
              </SamvaadButton>
            ))}
            <SamvaadButton
              onClick={() => {
                setPage("contact")
                setIsMobileMenuOpen(false)
              }}
              className="w-3/4 mt-4"
              variant="samvaad-primary" // Use the custom samvaad-primary variant
            >
              Get Involved
            </SamvaadButton>
          </nav>
        </div>
      )}
    </header>
  )
}
