"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock } from "lucide-react"

export default function ScheduleTab() {
  const [activeTab, setActiveTab] = useState("day1")

  const scheduleData = {
    day1: [
      { time: "08:00 - 09:00", title: "Registration & Welcome Coffee", location: "Main Lobby" },
      { time: "09:00 - 09:30", title: "Opening Ceremony", location: "Grand Ballroom", speaker: "Organizing Committee" },
      {
        time: "09:30 - 10:30",
        title: "Keynote: Advances in Medical Science",
        location: "Grand Ballroom",
        speaker: "Prof. Budi Santoso",
      },
      { time: "10:30 - 11:00", title: "Coffee Break & Networking", location: "Exhibition Hall" },
      {
        time: "11:00 - 12:30",
        title: "Panel Discussion: Healthcare Challenges in Indonesia",
        location: "Grand Ballroom",
        speaker: "Multiple Speakers",
      },
      { time: "12:30 - 13:30", title: "Lunch Break", location: "Dining Hall" },
      {
        time: "13:30 - 15:00",
        title: "Workshop: Advanced Cardiac Life Support",
        location: "Workshop Room A",
        speaker: "Dr. Anisa Wijaya",
      },
      { time: "15:00 - 15:30", title: "Coffee Break", location: "Exhibition Hall" },
      {
        time: "15:30 - 17:00",
        title: "Research Presentations",
        location: "Grand Ballroom",
        speaker: "Various Presenters",
      },
      { time: "17:00 - 18:30", title: "Welcome Reception", location: "Garden Terrace" },
    ],
    day2: [
      { time: "08:30 - 09:00", title: "Morning Coffee", location: "Exhibition Hall" },
      {
        time: "09:00 - 10:30",
        title: "Symposium: Latest Developments in Neurology",
        location: "Grand Ballroom",
        speaker: "Prof. Budi Santoso",
      },
      { time: "10:30 - 11:00", title: "Coffee Break & Networking", location: "Exhibition Hall" },
      {
        time: "11:00 - 12:30",
        title: "Workshop: Minimally Invasive Surgical Techniques",
        location: "Workshop Room B",
        speaker: "Dr. Denny Pratama",
      },
      { time: "12:30 - 13:30", title: "Lunch Break", location: "Dining Hall" },
      {
        time: "13:30 - 15:00",
        title: "Panel Discussion: Medical Education in Indonesia",
        location: "Grand Ballroom",
        speaker: "Multiple Speakers",
      },
      { time: "15:00 - 15:30", title: "Coffee Break", location: "Exhibition Hall" },
      {
        time: "15:30 - 17:00",
        title: "Poster Presentations",
        location: "Exhibition Hall",
        speaker: "Various Presenters",
      },
      { time: "19:00 - 22:00", title: "Gala Dinner", location: "Grand Ballroom" },
    ],
    day3: [
      { time: "08:30 - 09:00", title: "Morning Coffee", location: "Exhibition Hall" },
      {
        time: "09:00 - 10:30",
        title: "Symposium: Public Health Initiatives",
        location: "Grand Ballroom",
        speaker: "Dr. Citra Purnama",
      },
      { time: "10:30 - 11:00", title: "Coffee Break & Networking", location: "Exhibition Hall" },
      {
        time: "11:00 - 12:30",
        title: "Workshop: Medical Research Methodology",
        location: "Workshop Room C",
        speaker: "Dr. Citra Purnama",
      },
      { time: "12:30 - 13:30", title: "Lunch Break", location: "Dining Hall" },
      {
        time: "13:30 - 15:00",
        title: "Panel Discussion: Future of Healthcare in Indonesia",
        location: "Grand Ballroom",
        speaker: "Multiple Speakers",
      },
      { time: "15:00 - 15:30", title: "Coffee Break", location: "Exhibition Hall" },
      { time: "15:30 - 16:30", title: "Closing Keynote", location: "Grand Ballroom", speaker: "Distinguished Guest" },
      {
        time: "16:30 - 17:00",
        title: "Closing Ceremony & Awards",
        location: "Grand Ballroom",
        speaker: "Organizing Committee",
      },
    ],
  }

  return (
    <Tabs defaultValue="day1" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="day1" onClick={() => setActiveTab("day1")}>
          Day 1 (Aug 15)
        </TabsTrigger>
        <TabsTrigger value="day2" onClick={() => setActiveTab("day2")}>
          Day 2 (Aug 16)
        </TabsTrigger>
        <TabsTrigger value="day3" onClick={() => setActiveTab("day3")}>
          Day 3 (Aug 17)
        </TabsTrigger>
      </TabsList>

      {Object.entries(scheduleData).map(([day, events]) => (
        <TabsContent key={day} value={day} className="mt-0">
          <div className="bg-white rounded-lg shadow-sm border border-gray-light overflow-hidden">
            <div className="divide-y divide-gray-light">
              {events.map((event, index) => (
                <div key={index} className="p-4 md:p-6 hover:bg-mousse-light/10 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="flex items-center mb-2 md:mb-0 md:w-1/5">
                      <Clock className="h-4 w-4 text-accent-teal mr-2 flex-shrink-0" />
                      <span className="text-mocha-dark font-medium">{event.time}</span>
                    </div>
                    <div className="md:w-4/5">
                      <h3 className="text-lg font-semibold text-mocha-dark">{event.title}</h3>
                      <div className="mt-1 text-gray-dark">
                        {event.speaker && <p className="text-accent-teal">{event.speaker}</p>}
                        <p>{event.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
