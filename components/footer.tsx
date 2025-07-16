import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-muted-foreground py-12 md:py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo & Mission */}
        <div className="space-y-4">
          <Link href="#home" className="flex items-center gap-2" prefetch={false}>
            <Image src="/placeholder-logo.png" alt="SAMVAAD Logo" width={40} height={40} />
            <span className="text-2xl font-heading font-bold text-primary-foreground">SAMVAAD</span>
          </Link>
          <p className="text-sm font-body">
            From Ideas to Impact. Building a better society through better understanding.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-primary-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm font-body">
            <li>
              <Link href="#mission" className="hover:text-primary transition-colors" prefetch={false}>
                Mission
              </Link>
            </li>
            <li>
              <Link href="#approach" className="hover:text-primary transition-colors" prefetch={false}>
                Approach
              </Link>
            </li>
            <li>
              <Link href="#impact" className="hover:text-primary transition-colors" prefetch={false}>
                Impact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-primary-foreground mb-4">Legal</h4>
          <ul className="space-y-2 text-sm font-body">
            <li>
              <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media Icons */}
        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-primary-foreground mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary" prefetch={false}>
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary" prefetch={false}>
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary" prefetch={false}>
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary" prefetch={false}>
              <Twitter className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground font-body">
        &copy; {new Date().getFullYear()} SAMVAAD. All Rights Reserved.
      </div>
    </footer>
  )
}
