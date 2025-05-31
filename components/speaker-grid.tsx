import Image from "next/image"
import Link from "next/link"

const speakers = [
  {
    name: "Dr. Anisa Wijaya",
    title: "Professor of Cardiology",
    organization: "University of Indonesia",
    image: "/placeholder-pyxzt.png",
  },
  {
    name: "Prof. Budi Santoso",
    title: "Head of Neurology",
    organization: "Jakarta Medical Center",
    image: "/placeholder.svg?height=400&width=400&query=professional male indonesian doctor",
  },
  {
    name: "Dr. Citra Purnama",
    title: "Researcher",
    organization: "National Institute of Health Research",
    image: "/placeholder.svg?height=400&width=400&query=professional female indonesian researcher",
  },
  {
    name: "Dr. Denny Pratama",
    title: "Surgeon",
    organization: "International Hospital Jakarta",
    image: "/placeholder.svg?height=400&width=400&query=professional male surgeon doctor",
  },
  {
    name: "Dr. Eka Susanti",
    title: "Director of Medical Education",
    organization: "Indonesian Medical Association",
    image: "/placeholder.svg?height=400&width=400&query=professional female indonesian doctor with hijab",
  },
  {
    name: "Prof. Fajar Rahman",
    title: "Chief of Pediatrics",
    organization: "Children's Hospital Jakarta",
    image: "/placeholder.svg?height=400&width=400&query=professional male indonesian pediatrician",
  },
  {
    name: "Dr. Gita Pratiwi",
    title: "Public Health Specialist",
    organization: "Ministry of Health",
    image: "/placeholder.svg?height=400&width=400&query=professional female indonesian public health specialist",
  },
  {
    name: "Dr. Hadi Wijaya",
    title: "Oncologist",
    organization: "Cancer Research Center",
    image: "/placeholder.svg?height=400&width=400&query=professional male indonesian oncologist",
  },
  {
    name: "Dr. Indah Sari",
    title: "Infectious Disease Specialist",
    organization: "Tropical Disease Hospital",
    image: "/placeholder.svg?height=400&width=400&query=professional female indonesian doctor with stethoscope",
  },
  {
    name: "Prof. Joko Widodo",
    title: "Dean of Medical School",
    organization: "Gadjah Mada University",
    image: "/placeholder.svg?height=400&width=400&query=professional male indonesian professor",
  },
  {
    name: "Dr. Kartika Dewi",
    title: "Psychiatrist",
    organization: "Mental Health Institute",
    image: "/placeholder.svg?height=400&width=400&query=professional female indonesian psychiatrist",
  },
  {
    name: "Dr. Lukman Hakim",
    title: "Cardiologist",
    organization: "Heart Center Jakarta",
    image: "/placeholder.svg?height=400&width=400&query=professional male indonesian cardiologist",
  },
]

export default function SpeakerGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
      {speakers.map((speaker, index) => (
        <Link
          key={index}
          href={`/speakers/${speaker.name.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "")}`}
          className="group"
        >
          <div className="relative aspect-square overflow-hidden bg-mocha-medium/10 mb-3">
            <Image
              src={speaker.image || "/placeholder.svg"}
              alt={speaker.name}
              fill
              className="object-cover transition-all duration-300 group-hover:grayscale group-hover:blur-[1px]"
            />
          </div>
          <div>
            <p className="font-bold text-mocha-dark">{speaker.name}</p>
            <div className="flex items-center text-sm">
              <span className="text-accent-teal mr-1">/</span>
              <p className="text-gray-dark">{speaker.title},</p>
            </div>
            <p className="text-gray-dark text-sm">{speaker.organization}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
