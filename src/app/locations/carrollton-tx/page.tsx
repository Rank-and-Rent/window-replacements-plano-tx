import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { ContactSection } from '@/components/footer'
import styles from '../locations.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Carrollton TX | Expert Installation Services',
  description: 'Professional window replacement in Carrollton, Texas. Serving Carrollton neighborhoods, and all Carrollton neighborhoods. Premium Andersen, Pella & Jeld-Wen windows. Call 945-207-3988.',
}

export default function CarrolltonPage() {
  return (
    <>
      <Header />
      <main>
        <nav className={styles.breadcrumbs}>
          <div className={styles.container}>
            <ol>
              <li><Link href="/">Home</Link></li>
              <li>/</li>
              <li><Link href="/locations">Locations</Link></li>
              <li>/</li>
              <li>Carrollton, TX</li>
            </ol>
          </div>
        </nav>

        <section className={styles.hero} style={{ backgroundImage: 'url(/locations/window-replacement-carrollton-tx-3.jpg)' }}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Window Replacement in Carrollton, TX</h1>
            <p>Serving Carrollton with premium replacement windows. From historic homes to modern developments, we deliver quality installations backed by manufacturer warranties.</p>
            <div className={styles.heroCta}>
              <Link href="/contact" className={styles.btnPrimary}>Get Free Estimate</Link>
              <a href="tel:945-207-3988" className={styles.btnSecondary}>Call 945-207-3988</a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.grid}>
              <div className={styles.imageCol}>
                <img
                  src="/locations/window-replacement-carrollton-tx-3.jpg"
                  alt="Carrollton window replacement"
                  className={styles.locationImage}
                />
              </div>

              <div className={styles.textCol}>
                <h2>Window expertise for Carrollton's communities</h2>
                <p>Carrollton's diverse neighborhoods create unique opportunities for window replacement projects. From established residential areas to newer developments, we understand the architectural diversity that makes each home unique. Our experienced team brings specialized knowledge for Carrollton's building styles and homeowner preferences.</p>
                <p>The city's location creates specific climate considerations. Carrollton homes benefit from enhanced energy-efficient solutions that address local weather patterns and solar exposure. We ensure optimal energy efficiency and comfort throughout your Carrollton home.</p>
                <p>As a locally-based company, we take pride in serving our Carrollton neighbors. Our transparent pricing, professional installations, and comprehensive warranties have made us the trusted choice for window replacement throughout Carrollton's communities.</p>
              </div>
            </div>
          </div>
        </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Carrollton neighborhoods we serve
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North Carrollton</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Craig Ranch</li>
                <li>Eldorado</li>
                <li>Trinity Falls</li>
                <li>Chestnut Ridge</li>
                <li>Twin Creeks</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central Carrollton</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Carrollton Town Center</li>
                <li>Downtown Carrollton</li>
                <li>Chestnut Square</li>
                <li>Vista Ridge</li>
                <li>Fairview</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South Carrollton</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Stonebridge Ranch</li>
                <li>Kings Ridge</li>
                <li>Lake Forest</li>
                <li>Watters Creek</li>
                <li>Providence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Carrollton climate and window performance
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Energy Efficiency Focus</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Texas climate extremes demand windows that perform in both scorching summers and occasional winter chills. Carrollton homes benefit from advanced Low-E glass technology that maximizes natural light while minimizing heat transfer. This creates comfortable living spaces with reduced energy costs year-round.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Our window specifications account for Carrollton's specific solar exposure patterns and weather patterns. Whether your home faces prevailing winds or direct afternoon sun, we recommend solutions that optimize comfort, energy efficiency, and long-term performance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Quality & Durability</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Premium window brands like Andersen, Pella, and Jeld-Wen offer superior construction and materials that withstand Texas weather. Our factory-trained installers ensure proper installation for maximum performance and longevity.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Comprehensive warranties back every installation. We stand behind our work and the quality of the products we install, giving Carrollton homeowners peace of mind for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            Carrollton's trusted window replacement experts
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you're updating an established Carrollton home or outfitting a new construction project, we bring the specialized expertise your project demands. Factory-trained installers, transparent pricing, and unwavering commitment to quality define every installation we complete in Carrollton.
          </p>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Transform your Carrollton home with premium windows
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule your complimentary consultation. We'll evaluate your Carrollton property, recommend optimal window solutions, and provide detailed pricing with no sales pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-outline-dark">
              Book Consultation
            </a>
            <a href="tel:945-207-3988" className="btn-dark">
              Call 945-207-3988
            </a>
          </div>
        </div>
        </section>
      </main>

      <Footer />
    </>
  )
}