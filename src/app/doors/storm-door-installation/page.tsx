import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { ContactSection } from '@/components/footer'
import styles from '../doors.module.css'

export const metadata: Metadata = {
  title: 'Storm Door Installation Plano TX | Protection & Energy Efficiency',
  description: 'Professional storm door installation in Plano, TX. Protective storm doors for added security and energy efficiency. Multiple styles available. Call 945-207-3988.',
  keywords: 'storm door installation Plano TX, storm doors, screen doors, security storm doors, energy efficient storm doors',
}

export default function StormDoorPage() {
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
              <li>Storm Door Installation</li>
            </ol>
          </div>
        </nav>

        <section className={styles.hero} style={{ backgroundImage: 'url(/windows/double-hung-windows-plano-tx.avif' }}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Storm Door Replacement in Plano, TX</h1>
            <p>Protection, Ventilation, and Energy Savings</p>
            <div className={styles.heroCta}>
              <Link href="/contact" className={styles.btnPrimary}>Get Free Estimate</Link>
              <a href="tel:945-207-3988" className={styles.btnSecondary}>Call 945-207-3988</a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <p>Storm doors provide an excellent layer of protection for your entry door while offering ventilation options and improved energy efficiency. For Plano homeowners, a quality storm door extends the life of your primary entry door by shielding it from sun, rain, and wind while allowing you to enjoy fresh air during pleasant Texas weather. Modern storm doors combine functionality with attractive designs that complement your home&apos;s aesthetic.</p>
            </div>

            <div className={styles.section}>
              <h2>Full-View, Ventilating, and Security Options</h2>
              <p>Storm doors come in three main categories. Full-view doors maximize light with a single large glass panel that can be replaced with a screen for ventilation. Ventilating doors feature retractable screens that slide up or down, allowing you to switch between glass and screen without removing anything. Security storm doors incorporate reinforced frames, heavy-duty screens, and multiple locking points for enhanced protection.</p>
            </div>

            <div className={styles.section}>
              <h2>Energy Efficiency Benefits</h2>
              <p>A well-installed storm door creates an insulating air pocket between itself and your entry door, reducing heat transfer and improving overall energy efficiency. In Plano&apos;s hot summers, this buffer zone helps keep conditioned air inside while blocking heat gain. Low-E glass options further enhance efficiency by reflecting heat while allowing visible light to pass through.</p>
            </div>

            <div className={styles.section}>
              <h2>Extending Entry Door Life</h2>
              <p>Direct sun exposure accelerates fading and deterioration of entry door finishes. Storm doors shield your primary door from UV rays, rain, and wind-driven debris, significantly extending its life and reducing maintenance requirements. This protection is especially valuable for wood entry doors that require regular refinishing when exposed to the elements.</p>
            </div>

            <div className={styles.featuresGrid}>
              <h2>Features and Benefits</h2>
              <ul>
                <li>Full-view, ventilating, and security styles</li>
                <li>Retractable screen options</li>
                <li>Low-E glass available</li>
                <li>Aluminum and steel frame options</li>
                <li>Multiple color choices</li>
                <li>Self-storing screens and glass</li>
                <li>Keyed lock sets included</li>
                <li>Pneumatic closers for gentle closing</li>
                <li>Custom sizes available</li>
                <li>Easy DIY screen replacement</li>
              </ul>
            </div>

            <div className={styles.faqSection}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqItem}>
                <h3>Do I need a storm door if I have a new entry door?</h3>
                <p>While not strictly necessary, storm doors provide valuable protection even for new entry doors. They extend your door&apos;s life, improve energy efficiency, and provide ventilation options. The investment often pays for itself through extended entry door life and energy savings.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What size storm door do I need?</h3>
                <p>Storm doors are available in standard sizes from 30 to 36 inches wide and 80 to 84 inches tall. We measure your existing door frame precisely to ensure proper fit. Custom sizes are available for non-standard openings.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How long does storm door installation take?</h3>
                <p>Most storm door installations in Plano are completed in 1 to 2 hours. The process includes mounting the Z-bar frame, installing the door, adjusting closers and latches, and ensuring proper operation. We leave your entryway clean and your new storm door fully functional.</p>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <h2>Ready to Protect Your Entry?</h2>
              <p>Get a free consultation and estimate for storm door installation in Plano, TX.</p>
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
