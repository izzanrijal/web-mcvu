"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

// Using exactly 8 sponsor logos as requested
const sponsors = [
  "/sponsor-1.png", // These will be created as placeholder images
  "/sponsor-2.png",
  "/sponsor-3.png",
  "/sponsor-4.png",
  "/sponsor-5.png",
  "/sponsor-6.png",
  "/sponsor-7.png",
  "/sponsor-8.png",
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
]

export default function SponsorsSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let animationId: number
    let position = 0
    const speed = 0.05 // Changed from 0.5 to 0.05 for slower movement

    const animate = () => {
      position -= speed

      // Reset position when first set of logos is out of view
      if (position <= -50) {
        position = 0
      }

      if (slider) {
        slider.style.transform = `translateX(${position}%)`
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  // Double the sponsors array to create a seamless loop
  const duplicatedSponsors = [...sponsors, ...sponsors]

  return (
    <div className="overflow-hidden">
      <div
        ref={sliderRef}
        className="flex items-center"
        style={{ width: `${duplicatedSponsors.length * 16.666}%` }} // Each logo takes ~16.666% of container width
      >
        {duplicatedSponsors.map((sponsor, index) => (
          <div key={index} className="flex-shrink-0 px-6 py-4" style={{ width: "16.666%" }}>
            <div className="flex justify-center items-center h-20">
              <Image
                src={sponsor || fallbackImages[index % fallbackImages.length]}
                alt={`Sponsor ${(index % sponsors.length) + 1}`}
                width={160}
                height={80}
                className="h-16 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
