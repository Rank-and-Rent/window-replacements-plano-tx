import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer, { SocialBar, ContactSection } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Window Replacement Garland TX | Expert Installation Services',
  description: 'Professional window replacement in Garland, Texas. Serving Rowlett, Sachse, and all Garland neighborhoods. Premium Andersen, Pella & Jeld-Wen windows. Call 945-207-3988.',
}

export default function GarlandPage() {
  return (
    <>
      <Header />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-garland-tx.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Garland, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Serving Garland with premium replacement windows. From historic homes to modern developments, we deliver quality installations backed by manufacturer warranties.
          </p>
          <a href="/contact" className="btn-white">
            Get Quote
          </a>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img
                src="/locations/window-replacement-garland-tx.jpg"
                alt="Garland window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Window expertise for Garland's communities
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Garland's diverse neighborhoods create unique opportunities for window replacement projects. From established residential areas to newer developments, we understand the architectural diversity that makes each home unique. Our experienced team brings specialized knowledge for Garland's building styles and homeowner preferences.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                The city's location creates specific climate considerations. Garland homes benefit from enhanced energy-efficient solutions that address local weather patterns and solar exposure. We ensure optimal energy efficiency and comfort throughout your Garland home.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                As a locally-based company, we take pride in serving our Garland neighbors. Our transparent pricing, professional installations, and comprehensive warranties have made us the trusted choice for window replacement throughout Garland's communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Garland neighborhoods we serve
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North Garland</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Firewheel</li>
                <li>New Century</li>
                <li>Rosehill</li>
                <li>Garland Heights</li>
                <li>Spring Park</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central Garland</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Garland Town Center</li>
                <li>Downtown Garland</li>
                <li>Garland Oaks</li>
                <li>Montclair</li>
                <li>Broadway Heights</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South Garland</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Rowlett</li>
                <li>Sachse</li>
                <li>Lakeview</li>
                <li>Pleasant Valley</li>
                <li>Kingsley Manor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Garland climate and window performance
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Energy Efficiency Focus</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Texas climate extremes demand windows that perform in both scorching summers and occasional winter chills. Garland homes benefit from advanced Low-E glass technology that maximizes natural light while minimizing heat transfer. This creates comfortable living spaces with reduced energy costs year-round.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Our window specifications account for Garland's specific solar exposure patterns and weather patterns. Whether your home faces prevailing winds or direct afternoon sun, we recommend solutions that optimize comfort, energy efficiency, and long-term performance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Quality & Durability</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Premium window brands like Andersen, Pella, and Jeld-Wen offer superior construction and materials that withstand Texas weather. Our factory-trained installers ensure proper installation for maximum performance and longevity.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Comprehensive warranties back every installation. We stand behind our work and the quality of the products we install, giving Garland homeowners peace of mind for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            Garland's trusted window replacement experts
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you're updating an established Garland home or outfitting a new construction project, we bring the specialized expertise your project demands. Factory-trained installers, transparent pricing, and unwavering commitment to quality define every installation we complete in Garland.
          </p>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Transform your Garland home with premium windows
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule your complimentary consultation. We'll evaluate your Garland property, recommend optimal window solutions, and provide detailed pricing with no sales pressure.
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

      <Footer />
    </>
  )
}