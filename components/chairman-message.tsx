import Image from "next/image"

export default function ChairmanMessage() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-accent-teal font-mono uppercase text-sm mb-2">Welcome message</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-mocha-dark">From the Chairman</h3>
          </div>

          <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm border border-mocha-medium/10">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="md:w-1/4 flex-shrink-0">
                <div className="relative w-48 mx-auto">
                  <Image src="/chairman-akhtar.png" alt="Dr. dr. Akhtar Fajar Muzakkir" width={192} height={240} className="object-contain" />
                </div>
                <div className="text-center mt-4">
                  <h4 className="font-bold text-mocha-dark text-xl">Dr. dr. Akhtar Fajar Muzakkir, SpJP(K), FIHA</h4>
                  <p className="text-accent-teal">Chairman of MCVU XXIII 2025</p>
                </div>
              </div>

              <div className="md:w-3/4">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-dark mb-8">Assalamu'alaikum Warahmatullahi Wabarakatuh, and Warmest Greetings,</p>
                  <p className="text-gray-dark">On behalf of the entire organizing committee and the South Sulawesi Branch of the Association of Indonesian Cardiologists (PERKI Cabang Makassar), it is with immense pleasure and pride that I extend my warmest welcome to all esteemed speakers, delegates, and participants to the 23rd Makassar Cardiovascular Update (MCVU) 2025. We are thrilled to host you here in Makassar, a city renowned for its rich history and vibrant spirit, from July 10th to 13th, 2025, at the Claro Hotel.</p>
                  <p className="text-gray-dark"><br></br>This year, our scientific gathering embraces the theme: "Emerging Paradigms in Acute Cardiovascular Care: Lifelines in Motion, Excellence in Every Beat". This theme reflects our commitment to addressing the ever-present challenge of cardiovascular disease, the leading cause of death globally, by focusing on the critical advancements in acute care. We aim to delve into the latest breakthroughs and evidence-based practices, fostering discussions that will enhance our collective ability to provide exceptional care. Through comprehensive symposia and interactive workshops, we seek to update knowledge, enhance skills, and promote collaboration among all healthcare professionals.</p>
                  <p className="text-gray-dark"><br></br>We believe that MCVU 2025 will serve as a crucial platform for sharing experiences and strengthening the network among medical professionals, particularly in the Eastern Indonesia region. Let us seize this opportunity to learn, innovate, and work together towards our shared goal: improving cardiovascular health and ensuring 'Excellence in Every Beat'.</p>
                  <p className="text-gray-dark mb-8"><br></br>We look forward to your active participation and wish you a fruitful, engaging, and memorable experience at MCVU XXIII 2025.</p>
                  <p className="text-gray-dark"><br></br>Wassalamu'alaikum Warahmatullahi Wabarakatuh.</p>
                  <p className="text-gray-dark font-medium"><br></br>Sincerely,</p>
                  <p className="text-mocha-dark font-bold">Dr. dr. Akhtar Fajar Muzakkir, SpJP(K), FIHA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
