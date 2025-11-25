"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container-custom flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold text-primary">
          TechFlow
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/works" className="text-sm font-medium hover:text-primary transition-colors">
            Works
          </Link>
          <Link href="/team" className="text-sm font-medium hover:text-primary transition-colors">
            Team
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        <button
          className="hidden md:block btn-primary cursor-pointer"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Start Project
        </button>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-custom py-4 flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/works" className="text-sm font-medium">
              Works
            </Link>
            <Link href="/team" className="text-sm font-medium">
              Team
            </Link>
            <Link href="/contact" className="text-sm font-medium">
              Contact
            </Link>
            <button className="btn-primary text-sm cursor-pointer">Start Project</button>
          </div>
        </div>
      )}
    </nav>
  )
}
