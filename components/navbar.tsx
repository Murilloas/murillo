"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">Murillo</span>
        </Link>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-primary">
            Skills
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary">
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
          <Button>Download CV</Button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg md:hidden">
            <nav className="flex flex-col p-4 space-y-3">
              <Link
                href="#about"
                className="text-sm font-medium p-2 hover:bg-gray-100 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#skills"
                className="text-sm font-medium p-2 hover:bg-gray-100 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium p-2 hover:bg-gray-100 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium p-2 hover:bg-gray-100 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="w-full">Download CV</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
