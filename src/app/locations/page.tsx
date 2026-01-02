'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { SocialBar, ContactSection } from '@/components/footer'
import { locationsData } from '@/data'
import styles from './locations.module.css'

export default function LocationsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredLocations = locationsData.filter(location =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <span className={styles.label}>Service Areas</span>
            <h1>Window & Door Installation Throughout the Dallas-Fort Worth Area</h1>
            <p>
              Professional window and door installation services across Plano, TX and surrounding communities. We serve homeowners throughout the metroplex with quality installations and expert craftsmanship.
            </p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Search locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={styles.clearButton}
                  aria-label="Clear search"
                >
                  Clear
                </button>
              )}
            </div>
            
            <p className={styles.resultsCount}>
              Showing {filteredLocations.length} of {locationsData.length} locations
            </p>

            {filteredLocations.length > 0 ? (
              <div className={styles.grid}>
                {filteredLocations.map((location) => (
                  <Link
                    key={location.slug}
                    href={location.route}
                    className={styles.card}
                  >
                    <h3 className={styles.cardTitle}>{location.name}</h3>
                    <span className={styles.cardType}>{location.type}</span>
                    <span className={styles.learnMore}>View Services</span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className={styles.noResults}>
                <h2>No locations found for &quot;{searchQuery}&quot;</h2>
                <p>We can still serve your area in the Dallas-Fort Worth region</p>
                <Link href="/contact" className={styles.btnPrimary}>
                  Contact Us
                </Link>
              </div>
            )}

            <div className={styles.ctaBox}>
              <h2>Do Not See Your Area?</h2>
              <p>We serve the entire Dallas-Fort Worth metroplex. Contact us to discuss your project.</p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.btnPrimary}>Get Free Estimate</Link>
                <a href="tel:945-207-3988" className={styles.btnSecondary}>Call 945-207-3988</a>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
        <SocialBar />
      </main>
      <Footer />
    </>
  )
}
