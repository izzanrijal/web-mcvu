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
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);

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
      <section className="relative bg-cream overflow-hidden">
        <div className="absolute inset-0 bg-cream">
          <div className="absolute inset-0 opacity-[.45]">
            <Image
              src="/hero-background-new.png"
              alt="MCVU XXIII 2025"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        {/* Affiliates logo - centered at top */}
        {/* Affiliates logo - responsive */}
        <div className="absolute top-6 sm:top-8 left-0 right-0 flex justify-center z-20">
          <div className="relative w-[76.5%] sm:w-[72.25%] md:w-[68%] max-w-[544px] h-10 sm:h-14 md:h-17">
            <Image 
              src="/affiliates.png" 
              alt="MCVU Affiliates" 
              fill
              className="object-contain mx-auto"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-16 pb-8 sm:pt-20 sm:pb-10 md:pt-24 md:pb-12">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-mocha-dark font-mono leading-tight mb-4 sm:mb-6">
              <div className="relative w-full max-w-2xl h-24 sm:h-28 md:h-32 mx-auto my-2 sm:my-3 md:my-4">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative w-[110%] sm:w-[115%] md:w-[120%] h-[110%] sm:h-[115%] md:h-[120%] p-1 sm:p-1.5 md:p-2">
                    <Image 
                      src="/Logo Mcvu.png" 
                      alt="MCVU XXIII 2025" 
                      fill
                      className="object-contain"
                      onError={(e) => {
                        // If image fails to load, show text fallback
                        const container = e.currentTarget.parentElement?.parentElement;
                        if (container) {
                          container.innerHTML = 'MCVU XXIII<br><span class="text-accent-teal">2025</span>';
                          container.className = 'text-center';
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-black font-sans font-bold mb-4 sm:mb-6 text-center px-2 sm:px-4">
              Emerging Paradigms in Acute Cardiovascular Care:<br></br>Lifelines in Motion, Excellence in Every Beat
            </p>

            <div className="mb-6 flex justify-center">
              <div className="relative w-full max-w-xl h-auto">
                <Image 
                  src="/waktu tempat.png" 
                  alt="Waktu dan Tempat" 
                  width={480}
                  height={180}
                  className="mx-auto w-[90%] max-w-[480px] h-auto"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://mcvu.perkimakassar.com/register"
                className="inline-block bg-accent-teal hover:bg-accent-teal/90 text-white font-mono uppercase text-base md:text-lg font-bold py-3 px-6 rounded-md transition-colors text-center"
              >
                Register Now
              </Link>
              <button
                type="button"
                onClick={() => setIsSubmissionModalOpen(true)}
                className="inline-block bg-transparent hover:bg-mocha-dark hover:text-cream text-mocha-dark font-mono uppercase text-base md:text-lg font-bold py-3 px-6 rounded-md border-2 border-mocha-dark transition-colors text-center"
              >
                Abstract Submission
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <CountdownTimer targetDate="2025-07-10T08:00:00+08:00" />

      {/* About MCVU Section */}
      <AboutMcvu id="about-mcvu" />

      {/* Chairman's Welcome Message */}
      <ChairmanMessage />

      {/* Featured Speakers - Hidden for now */}
      <section id="featured-speakers" className="hidden">
        {/* Content hidden */}
      </section>



      {/* Sessions Slider */}
      <section id="sessions-slider" className="py-16 md:py-24 bg-mocha-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Workshops</h2>
            <p className="text-white/80 text-lg">
              Explore a comprehensive range of workshops covering the latest advancements in cardiovascular care, research methodologies, and clinical practices. Here are some key highlights from our program.
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
              <h2 className="text-3xl md:text-4xl font-bold text-mocha-dark">Frequently Asked Questions (FAQ)</h2>

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
      {isSubmissionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">Submissions Closed</h3>
            <p className="mb-6">Abstract submissions are now closed. Please join us next year!</p>
            <button type="button" onClick={() => setIsSubmissionModalOpen(false)} className="bg-accent-teal text-white py-2 px-4 rounded-md">Close</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}
