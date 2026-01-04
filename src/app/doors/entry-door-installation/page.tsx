import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { ContactSection } from '@/components/footer'
import styles from '../doors.module.css'

export const metadata: Metadata = {
  title: 'Entry Door Installation Plano TX | Andersen, Pella, JELD-WEN, Marvin',
  description: 'Professional entry door installation in Plano, TX. Fiberglass, steel, and wood entry doors from top manufacturers. Enhanced security, energy efficiency, and curb appeal. Call 945-207-3988 for free estimate.',
  keywords: 'entry door installation Plano TX, front door replacement, Andersen doors, Pella doors, JELD-WEN doors, Marvin doors',
}

export default function EntryDoorPage() {
  const content = {
    title: 'Entry Door Replacement in Plano, TX',
    subtitle: 'Transform Your Home with a Beautiful, Secure Entry',
    heroImage: '/windows/double-hung-windows-plano-tx.avif',
  }

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumbs */}
        <nav className={styles.breadcrumbs}>
          <div className={styles.container}>
            <ol>
              <li><Link href="/">Home</Link></li>
              <li>/</li>
              <li><Link href="/doors">Doors</Link></li>
              <li>/</li>
              <li>Entry Door Installation</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero} style={{ backgroundImage: `url(${content.heroImage})` }}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>{content.title}</h1>
            <p>{content.subtitle}</p>
            <div className={styles.heroCta}>
              <Link href="/contact" className={styles.btnPrimary}>Get Free Estimate</Link>
              <a href="tel:945-207-3988" className={styles.btnSecondary}>Call 945-207-3988</a>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <p>Your entry door is more than just a functional barrier between your home and the outside world. It is the first impression visitors have of your Plano home, a critical security feature protecting your family and belongings, and a significant factor in your home&apos;s energy efficiency. A premium entry door from Andersen, Pella, JELD-WEN, or Marvin combines all three elements - stunning aesthetics, robust security, and superior insulation - while requiring minimal maintenance for decades.</p>
            </div>

            <div className={styles.section}>
              <h2>Materials That Match Your Plano Home and Lifestyle</h2>
              <p>The choice of entry door material profoundly impacts both performance and maintenance requirements. Fiberglass doors have surged in popularity across Plano for excellent reason - they resist warping, rotting, and rust while offering exceptional energy efficiency and realistic wood-grain textures. Many homeowners cannot distinguish quality fiberglass from real wood without touching it. Steel doors provide maximum security and excellent insulation at a competitive price point, though they require proper paint maintenance in Texas heat. Solid wood doors deliver unmatched natural beauty and traditional charm, perfect for historic Plano homes or luxury properties where authentic materials matter most.</p>
            </div>

            <div className={styles.section}>
              <h2>Security Features for Peace of Mind</h2>
              <p>Modern entry doors incorporate security technologies that would have seemed like science fiction just a decade ago. Today&apos;s premium doors feature reinforced steel frames, multi-point locking systems that engage at three or more points along the jamb, and impact-resistant glass that meets strict safety standards. The lock itself represents just one element of security - the frame, hinges, and door construction all contribute to break-in resistance. Three-inch screws anchor hinges deep into wall studs rather than just trim. Strike plates extend four or more inches with multiple fastening points.</p>
            </div>

            <div className={styles.section}>
              <h2>Energy Efficiency That Reduces Your Bills</h2>
              <p>Your entry door represents one of the largest penetrations in your home&apos;s thermal envelope, making it a critical factor in energy consumption. A poorly sealed or uninsulated door forces your HVAC system to work overtime during Plano&apos;s scorching summers and occasional winter freezes. Premium entry doors feature polyurethane foam cores that provide superior insulation compared to traditional hollow-core doors. Quality weatherstripping creates an airtight seal when closed. Our Plano customers consistently report noticeable reductions in drafts and energy costs after replacing old doors with modern high-performance units.</p>
            </div>

            {/* Features Grid */}
            <div className={styles.featuresGrid}>
              <h2>Features and Benefits</h2>
              <ul>
                <li>Fiberglass, steel, and wood material options</li>
                <li>Multi-point locking systems for enhanced security</li>
                <li>Energy-efficient foam core construction</li>
                <li>Andersen, Pella, JELD-WEN, and Marvin brands</li>
                <li>Customizable glass and hardware options</li>
                <li>Impact-resistant glass available</li>
                <li>Smart lock compatibility</li>
                <li>Weather-resistant finishes for Texas climate</li>
                <li>Sidelights and transom configurations</li>
                <li>Lifetime limited warranties on many models</li>
              </ul>
            </div>

            {/* FAQ Section */}
            <div className={styles.faqSection}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqItem}>
                <h3>How long does entry door installation take in Plano?</h3>
                <p>Most entry door installations in Plano, TX are completed in 4 to 8 hours. Complex installations with sidelights, transoms, or structural modifications may require a full day or more. We provide accurate timelines during your consultation and work efficiently to minimize disruption.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do I need a permit to replace my entry door in Plano?</h3>
                <p>In most cases, replacing an entry door in an existing opening does not require a permit in Plano, TX. However, if you are changing the size of the opening or making structural modifications, permits may be necessary. We help navigate local building requirements and coordinate with Plano building officials when needed.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What is the best entry door material for Texas weather?</h3>
                <p>Fiberglass and steel doors perform exceptionally well in Plano, TX climate. Fiberglass resists warping and cracking in temperature extremes while requiring minimal maintenance. Steel offers maximum security and excellent insulation. Both outperform wood in terms of weather resistance, though premium wood doors with proper finishes also perform well with regular maintenance.</p>
              </div>
            </div>

            {/* CTA */}
            <div className={styles.ctaBox}>
              <h2>Ready to Transform Your Entry?</h2>
              <p>Get a free consultation and estimate for entry door installation in Plano, TX.</p>
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
