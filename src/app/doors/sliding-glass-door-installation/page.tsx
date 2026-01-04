import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { ContactSection } from '@/components/footer'
import styles from '../doors.module.css'

export const metadata: Metadata = {
  title: 'Sliding Glass Door Installation Plano TX | Space-Saving Solutions',
  description: 'Professional sliding glass door installation in Plano, TX. Space-saving sliding doors with expansive glass panels. Andersen, Pella, JELD-WEN, Marvin. Call 945-207-3988.',
  keywords: 'sliding glass door installation Plano TX, sliding doors, glass doors, Andersen sliding doors, Pella sliding doors',
}

export default function SlidingGlassDoorPage() {
  return (
    <>
      <Header />
      <main>
        <nav className={styles.breadcrumbs}>
          <div className={styles.container}>
            <ol>
              <li><Link href="/">Home</Link></li>
              <li>/</li>
              <li><Link href="/doors">Doors</Link></li>
              <li>/</li>
              <li>Sliding Glass Door Installation</li>
            </ol>
          </div>
        </nav>

        <section className={styles.hero} style={{ backgroundImage: 'url(/windows/double-hung-windows-plano-tx.avif' }}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Sliding Glass Door Replacement in Plano, TX</h1>
            <p>Maximize Your Views with Space-Saving Elegance</p>
            <div className={styles.heroCta}>
              <Link href="/contact" className={styles.btnPrimary}>Get Free Estimate</Link>
              <a href="tel:945-207-3988" className={styles.btnSecondary}>Call 945-207-3988</a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <p>Sliding glass doors offer the perfect combination of expansive views, abundant natural light, and space-efficient operation. Unlike hinged doors that require swing clearance, sliding doors glide parallel to the wall, making them ideal for Plano homes where every square foot matters. Modern sliding glass doors from Andersen, Pella, JELD-WEN, and Marvin feature advanced engineering that ensures smooth operation, excellent weather resistance, and superior energy efficiency.</p>
            </div>

            <div className={styles.section}>
              <h2>Advanced Sliding Technology</h2>
              <p>Today&apos;s sliding glass doors operate on precision-engineered roller systems that make even the largest panels glide effortlessly. Stainless steel or tandem roller assemblies distribute weight evenly, ensuring smooth operation for years. Some premium models feature lift-and-glide mechanisms that slightly raise the panel for effortless movement, then settle it against weatherstripping when closed for an airtight seal.</p>
            </div>

            <div className={styles.section}>
              <h2>Multi-Panel Configurations</h2>
              <p>While traditional two-panel sliding doors remain popular, modern options include three, four, and even more panels for dramatic wall-of-glass effects. Pocket sliding doors disappear entirely into wall cavities, creating uninterrupted openings. Stacking configurations allow multiple panels to slide and stack on one side, opening up to 90% of the total width. We help Plano homeowners choose the configuration that maximizes their views and living space.</p>
            </div>

            <div className={styles.section}>
              <h2>Energy Performance</h2>
              <p>Large glass expanses require exceptional energy performance to maintain comfort and efficiency in Plano&apos;s climate. Our sliding glass doors feature Low-E coatings specifically formulated for hot climates, argon or krypton gas fills between panes, warm-edge spacer systems, and thermally broken frames. These technologies work together to minimize heat gain during summer while maintaining clear views and abundant daylight.</p>
            </div>

            <div className={styles.featuresGrid}>
              <h2>Features and Benefits</h2>
              <ul>
                <li>Smooth-gliding roller systems</li>
                <li>Multi-panel configurations</li>
                <li>Pocket and stacking options</li>
                <li>Low-E glass with gas fill</li>
                <li>Thermally broken frames</li>
                <li>Multi-point locking systems</li>
                <li>ADA-compliant thresholds</li>
                <li>Built-in screen options</li>
                <li>Custom sizes available</li>
                <li>Various frame finishes</li>
              </ul>
            </div>

            <div className={styles.faqSection}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqItem}>
                <h3>How wide can sliding glass doors be?</h3>
                <p>Standard sliding glass doors range from 5 to 12 feet wide. Multi-panel configurations can span 20 feet or more. The maximum size depends on the specific product line and structural considerations. We assess your opening and recommend appropriate options during your consultation.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Are sliding glass doors energy efficient?</h3>
                <p>Modern sliding glass doors are highly energy efficient when properly specified for our climate. Features like Low-E coatings, gas fills, and thermally broken frames minimize heat transfer. Many of our sliding door options meet or exceed ENERGY STAR requirements for the South-Central climate zone.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How do I maintain sliding glass doors?</h3>
                <p>Sliding glass doors require minimal maintenance. Keep tracks clean and debris-free, lubricate rollers annually with silicone spray, and clean glass with standard glass cleaner. Quality doors from our premium brands are designed for decades of reliable operation with basic care.</p>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <h2>Ready to Expand Your Views?</h2>
              <p>Get a free consultation and estimate for sliding glass door installation in Plano, TX.</p>
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
