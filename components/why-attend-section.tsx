import Image from "next/image"

export default function WhyAttendSection() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-mocha-dark">Why attend</h2>
            <p className="text-gray-dark">
              Join thousands of medical professionals, researchers, and educators to explore the latest advances in
              medical science and healthcare
            </p>
          </div>
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Specialized Clinical Updates */}
              <div className="bg-white rounded-md overflow-hidden shadow-sm">
                <div className="relative h-56">
                  <Image src="/why-attend-1.png" alt="Specialized Clinical Updates" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="text-accent-teal text-sm font-mono uppercase">ADVANCE YOUR EXPERTISE</h4>
                  <h3 className="text-xl font-bold text-mocha-dark mt-2 mb-3">Specialized Clinical Updates</h3>
                  <p className="text-gray-dark">
                    Gain in-depth knowledge on the latest advancements and best practices in cardiovascular, emergency, and neurovascular medicine through expert-led symposiums and interactive workshops.
                  </p>
                </div>
              </div>

              {/* Card 2: Practical Skills & Collaboration */}
              <div className="bg-white rounded-md overflow-hidden shadow-sm">
                <div className="relative h-56">
                  <Image src="/why-attend-2.png" alt="Practical Skills & Collaboration" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="text-accent-teal text-sm font-mono uppercase">ENHANCE YOUR PRACTICE</h4>
                  <h3 className="text-xl font-bold text-mocha-dark mt-2 mb-3">Practical Skills & Collaboration</h3>
                  <p className="text-gray-dark">
                    Participate in hands-on workshops to refine your clinical techniques and collaborate with fellow practitioners, fostering a network dedicated to improving patient outcomes in Indonesia.
                  </p>
                </div>
              </div>

              {/* Card 3: Discover Makassar */}
              <div className="bg-white rounded-md overflow-hidden shadow-sm">
                <div className="relative h-56">
                  <Image src="/why-attend-3.png" alt="Discover Makassar" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="text-accent-teal text-sm font-mono uppercase">EXPLORE</h4>
                  <h3 className="text-xl font-bold text-mocha-dark mt-2 mb-3">Discover Makassar</h3>
                  <p className="text-gray-dark">
                    Immerse yourself in the vibrant culture of Makassar. Visit historic Fort Rotterdam, enjoy the stunning sunset at Losari Beach, and savor the unique local culinary delights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
