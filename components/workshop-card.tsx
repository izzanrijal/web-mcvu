import { Calendar, User, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WorkshopCardProps {
  title: string
  description: string
  date: string
  instructor: string
  seats: number
}

export default function WorkshopCard({ title, description, date, instructor, seats }: WorkshopCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-light h-full flex flex-col">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-mocha-dark mb-3">{title}</h3>
        <p className="text-gray-dark mb-4">{description}</p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-dark">
            <Calendar className="h-4 w-4 mr-2 text-accent-teal" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-dark">
            <User className="h-4 w-4 mr-2 text-accent-teal" />
            <span>{instructor}</span>
          </div>
          <div className="flex items-center text-gray-dark">
            <Users className="h-4 w-4 mr-2 text-accent-teal" />
            <span>{seats} seats available</span>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6 mt-auto">
        <Button className="w-full bg-accent-teal hover:bg-accent-teal/90 text-white">Register for Workshop</Button>
      </div>
    </div>
  )
}
