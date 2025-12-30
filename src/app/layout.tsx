import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Window Replacements of Plano | Premium Andersen, Pella & Jeld-Wen Windows',
  description: 'Transform your Plano home with premium window replacements from Andersen, Pella, and Jeld-Wen. Expert installation of double-hung, casement, bay, bow, and specialty windows. Free estimates. Call 945-207-3988.',
  keywords: 'window replacement Plano TX, Andersen windows Plano, Pella windows Texas, Jeld-Wen dealer Plano, double hung windows, casement windows, bay windows, bow windows, window installation Plano',
  openGraph: {
    title: 'Window Replacements of Plano | Premium Window Installation',
    description: 'North Texas premier window replacement specialists. Authorized dealer for Andersen, Pella, and Jeld-Wen.',
    url: 'https://windowreplacementplano.com',
    siteName: 'Window Replacements of Plano',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://windowreplacementplano.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

