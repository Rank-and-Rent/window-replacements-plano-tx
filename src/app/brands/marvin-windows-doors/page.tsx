import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { SocialBar, ContactSection } from '@/components/footer'
import styles from '../brands.module.css'

export const metadata: Metadata = {
  title: 'Marvin Windows & Doors Plano TX',
  description: 'Authorized Marvin Windows & Doors dealer in Plano, TX. Premium custom windows and doors. Signature, Elevate, Essential collections. Call 945-207-3988.',
  keywords: 'Marvin windows Plano TX, Marvin doors, custom windows, Marvin dealer',
}

export default function MarvinPage() {
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
              <li>Marvin Windows & Doors</li>
            </ol>
          </div>
        </nav>

        <section className={styles.hero}>
          <div className={styles.container}>
            <h1>Marvin Window & Door Replacement in Plano, TX</h1>
            <p>Made to Order Excellence Since 1912</p>
          </div>
        </section>

        {/* Prominent Brand Logo */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <img
                  src="/Marvin-LOCKUP-CMYK-898x301.png"
                  alt="Marvin Windows & Doors"
                  className="h-20 lg:h-24 w-auto mx-auto mb-4"
                />
                <h2 className="text-xl lg:text-2xl font-serif text-gray-800">Authorized Marvin Dealer</h2>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.description}>
              <h2>About Marvin Windows & Doors</h2>
              <p>Marvin Windows and Doors is synonymous with premium quality and custom craftsmanship. Family-owned since 1912, Marvin specializes in made-to-order windows and doors that combine timeless design with cutting-edge performance. Their extensive product lines, including Marvin Signature, Marvin Elevate, and Marvin Essential collections, offer unparalleled customization options in materials, finishes, and hardware. For Plano homeowners seeking luxury, durability, and architectural distinction, Marvin delivers exceptional value.</p>
            </div>

            <div className={styles.productCategories}>
              <h2>Marvin Products We Install</h2>
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
              <h2>Why Choose Marvin for Your Plano Home</h2>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefit}>
                  <h3>Made to Order</h3>
                  <p>Every Marvin window and door is built to your exact specifications, ensuring perfect fit and unique design for your Plano home.</p>
                </div>
                <div className={styles.benefit}>
                  <h3>Premium Materials</h3>
                  <p>Marvin uses the finest materials including sustainably harvested wood, Ultrex fiberglass, and premium hardware for lasting beauty and performance.</p>
                </div>
                <div className={styles.benefit}>
                  <h3>Unlimited Customization</h3>
                  <p>Choose from virtually unlimited combinations of sizes, shapes, colors, finishes, and hardware to create truly unique windows and doors.</p>
                </div>
                <div className={styles.benefit}>
                  <h3>Architectural Expertise</h3>
                  <p>Marvin excels at historic reproductions and architecturally significant designs that complement Plano&apos;s diverse home styles.</p>
                </div>
              </div>
            </div>

            <div className={styles.faqSection}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqItem}>
                <h3>What are the differences between Marvin collections?</h3>
                <p>Marvin Signature offers the ultimate in customization and luxury. Marvin Elevate provides premium performance with fiberglass exteriors and wood interiors. Marvin Essential delivers quality and value with a streamlined selection of popular options.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How long does it take to receive custom Marvin products?</h3>
                <p>Custom Marvin windows and doors typically have lead times of 6 to 12 weeks depending on complexity and manufacturer workload. We provide accurate timelines during your consultation and coordinate delivery with your installation schedule.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Are Marvin windows worth the premium price?</h3>
                <p>For homeowners seeking the highest quality, unlimited customization, and architectural distinction, Marvin windows and doors represent an excellent investment. Their made-to-order approach ensures perfect fit and performance that standard products cannot match.</p>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <h2>Ready to Upgrade to Marvin?</h2>
              <p>Get a free consultation and estimate for Marvin windows and doors in Plano, TX.</p>
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
