"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <section className="bg-cream py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-teal">
              {timeLeft.days.toString().padStart(2, "0")}
            </p>
            <p className="text-xs md:text-sm font-mono uppercase mt-2 text-mocha-dark">Days</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-teal">
              {timeLeft.hours.toString().padStart(2, "0")}
            </p>
            <p className="text-xs md:text-sm font-mono uppercase mt-2 text-mocha-dark">Hours</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-teal">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </p>
            <p className="text-xs md:text-sm font-mono uppercase mt-2 text-mocha-dark">Minutes</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-teal">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </p>
            <p className="text-xs md:text-sm font-mono uppercase mt-2 text-mocha-dark">Seconds</p>
          </div>
        </div>
      </div>
    </section>
  )
}
