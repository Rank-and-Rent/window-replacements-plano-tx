import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { ContactSection } from '@/components/footer'
import styles from '../windows.module.css'

export const metadata: Metadata = {
  title: 'Double-Hung Window Replacement Plano TX | Expert Installation',
  description: 'Professional double-hung window installation in Plano, TX. Tilt-in cleaning, superior ventilation, and classic style. Andersen, Pella & JELD-WEN. Call 945-207-3988 for free estimate.',
  keywords: 'double hung windows Plano TX, replacement windows, tilt-in windows, window installation Plano',
}

export default function DoubleHungWindowsPage() {
  return (
    <>
      <Header />
      <main>
        <nav className={styles.breadcrumbs}>
          <div className={styles.container}>
            <ol>
              <li><Link href="/">Home</Link></li>
              <li>/</li>
              <li><Link href="/windows">Windows</Link></li>
              <li>/</li>
              <li>Double-Hung Windows</li>
            </ol>
          </div>
        </nav>

        <section className={styles.hero} style={{ backgroundImage: 'url(/windows/double-hung-windows-plano-tx.avif)' }}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Double-Hung Window Replacement in Plano, TX</h1>
            <p>Classic Design Meets Modern Performance</p>
            <div className={styles.heroCta}>
              <Link href="/contact" className={styles.btnPrimary}>Get Free Estimate</Link>
              <a href="tel:945-207-3988" className={styles.btnSecondary}>Call 945-207-3988</a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <p>Double-hung windows represent the perfect marriage of traditional aesthetics and contemporary functionality. As Plano&apos;s most popular window style, they grace both historic homes and modern new construction throughout the Dallas-Fort Worth metroplex. Their timeless appeal lies not just in their classic appearance, but in their remarkable versatility and ease of maintenance.</p>
            </div>

            <div className={styles.section}>
              <h2>Why Plano Homeowners Choose Double-Hung Windows</h2>
              <p>The double-hung window has remained a staple of American architecture for centuries, and for good reason. Unlike single-hung windows, both the upper and lower sashes operate independently, providing superior ventilation control. When you open both sashes simultaneously, you harness natural convection—warm air escapes through the top while cool air enters through the bottom, creating efficient air circulation without running your HVAC system. This feature becomes particularly valuable during Plano&apos;s pleasant spring and fall months when outdoor temperatures hover in that perfect range.</p>
            </div>

            <div className={styles.section}>
              <h2>Tilt-In Technology: A Game-Changer for Texas Homeowners</h2>
              <p>Modern double-hung windows feature revolutionary tilt-in sashes that have transformed window maintenance from a precarious outdoor chore into a safe, indoor task. Simply release the sash locks and tilt the window inward to clean both sides from inside your home. For second-story windows in Plano&apos;s multi-level homes, this feature isn&apos;t just convenient—it&apos;s a safety essential. No more ladders, no more hiring window cleaners, no more water spots you can&apos;t quite reach. The tilt-in mechanism also provides easy access for seasonal weatherstripping checks, ensuring your windows maintain their energy efficiency year after year.</p>
            </div>

            <div className={styles.section}>
              <h2>Energy Efficiency That Pays for Itself</h2>
              <p>Today&apos;s double-hung windows bear little resemblance to their predecessors. Modern iterations feature Low-E glass coatings that reflect infrared heat while allowing visible light to pass through, multi-chambered vinyl or fiberglass frames that break thermal bridges, and triple weatherstripping systems that seal out drafts. In Plano&apos;s climate—where summer temperatures regularly exceed 100°F—these features translate directly to lower cooling costs. Our customers typically report 15-25% reductions in their energy bills after replacing old windows with modern double-hung units from Andersen, Pella, or JELD-WEN.</p>
            </div>

            <div className={styles.section}>
              <h2>Architectural Versatility Across Home Styles</h2>
              <p>Whether your Plano home features Colonial Revival architecture, Craftsman styling, or contemporary design, double-hung windows adapt beautifully. Traditional homes benefit from true divided lite options that replicate historic muntins, while modern residences can embrace clean, uninterrupted glass for maximum views. The symmetrical design complements virtually any facade, and the vertical proportions naturally draw the eye upward, making rooms feel more spacious. We&apos;ve installed double-hung windows in everything from 1920s bungalows in downtown Plano to brand-new builds in the western suburbs.</p>
            </div>

            <div className={styles.section}>
              <h2>Material Options for Every Budget</h2>
              <p>Double-hung windows come in an array of materials, each with distinct advantages. Vinyl offers the best value with virtually no maintenance and excellent energy efficiency. Wood provides unmatched beauty and traditional charm, perfect for historic preservation projects. Fiberglass delivers superior strength and stability across Texas&apos;s dramatic temperature swings. Wood-clad options combine a durable exterior with a beautiful wood interior. Our experienced consultants will help you weigh factors like budget, maintenance preferences, architectural requirements, and performance needs to select the ideal material for your Plano home.</p>
            </div>

            <div className={styles.section}>
              <h2>Professional Installation Makes the Difference</h2>
              <p>A premium window performs only as well as its installation. Our certified installers follow rigorous protocols established by the National Fenestration Rating Council and each manufacturer. We begin by carefully removing old windows and inspecting the rough opening for rot, settling, or structural issues. The opening is leveled, squared, and properly flashed before the new window is set. We use low-expansion foam insulation to fill gaps without bowing the frame—a critical step that many installers rush or skip entirely. Every window is tested for proper operation and air infiltration before we complete the job. This meticulous approach is why our installations are backed by comprehensive warranties covering both the windows and our workmanship.</p>
            </div>

            <div className={styles.featuresGrid}>
              <h2>Features and Benefits</h2>
              <ul>
                <li>Both sashes operate independently for flexible ventilation</li>
                <li>Tilt-in design for effortless cleaning from inside</li>
                <li>Compatible with screens on exterior or interior mounting</li>
                <li>Available in numerous colors and finishes</li>
                <li>Optional between-the-glass blinds (Pella)</li>
                <li>Historic replication options for preservation projects</li>
                <li>Impact-resistant glass available for security</li>
                <li>Triple-pane options for maximum sound reduction</li>
                <li>ENERGY STAR certified models available</li>
                <li>Lifetime limited warranties on frames and sashes</li>
              </ul>
            </div>

            <div className={styles.faqSection}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqItem}>
                <h3>How long do double-hung windows last?</h3>
                <p>Quality double-hung windows from Andersen, Pella, or JELD-WEN typically last 20-30 years with proper maintenance. Vinyl and fiberglass units often last even longer. Our installed windows come with lifetime warranties on many components.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I replace just one window, or do I need to replace them all?</h3>
                <p>You can absolutely replace windows individually, though many Plano homeowners choose to replace all windows on one elevation for aesthetic consistency. Replacing all at once often results in volume discounts and a single installation period.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What&apos;s the difference between new construction and replacement windows?</h3>
                <p>New construction windows include a nail fin for installation during building construction. Replacement windows (also called retrofit windows) are designed to fit into existing window openings without disturbing the interior or exterior walls—perfect for occupied homes.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How do I know when my windows need replacing?</h3>
                <p>Common signs include difficulty opening or closing, visible gaps or drafts, condensation between panes, rotting frames, high energy bills, and excessive outside noise. If your windows are more than 15-20 years old, replacement is likely a smart investment.</p>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <h2>Ready to Upgrade Your Windows?</h2>
              <p>Get a free consultation and estimate for double-hung window replacement in Plano, TX.</p>
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
