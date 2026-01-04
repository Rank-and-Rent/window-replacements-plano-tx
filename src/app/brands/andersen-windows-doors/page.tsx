import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { ContactSection } from '@/components/footer'
import styles from '../brands.module.css'

export const metadata: Metadata = {
  title: 'Andersen Windows & Doors Plano TX',
  description: 'Authorized Andersen Windows & Doors dealer in Plano, TX. Premium Fibrex windows, entry doors, and patio doors. Professional installation. Call 945-207-3988.',
  keywords: 'Andersen windows Plano TX, Andersen doors, Fibrex windows, Andersen dealer',
}

export default function AndersenPage() {
  return (
    <>
      <Header />
      <main>
        <nav className={styles.breadcrumbs}>
          <div className={styles.container}>
            <ol>
              <li><Link href="/">Home</Link></li>
              <li>/</li>
              <li><Link href="/brands">Brands</Link></li>
              <li>/</li>
              <li>Andersen Windows & Doors</li>
            </ol>
          </div>
        </nav>

        <section 
          className={styles.hero}
          style={{ backgroundImage: 'url(/brands/andersen-windows-plano-tx.webp)' }}
        >
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Andersen Window & Door Replacement in Plano, TX</h1>
            <p>Over 120 Years of American Craftsmanship</p>
          </div>
        </section>

        {/* Prominent Brand Logo */}
        <section className={styles.brandLogoSection}>
          <div className={styles.brandLogoSectionContainer}>
            <div className={styles.brandLogoWrapper}>
              <div className={styles.brandLogoContent}>
                <img
                  src="/andersen-windows-and-doors-plano-tx-logo.png"
                  alt="Andersen Windows & Doors"
                  className={styles.brandLogoLarge}
                />
                <h2 className={styles.brandLogoTitle}>Authorized Andersen Dealer</h2>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.description}>
              <h2>About Andersen Windows & Doors</h2>
              <p>Andersen Windows and Doors has been a trusted name in window and door manufacturing for over 120 years. Known for exceptional quality, energy efficiency, and innovative design, Andersen offers a comprehensive range of products including double-hung windows, casement windows, sliding patio doors, and hinged French doors. Their Fibrex material combines the strength of wood with the low-maintenance benefits of vinyl, providing superior durability and performance for Plano homeowners.</p>
            </div>

            <div className={styles.productCategories}>
              <h2>Andersen Products We Install</h2>
              <div className={styles.categoriesGrid}>
                <div className={styles.categoryCard}>
                  <h3>Windows</h3>
                  <ul>
                    <li><Link href="/windows/double-hung-windows">Double-Hung Windows</Link></li>
                    <li><Link href="/windows/single-hung-windows">Single-Hung Windows</Link></li>
                    <li><Link href="/windows/casement-windows">Casement Windows</Link></li>
                    <li><Link href="/windows/awning-windows">Awning Windows</Link></li>
                    <li><Link href="/windows/sliding-windows">Sliding Windows</Link></li>
                    <li><Link href="/windows/picture-windows">Picture Windows</Link></li>
                    <li><Link href="/windows/bay-bow-windows">Bay & Bow Windows</Link></li>
                    <li><Link href="/windows/special-shape-windows">Specialty Shapes</Link></li>
                  </ul>
                </div>
                <div className={styles.categoryCard}>
                  <h3>Doors</h3>
                  <ul>
                    <li><Link href="/doors/entry-door-installation">Entry Doors</Link></li>
                    <li><Link href="/doors/patio-door-installation">Patio Doors</Link></li>
                    <li><Link href="/doors/french-door-installation">French Doors</Link></li>
                    <li><Link href="/doors/sliding-glass-door-installation">Sliding Glass Doors</Link></li>
                    <li><Link href="/doors/storm-door-installation">Storm Doors</Link></li>
                    <li><Link href="/doors/custom-door-installation">Custom Doors</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.whyChoose}>
              <h2>Why Choose Andersen for Your Plano Home</h2>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefit}>
                  <h3>Energy Efficiency</h3>
                  <p>Andersen windows and doors feature advanced insulation technology to keep your Plano home comfortable year-round while reducing energy costs.</p>
                </div>
                <div className={styles.benefit}>
                  <h3>Durability</h3>
                  <p>Built to withstand Texas weather, Andersen products resist fading, warping, and deterioration even in Plano&apos;s intense sun and humidity.</p>
                </div>
                <div className={styles.benefit}>
                  <h3>Aesthetic Excellence</h3>
                  <p>With numerous styles, colors, and finishes available, Andersen offers design options that perfectly complement your Plano home&apos;s architecture.</p>
                </div>
                <div className={styles.benefit}>
                  <h3>Professional Installation</h3>
                  <p>Our certified installers are trained in Andersen best practices, ensuring your windows and doors perform optimally for decades.</p>
                </div>
              </div>
            </div>

            <div className={styles.faqSection}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqItem}>
                <h3>What makes Andersen windows and doors a good choice for Plano, TX homes?</h3>
                <p>Andersen products are engineered to perform excellently in Texas climates. They provide superior energy efficiency to reduce cooling costs during hot summers, durability to withstand intense sun and occasional severe weather, and aesthetic options that complement Plano&apos;s diverse architectural styles.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How long does Andersen window and door installation take in Plano?</h3>
                <p>Most Andersen window replacement projects are completed within 1 to 3 days, depending on the number of units. Door installations typically take 4 to 8 hours per unit. We provide detailed timelines during your consultation.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What warranty coverage comes with Andersen products?</h3>
                <p>Andersen provides comprehensive warranty coverage on their windows and doors, typically including limited lifetime warranties on many product lines. Our installations include both the manufacturer&apos;s warranty and our own craftsmanship guarantee.</p>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <h2>Ready to Upgrade to Andersen?</h2>
              <p>Get a free consultation and estimate for Andersen windows and doors in Plano, TX.</p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.btnPrimary}>Get Free Estimate</Link>
                <a href="tel:945-207-3988" className={styles.btnSecondary}>Call 945-207-3988</a>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
