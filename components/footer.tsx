import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-mocha-dark text-white">
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent-teal">MCVU (Makassar Cardiovascular Update) XXIII 2025</h3>
            <p className="text-sm text-white/80">Emerging Paradigms in Acute Cardiovascular Care: Lifelines in Motion, Excellence in Every Beat</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent-teal">Tautan</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-white/80 hover:text-white" href="/">Beranda</Link></li>
              <li><Link className="text-white/80 hover:text-white" href="#info">Tentang</Link></li> {/* Assuming #info is an ID on the page */}
              <li><Link className="text-white/80 hover:text-white" href="/agenda">Jadwal</Link></li> {/* Updated to /agenda */}
              <li><Link className="text-white/80 hover:text-white" href="/faq">FAQ</Link></li> {/* Updated to /faq */}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent-teal">Kontak</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="h-4 w-4 text-accent-teal" />
                <span>panitia.mcvu@perkimakassar.com</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone className="h-4 w-4 text-accent-teal" />
                <span>+62-821-9061-5922</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <MapPin className="h-4 w-4 text-accent-teal" />
                <span>Jln. Letjen Hertasning No.33, Kec Panakukkang, Kota Makassar</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent-teal">Pendaftaran</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-white/80 hover:text-white" href="https://mcvu.perkimakassar.com/register" target="_blank" rel="noopener noreferrer">Daftar Sekarang</Link></li>
              <li><Link className="text-white/80 hover:text-white" href="#">Cek Status Pendaftaran</Link></li> {/* Placeholder for check status link */}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm text-white/80">
          <p>© MCVU XXIII 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

