import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { ContactSection } from '@/components/footer'
import styles from '../windows.module.css'

export const metadata: Metadata = {
  title: 'Casement Window Replacement Plano TX | Maximum Ventilation',
  description: 'Premium casement windows in Plano, TX. Crank-out design for unobstructed views and superior airflow. Andersen, Pella & JELD-WEN. Call 945-207-3988.',
  keywords: 'casement windows Plano TX, crank out windows, replacement windows, modern windows Plano',
}

export default function CasementWindowsPage() {
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
              <li>Casement Windows</li>
            </ol>
          </div>
        </nav>

        <section className={styles.hero} style={{ backgroundImage: 'url(/windows/casement-windows-plano-tx.avif)' }}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Casement Window Replacement in Plano, TX</h1>
            <p>Unmatched Ventilation and Contemporary Elegance</p>
            <div className={styles.heroCta}>
              <Link href="/contact" className={styles.btnPrimary}>Get Free Estimate</Link>
              <a href="tel:945-207-3988" className={styles.btnSecondary}>Call 945-207-3988</a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <p>Casement windows represent the pinnacle of window ventilation technology. Hinged on one side and opening outward with a smooth crank mechanism, they capture and direct breezes into your Plano home with unmatched efficiency. Their expansive, unobstructed glass areas flood interiors with natural light while providing stunning views of your landscape. For homeowners seeking windows that combine contemporary aesthetics with practical functionality, casement windows deliver on every front.</p>
            </div>

            <div className={styles.section}>
              <h2>The Casement Advantage: Full-Width Ventilation</h2>
              <p>Unlike sliding or hung windows that open only partially, casement windows swing open completely—creating a full, unobstructed opening that captures every available breeze. This design proves especially valuable during Plano&apos;s pleasant spring and fall months when outdoor temperatures make air conditioning unnecessary. Position casement windows on adjacent walls to create cross-ventilation patterns that naturally cool your home. The outward-opening design also acts as a wind scoop, funneling breezes indoors even when prevailing winds don&apos;t blow directly toward your window opening. No other window style delivers comparable ventilation efficiency.</p>
            </div>

            <div className={styles.section}>
              <h2>Engineered for Superior Energy Performance</h2>
              <p>When closed, casement windows achieve the tightest seal of any operable window style. The crank mechanism pulls the sash firmly against the frame, compressing weatherstripping to create an air-tight barrier. This compression seal significantly outperforms the sliding seals found in double-hung or sliding windows. In Plano&apos;s climate, where air conditioning represents the largest portion of summer energy bills, this superior seal translates directly to lower cooling costs. The National Fenestration Rating Council consistently rates quality casement windows among the top performers for air infiltration resistance—a critical specification when selecting windows for Texas homes.</p>
            </div>

            <div className={styles.section}>
              <h2>Unobstructed Views and Maximum Daylight</h2>
              <p>Casement windows feature larger glass areas than comparable double-hung windows because they don&apos;t require a meeting rail in the center. This design maximizes your view and allows more natural light to flood your interiors. For Plano homes overlooking golf courses, greenbelt areas, or mature landscaping, casement windows frame these views like living artwork. The single sash design also simplifies the glass cleaning process—there are no rails or muntins to clean around. Many homeowners pair casement windows with picture windows to create dramatic window walls that blur the boundary between indoor and outdoor living spaces.</p>
            </div>

            <div className={styles.section}>
              <h2>Contemporary Aesthetics Meet Timeless Appeal</h2>
              <p>While casement windows work beautifully in traditional homes, they particularly complement contemporary and modern architectural styles popular in newer Plano neighborhoods. Their clean lines and minimal visual interruption appeal to homeowners who appreciate modern design principles. Floor-to-ceiling casement installations create stunning vertical elements that add architectural interest to otherwise plain facades. They also work exceptionally well in hard-to-reach locations like above kitchen sinks or in stairwell landings, where the convenient crank operation eliminates the need to reach or stretch to open windows.</p>
            </div>

            <div className={styles.section}>
              <h2>Enhanced Security Features</h2>
              <p>Casement windows provide exceptional security when closed. The hook-shaped lock embeds into the frame, making it nearly impossible to force open from outside. Many models feature multi-point locking systems that secure the window at multiple locations along the sash perimeter. This design proves far more resistant to break-in attempts than windows that merely have a latch holding two sashes together. For Plano homes in areas where security is a priority, casement windows offer peace of mind along with their other benefits. Impact-resistant glass options provide additional protection against severe weather and potential intruders.</p>
            </div>

            <div className={styles.section}>
              <h2>Ideal Applications Throughout Your Home</h2>
              <p>Casement windows excel in specific locations where other window styles struggle. They&apos;re perfect above kitchen sinks, where you can easily crank them open while standing at the counter. In bathrooms, they provide ventilation and privacy simultaneously—open the window wide while frosted or textured glass maintains your privacy. They work beautifully in master bedroom suites, where large casement or casement-awning combinations create luxurious spa-like atmospheres. Narrow casements fit perfectly in tight spaces like between bathtubs and shower enclosures or flanking fireplaces, maximizing natural light in areas where wider windows won&apos;t fit.</p>
            </div>

            <div className={styles.featuresGrid}>
              <h2>Features and Benefits</h2>
              <ul>
                <li>Swing open up to 90 degrees for full ventilation</li>
                <li>Tightest seal of any operable window type</li>
                <li>Easy crank operation ideal for hard-to-reach locations</li>
                <li>Larger glass area than comparable hung windows</li>
                <li>Unobstructed views with no center rail</li>
                <li>Multi-point locking for enhanced security</li>
                <li>Contemporary design complements modern architecture</li>
                <li>Available in left-hand and right-hand hinges</li>
                <li>Optional between-the-glass blinds (select models)</li>
                <li>Exceptional energy efficiency ratings</li>
              </ul>
            </div>

            <div className={styles.faqSection}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqItem}>
                <h3>Can casement windows be installed in windy areas?</h3>
                <p>Yes, but orientation matters. Install casement windows so they open away from prevailing winds—this prevents wind from catching the open sash like a sail. Your window consultant will help determine optimal hinge placement during the design consultation.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do casement windows interfere with window screens?</h3>
                <p>Casement windows use exterior screens that remain in place when the window opens. The screen mounts on the exterior and the window opens inward against it, or some mount on tracks. This design ensures you always have insect protection while enjoying ventilation.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Are casement windows more expensive than double-hung?</h3>
                <p>Casement windows typically cost slightly more than comparable double-hung windows due to their more complex hardware. However, their superior energy efficiency often offsets the initial price difference through lower utility bills over the window&apos;s lifetime.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How do I clean casement windows?</h3>
                <p>Casement windows are among the easiest to clean. Simply open the window fully and you can easily reach both sides from inside your home. Some models offer a removable sash feature that lets you bring the entire window inside for thorough cleaning.</p>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <h2>Ready to Upgrade Your Windows?</h2>
              <p>Get a free consultation and estimate for casement window replacement in Plano, TX.</p>
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
