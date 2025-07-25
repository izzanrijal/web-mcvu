"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
    // For all links (hash or regular), close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="bg-cream text-black hidden lg:block sticky top-0 z-50 border-b border-gray-light">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/mcvu-logo.png"
                  alt="MCVU XXIII 2025 Logo"
                  width={250} 
                  height={50}
                  className="h-16 w-auto"
                  priority
                />
              </Link>
              <div className="text-sm font-mono font-bold">
                10-13 July 2025
                <br />
                Makassar
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <nav>
                <ul className="flex space-x-6">
                  <li>
                    <Link href="/" onClick={(e) => handleNavLinkClick(e, '/')} className="flex items-center hover:text-accent-teal transition-colors">
                      <span className="flex items-center font-bold">
                        <span className="text-accent-teal mr-1">/</span>
                        <span>Home</span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#about-mcvu" onClick={(e) => handleNavLinkClick(e, '#about-mcvu')} className="flex items-center hover:text-accent-teal transition-colors">
                      <span className="flex items-center font-bold">
                        <span className="text-accent-teal mr-1">/</span>
                        <span>About</span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#featured-speakers" onClick={(e) => handleNavLinkClick(e, '#featured-speakers')} className="flex items-center hover:text-accent-teal transition-colors">
                      <span className="flex items-center font-bold">
                        <span className="text-accent-teal mr-1">/</span>
                        <span>Speakers</span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#sessions-slider" onClick={(e) => handleNavLinkClick(e, '#sessions-slider')} className="flex items-center hover:text-accent-teal transition-colors">
                      <span className="flex items-center font-bold">
                        <span className="text-accent-teal mr-1">/</span>
                        <span>Sessions & Workshops</span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#pricing" onClick={(e) => handleNavLinkClick(e, '#pricing')} className="flex items-center hover:text-accent-teal transition-colors">
                      <span className="flex items-center font-bold">
                        <span className="text-accent-teal mr-1">/</span>
                        <span>Pricing</span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#faq-accordion" onClick={(e) => handleNavLinkClick(e, '#faq-accordion')} className="flex items-center hover:text-accent-teal transition-colors">
                      <span className="flex items-center font-bold">
                        <span className="text-accent-teal mr-1">/</span>
                        <span>FAQ</span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <Link
                href="https://mcvu.perkimakassar.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-teal hover:bg-accent-teal/90 text-white py-2 px-6 rounded-md transition-colors text-sm font-semibold"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="bg-cream text-black lg:hidden sticky top-0 z-50 border-b border-gray-light">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image 
                  src="/mcvu-logo.png" 
                  alt="MCVU XXIII 2025 Logo" 
                  width={200} 
                  height={40} 
                  className="h-12 w-auto" 
                  priority 
                />
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <div className="text-xs font-mono font-bold text-right">
                10-13 July 2025
                <br />
                Makassar
              </div>

              <Link
                href="https://mcvu.perkimakassar.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-teal hover:bg-accent-teal/90 text-white py-1.5 px-3 rounded-md transition-colors text-sm"
              >
                Register
              </Link>

              <button onClick={toggleMobileMenu} className="text-mocha-dark focus:outline-none" aria-label="Toggle menu">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-cream text-mocha-dark z-40 transform translate-x-0 transition-transform duration-300 ease-in-out lg:hidden">
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center mb-6">
                <div className="w-10"></div> {/* Spacer for alignment */}
                <button 
                  onClick={toggleMobileMenu} 
                  className="text-mocha-dark hover:text-accent-teal transition-colors p-2 -mr-2"
                  aria-label="Close menu"
                >
                  <X className="h-8 w-8" />
                </button>
              </div>
              <nav className="space-y-4">
                <Link href="/" onClick={(e) => handleNavLinkClick(e, '/')} className="block py-3 px-4 text-lg hover:bg-mousse-light/30 transition-colors">
                  <span className="flex items-center font-bold">
                    <span className="text-accent-teal mr-1">/</span>
                    <span>Home</span>
                  </span>
                </Link>
                <Link href="#about-mcvu" onClick={(e) => handleNavLinkClick(e, '#about-mcvu')} className="block py-3 px-4 text-lg hover:bg-mousse-light/30 transition-colors">
                  <span className="flex items-center font-bold">
                    <span className="text-accent-teal mr-1">/</span>
                    <span>About</span>
                  </span>
                </Link>
                <Link href="#featured-speakers" onClick={(e) => handleNavLinkClick(e, '#featured-speakers')} className="block py-3 px-4 text-lg hover:bg-mousse-light/30 transition-colors">
                  <span className="flex items-center font-bold">
                    <span className="text-accent-teal mr-1">/</span>
                    <span>Speakers</span>
                  </span>
                </Link>
                <Link href="#sessions-slider" onClick={(e) => handleNavLinkClick(e, '#sessions-slider')} className="block py-3 px-4 text-lg hover:bg-mousse-light/30 transition-colors">
                  <span className="flex items-center font-bold">
                    <span className="text-accent-teal mr-1">/</span>
                    <span>Sessions & Workshops</span>
                  </span>
                </Link>
                <Link href="#pricing" onClick={(e) => handleNavLinkClick(e, '#pricing')} className="block py-3 px-4 text-lg hover:bg-mousse-light/30 transition-colors">
                  <span className="flex items-center font-bold">
                    <span className="text-accent-teal mr-1">/</span>
                    <span>Pricing</span>
                  </span>
                </Link>
                <Link href="#faq-accordion" onClick={(e) => handleNavLinkClick(e, '#faq-accordion')} className="block py-3 px-4 text-lg hover:bg-mousse-light/30 transition-colors">
                  <span className="flex items-center font-bold">
                    <span className="text-accent-teal mr-1">/</span>
                    <span>FAQ</span>
                  </span>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
