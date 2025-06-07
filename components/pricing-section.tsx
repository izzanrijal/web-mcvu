import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface PricingSectionProps {
  id?: string;
}

export default function PricingSection({ id }: PricingSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-mocha-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Pricing</h2>
            <p className="text-white/80">Special rates available for students, residents, and group registrations</p>
            <Link
              href="https://mcvu.perkimakassar.com/register"
              className="inline-flex items-center text-accent-teal font-mono uppercase font-bold hover:underline"
            >
              See All Packages
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="lg:col-span-9">
            <div className="bg-cream rounded-md p-8 max-w-xl mx-auto border border-mocha-medium/20">
              <h3 className="text-2xl font-bold text-mocha-dark mb-6 text-center">Registration Fees</h3>
              <div className="overflow-x-auto rounded-md border border-mocha-light shadow-md">
                <table className="min-w-full">
                  <thead className="bg-mocha-dark">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-cream uppercase tracking-wider">Category</th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-semibold text-cream uppercase tracking-wider">Fee</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-mocha-light">
                    <tr className="bg-mocha-light">
                      <td colSpan={2} className="px-6 py-3 text-sm font-bold text-mocha-dark tracking-wide">SYMPOSIUM</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-mocha-dark">Specialist</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-mocha-dark text-right">IDR 1.850.000,-</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-mocha-dark">General Practitioners</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-mocha-dark text-right">IDR 850.000,-</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-mocha-dark">Residents</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-mocha-dark text-right">IDR 850.000,-</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-mocha-dark">Nurse</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-mocha-dark text-right">IDR 600.000,-</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-mocha-dark">Medical Students</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-mocha-dark text-right">IDR 400.000,-</td>
                    </tr>
                    <tr className="bg-mocha-light">
                      <td colSpan={2} className="px-6 py-3 text-sm font-bold text-mocha-dark tracking-wide">WORKSHOP</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-mocha-dark">Doctor</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-mocha-dark text-right">IDR 1.500.000,-</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-mocha-dark">Nurse</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-mocha-dark text-right">IDR 750.000,-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 border-t border-mocha-medium/20 pt-6">
                <p className="text-lg text-mocha-dark text-center">Ready to join us in Makassar?</p>
                <div className="mt-6">
                  <Link
                    href="https://mcvu.perkimakassar.com/register"
                    className="inline-block bg-accent-teal hover:bg-accent-teal/90 text-white font-mono uppercase text-lg font-bold py-3 px-6 rounded-md transition-colors w-full text-center"
                  >
                    REGISTER NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
