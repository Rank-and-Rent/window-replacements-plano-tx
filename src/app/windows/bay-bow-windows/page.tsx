import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { ContactSection } from '@/components/footer'
import styles from '../windows.module.css'

export const metadata: Metadata = {
  title: 'Bay & Bow Window Replacement Plano TX | Architectural Elegance',
  description: 'Custom bay and bow windows in Plano, TX. Add space and drama to your home. Andersen, Pella & JELD-WEN. Expert installation. Call 945-207-3988.',
  keywords: 'bay windows Plano TX, bow windows, bay window installation, architectural windows Texas',
}

export default function BayBowWindowsPage() {
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
              <li>Bay & Bow Windows</li>
            </ol>
          </div>
        </nav>

        <section className={styles.hero} style={{ backgroundImage: 'url(/windows/bay-bow-windows-plano-tx.jpg)' }}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Bay & Bow Window Replacement in Plano, TX</h1>
            <p>Transform Walls into Architectural Statements</p>
            <div className={styles.heroCta}>
              <Link href="/contact" className={styles.btnPrimary}>Get Free Estimate</Link>
              <a href="tel:945-207-3988" className={styles.btnSecondary}>Call 945-207-3988</a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.intro}>
              <p>Bay and bow windows don&apos;t simply occupy walls—they extend beyond them, creating alcoves that add both physical space and architectural drama to Plano homes. These multi-window combinations project outward from your home&apos;s facade, providing panoramic views, abundant natural light, and distinctive curb appeal that makes your home stand out in any neighborhood. Beyond their aesthetic impact, they create functional spaces perfect for reading nooks, breakfast areas, or plant displays.</p>
            </div>

            <div className={styles.section}>
              <h2>Understanding Bay vs. Bow Window Configurations</h2>
              <p>While often mentioned together, bay and bow windows feature distinct designs. Bay windows typically consist of three windows—a large center picture window flanked by smaller double-hung or casement windows at 30-45 degree angles. This angular configuration creates a polygonal projection with defined corners. Bow windows comprise four or more windows (often five or six) arranged in a gentle curve, creating a rounded projection with softer lines. Both styles expand interior space and provide commanding views, but bay windows offer a more traditional appearance while bow windows lean toward elegant sophistication. Plano homeowners often choose bay windows for kitchens and breakfast nooks, reserving bow windows for living rooms and master bedrooms where their sweeping curves complement larger spaces.</p>
            </div>

            <div className={styles.section}>
              <h2>Adding Square Footage Without Major Construction</h2>
              <p>Bay and bow windows represent one of the most cost-effective ways to increase your Plano home&apos;s usable square footage. The projection—typically 12-24 inches beyond your exterior wall—creates alcove space that serves numerous functions. Transform this area into a cozy window seat with storage beneath. Create a breakfast nook complete with built-in bench seating. Design a home office workspace with natural light that reduces eye strain. Showcase your plant collection in a sun-drenched display. House your extensive book collection in custom shelving that wraps the window. Unlike room additions that require foundation work, framing, and extensive construction, bay and bow windows install much like standard window replacements while delivering genuine additional living space.</p>
            </div>

            <div className={styles.section}>
              <h2>Panoramic Views and Natural Light</h2>
              <p>The angular or curved arrangement of bay and bow windows captures views from multiple directions simultaneously. In a standard flat window, you see only what&apos;s directly in front. Bay and bow windows let you observe your front yard, street, and neighboring properties all at once—like having wraparound views without moving. This expansive visibility makes rooms feel connected to the outdoors while flooding interiors with natural light from multiple angles. The angled side windows capture morning or afternoon sun even when the center window doesn&apos;t face the sun directly. For corner lot homes in Plano, bay or bow windows placed strategically can capture views in three directions, maximizing the advantages of your lot&apos;s orientation.</p>
            </div>

            <div className={styles.section}>
              <h2>Curb Appeal That Commands Attention</h2>
              <p>Few home improvements make as dramatic an exterior statement as bay or bow windows. They create three-dimensional architectural interest on otherwise flat facades, adding depth and character that catches the eye. Traditional homes gain charm and period authenticity. Ranch-style homes acquire visual interest that breaks up long, horizontal lines. Contemporary designs benefit from the geometric interplay between the projection and the flat wall. The impact extends beyond the windows themselves—the roof above the projection (often copper or shingle) becomes an architectural detail, while the foundation beneath may incorporate brick, stone, or decorative skirting. This complexity transforms a simple window replacement into a signature design element that elevates your entire home&apos;s appearance.</p>
            </div>

            <div className={styles.section}>
              <h2>Structural Considerations and Professional Installation</h2>
              <p>Bay and bow windows require more complex installation than standard windows because they project beyond your home&apos;s structure. The assembly must be properly supported from below (typically with knee braces or posts extending to the foundation) and weatherproofed above with a dedicated roof structure. The side walls where the window meets your home&apos;s exterior require careful flashing and sealing to prevent water infiltration. Interior finishing includes soffit work beneath the window and trim work at the sides. This complexity makes professional installation absolutely essential—improper installation can lead to structural issues, water damage, or energy efficiency problems. Our certified installers have completed hundreds of bay and bow window projects throughout Plano, ensuring your investment performs flawlessly for decades.</p>
            </div>

            <div className={styles.section}>
              <h2>Customization Options and Configurations</h2>
              <p>Bay and bow windows offer extensive customization to match your home&apos;s style and your functional needs. Choose between casement or double-hung side windows based on your ventilation preferences. Select roof styles including shed, gable, or hip configurations that complement your home&apos;s architecture. Specify interior finishing details including window seats with storage, shelving, or simply finished alcoves. Decide on seat depth—deeper projections create more dramatic spaces but require more structural support. Select from vinyl, wood, fiberglass, or hybrid frame materials that balance aesthetics, maintenance, and budget considerations. This flexibility ensures your bay or bow window becomes a custom feature tailored to your Plano home rather than a one-size-fits-all addition.</p>
            </div>

            <div className={styles.featuresGrid}>
              <h2>Features and Benefits</h2>
              <ul>
                <li>Adds 12-24 inches of interior space</li>
                <li>Panoramic views from multiple angles</li>
                <li>Increases natural light from multiple directions</li>
                <li>Creates dramatic curb appeal and exterior interest</li>
                <li>Perfect for window seats and reading nooks</li>
                <li>Available in three, four, five, or six-window configurations</li>
                <li>Choose casement or double-hung side windows</li>
                <li>Custom interior finishing options</li>
                <li>Multiple roof style choices</li>
                <li>Extensive frame material options</li>
              </ul>
            </div>

            <div className={styles.faqSection}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqItem}>
                <h3>How much does a bay or bow window cost?</h3>
                <p>Bay and bow windows with installation typically range from $2,500-$6,000, depending on size, configuration, frame material, and glass options. Everything is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to $3500 per window depending on frame material, like wood clad windows. We do not sell windows without installation.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can bay or bow windows be added to any home?</h3>
                <p>Most homes can accommodate bay or bow windows, but structural feasibility varies by wall construction, foundation type, and clearance from property lines. We provide free consultations to assess your specific situation and recommend appropriate configurations.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do bay and bow windows increase energy bills?</h3>
                <p>Not if properly installed and specified. Modern bay and bow windows with quality glass packages often improve energy efficiency compared to old flat windows they replace, despite their larger glass area. Proper installation and insulation of the projection are critical.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How long does bay or bow window installation take?</h3>
                <p>A typical bay or bow window installation requires 1-2 days, depending on the complexity and any required structural modifications. This includes exterior siding work, interior finishing, and complete cleanup. We coordinate all aspects so you only work with one company from start to finish.</p>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <h2>Ready to Upgrade Your Windows?</h2>
              <p>Get a free consultation and estimate for bay and bow window replacement in Plano, TX.</p>
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
