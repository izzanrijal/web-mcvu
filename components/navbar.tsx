"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const navItems = [
    {
      label: "About",
      dropdown: true,
      items: [
        { label: "About MCVU", href: "/about" },
        { label: "Organizers", href: "/organizers" },
        { label: "Venue", href: "/venue" },
      ],
    },
    {
      label: "Program",
      dropdown: true,
      items: [
        { label: "Symposium", href: "/symposium" },
        { label: "Workshops", href: "/workshops" },
        { label: "Schedule", href: "/schedule" },
        { label: "Speakers", href: "/speakers" },
      ],
    },
    { label: "Registration", href: "/registration" },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-white border-b border-gray-light sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg?height=60&width=180&query=MCVU XXIII 2025 logo medical conference"
              alt="MCVU XXIII 2025"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center text-mocha-dark hover:text-accent-teal font-medium transition-colors"
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="text-mocha-dark hover:text-accent-teal font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {item.dropdown && (
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ${activeDropdown === item.label ? "opacity-100 visible" : "opacity-0 invisible"}`}
                  >
                    <div className="py-2">
                      {item.items?.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-mocha-dark hover:bg-mousse-light/30 hover:text-accent-teal"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Register Button */}
          <div className="hidden lg:block">
            <Button className="bg-accent-teal hover:bg-accent-teal/90 text-white">Register Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-mocha-dark" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="container mx-auto px-4 py-4 space-y-4">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center justify-between w-full text-mocha-dark font-medium py-2"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>

                  {activeDropdown === item.label && (
                    <div className="pl-4 mt-2 border-l-2 border-mousse-light space-y-2">
                      {item.items?.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block py-2 text-mocha-dark hover:text-accent-teal"
                          onClick={toggleMenu}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="block py-2 text-mocha-dark font-medium hover:text-accent-teal"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <div className="pt-4 border-t border-gray-light">
            <Button className="w-full bg-accent-teal hover:bg-accent-teal/90 text-white">Register Now</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
