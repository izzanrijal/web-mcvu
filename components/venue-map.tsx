import Link from "next/link"
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react"

export default function VenueMap() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-mocha-dark mb-4">Venue & Location</h2>
          <p className="text-gray-dark text-lg max-w-3xl mx-auto">
            MCVU XXIII 2025 will be held at the Claro Hotel, Makassar, a premier venue in Makassar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-cream p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-mocha-dark mb-4">Claro Hotel, Makassar</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-accent-teal mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="text-gray-dark">Jl. A. P. Pettarani No.3</p>
                    <p className="text-gray-dark">Makassar, Sulawesi Selatan, Indonesia</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-accent-teal flex-shrink-0" />
                  <p className="ml-3 text-gray-dark">+62 411 833888</p>
                </div>

                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-accent-teal flex-shrink-0" />
                  <p className="ml-3 text-gray-dark">reservation@claromakassar.com</p>
                </div>

                <div className="flex items-center">
                  <ExternalLink className="h-5 w-5 text-accent-teal flex-shrink-0" />
                  <Link
                    href="https://www.clarohotels.com/makassar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 text-accent-teal hover:underline"
                  >
                    www.clarohotels.com/makassar/
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-mocha-dark">Getting There</h3>

              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-mocha-dark">From Sultan Hasanuddin International Airport (UPG)</h4>
                  <p className="text-gray-dark">Approximately 30-40 minutes by car (depending on traffic)</p>
                </div>

                <div>
                  <h4 className="font-bold text-mocha-dark">Public Transportation</h4>
                  <p className="text-gray-dark">
                    The venue is accessible by local taxis and online ride-hailing services. Public transport options can be explored locally.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-mocha-dark">Parking</h4>
                  <p className="text-gray-dark">Ample parking space is available at the venue</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-mocha-dark mb-3">Nearby Accommodations</h3>
              <p className="text-gray-dark mb-3">
                Claro Hotel is the event venue. Information on other nearby accommodations will be available on our website.
              </p>

            </div>
          </div>

          <div className="h-[500px] relative rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.709191369716!2d119.44097717593309!3d-5.150846194818917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefd0f0bb5c4b1%3A0x46a5d98a76aca318!2sClaro%20Makassar!5e0!3m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Claro Hotel, Makassar Map"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
