import Header from '@/components/header'
import HeroSlider from '@/components/hero-slider'
import {
  VisionSection,
  FullImageSection1,
  PassionSection,
  FullImageSection2,
  WindowTypesSection,
  BrandsSection,
  ServiceSection,
  FullImageSection3,
} from '@/components/content-sections'
import { SocialBar, ContactSection, Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <VisionSection />
        <FullImageSection1 />
        <PassionSection />
        <FullImageSection2 />
        <WindowTypesSection />
        <BrandsSection />
        <ServiceSection />
        <FullImageSection3 />
        <ContactSection />
        <SocialBar />
      </main>
      <Footer />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Window Replacements of Plano",
            "image": "https://windowreplacementplano.com/og-image.jpg",
            "@id": "https://windowreplacementplano.com",
            "url": "https://windowreplacementplano.com",
            "telephone": "945-207-3988",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "5445 Legacy Dr #160",
              "addressLocality": "Plano",
              "addressRegion": "TX",
              "postalCode": "75024",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 33.0198,
              "longitude": -96.8245
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://facebook.com/windowreplacementplano",
              "https://instagram.com/windowreplacementplano",
              "https://linkedin.com/company/windowreplacementplano"
            ],
            "priceRange": "$$",
            "areaServed": {
              "@type": "City",
              "name": "Plano",
              "containedInPlace": {
                "@type": "State",
                "name": "Texas"
              }
            },
            "description": "Premium window replacement services in Plano, TX. Authorized dealer for Andersen, Pella, and Jeld-Wen windows. Expert installation of double-hung, casement, bay, bow, and specialty windows.",
            "serviceType": [
              "Window Replacement",
              "Window Installation",
              "Double-Hung Windows",
              "Single-Hung Windows",
              "Casement Windows",
              "Awning Windows",
              "Sliding Windows",
              "Picture Windows",
              "Bay Windows",
              "Bow Windows",
              "Special Shape Windows"
            ]
          })
        }}
      />

      {/* Additional Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Window Replacement",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Window Replacements of Plano"
            },
            "areaServed": {
              "@type": "City",
              "name": "Plano"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Window Replacement Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Andersen Window Installation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pella Window Installation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Jeld-Wen Window Installation"
                  }
                }
              ]
            }
          })
        }}
      />
    </>
  )
}

