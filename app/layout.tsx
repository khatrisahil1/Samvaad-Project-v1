import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

// Configure Open Sans font for body text
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

// Configure Playfair Display font for headings
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "SAMVAAD - Mental Wellness Platform",
  description: "Behtar Samaaj with Behtar Samajh – A youth mental wellness and community engagement platform.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("min-h-screen bg-background font-body antialiased", openSans.variable, playfairDisplay.variable)}
      >
        {children}
      </body>
    </html>
  )
}
