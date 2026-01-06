import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { ContactSection } from '@/components/footer'
import styles from '../materials.module.css'

export const metadata: Metadata = {
  title: 'Wood Windows Replacement Plano TX | Authentic Natural Beauty',
  description: 'Premium solid wood replacement windows in Plano, TX. Timeless natural beauty, superior craftsmanship, and authentic character. Everything priced including installation.',
  keywords: 'wood windows Plano TX, solid wood windows, traditional wood windows, authentic wood windows, custom wood windows',
}

export default function WoodWindowsPage() {
  return (
    <>
      <Header />
      <main>
        <nav className={styles.breadcrumbs}>
          <div className={styles.container}>
            <ol>
              <li><Link href="/">Home</Link></li>
              <li>/</li>
              <li><Link href="/materials">Materials</Link></li>
              <li>/</li>
              <li>Wood Windows</li>
            </ol>
          </div>
        </nav>

        <section className={styles.hero} style={{ backgroundImage: 'url(/window-types/wood-plano-tx.jpg)' }}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Wood Windows Replacement in Plano, TX</h1>
            <p>Timeless Beauty and Authentic Craftsmanship in Solid Wood</p>
            <div className={styles.heroCta}>
              <Link href="/contact" className={styles.btnPrimary}>Get Free Estimate</Link>
              <a href="tel:945-207-3988" className={styles.btnSecondary}>Call 945-207-3988</a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <p>Plano homeowners who appreciate authentic traditional craftsmanship and timeless natural beauty choose solid wood windows. Nothing matches the warmth, character, and architectural authenticity that genuine wood provides. For historic Plano homes and discerning homeowners who prioritize traditional quality, solid wood windows offer unparalleled beauty and lasting value.</p>
            </div>

            <div className={styles.section}>
              <h2>Unmatched Natural Beauty and Character</h2>
              <p>Solid wood windows provide authenticity that synthetic materials cannot replicate. Each window features unique grain patterns, natural color variations, and organic warmth that change subtly with light and seasons. Wood accepts stains and finishes that enhance natural beauty while allowing the grain to show through. For Plano&apos;s historic homes and traditional architecture, wood windows provide period-appropriate authenticity that preserves architectural integrity.</p>
            </div>

            <div className={styles.section}>
              <h2>Superior Thermal Performance</h2>
              <p>Wood is naturally insulating, providing thermal performance that rivals modern synthetics without requiring complex engineering. The cellular structure creates air pockets that resist heat transfer, keeping Plano homes comfortable year-round. Quality wood windows achieve U-factors of 0.25-0.30, comparable to premium alternatives, while providing the added benefit of thermal mass that moderates temperature swings throughout the day.</p>
            </div>

            <div className={styles.section}>
              <h2>Exceptional Craftsmanship and Quality</h2>
              <p>Solid wood windows represent traditional craftsmanship at its finest. Quality manufacturers select premium wood species—mahogany, oak, cherry, or pine—and craft windows using time-honored joinery techniques. The result is windows that operate smoothly, align perfectly, and provide decades of service. For Plano homeowners who appreciate quality construction, wood windows offer satisfaction that mass-produced alternatives cannot match.</p>
            </div>

            <div className={styles.section}>
              <h2>Maintenance Requirements and Considerations</h2>
              <p>Solid wood windows require regular maintenance to preserve their beauty and performance in Plano&apos;s climate. Exterior surfaces need repainting or refinishing every 3-5 years to protect against moisture and UV damage. Interior maintenance is minimal but benefits from occasional cleaning and refinishing. For homeowners willing to invest time in maintenance, wood windows reward with beauty and character that improve with age.</p>
            </div>

            <div className={styles.section}>
              <h2>Historic Preservation and Architectural Authenticity</h2>
              <p>Wood windows are essential for authentic historic preservation in Plano&apos;s older neighborhoods. Historic districts often require wood windows to maintain period character. Beyond regulatory requirements, wood windows provide architectural correctness that honors original design intent. For homeowners passionate about preserving Plano&apos;s authentic architectural heritage, wood windows are the only authentic choice.</p>
            </div>

            <div className={styles.section}>
              <h2>Investment Value and Longevity</h2>
              <p>Quality wood windows represent significant initial investment but provide exceptional long-term value. With proper maintenance, wood windows last 50-100 years or more—far longer than synthetic alternatives. The windows can be refinished repeatedly, allowing homeowners to refresh appearance without replacement. In Plano&apos;s historic neighborhoods, authentic wood windows significantly enhance property value and marketability.</p>
            </div>

            <div className={styles.featuresGrid}>
              <h2>Features and Benefits</h2>
              <ul>
                <li>Authentic natural wood beauty</li>
                <li>Unique grain patterns and character</li>
                <li>Superior thermal insulation</li>
                <li>Traditional craftsmanship and joinery</li>
                <li>Unlimited staining and finishing options</li>
                <li>Can be refinished repeatedly</li>
                <li>50-100+ year lifespan with care</li>
                <li>Essential for historic preservation</li>
                <li>Premium wood species available</li>
                <li>Enhances property value significantly</li>
              </ul>
            </div>

            <div className={styles.faqSection}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqItem}>
                <h3>Do wood windows require a lot of maintenance?</h3>
                <p>Yes, solid wood windows require regular maintenance. Exterior surfaces need repainting or refinishing every 3-5 years in Plano&apos;s climate to prevent moisture damage and UV degradation. However, many homeowners find this maintenance rewarding.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How long do wood windows last?</h3>
                <p>With proper maintenance, quality wood windows last 50-100 years or more. They can be refinished repeatedly, allowing homeowners to refresh appearance without replacement. Many Plano homes feature original wood windows from the 1920s-1940s.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Are wood windows energy efficient?</h3>
                <p>Yes, wood windows are naturally energy efficient. Wood&apos;s cellular structure provides excellent insulation, achieving U-factors of 0.25-0.30. Combined with modern glass, wood windows reduce energy costs significantly.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Are wood windows required for historic homes?</h3>
                <p>Many Plano historic districts require wood windows to maintain period authenticity. Even when not mandated, wood windows are essential for authentic historic preservation and maintaining property value in historic neighborhoods.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can wood windows be painted?</h3>
                <p>Absolutely. Wood windows accept any exterior or interior paint or stain. Many homeowners change colors periodically to refresh appearance, taking advantage of wood&apos;s ability to be refinished repeatedly throughout its long service life.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How much do wood windows cost with installation?</h3>
                <p>Wood window costs with installation vary by style and features. Everything is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to $3500 per window depending on frame material. We do not sell windows without installation.</p>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <h2>Ready to Upgrade Your Windows?</h2>
              <p>Get a free consultation and estimate for wood window replacement in Plano, TX.</p>
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
