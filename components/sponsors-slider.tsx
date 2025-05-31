"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const sponsors = [
  "/medical-company-logo-1.png",
  "/pharmaceutical-company-logo-2.png",
  "/placeholder-5s4li.png",
  "/placeholder.svg?height=100&width=200&query=medical device company logo 4",
  "/placeholder.svg?height=100&width=200&query=hospital group logo 5",
  "/placeholder.svg?height=100&width=200&query=medical insurance company logo 6",
  "/placeholder.svg?height=100&width=200&query=medical education institution logo 7",
  "/placeholder.svg?height=100&width=200&query=health ministry logo 8",
  "/placeholder.svg?height=100&width=200&query=medical research institute logo 9",
  "/placeholder.svg?height=100&width=200&query=medical association logo 10",
  "/placeholder.svg?height=100&width=200&query=medical journal logo 11",
  "/placeholder.svg?height=100&width=200&query=healthcare startup logo 12",
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
                src={sponsor || "/placeholder.svg"}
                alt={`Sponsor ${(index % sponsors.length) + 1}`}
                width={160}
                height={80}
                className="max-h-16 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
