"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import type { Workshop } from "./workshop-modal" // Import the Workshop type

export const sessions: Workshop[] = [
  {
    shortTitle: "Workshop IACC X ECHO",
    fullTitle: "Deep Diving In Circulatory System: Advanced Workshop on Invasive and non invasive Monitoring Techniques and Echocardiography bedside for Non-Invasive hemodynamic Monitoring",
    date: "Jumat, 11 Juli 2025",
    venue: "Hotel Claro, Kota Makassar",
    rundown: [
      { time: "07.30-08.00", topic: "Registrasi Peserta", speaker: "Panitia" },
      { time: "08.00-08.30", topic: "Pembukaan - Pre Test", speaker: "Panitia" },
      { time: "08.30-09.15", topic: "Prinsip Dasar dan Interpretasi Hemodinamik Klinis", speaker: "dr. Fadillah Maricar, Sp.JP (K)" },
      { time: "09.15-10.00", topic: "Invasive Hemodynamic Monitoring: Teknik dan Aplikasi Klinis", speaker: "Dr. dr. Akhtar Fajar Muzakkir, Sp.JP (K)" },
      { time: "10.00-10.15", topic: "Coffee Break", speaker: "Panitia" },
      { time: "10.15-11.00", topic: "Echocardiografi bedside for Non-Invasive hemodynamic Monitoring", speaker: "dr. Aussie F. Ghaznawie, Sp.JP (K)" },
      { time: "11.00-13.30", topic: "ISHOMA", speaker: "Panitia" },
      { time: "13.30-14.00", topic: "Station Hands on 1", speaker: "Dr. dr. Akhtar Fajar Muzakkir, Sp.JP (K), dr. Fadillah Maricar, Sp.JP (K)" },
      { time: "14.00-14.30", topic: "Station Hands on 2", speaker: "dr. Aussie F. Ghaznawie, Sp.JP (K), dr. Siti Multazam, Sp.JP (K)" },
      { time: "14.30-15.00", topic: "Station Hands on 3", speaker: "" },
      { time: "15.00-selesai", topic: "Post Test - Penutup", speaker: "Panitia" },
    ],
  },
  {
    shortTitle: "Workshop Pedi X EP",
    fullTitle: "Workshop on Arrhytmia and Heart Failure in Children: Save the beat, Save the heart",
    date: "Jumat, 11 Juli 2025",
    venue: "Hotel Claro (Jl. A. Pettarani No. 03, Mannuruki,Kec. Tamalate, Kota Makassar)",
    rundown: [
      { time: "07.30-08.00", topic: "Registrasi Peserta", speaker: "Panitia" },
      { time: "08.00-08.30", topic: "Pembukaan - Pre Test", speaker: "Panitia" },
      { time: "08.30-09.15", topic: "Definition, Classification and Clinical Manifestation of Heart Failure in Pediatric", speaker: "Dr. dr. Yulius Patimang,SpA, Sp.JP (K)" },
      { time: "09.15-10.00", topic: "Diagnostic Approach to Pediatric Heart Failure: Emphasizing Adjunctive Examinations", speaker: "Dr.dr.Andi Alief Utama Armyn, M.Kes, SpJP,Subsp.KPPJB(K)" },
      { time: "10.00-10.15", topic: "Coffee Break", speaker: "Panitia" },
      { time: "10.15-11.00", topic: "Therapeutic Management of Heart Failure in Pediatrics: Focused on Pharmacological Approaches", speaker: "dr. Sisca Natalia Siagian, Sp.JP(K), FIHA, FAsACC, FSCAI" },
      { time: "11.00-13.30", topic: "ISHOMA", speaker: "Panitia" },
      { time: "13.30-14.15", topic: "Therapeutic Management of Heart Failure in Pediatrics: Focused on Intervention Strategies", speaker: "dr. Radityo Prakoso, SpJP(K),FIHA,FAPSIC,FAsCC, FESC, FACC, FSCAI" },
      { time: "14.15-14.45", topic: "Clinical Approach to Pediatric with Cardiac Conduction Disturbances", speaker: "Prof. Dr. dr. Muzakkir Amir, Sp.JP(K)" },
      { time: "14.45-15.30", topic: "Syncope in Childhood: When to worry?", speaker: "Dr. dr. Sumarni, Sp.JP(K)" },
      { time: "15.30-15.45", topic: "Diskusi Kasus", speaker: "Panitia" },
      { time: "15.45-selesai", topic: "Post Test - Penutup", speaker: "Panitia" },
    ],
  },
  {
    shortTitle: "Workshop Vaskular",
    fullTitle: "Enhancing Diagnostic Skill and Management to Safe Lives: Early diagnose and comprehensive approaches of Deep Vein Thrombosis for General Practicioners",
    date: "Jumat, 11 Juli 2025",
    venue: "Hotel Claro, Makassar",
    rundown: [
      { time: "08.00-08.30", duration: "30 menit", topic: "Registrasi & Pembukaan", speaker: "Panitia" },
      { time: "08.30-09.30", duration: "1 jam", topic: "Unmasking the Silent Killer: Clinical Approach & Diagnosis of DVT", speaker: "N/A" },
      { time: "09.30-10.00", duration: "30 menit", topic: "Coffee break", speaker: "Panitia" },
      { time: "10.00-11.00", duration: "1 jam", topic: "Don't Let It Clot: Contemporary Management Strategies for DVT", speaker: "N/A" },
      { time: "11.00-12.00", duration: "1 jam", topic: "Ultrasound at Your Fingertips: Hands-On Doppler Vascular Training for DVT Detection", speaker: "N/A" },
      { time: "12.00-12.30", duration: "30 menit", topic: "Diskusi, tanya jawab, penutup", speaker: "Panitia" },
    ],
  },
  {
    shortTitle: "Workshop Keperawatan 1",
    fullTitle: "Implementing core concepts of nursing and radiology in coronary angiography procedures",
    date: "Kamis, 10 Juli 2025",
    venue: "Pusat Jantung Terpadu RSWS Makassar",
    moderator: "Edy jumadi, SKM.,S.Kep.,Ns., M.Adm.Ke",
    rundown: [
      { time: "07.30 - 08.00", topic: "Registrasi Peserta", speaker: "Panitia" },
      { time: "08.00 - 08.20", topic: "Pembukaan - Pre Test", speaker: "Panitia" },
      { time: "08.30 - 09.15", topic: "Basic Management Concepts for Scrub Nurse", speaker: "Marlina,SKM.,S.Kep.,Ns., M.Adm.Kes" },
      { time: "09.15 - 10.00", topic: "Nursing Care for Pre & Post Coronary Angiography Patients", speaker: "Abd Rahman, S.Kep., Ns., M.M" },
      { time: "10.00 - 10.15", topic: "Coffee Break", speaker: "Panitia" },
      { time: "10.15 - 11.00", topic: "Radiological Concepts in Coronary Angiography Procedures", speaker: "Sumarsono, S.Si, M.Adm.Kes" },
      { time: "11.30 - 11.45", topic: "Hands On", speaker: "Marlina,SKM.,S.Kep.,Ns., M.Adm.Kes; Abd Rahman, S.Kep., Ns., M.M; Sumarsono, S.Si, M.Adm.Kes" },
      { time: "11.45 - 12.30", topic: "Post Test - Penutup", speaker: "Panitia" },
    ],
  },
  {
    shortTitle: "Workshop Keperawatan 2",
    fullTitle: "Nursing management cardiovaskular update: acute decompensated heart failure",
    date: "Jumat, 11 Juli 2025",
    venue: "Hotel Claro, Makassar",
    moderator: "Nasirah, S.Kep, Ns",
    rundown: [
      { time: "07.30 - 08.00", duration: "30 menit", topic: "Registrasi Peserta", speaker: "Panitia" },
      { time: "08.00 - 08.20", duration: "20 menit", topic: "Pembukaan - Pre Test", speaker: "Panitia" },
      { time: "08.30 - 09.15", duration: "45 menit", topic: "Acute Heart Failure Management in the Emergency Department", speaker: "Rachmat Gobel, S.Kep.,Ns." },
      { time: "09.15 - 10.00", duration: "45 menit", topic: "Supporting Examination In Patients With Acute Decompensated Heart Failure", speaker: "Herlina, S.Kep.,Ns." },
      { time: "10.00 - 10.15", duration: "15 menit", topic: "Coffee Break", speaker: "Panitia" },
      { time: "10.15 - 11.00", duration: "45 menit", topic: "Nursing Management In Acute Decompensated Heart Failure To Prevent Readmission", speaker: "Zettianus Lalendra., S. Kep., Ns" },
      { time: "11.30 - 11.45", duration: "15 menit", topic: "Hands On - The use of HFNC (High flow Nasal Canule) theraphy - ECG on ADHF", speaker: "-" },
      { time: "11.45 - 12.15", duration: "30 menit", topic: "Post Test - Penutup", speaker: "Panitia" },
    ],
  },
]

