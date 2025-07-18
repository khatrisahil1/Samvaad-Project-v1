"use client"

import { useState } from "react"
import Link from "next/link"
import { MenuIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact Us", href: "#contact" },
  ]

  return (
    <header
      id="header"
      className="bg-samvaad-light-stone-gray/80 backdrop-blur-lg sticky top-0 z-40 border-b border-border"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#home" className="text-2xl font-heading font-bold text-samvaad-dark-slate" prefetch={false}>
          SAMVAAD
        </Link>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-samvaad-serene-sage transition-colors font-body"
              prefetch={false}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <XIcon className="w-6 h-6 text-samvaad-dark-slate" />
          ) : (
            <MenuIcon className="w-6 h-6 text-samvaad-dark-slate" />
          )}
        </Button>
      </div>
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden bg-samvaad-light-stone-gray/90 backdrop-blur-sm transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden",
        )}
      >
        <nav className="flex flex-col py-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-3 px-6 text-samvaad-dark-slate hover:bg-samvaad-off-white transition-colors font-body"
              onClick={() => setIsMobileMenuOpen(false)}
              prefetch={false}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
