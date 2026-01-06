import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { ContactSection } from '@/components/footer'
import styles from '../materials.module.css'

export const metadata: Metadata = {
  title: 'Fibrex Windows Replacement Plano TX | Andersen Premium Composite',
  description: 'Andersen Fibrex composite replacement windows in Plano, TX. Premium performance with wood-like beauty. Energy-efficient and durable. Everything priced including installation.',
  keywords: 'Fibrex windows Plano TX, Andersen Fibrex windows, composite windows, premium replacement windows, energy efficient Fibrex windows, durable composite windows',
}

export default function FibrexWindowsPage() {
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
              <li>Fibrex Windows</li>
            </ol>
          </div>
        </nav>

        <section className={styles.hero} style={{ backgroundImage: 'url(/window-types/fibrex-plano-tx.jpg)' }}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Fibrex Windows Replacement in Plano, TX</h1>
            <p>Andersen&apos;s Premium Composite Technology for Ultimate Performance</p>
            <div className={styles.heroCta}>
              <Link href="/contact" className={styles.btnPrimary}>Get Free Estimate</Link>
              <a href="tel:945-207-3988" className={styles.btnSecondary}>Call 945-207-3988</a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <p>Plano homeowners seeking the ultimate in window performance discover that Andersen&apos;s Fibrex composite material perfectly balances traditional wood aesthetics with modern durability. As a major tech hub with professional communities, Plano attracts homeowners who appreciate Fibrex windows&apos; combination of wood-like beauty, exceptional strength, and superior energy efficiency. Whether in modern developments or contemporary developments, Fibrex windows provide the premium quality and lasting performance that Plano homeowners demand. With the area&apos;s mix of traditional and modern architecture, Fibrex windows offer versatile design that enhances Plano&apos;s architectural heritage.</p>
            </div>

            <div className={styles.section}>
              <h2>Advanced Composite Construction for Plano Durability</h2>
              <p>Fibrex represents Andersen&apos;s revolutionary approach to window frame technology, blending wood fibers with advanced polymers to create a material that outperforms both traditional wood and modern synthetics. The wood fibers provide natural insulation and aesthetic appeal, while the polymer matrix delivers exceptional strength and moisture resistance. Unlike traditional wood that warps in Plano&apos;s humidity or vinyl that lacks structural integrity, Fibrex maintains perfect dimensional stability year-round. The material&apos;s advanced formulation resists UV degradation from intense Texas sun, ensuring Fibrex windows maintain their performance and appearance indefinitely in Plano&apos;s challenging climate.</p>
            </div>

            <div className={styles.section}>
              <h2>Authentic Wood Aesthetics Without Maintenance Burdens</h2>
              <p>Fibrex windows capture the natural warmth and character of real wood while eliminating the maintenance headaches that plague traditional wood windows in Plano. The material accepts stains and finishes that replicate authentic wood tones, from golden oak to deep walnut, creating seamless continuity with Plano&apos;s historic architecture. Unlike wood windows that require annual painting and sealing in Plano&apos;s climate, Fibrex maintains its finish indefinitely without fading or weathering. Homeowners can enjoy the traditional appeal of wood windows—the natural grain patterns, the tactile warmth—without the time, expense, and environmental impact of maintaining authentic wood in Plano&apos;s demanding environment.</p>
            </div>

            <div className={styles.section}>
              <h2>Structural Superiority for Plano Homes</h2>
              <p>Fibrex&apos;s composite construction delivers strength that surpasses both wood and vinyl alternatives, making it ideal for Plano&apos;s diverse housing stock. The material resists impact damage from severe weather, hail, or accidental impacts far better than traditional wood. Fibrex frames maintain perfect alignment and smooth operation even in Plano&apos;s temperature extremes, where wood might warp and vinyl might become brittle. The material&apos;s dimensional stability ensures weatherstripping maintains perfect contact year-round, preventing air infiltration that compromises energy efficiency. For Plano homeowners who demand quality and longevity, Fibrex provides the structural integrity required for windows that perform flawlessly in Texas weather.</p>
            </div>

            <div className={styles.section}>
              <h2>Energy Performance That Saves in Plano Climate</h2>
              <p>Fibrex&apos;s unique material properties create exceptional thermal performance that delivers measurable savings in Plano&apos;s hot climate. The wood fiber content provides natural insulation, while the polymer matrix prevents heat conduction, resulting in U-factors that rival premium fiberglass. When combined with Andersen&apos;s advanced multi-pane insulated glass, Fibrex windows can reduce heating and cooling costs by 30-40% compared to older windows. The material&apos;s stability ensures optimal weatherstripping performance year-round, maintaining energy efficiency even during Plano&apos;s dramatic temperature swings. Many Fibrex window configurations qualify for energy rebates, making them an economical choice despite their premium positioning.</p>
            </div>

            <div className={styles.section}>
              <h2>Design Flexibility for Plano Architecture</h2>
              <p>Fibrex&apos;s workability allows it to be formed into virtually any window style and configuration, making it ideal for Plano&apos;s architectural diversity. The material can be stained to match traditional wood tones for historic Plano homes or finished in contemporary colors for modern developments. Fibrex accommodates complex custom designs that would be difficult with other materials, from arched windows in historic restorations to large fixed panels in contemporary architecture. The material&apos;s strength enables innovative applications while maintaining the wood-like aesthetics that Plano homeowners value. Whether preserving architectural heritage or embracing modern design, Fibrex provides the versatility required in Plano&apos;s diverse real estate market.</p>
            </div>

            <div className={styles.section}>
              <h2>Environmental Responsibility and Longevity</h2>
              <p>Fibrex represents a sustainable approach to window manufacturing that resonates with Plano&apos;s growing environmental consciousness. The wood fiber content comes from responsibly harvested sources, and the advanced polymer technology reduces the environmental impact compared to traditional wood treated with chemical preservatives. Fibrex windows require no toxic sealants or paints, maintaining their appearance naturally. The exceptional longevity means fewer replacements over time, reducing material consumption and landfill impact. For environmentally aware Plano homeowners, Fibrex windows provide premium performance with a significantly lower ecological footprint than traditional wood windows, supporting the city&apos;s commitment to sustainable development.</p>
            </div>

            <div className={styles.featuresGrid}>
              <h2>Features and Benefits</h2>
              <ul>
                <li>Proprietary composite material technology</li>
                <li>Wood-like beauty without maintenance</li>
                <li>Superior strength and impact resistance</li>
                <li>Exceptional dimensional stability</li>
                <li>Advanced energy efficiency</li>
                <li>Resists rot, mold, and moisture</li>
                <li>25+ year manufacturer warranties</li>
                <li>Fusion-welded corner construction</li>
                <li>Available in unlimited wood tones</li>
                <li>Environmentally responsible manufacturing</li>
              </ul>
            </div>

            <div className={styles.faqSection}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqItem}>
                <h3>What makes Fibrex different from regular wood windows?</h3>
                <p>Fibrex is a composite material that combines wood fibers with polymers, offering wood-like beauty without warping, rotting, or requiring maintenance. It maintains perfect dimensions year-round and resists moisture damage that destroys traditional wood.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do Fibrex windows look like real wood?</h3>
                <p>Yes, Fibrex windows can be finished to look exactly like real wood, including staining and painting to match any wood tone. The wood-grain textures are virtually indistinguishable from authentic wood.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How long do Fibrex windows last in Plano?</h3>
                <p>Fibrex windows are engineered to last 25-30 years or more with proper care. The composite material resists degradation and maintains its performance indefinitely, unlike wood that eventually rots or vinyl that may crack.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Are Fibrex windows energy efficient?</h3>
                <p>Absolutely. Fibrex&apos;s composite construction provides excellent insulation, and when combined with Andersen&apos;s advanced glass packages, Fibrex windows can reduce energy costs by 35-45% in Plano&apos;s climate.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do Fibrex windows require maintenance?</h3>
                <p>Fibrex windows require minimal maintenance—just occasional cleaning. They never need painting, staining, or sealing, and they resist fading, cracking, moisture damage, and insect infestation.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How much do Fibrex windows cost with installation?</h3>
                <p>Fibrex window costs with installation vary by style and features. Everything is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to $3500 per window depending on frame material. We do not sell windows without installation.</p>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <h2>Ready to Upgrade Your Windows?</h2>
              <p>Get a free consultation and estimate for Fibrex window replacement in Plano, TX.</p>
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
