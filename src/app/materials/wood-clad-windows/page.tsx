import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { ContactSection } from '@/components/footer'
import styles from '../materials.module.css'

export const metadata: Metadata = {
  title: 'Wood Clad Windows Replacement Plano TX | Traditional Beauty, Modern Protection',
  description: 'Premium wood clad replacement windows in Plano, TX. Real wood interior beauty with durable exterior protection. Everything priced including installation.',
  keywords: 'wood clad windows Plano TX, wood clad replacement windows, traditional windows, Andersen wood clad windows, Pella wood clad windows',
}

export default function WoodCladWindowsPage() {
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
              <li>Wood Clad Windows</li>
            </ol>
          </div>
        </nav>

        <section className={styles.hero} style={{ backgroundImage: 'url(/window-types/wood-clad-plano-tx.jpg)' }}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Wood Clad Windows Replacement in Plano, TX</h1>
            <p>Authentic Wood Interior Beauty with Weather-Resistant Exterior Protection</p>
            <div className={styles.heroCta}>
              <Link href="/contact" className={styles.btnPrimary}>Get Free Estimate</Link>
              <a href="tel:945-207-3988" className={styles.btnSecondary}>Call 945-207-3988</a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <p>Plano homeowners seeking the ultimate combination of traditional wood beauty and modern durability discover that wood clad windows provide the perfect balance. With authentic wood interiors that bring natural warmth to your home and weather-resistant exteriors that withstand Plano&apos;s challenging climate, wood clad windows represent the gold standard in window performance and aesthetics.</p>
            </div>

            <div className={styles.section}>
              <h2>Best of Both Worlds: Wood Inside, Durability Outside</h2>
              <p>Wood clad windows feature genuine wood interiors that provide authentic natural beauty, warmth, and character. The interior wood can be stained or painted to match any décor, from traditional stains to contemporary colors. The exterior cladding—typically aluminum or vinyl—protects the wood from Plano&apos;s weather extremes, eliminating the maintenance burdens of traditional wood windows while preserving interior beauty.</p>
            </div>

            <div className={styles.section}>
              <h2>Weather Protection for Plano Climate</h2>
              <p>The exterior cladding creates an impenetrable barrier against moisture, UV exposure, and temperature extremes that damage traditional wood windows in Plano. Unlike bare wood that requires annual maintenance, clad exteriors need minimal care while providing decades of weather protection. The cladding prevents rot, warping, and insect damage that plague unprotected wood in Texas climate.</p>
            </div>

            <div className={styles.section}>
              <h2>Superior Energy Efficiency</h2>
              <p>Wood&apos;s natural insulating properties combined with modern cladding technology create exceptional thermal performance. Wood clad windows typically achieve U-factors of 0.25-0.30, significantly better than aluminum and comparable to premium vinyl. Plano homeowners see 30-40% reductions in energy costs compared to older windows, with the added benefit of wood&apos;s thermal mass that moderates temperature swings.</p>
            </div>

            <div className={styles.section}>
              <h2>Design Flexibility and Customization</h2>
              <p>Wood clad windows offer unlimited design possibilities. The wood interior accepts any stain or paint color, matching Plano homes from traditional to contemporary styles. Exterior cladding is available in dozens of factory-finished colors that never need repainting. The combination allows homeowners to achieve perfect aesthetic harmony inside and out.</p>
            </div>

            <div className={styles.section}>
              <h2>Premium Quality and Longevity</h2>
              <p>Wood clad windows represent the premium tier of window construction. Quality manufacturers use rot-resistant wood species, advanced cladding systems, and superior hardware. The result is windows that provide 30-40 years of service with minimal maintenance. For Plano homeowners who prioritize quality and longevity, wood clad windows offer unmatched value despite higher initial costs.</p>
            </div>

            <div className={styles.section}>
              <h2>Investment in Home Value</h2>
              <p>Wood clad windows significantly enhance home value and appeal in Plano&apos;s upscale real estate market. The natural wood interior creates warmth and character that buyers value, while the low-maintenance exterior appeals to practical considerations. Wood clad windows are often cited as a key selling feature in premium Plano properties.</p>
            </div>

            <div className={styles.featuresGrid}>
              <h2>Features and Benefits</h2>
              <ul>
                <li>Genuine wood interior for authentic beauty</li>
                <li>Weather-resistant exterior cladding</li>
                <li>Superior energy efficiency</li>
                <li>Minimal exterior maintenance required</li>
                <li>Unlimited interior staining/painting options</li>
                <li>Factory-finished exterior colors</li>
                <li>20-30 year manufacturer warranties</li>
                <li>Enhanced home resale value</li>
                <li>Available in all window styles</li>
                <li>Premium hardware and operation</li>
              </ul>
            </div>

            <div className={styles.faqSection}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqItem}>
                <h3>What is the difference between wood clad and all-wood windows?</h3>
                <p>Wood clad windows have genuine wood interiors just like all-wood windows, but feature weather-resistant aluminum or vinyl cladding on the exterior. This eliminates exterior maintenance while preserving interior wood beauty.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do wood clad windows require maintenance?</h3>
                <p>Interior wood surfaces benefit from occasional refinishing to maintain their beauty, but exterior cladding requires no painting or sealing. Overall maintenance is far less than traditional wood windows.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Are wood clad windows energy efficient?</h3>
                <p>Yes, wood clad windows are highly energy efficient. Wood&apos;s natural insulating properties combined with modern glass technology can reduce energy costs by 30-40% in Plano&apos;s climate.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How long do wood clad windows last?</h3>
                <p>Quality wood clad windows last 30-40 years with proper care. The exterior cladding protects the wood from weather damage, significantly extending service life compared to unprotected wood.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I paint the interior wood?</h3>
                <p>Absolutely. Wood clad window interiors accept any stain or paint, allowing perfect color matching with your Plano home&apos;s interior design. Many homeowners change interior finishes over time.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How much do wood clad windows cost with installation?</h3>
                <p>Wood clad window costs with installation vary by style and features. Everything is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to $3500 per window depending on frame material. We do not sell windows without installation.</p>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <h2>Ready to Upgrade Your Windows?</h2>
              <p>Get a free consultation and estimate for wood clad window replacement in Plano, TX.</p>
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
