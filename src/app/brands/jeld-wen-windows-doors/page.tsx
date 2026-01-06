import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { ContactSection } from '@/components/footer'
import styles from '../brands.module.css'

export const metadata: Metadata = {
  title: 'JELD-WEN Windows & Doors Plano TX',
  description: 'Authorized JELD-WEN Windows & Doors dealer in Plano, TX. Quality windows and doors with AuraLast protection. Professional installation. Call 945-207-3988.',
  keywords: 'JELD-WEN windows Plano TX, JELD-WEN doors, AuraLast windows, JELD-WEN dealer',
  alternates: {
    canonical: 'https://windowreplacementplano.com/brands/jeld-wen-windows-doors',
  },
}

export default function JeldWenPage() {
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
              <li>JELD-WEN Windows & Doors</li>
            </ol>
          </div>
        </nav>

        <section 
          className={styles.hero}
          style={{ backgroundImage: 'url(/brands/jeld-wen-windows-plano-tx.jpg)' }}
        >
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>JELD-WEN Window & Door Replacement in Plano, TX</h1>
            <p>Quality and Value Since 1960</p>
          </div>
        </section>

        {/* Prominent Brand Logo */}
        <section className={styles.brandLogoSection}>
          <div className={styles.brandLogoSectionContainer}>
            <div className={styles.brandLogoWrapper}>
              <div className={styles.brandLogoContent}>
                <img
                  src="/jeld-wen-windows-and-doors-plano-tx-logo.png"
                  alt="Jeld-Wen Windows & Doors"
                  className={styles.brandLogoLarge}
                />
                <h2 className={styles.brandLogoTitle}>Authorized JELD-WEN Dealer</h2>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.description}>
              <h2>About JELD-WEN Windows & Doors</h2>
              <p>JELD-WEN is a global leader in window and door manufacturing, offering reliable and affordable solutions for residential applications. With a focus on quality craftsmanship and energy efficiency, JELD-WEN provides a wide selection of vinyl, wood, and aluminum-clad windows, as well as interior and exterior doors. Their AuraLast wood protection technology and Low-E glass options make JELD-WEN products an excellent choice for Plano homeowners seeking value and performance.</p>
            </div>

            <div className={styles.productCategories}>
              <h2>JELD-WEN Products We Install</h2>
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
              <h2>Why Choose JELD-WEN for Your Plano Home</h2>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefit}>
                  <h3>AuraLast Protection</h3>
                  <p>JELD-WEN&apos;s exclusive AuraLast wood treatment provides superior protection against rot, water damage, and insect infestation in Plano&apos;s climate.</p>
                </div>
                <div className={styles.benefit}>
                  <h3>Exceptional Value</h3>
                  <p>JELD-WEN offers premium features and quality construction at competitive price points, maximizing your investment in your Plano home.</p>
                </div>
                <div className={styles.benefit}>
                  <h3>Wide Selection</h3>
                  <p>From budget-friendly vinyl to premium wood and aluminum-clad options, JELD-WEN offers solutions for every style and budget.</p>
                </div>
                <div className={styles.benefit}>
                  <h3>Certified Installation</h3>
                  <p>Our JELD-WEN-trained installers ensure proper installation for maximum performance and warranty compliance.</p>
                </div>
              </div>
            </div>

            <div className={styles.faqSection}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqItem}>
                <h3>What is JELD-WEN AuraLast technology?</h3>
                <p>AuraLast is JELD-WEN&apos;s proprietary wood treatment that protects against rot, water absorption, and termite damage. It penetrates the entire wood piece for protection that lasts the life of the product.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Are JELD-WEN windows good quality?</h3>
                <p>Yes, JELD-WEN windows are known for excellent quality at competitive prices. They meet or exceed ENERGY STAR requirements and are backed by comprehensive warranties. Their diverse product lines serve both budget-conscious and premium-seeking homeowners.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How do JELD-WEN prices compare to other brands?</h3>
                <p>JELD-WEN typically offers more competitive pricing than premium brands like Andersen and Pella while maintaining high quality standards. They provide excellent value for homeowners seeking quality windows and doors at moderate price points.</p>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <h2>Ready to Upgrade to JELD-WEN?</h2>
              <p>Get a free consultation and estimate for JELD-WEN windows and doors in Plano, TX.</p>
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