interface SessionsSliderProps {
  onOpenWorkshopDetail: (workshop: Workshop) => void;
}

export default function SessionsSlider({ onOpenWorkshopDetail }: SessionsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    if (currentIndex < sessions.length - visibleItems) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={sliderRef}>
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
        >
          {sessions.map((session, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4"
              style={{ flex: `0 0 ${100 / visibleItems}%` }}
            >
              <div className="bg-cream p-6 rounded-md h-full border border-mocha-medium/20">
                <span className="text-accent-teal text-sm font-mono uppercase">{session.shortTitle}</span>
                <h3 className="text-xl font-bold mt-2 mb-4 text-mocha-dark">
                  <button
                    className="hover:underline text-left"
                    onClick={() => onOpenWorkshopDetail(session)}
                  >
                    {session.fullTitle}
                  </button>
                </h3>
                {session.moderator && (
                  <p className="text-sm text-gray-dark mt-1 mb-3">Moderator: {session.moderator}</p>
                )}
                {/* Detailed speaker list removed from card, will be in modal */}
                <div className="mt-4">
                  <button
                    onClick={() => onOpenWorkshopDetail(session)}
                    className="inline-flex items-center text-accent-teal hover:underline"
                  >
                    <span>See Details</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className={`absolute top-1/2 left-0 -translate-y-1/2 bg-mocha-dark/80 p-2 rounded-full text-white ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-mocha-dark"
        }`}
        disabled={currentIndex === 0}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className={`absolute top-1/2 right-0 -translate-y-1/2 bg-mocha-dark/80 p-2 rounded-full text-white ${
          currentIndex >= sessions.length - visibleItems ? "opacity-50 cursor-not-allowed" : "hover:bg-mocha-dark"
        }`}
        disabled={currentIndex >= sessions.length - visibleItems}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}
