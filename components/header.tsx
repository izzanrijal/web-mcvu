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
      <header className="bg-mocha-dark text-white hidden lg:block sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/placeholder-nky7r.png"
                  alt="MCVU XXIII 2025"
                  width={160}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <div className="text-sm font-mono">
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
                      <span className="flex items-center">
                        <span className="text-accent-teal mr-1">/</span>
                        <span>Home</span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#about-mcvu" onClick={(e) => handleNavLinkClick(e, '#about-mcvu')} className="flex items-center hover:text-accent-teal transition-colors">
                      <span className="flex items-center">
                        <span className="text-accent-teal mr-1">/</span>
                        <span>About</span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#featured-speakers" onClick={(e) => handleNavLinkClick(e, '#featured-speakers')} className="flex items-center hover:text-accent-teal transition-colors">
                      <span className="flex items-center">
                        <span className="text-accent-teal mr-1">/</span>
                        <span>Speakers</span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#sessions-slider" onClick={(e) => handleNavLinkClick(e, '#sessions-slider')} className="flex items-center hover:text-accent-teal transition-colors">
                      <span className="flex items-center">
                        <span className="text-accent-teal mr-1">/</span>
                        <span>Sessions & Workshops</span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#pricing" onClick={(e) => handleNavLinkClick(e, '#pricing')} className="flex items-center hover:text-accent-teal transition-colors">
                      <span className="flex items-center">
                        <span className="text-accent-teal mr-1">/</span>
                        <span>Pricing</span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#faq-accordion" onClick={(e) => handleNavLinkClick(e, '#faq-accordion')} className="flex items-center hover:text-accent-teal transition-colors">
                      <span className="flex items-center">
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
      <header className="bg-mocha-dark text-white lg:hidden sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex-shrink-0">
              <Image src="/placeholder-nky7r.png" alt="MCVU XXIII 2025" width={128} height={32} className="h-8 w-auto" />
            </Link>

            <div className="flex items-center">
              <div className="text-xs font-mono mr-4 text-right">
                10-13 July 2025
                <br />
                Makassar (In Person)
              </div>

              <Link
                href="https://mcvu.perkimakassar.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-teal hover:bg-accent-teal/90 text-white py-1.5 px-3 rounded-md transition-colors text-sm mr-2"
              >
                Register
              </Link>

              <button onClick={toggleMobileMenu} className="text-white focus:outline-none" aria-label="Toggle menu">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-mocha-dark border-t border-mocha-medium/40">
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-4">
                <Link href="/" onClick={(e) => handleNavLinkClick(e, '/')} className="block py-2 hover:text-accent-teal transition-colors">
                  <span className="flex items-center">
                    <span className="text-accent-teal mr-1">/</span>
                    <span>Home</span>
                  </span>
                </Link>
                <Link href="#about-mcvu" onClick={(e) => handleNavLinkClick(e, '#about-mcvu')} className="block py-2 hover:text-accent-teal transition-colors">
                  <span className="flex items-center">
                    <span className="text-accent-teal mr-1">/</span>
                    <span>About</span>
                  </span>
                </Link>
                <Link href="#featured-speakers" onClick={(e) => handleNavLinkClick(e, '#featured-speakers')} className="block py-2 hover:text-accent-teal transition-colors">
                  <span className="flex items-center">
                    <span className="text-accent-teal mr-1">/</span>
                    <span>Speakers</span>
                  </span>
                </Link>
                <Link href="#sessions-slider" onClick={(e) => handleNavLinkClick(e, '#sessions-slider')} className="block py-2 hover:text-accent-teal transition-colors">
                  <span className="flex items-center">
                    <span className="text-accent-teal mr-1">/</span>
                    <span>Sessions & Workshops</span>
                  </span>
                </Link>
                <Link href="#pricing" onClick={(e) => handleNavLinkClick(e, '#pricing')} className="block py-2 hover:text-accent-teal transition-colors">
                  <span className="flex items-center">
                    <span className="text-accent-teal mr-1">/</span>
                    <span>Pricing</span>
                  </span>
                </Link>
                <Link href="#faq-accordion" onClick={(e) => handleNavLinkClick(e, '#faq-accordion')} className="block py-2 hover:text-accent-teal transition-colors">
                  <span className="flex items-center">
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
