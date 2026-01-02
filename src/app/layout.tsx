import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import TopBrandBanner from '@/components/top-brand-banner'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://windowreplacementplano.com'),
  title: {
    default: 'Window Replacements of Plano | Premium Andersen, Pella & Jeld-Wen Windows',
    template: '%s | Window Replacements of Plano',
  },
  description: 'Transform your Plano home with premium window replacements from Andersen, Pella, and Jeld-Wen. Expert installation of double-hung, casement, bay, bow, and specialty windows. Free estimates. Call 945-207-3988.',
  keywords: [
    'window replacement Plano TX',
    'Andersen windows Plano',
    'Pella windows Texas',
    'Jeld-Wen dealer Plano',
    'double hung windows Plano',
    'casement windows Plano TX',
    'bay windows installation',
    'bow windows Plano',
    'window installation Plano',
    'energy efficient windows Plano',
    'replacement windows Collin County',
  ],
  authors: [{ name: 'Window Replacements of Plano' }],
  creator: 'Window Replacements of Plano',
  publisher: 'Window Replacements of Plano',
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
  openGraph: {
    title: 'Best Window Replacement in Plano, TX',
    description: 'North Texas premier window replacement specialists. Authorized dealer for Andersen, Pella, and Jeld-Wen.',
    url: 'https://windowreplacementplano.com',
    siteName: 'Window Replacements of Plano',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Window Replacements of Plano - Premium Window Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Window Replacements of Plano',
    description: 'Premium window replacement in Plano, TX. Andersen, Pella & Jeld-Wen windows.',
    images: ['/og-image.jpg'],
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1a365d" />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Plano" />
        <meta name="geo.position" content="33.0198;-96.8245" />
        <meta name="ICBM" content="33.0198, -96.8245" />
      </head>
      <body>
        <TopBrandBanner />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

