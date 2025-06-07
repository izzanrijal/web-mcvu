"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

// Sponsor logos (using available sponsor images)
const sponsors = [
  "/sponsors/sponsor-1.png",
  "/sponsors/sponsor-2.png",
  "/sponsors/sponsor-3.png",
  "/sponsors/sponsor-4.png",
  "/sponsors/sponsor-5.png",
  "/sponsors/sponsor-6.png",
  "/sponsors/sponsor-7.png",
  "/sponsors/sponsor-8.png"
]

// Fallback images if the sponsor images don't exist yet
const fallbackImages = [
  "/placeholder-logo.svg",
  "/placeholder-5s4li.png",
  "/placeholder-3kpdf.png",
  "/placeholder-nky7r.png",
  "/placeholder-pyxzt.png",
  "/placeholder-ukopt.png",
  "/placeholder-wk1sg.png",
  "/placeholder-logo.png",
  "/placeholder-5s4li.png"
]

export default function SponsorsSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const itemsPerView = 4.5
  const animationDuration = 30 // seconds for a complete cycle
  const sponsorsCount = sponsors.length
  
  // Calculate item width based on items per view
  const itemWidth = 100 / itemsPerView
  
  // Create a continuous loop by duplicating the sponsors array
  // We need at least 2 complete sets for the continuous effect
  const visibleSponsors = [...sponsors, ...sponsors]
  
  // Set up the continuous animation
  useEffect(() => {
    // Calculate the width of one complete set of sponsors as a percentage
    const fullSetWidth = sponsorsCount * itemWidth
    
    // Create the keyframes for the animation
    const keyframes = `
      @keyframes continuousSlide {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${fullSetWidth}%); }
      }
    `
    
    // Create and append the style element
    const styleElement = document.createElement('style')
    styleElement.appendChild(document.createTextNode(keyframes))
    document.head.appendChild(styleElement)
    
    // Apply the animation to the slider
    if (sliderRef.current) {
      sliderRef.current.style.animation = `continuousSlide ${animationDuration}s linear infinite`
    }
    
    // Clean up
    return () => {
      document.head.removeChild(styleElement)
    }
  }, [sponsorsCount, itemWidth, animationDuration])
  
  return (
    <div className="overflow-hidden relative">
      <div 
        ref={sliderRef}
        className="flex items-center"
        style={{
          width: `${2 * sponsorsCount * itemWidth}%` // Width for two complete sets
        }}
      >
        {visibleSponsors.map((sponsor, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 px-4 py-4"
            style={{ width: `${itemWidth}%` }}
          >
            <div className="flex justify-center items-center h-24">
              <Image
                src={sponsor}
                alt={`Sponsor ${(index % sponsorsCount) + 1}`}
                width={192}
                height={96}
                className="h-20 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = fallbackImages[index % fallbackImages.length];
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
