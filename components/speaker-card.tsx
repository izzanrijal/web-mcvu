import Image from "next/image"
import Link from "next/link"

interface SpeakerCardProps {
  name: string
  title: string
  image: string
}

export default function SpeakerCard({ name, title, image }: SpeakerCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-light group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-mocha-dark">{name}</h3>
        <p className="text-gray-dark mt-1">{title}</p>
        <Link
          href={`/speakers/${name.toLowerCase().replace(/\s+/g, "-")}`}
          className="mt-4 inline-block text-accent-teal font-medium hover:underline"
        >
          View Profile
        </Link>
      </div>
    </div>
  )
}
