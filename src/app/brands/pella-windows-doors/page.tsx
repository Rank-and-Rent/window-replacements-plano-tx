import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { SocialBar, ContactSection } from '@/components/footer'
import styles from '../brands.module.css'

export const metadata: Metadata = {
  title: 'Pella Windows & Doors Plano TX',
  description: 'Authorized Pella Windows & Doors dealer in Plano, TX. Premium windows with InsulShield technology. Professional installation. Call 945-207-3988.',
  keywords: 'Pella windows Plano TX, Pella doors, InsulShield windows, Pella dealer',
}

export default function PellaPage() {
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
              <li>Pella Windows & Doors</li>
            </ol>
          </div>
        </nav>

        <section 
          className={styles.hero}
          style={{ backgroundImage: 'url(/brands/pella-windows-plano-tx.jpg)' }}
        >
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Pella Window & Door Replacement in Plano, TX</h1>
            <p>Innovation Since 1925</p>
          </div>
        </section>

        {/* Prominent Brand Logo */}
        <section className={styles.brandLogoSection}>
          <div className={styles.brandLogoSectionContainer}>
            <div className={styles.brandLogoWrapper}>
              <div className={styles.brandLogoContent}>
                <img
                  src="/pella-windows-and-doors-plano-tx-logo.png"
                  alt="Pella Windows & Doors"
                  className={styles.brandLogoLarge}
                />
                <h2 className={styles.brandLogoTitle}>Authorized Pella Dealer</h2>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.description}>
              <h2>About Pella Windows & Doors</h2>
              <p>Pella has been an industry leader in window and door innovation since 1925. Renowned for their energy-efficient designs and customization options, Pella windows and doors feature advanced technologies like their proprietary InsulShield glass packages and innovative between-the-glass blinds and shades. From traditional double-hung and casement windows to elegant patio doors and entry systems, Pella products combine beauty, functionality, and lasting performance for Plano homes.</p>
            </div>

            <div className={styles.productCategories}>
              <h2>Pella Products We Install</h2>
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
              <h2>Why Choose Pella for Your Plano Home</h2>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefit}>
                  <h3>InsulShield Technology</h3>
                  <p>Pella&apos;s proprietary InsulShield glass packages provide exceptional energy efficiency specifically designed for hot climates like Plano.</p>
                </div>
                <div className={styles.benefit}>
                  <h3>Between-the-Glass Options</h3>
                  <p>Innovative blinds and shades sealed between glass panes stay dust-free and protected while offering privacy and light control.</p>
                </div>
                <div className={styles.benefit}>
                  <h3>Customization</h3>
                  <p>Extensive color, hardware, and style options ensure your Pella windows and doors perfectly match your Plano home&apos;s aesthetic.</p>
                </div>
                <div className={styles.benefit}>
                  <h3>Expert Installation</h3>
                  <p>Our Pella-certified installers ensure every product is installed to manufacturer specifications for optimal performance.</p>
                </div>
              </div>
            </div>

            <div className={styles.faqSection}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqItem}>
                <h3>What is Pella InsulShield technology?</h3>
                <p>InsulShield is Pella&apos;s advanced glass technology featuring multiple Low-E coatings and gas fills engineered for specific climate zones. For Plano, we recommend InsulShield options that maximize heat rejection during summer while maintaining clear views.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Are Pella windows worth the investment?</h3>
                <p>Pella windows offer excellent value through energy savings, durability, and home value enhancement. Their comprehensive warranties and quality construction typically result in decades of reliable performance with minimal maintenance.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How do Pella between-the-glass blinds work?</h3>
                <p>Pella&apos;s between-the-glass blinds and shades are sealed within the insulated glass unit, operated by magnetic controls. They remain dust-free, require no cleaning, and provide privacy without sacrificing window aesthetics.</p>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <h2>Ready to Upgrade to Pella?</h2>
              <p>Get a free consultation and estimate for Pella windows and doors in Plano, TX.</p>
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
