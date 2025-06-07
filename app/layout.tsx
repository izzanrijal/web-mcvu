import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MCVU XXIII 2025 | Makassar Cardiovascular Update Symposium',
  description: 'MCVU XXIII 2025 - Simposium tahunan untuk membahas perkembangan terbaru dalam perawatan kardiovaskular, penelitian, dan praktik klinis di Indonesia.',
  keywords: 'MCVU, Makassar Cardiovascular Update, Simposium Kardiovaskular, Konferensi Medis, Kardiovaskular, Indonesia, Workshop Medis, Perki Makassar',
  authors: [{ name: 'PERKI Makassar' }],
  creator: 'PERKI Makassar',
  publisher: 'PERKI Makassar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mcvu-symposium.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MCVU XXIII 2025 | Makassar Cardiovascular Update',
    description: 'Simposium kardiovaskular terkemuka di Indonesia yang menampilkan workshop, pembicara ahli, dan kesempatan networking untuk profesional kesehatan.',
    url: 'https://mcvu-symposium.vercel.app',
    siteName: 'MCVU Symposium',
    images: [
      {
        url: '/mcvu-logo.png',
        width: 1200,
        height: 630,
        alt: 'MCVU XXIII 2025 Symposium',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MCVU XXIII 2025 | Makassar Cardiovascular Update',
    description: 'Simposium tahunan untuk perkembangan terbaru dalam perawatan kardiovaskular di Indonesia',
    images: ['/mcvu-logo.png'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/mcvu-logo.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
