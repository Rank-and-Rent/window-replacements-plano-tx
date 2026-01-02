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

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "@id": "https://windowreplacementplano.com/#organization",
            "name": "Window Replacements of Plano",
            "alternateName": "Plano Window Replacement",
            "image": "https://windowreplacementplano.com/og-image.jpg",
            "logo": "https://windowreplacementplano.com/logo.png",
            "url": "https://windowreplacementplano.com",
            "telephone": "+1-945-207-3988",
            "email": "info@windowreplacementplano.com",
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
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "14:00"
              }
            ],
            "sameAs": [],
            "priceRange": "$$",
            "currenciesAccepted": "USD",
            "paymentAccepted": "Cash, Credit Card, Financing",
            "areaServed": [
              { "@type": "City", "name": "Plano", "containedInPlace": { "@type": "State", "name": "Texas" } },
              { "@type": "City", "name": "Frisco" },
              { "@type": "City", "name": "Allen" },
              { "@type": "City", "name": "McKinney" },
              { "@type": "City", "name": "Richardson" },
              { "@type": "City", "name": "The Colony" },
              { "@type": "City", "name": "Carrollton" }
            ],
            "description": "Premium window replacement services in Plano, TX. Authorized dealer for Andersen, Pella, Jeld-Wen, and Marvin windows. Expert installation of double-hung, casement, bay, bow, and specialty windows.",
            "slogan": "Premium Window Replacement for Plano Homes",
            "foundingDate": "2010",
            "knowsAbout": [
              "Window Replacement",
              "Window Installation",
              "Energy Efficient Windows",
              "Double-Hung Windows",
              "Casement Windows",
              "Bay Windows",
              "Bow Windows"
            ],
            "brand": [
              { "@type": "Brand", "name": "Andersen" },
              { "@type": "Brand", "name": "Pella" },
              { "@type": "Brand", "name": "Jeld-Wen" }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "134",
              "bestRating": "5",
              "worstRating": "1"
            },
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

      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://windowreplacementplano.com/#website",
            "name": "Window Replacements of Plano",
            "url": "https://windowreplacementplano.com",
            "publisher": { "@id": "https://windowreplacementplano.com/#organization" },
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://windowreplacementplano.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://windowreplacementplano.com/#org",
            "name": "Window Replacements of Plano",
            "url": "https://windowreplacementplano.com",
            "logo": "https://windowreplacementplano.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-945-207-3988",
              "contactType": "customer service",
              "areaServed": "US",
              "availableLanguage": ["English", "Spanish"]
            }
          })
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://windowreplacementplano.com" }
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
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Marvin Window Installation"
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

