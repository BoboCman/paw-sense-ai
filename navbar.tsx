"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PawPrint, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <PawPrint className="h-6 w-6 text-[#2980b9]" />
            <span className="font-bold text-xl">PawSense AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`text-sm font-medium ${isActive("/") ? "text-[#2980b9]" : "text-gray-600 hover:text-gray-900"}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium ${isActive("/about") ? "text-[#2980b9]" : "text-gray-600 hover:text-gray-900"}`}
            >
              How It Works
            </Link>
            <Link href="/upload">
              <Button className="bg-[#27ae60] hover:bg-[#219955]">Upload Video</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`px-2 py-1 rounded-md ${isActive("/") ? "bg-gray-100 text-[#2980b9]" : "text-gray-600 hover:bg-gray-50"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-2 py-1 rounded-md ${isActive("/about") ? "bg-gray-100 text-[#2980b9]" : "text-gray-600 hover:bg-gray-50"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link href="/upload" className="px-2 py-1" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-[#27ae60] hover:bg-[#219955]">Upload Video</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

