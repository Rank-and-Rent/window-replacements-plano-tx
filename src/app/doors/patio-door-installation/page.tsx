import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { ContactSection } from '@/components/footer'
import styles from '../doors.module.css'

export const metadata: Metadata = {
  title: 'Patio Door Installation Plano TX | Sliding & Hinged Patio Doors',
  description: 'Professional patio door installation in Plano, TX. Sliding and hinged patio doors from Andersen, Pella, JELD-WEN, and Marvin. Seamless indoor-outdoor living. Call 945-207-3988.',
  keywords: 'patio door installation Plano TX, sliding patio doors, hinged patio doors, Andersen doors, Pella doors',
}

export default function PatioDoorPage() {
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
              <li>Patio Door Installation</li>
            </ol>
          </div>
        </nav>

        <section className={styles.hero} style={{ backgroundImage: 'url(/windows/double-hung-windows-plano-tx.avif' }}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Patio Door Replacement in Plano, TX</h1>
            <p>Create Seamless Indoor-Outdoor Living Spaces</p>
            <div className={styles.heroCta}>
              <Link href="/contact" className={styles.btnPrimary}>Get Free Estimate</Link>
              <a href="tel:945-207-3988" className={styles.btnSecondary}>Call 945-207-3988</a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <p>Transform your Plano home with beautiful patio doors that blur the line between indoor and outdoor living. Whether you prefer classic sliding doors for space efficiency or elegant hinged French-style patio doors for a grand entrance to your backyard, our premium selections from Andersen, Pella, JELD-WEN, and Marvin offer the perfect solution for your lifestyle.</p>
            </div>

            <div className={styles.section}>
              <h2>Sliding vs. Hinged Patio Doors</h2>
              <p>Sliding patio doors remain the most popular choice for Plano homeowners seeking to maximize natural light and views without sacrificing floor space. Modern sliding doors glide effortlessly on precision rollers and feature multi-point locking systems for security. Hinged patio doors, including French-style configurations, offer a more traditional aesthetic and wider opening for furniture moves or entertaining. Both styles are available in two, three, or four-panel configurations to suit any opening size.</p>
            </div>

            <div className={styles.section}>
              <h2>Energy Efficiency for Texas Climate</h2>
              <p>Patio doors represent a significant portion of your home&apos;s glazing, making energy efficiency crucial for Plano&apos;s hot summers. Our patio doors feature Low-E coatings that reflect heat while allowing natural light, argon gas fills between panes for superior insulation, and warm-edge spacers that minimize condensation. Multi-chamber frames provide additional thermal breaks, keeping your home comfortable while reducing energy bills.</p>
            </div>

            <div className={styles.section}>
              <h2>Security Without Compromise</h2>
              <p>Modern patio doors incorporate robust security features including multi-point locking mechanisms, reinforced frames, and optional impact-resistant glass. Foot-operated locks, keyed locks, and smart lock compatibility provide multiple layers of security. Our installation team ensures proper anchoring and adjustment for reliable operation and maximum security.</p>
            </div>

            <div className={styles.featuresGrid}>
              <h2>Features and Benefits</h2>
              <ul>
                <li>Sliding and hinged configurations available</li>
                <li>Multi-panel options for wide openings</li>
                <li>Low-E glass with argon gas fill</li>
                <li>Multi-point locking systems</li>
                <li>Smooth-gliding roller systems</li>
                <li>Built-in blinds options available</li>
                <li>ADA-compliant threshold options</li>
                <li>Custom sizes and finishes</li>
                <li>Screen door options included</li>
                <li>Lifetime warranties available</li>
              </ul>
            </div>

            <div className={styles.faqSection}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqItem}>
                <h3>What size patio door do I need?</h3>
                <p>Patio door sizes range from 5 feet to 16 feet or more in multi-panel configurations. Standard sizes include 6-foot and 8-foot widths. During your consultation, we measure your existing opening and discuss options that maximize your view while meeting structural requirements.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How long does patio door installation take?</h3>
                <p>Most patio door installations in Plano are completed in one day. Larger multi-panel systems or installations requiring structural modifications may require additional time. We provide accurate timelines during your estimate.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I add a patio door where there is currently a wall?</h3>
                <p>Yes, we can create new patio door openings in existing walls. This requires structural assessment, potential header installation, and permit coordination. We handle all aspects of the project from engineering to final inspection.</p>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <h2>Ready to Enhance Your Outdoor Living?</h2>
              <p>Get a free consultation and estimate for patio door installation in Plano, TX.</p>
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
