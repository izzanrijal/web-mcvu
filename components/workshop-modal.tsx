"use client"

import { useState, useEffect } from "react"
import { X, Calendar, User, Users, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export interface RundownEntry {
  time: string;
  topic: string;
  speaker: string;
  duration?: string; // Optional
}

export interface Workshop {
  shortTitle: string; // Used as category and for ID generation
  fullTitle: string;
  date: string;
  venue: string;
  moderator?: string; // Optional
  rundown: RundownEntry[];
}

interface WorkshopModalProps {
  isOpen: boolean;
  onClose: () => void;
  workshop?: Workshop | null; // Workshop to display directly
  allWorkshops?: Workshop[]; // Optional: Full list of workshops for list view
  onSelectWorkshop?: (workshop: Workshop) => void; // Optional: Handler for selecting from list view
}

export default function WorkshopModal({ isOpen, onClose, workshop: workshopToShow, allWorkshops, onSelectWorkshop }: WorkshopModalProps) {

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey)
    } else {
      document.removeEventListener("keydown", handleEscKey)
    }
    document.body.style.overflow = "auto"
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div
        className="relative bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-light">
          <h2 className="text-2xl font-bold text-mocha-dark">
            {workshopToShow ? "Workshop Details" : "All Workshops"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-medium hover:text-accent-teal transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {workshopToShow ? (
            // Detailed view of the workshop passed via props
            <div className="space-y-6">
              <span className="text-accent-teal text-sm font-mono uppercase">{workshopToShow.shortTitle}</span>
              <h3 className="text-3xl font-bold text-mocha-dark -mt-2 mb-3">{workshopToShow.fullTitle}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-accent-teal flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-mocha-dark">Date & Time</h4>
                    <p className="text-gray-dark">{workshopToShow.date}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  {/* Using a generic location icon, replace if a better one is available or needed */}
                  <Users className="h-5 w-5 text-accent-teal flex-shrink-0 mt-0.5" /> 
                  <div>
                    <h4 className="font-semibold text-mocha-dark">Venue</h4>
                    <p className="text-gray-dark">{workshopToShow.venue}</p>
                  </div>
                </div>
                {workshopToShow.moderator && (
                  <div className="flex items-start space-x-3 md:col-span-2">
                    <User className="h-5 w-5 text-accent-teal flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-mocha-dark">Moderator</h4>
                      <p className="text-gray-dark">{workshopToShow.moderator}</p>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h4 className="font-semibold text-mocha-dark mb-3 mt-2">Rundown Acara</h4>
                <div className="overflow-x-auto border border-gray-light rounded-md">
                  <table className="min-w-full text-sm">
                    <thead className="bg-cream">
                      <tr>
                        <th className="p-3 text-left font-semibold text-mocha-dark">Waktu</th>
                        {workshopToShow.rundown.some(r => r.duration) && <th className="p-3 text-left font-semibold text-mocha-dark">Durasi</th>}
                        <th className="p-3 text-left font-semibold text-mocha-dark">Acara</th>
                        <th className="p-3 text-left font-semibold text-mocha-dark">Pengisi Acara</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {workshopToShow.rundown.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-cream/60"}>
                          <td className="p-3 text-gray-dark whitespace-nowrap">{item.time}</td>
                          {workshopToShow.rundown.some(r => r.duration) && <td className="p-3 text-gray-dark whitespace-nowrap">{item.duration || "-"}</td>}
                          <td className="p-3 text-gray-dark">{item.topic}</td>
                          <td className="p-3 text-gray-dark">{item.speaker}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            // Fallback if no workshop is passed - e.g. for "EXPLORE ALL WORKSHOPS" button.
            // This part would need its own data source or the full list passed in.
            // For now, it will be empty or show a message.
            // LIST VIEW OF ALL WORKSHOPS
            allWorkshops && onSelectWorkshop ? (
              <div className="space-y-4">
                {allWorkshops.map((ws, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-light rounded-md hover:bg-cream cursor-pointer transition-colors"
                    onClick={() => onSelectWorkshop(ws)}
                  >
                    <h4 className="font-semibold text-mocha-dark text-lg mb-1">{ws.fullTitle}</h4>
                    <p className="text-sm text-accent-teal font-mono uppercase">{ws.shortTitle}</p>
                    <p className="text-sm text-gray-dark mt-1">{ws.date}</p>
                  </div>
                ))}
              </div>
            ) : (
              // Fallback if no workshop is passed AND no list/handler is provided
              <div className="text-center text-gray-dark py-10">
                <p>Workshop details are not available at the moment, or no workshop was selected.</p>
              </div>
            )
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-gray-light">
          {(workshopToShow || (allWorkshops && onSelectWorkshop)) ? (
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-gray-dark">
                {/* Workshop fee can be dynamic if added to workshop data */}
                <span className="font-semibold">Workshop Fee:</span> (Refer to registration page for fee details)
              </div>
              <Link
                href="https://mcvu.perkimakassar.com/register"
                className="bg-accent-teal hover:bg-accent-teal/90 text-white font-medium py-2 px-6 rounded-md transition-colors inline-flex items-center w-full sm:w-auto justify-center"
              >
                {workshopToShow ? 'Register for this Workshop' : 'Register for Workshops'}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          ) : (
            // Fallback if no workshop is selected and no list view is configured
            <div className="text-center text-gray-dark">Please select a workshop or explore all workshops to see more options.</div>
          )}
        </div>
      </div>
    </div>
  )
}
