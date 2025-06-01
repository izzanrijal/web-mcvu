"use client"; // Added to make this a Client Component

import { useState } from "react" // Added useState
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, Calendar, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CountdownTimer from "@/components/countdown-timer"
import SpeakerGrid from "@/components/speaker-grid"
import SessionsSlider from "@/components/sessions-slider"
import WhyAttendSection from "@/components/why-attend-section"
import PricingSection from "@/components/pricing-section"
import FaqAccordion from "@/components/faq-accordion"
import SponsorsSlider from "@/components/sponsors-slider"
import HorizontalDivider from "@/components/horizontal-divider"
import WorkshopModalButton from "@/components/workshop-modal-button"
import WorkshopModal, { Workshop } from "@/components/workshop-modal"; // Added WorkshopModal and Workshop type
import { sessions as allWorkshopData } from "@/components/sessions-slider"; // Import all workshop data
import AboutMcvu from "@/components/about-mcvu"
import ChairmanMessage from "@/components/chairman-message"
import VenueMap from "@/components/venue-map"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorkshopForModal, setSelectedWorkshopForModal] = useState<Workshop | null>(null);

  const handleOpenWorkshopModal = (workshop: Workshop | null) => {
    setSelectedWorkshopForModal(workshop);
    setIsModalOpen(true);
  };

  const handleCloseWorkshopModal = () => {
    setIsModalOpen(false);
    setSelectedWorkshopForModal(null);
  };
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      {/* Hero Section - Redesigned */}
      <section className="relative bg-mocha-dark overflow-hidden">
        <div className="absolute inset-0 bg-mocha-dark">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/abstract-medical-pattern.png"
              alt="Background Pattern"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-mono leading-tight mb-6">
              MCVU XXIII
              <br />
              <span className="text-accent-teal">2025</span>
            </h1>

            <div className="space-y-4 mb-10">
              <div className="flex items-center justify-center">
                <Calendar className="h-5 w-5 text-accent-teal mr-3" />
                <p className="text-lg md:text-xl text-white">July 10-13, 2025</p>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="h-5 w-5 text-accent-teal mr-3" />
                <p className="text-lg md:text-xl text-white">Claro Hotel, Makassar</p>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="h-5 w-5 text-accent-teal mr-3" />
                <p className="text-lg md:text-xl text-white">In-Person</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://mcvu.perkimakassar.com/register"
                className="inline-block bg-accent-teal hover:bg-accent-teal/90 text-white font-mono uppercase text-base md:text-lg font-bold py-3 px-6 rounded-md transition-colors text-center"
              >
                Register Now
              </Link>
              <Link
                href="/agenda"
                className="inline-block bg-transparent border-2 border-white hover:border-accent-teal text-white hover:text-accent-teal font-mono uppercase text-base md:text-lg font-bold py-3 px-6 rounded-md transition-colors text-center"
              >
                Abstract Submission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <CountdownTimer targetDate="2025-07-10T09:00:00" />

      {/* About MCVU Section */}
      <AboutMcvu id="about-mcvu" />

      {/* Chairman's Welcome Message */}
      <ChairmanMessage />

      {/* Featured Speakers */}
      <section id="featured-speakers" className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-mocha-dark">Featured speakers</h2>
              <p className="text-gray-dark">
                MCVU XXIII 2025 speakers include leading experts, researchers and medical professionals — from across
                Indonesia and the global healthcare community, and many more.
              </p>

            </div>
            <div className="lg:col-span-9">
              <SpeakerGrid />
            </div>
          </div>
        </div>
      </section>



      {/* Sessions Slider */}
      <section id="sessions-slider" className="py-16 md:py-24 bg-mocha-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Workshops</h2>
            <p className="text-white/80 text-lg">
              50+ workshops — from clinical skills to research methodology, medical technology to patient care. Here are
              some key highlights.
            </p>
          </div>
          <SessionsSlider onOpenWorkshopDetail={handleOpenWorkshopModal} />
          <div className="text-center mt-12">
            {/* This button might open the modal to a list view or a default state */}
            {/* For now, passing null to indicate no specific workshop is pre-selected */}
            <WorkshopModalButton onOpenModal={() => handleOpenWorkshopModal(null)} />
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <WhyAttendSection />

      {/* Horizontal Divider */}
      <HorizontalDivider />

      {/* Pricing Section */}
      <PricingSection id="pricing" />

      {/* Horizontal Divider */}
      <HorizontalDivider />

      {/* FAQ Section */}
      <section id="faq-accordion" className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-mocha-dark">FAQ</h2>

            </div>
            <div className="lg:col-span-9">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Divider */}
      <HorizontalDivider />

      {/* Sponsors */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mocha-dark mb-4">Sponsors</h2>
            <p className="text-gray-dark text-lg">
              MCVU XXIII 2025 couldn't happen without our awesome sponsors. Interested in sponsoring? Reach out to our{" "}
              <Link href="/contact" className="text-accent-teal hover:underline">
                Sponsorship Management team
              </Link>{" "}
              to learn about available opportunities.
            </p>

          </div>
          <SponsorsSlider />
        </div>
      </section>

      {/* Venue and Location */}
      <VenueMap />

      {/* Horizontal Divider */}
      <HorizontalDivider />

      <WorkshopModal 
        isOpen={isModalOpen} 
        onClose={handleCloseWorkshopModal} 
        workshop={selectedWorkshopForModal} 
        allWorkshops={allWorkshopData} // Pass all workshops
        onSelectWorkshop={handleOpenWorkshopModal} // Pass handler to update selected workshop
      />

      <Footer />
    </div>
  )
}
