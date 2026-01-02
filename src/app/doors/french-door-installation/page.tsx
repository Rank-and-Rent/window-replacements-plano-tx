import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { SocialBar, ContactSection } from '@/components/footer'
import styles from '../doors.module.css'

export const metadata: Metadata = {
  title: 'French Door Installation Plano TX | Classic Double Doors',
  description: 'Professional French door installation in Plano, TX. Classic double doors with glass panels for elegant transitions. Andersen, Pella, JELD-WEN, Marvin. Call 945-207-3988.',
  keywords: 'French door installation Plano TX, double doors, glass panel doors, Andersen French doors, Pella French doors',
}

export default function FrenchDoorPage() {
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
              <li>French Door Installation</li>
            </ol>
          </div>
        </nav>

        <section className={styles.hero} style={{ backgroundImage: 'url(/windows/double-hung-windows-plano-tx.avif' }}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>French Door Replacement in Plano, TX</h1>
            <p>Timeless Elegance for Your Home</p>
            <div className={styles.heroCta}>
              <Link href="/contact" className={styles.btnPrimary}>Get Free Estimate</Link>
              <a href="tel:945-207-3988" className={styles.btnSecondary}>Call 945-207-3988</a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <p>French doors have graced elegant homes for centuries, and they remain one of the most sought-after door styles for Plano homeowners seeking to add sophistication and natural light to their living spaces. These classic double doors with their characteristic glass panels create beautiful transitions between rooms or between indoor and outdoor spaces, flooding your home with light while maintaining a refined aesthetic.</p>
            </div>

            <div className={styles.section}>
              <h2>Interior and Exterior Applications</h2>
              <p>French doors serve beautifully in both interior and exterior applications. Inside, they elegantly separate living rooms from dining areas, bedrooms from sitting rooms, or home offices from common spaces while allowing light to flow freely. As exterior doors, they create grand entrances to patios, decks, gardens, and pools. Modern French doors feature full weatherstripping and multi-point locks for exterior security and energy efficiency.</p>
            </div>

            <div className={styles.section}>
              <h2>Glass Options for Every Style</h2>
              <p>The glass panels in French doors offer tremendous design flexibility. Choose from clear glass for maximum light and views, obscure or frosted glass for privacy, decorative leaded or beveled glass for traditional elegance, or modern grid patterns that complement your home&apos;s architecture. Low-E coatings and insulated glass units ensure energy efficiency without sacrificing beauty.</p>
            </div>

            <div className={styles.section}>
              <h2>Swing Configuration Options</h2>
              <p>French doors are available in multiple swing configurations to suit your space. Inswing doors are ideal for covered outdoor areas or when interior floor space allows. Outswing doors maximize interior space and provide enhanced weather resistance. Single-active configurations allow one door to operate while the other remains stationary, while full-active pairs allow both doors to open for maximum width.</p>
            </div>

            <div className={styles.featuresGrid}>
              <h2>Features and Benefits</h2>
              <ul>
                <li>Classic double-door design</li>
                <li>Full-length glass panels</li>
                <li>Interior and exterior options</li>
                <li>Inswing and outswing configurations</li>
                <li>Multiple glass styles available</li>
                <li>Wood, fiberglass, and steel frames</li>
                <li>Multi-point locking systems</li>
                <li>Custom sizes and finishes</li>
                <li>Sidelight and transom options</li>
                <li>Energy-efficient glass packages</li>
              </ul>
            </div>

            <div className={styles.faqSection}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqItem}>
                <h3>What is the difference between French doors and patio doors?</h3>
                <p>French doors are hinged doors that swing open, typically in pairs. Patio doors usually refer to sliding doors that move horizontally on tracks. Both provide access to outdoor spaces, but French doors offer a more traditional aesthetic while sliding doors are more space-efficient.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can French doors be secure?</h3>
                <p>Absolutely. Modern French doors feature multi-point locking systems, reinforced frames, and impact-resistant glass options that provide excellent security. Flush-bolt systems secure the inactive door at top and bottom, while the active door features deadbolts and keyed locks.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How wide can French doors be?</h3>
                <p>Standard French door pairs range from 4 to 8 feet wide. Custom sizes can accommodate wider openings. Sidelights can be added to extend the overall width while maintaining structural integrity. We help you determine the optimal size for your specific application.</p>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <h2>Ready to Add French Elegance?</h2>
              <p>Get a free consultation and estimate for French door installation in Plano, TX.</p>
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
