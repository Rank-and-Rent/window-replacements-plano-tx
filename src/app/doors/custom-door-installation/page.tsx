import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { SocialBar, ContactSection } from '@/components/footer'
import styles from '../doors.module.css'

export const metadata: Metadata = {
  title: 'Custom Door Installation Plano TX | Bespoke Door Solutions',
  description: 'Professional custom door installation in Plano, TX. Fully customized doors designed to your specifications. Unique sizes, styles, and finishes. Call 945-207-3988.',
  keywords: 'custom door installation Plano TX, custom doors, bespoke doors, unique door designs, specialty doors',
}

export default function CustomDoorPage() {
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
              <li>Custom Door Installation</li>
            </ol>
          </div>
        </nav>

        <section className={styles.hero} style={{ backgroundImage: 'url(/windows/double-hung-windows-plano-tx.avif' }}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Custom Door Replacement in Plano, TX</h1>
            <p>Your Vision, Expertly Crafted</p>
            <div className={styles.heroCta}>
              <Link href="/contact" className={styles.btnPrimary}>Get Free Estimate</Link>
              <a href="tel:945-207-3988" className={styles.btnSecondary}>Call 945-207-3988</a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <p>Sometimes standard door sizes and styles simply do not meet your needs. Whether you have a unique architectural requirement, an oversized opening, a historic home requiring period-appropriate designs, or simply a specific vision for your Plano home&apos;s entrance, custom doors provide the solution. Our partnerships with Andersen, Pella, JELD-WEN, and Marvin give us access to extensive customization options that bring your ideas to life.</p>
            </div>

            <div className={styles.section}>
              <h2>Unlimited Design Possibilities</h2>
              <p>Custom doors open a world of design possibilities. Choose from virtually unlimited combinations of materials, finishes, glass options, hardware, and decorative elements. Create doors that perfectly match your home&apos;s architectural style, whether that is modern minimalist, traditional elegance, rustic farmhouse, or contemporary transitional. Our design consultants help you navigate options and visualize the final result.</p>
            </div>

            <div className={styles.section}>
              <h2>Non-Standard Sizes and Shapes</h2>
              <p>Older Plano homes and custom-built residences often feature non-standard door openings that standard doors cannot accommodate. Custom doors are built to exact specifications, ensuring perfect fit regardless of opening size or shape. Arched tops, extra-tall entries, extra-wide double doors, and unusual shapes are all achievable with custom manufacturing.</p>
            </div>

            <div className={styles.section}>
              <h2>Historic and Architectural Accuracy</h2>
              <p>For historic homes or new construction designed in traditional styles, achieving architectural accuracy requires attention to period-appropriate details. Custom doors can replicate historic panel configurations, molding profiles, glass patterns, and hardware styles while incorporating modern energy efficiency and security features. The result honors your home&apos;s heritage while meeting contemporary performance standards.</p>
            </div>

            <div className={styles.featuresGrid}>
              <h2>Customization Options</h2>
              <ul>
                <li>Non-standard sizes and shapes</li>
                <li>Custom panel configurations</li>
                <li>Specialty glass options</li>
                <li>Unique hardware selections</li>
                <li>Custom wood species and stains</li>
                <li>Period-accurate reproductions</li>
                <li>Integrated sidelights and transoms</li>
                <li>Matching screen and storm doors</li>
                <li>ADA-compliant configurations</li>
                <li>Commercial-grade options</li>
              </ul>
            </div>

            <div className={styles.faqSection}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqItem}>
                <h3>How long does custom door manufacturing take?</h3>
                <p>Custom door lead times typically range from 4 to 12 weeks depending on complexity, materials, and manufacturer workload. Standard custom sizes from premium brands are often available faster than fully bespoke designs. We provide accurate timelines during your consultation.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Are custom doors more expensive than standard doors?</h3>
                <p>Yes, custom doors typically cost more than standard sizes due to additional manufacturing requirements. However, the premium varies significantly based on the level of customization. Many custom options add only a modest premium while others require significant investment. We provide detailed pricing during your consultation.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I see my custom door before it is manufactured?</h3>
                <p>Yes, we use detailed drawings and digital renderings to help you visualize your custom door before manufacturing begins. For complex projects, manufacturers may provide physical samples of finishes, glass options, and hardware. We ensure you are completely satisfied with the design before production begins.</p>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <h2>Ready to Create Something Unique?</h2>
              <p>Get a free consultation and estimate for custom door installation in Plano, TX.</p>
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
