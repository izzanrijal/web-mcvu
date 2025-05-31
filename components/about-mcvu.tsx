import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface AboutMcvuProps {
  id?: string;
}

export default function AboutMcvu({ id }: AboutMcvuProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Image added above the heading */}
          <div className="mb-10">
            <Image
              src="/about-mcvu.png"
              alt="MCVU Conference"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-accent-teal font-mono uppercase text-sm mb-2">About the event</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-mocha-dark">What is Makassar Cardiovascular Update (MCVU) XXIII 2025?</h3>
            </div>

            <p className="text-gray-dark text-lg">The Makassar Cardiovascular Update (MCVU) is the premier annual scientific event hosted by the South Sulawesi Branch of the Association of Indonesian Cardiologists (PERKI Cabang Makassar). This significant gathering brings together a diverse audience, including cardiologists, general practitioners, nurses, researchers, medical students, and other specialists from across Indonesia, with a particular focus on the Eastern Indonesia region. Through a comprehensive program featuring symposia and workshops, MCVU serves as a vital platform for professionals engaged in cardiovascular healthcare to connect, learn, and advance their practice.</p>

            <p className="text-gray-dark text-lg">MCVU is dedicated to advancing cardiovascular care by providing Continuing Medical Education and fostering an environment for knowledge exchange. Its core mission is to share experiences and update healthcare professionals on the latest breakthroughs, evidence-based practices, and emerging trends in the management of cardiovascular diseases. The event aims to enhance the knowledge and skills of all participants, promote collaboration to address current challenges and opportunities, and ultimately improve patient outcomes, reflecting its commitment to "Excellence in Every Beat".</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 max-w-3xl mx-auto">
              <div className="bg-cream p-6 rounded-lg">
                <h4 className="text-accent-teal font-bold text-xl mb-2">Regional Focus</h4>
                <p className="text-mocha-dark">Connecting professionals from Eastern Indonesia and beyond</p>
              </div>

              <div className="bg-cream p-6 rounded-lg">
                <h4 className="text-accent-teal font-bold text-xl mb-2">Comprehensive Program</h4>
                <p className="text-mocha-dark">Diverse symposia, workshops, and scientific sessions</p>
              </div>

              <div className="bg-cream p-6 rounded-lg">
                <h4 className="text-accent-teal font-bold text-xl mb-2">Leading Experts</h4>
                <p className="text-mocha-dark">Insights from national and regional cardiovascular specialists</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
