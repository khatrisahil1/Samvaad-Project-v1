import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

// Configure Open Sans font for body text
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "600", "700"],
  display: "swap",
})

// Configure Playfair Display font for headings
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "SAMVAAD | Interactive Report",
  description:
    "A single-page interactive report for SAMVAAD, focusing on youth mental wellness and community engagement.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn("min-h-screen bg-background font-body antialiased", openSans.variable, playfairDisplay.variable)}
      >
        {children}
      </body>
    </html>
  )
}
