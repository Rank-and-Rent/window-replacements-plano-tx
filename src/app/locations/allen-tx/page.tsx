import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer, { SocialBar, ContactSection } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Window Replacement Allen TX | Expert Installation Services',
  description: 'Professional window replacement in Allen, Texas. Serving Twin Creeks, Watters Creek, and all Allen neighborhoods. Premium Andersen, Pella & Jeld-Wen windows. Call 945-207-3988.',
}

export default function AllenPage() {
  return (
    <>
      <Header />

      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/locations/window-replacement-allen-tx.jpg)',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Window Replacement in Allen, TX
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
            Serving Allen with premium replacement windows. From historic homes to modern developments, we deliver quality installations backed by manufacturer warranties.
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
                src="/locations/window-replacement-allen-tx.jpg"
                alt="Allen window replacement"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-6">
                Window expertise for Allen's communities
              </h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                Allen's diverse neighborhoods create unique opportunities for window replacement projects. From established residential areas to newer developments, we understand the architectural diversity that makes each home unique. Our experienced team brings specialized knowledge for Allen's building styles and homeowner preferences.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed mb-6">
                The city's location creates specific climate considerations. Allen homes benefit from enhanced energy-efficient solutions that address local weather patterns and solar exposure. We ensure optimal energy efficiency and comfort throughout your Allen home.
              </p>
              <p className="text-charcoal-600 text-base leading-relaxed">
                As a locally-based company, we take pride in serving our Allen neighbors. Our transparent pricing, professional installations, and comprehensive warranties have made us the trusted choice for window replacement throughout Allen's communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-16">
            Allen neighborhoods we serve
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">North Allen</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Twin Creeks</li>
                <li>Watters Creek</li>
                <li>Suncreek</li>
                <li>Lone Star Ranch</li>
                <li>Maxwell Creek</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">Central Allen</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Allen Town Center</li>
                <li>Custer Park</li>
                <li>Festival Park</li>
                <li>Quail Run</li>
                <li>River Crest</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal-900 mb-3">South Allen</h3>
              <ul className="text-charcoal-600 space-y-1">
                <li>Star Creek</li>
                <li>Allen Station</li>
                <li>Lost Creek</li>
                <li>Waterford Oaks</li>
                <li>Greens of Allen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-12">
            Allen climate and window performance
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Energy Efficiency Focus</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Texas climate extremes demand windows that perform in both scorching summers and occasional winter chills. Allen homes benefit from advanced Low-E glass technology that maximizes natural light while minimizing heat transfer. This creates comfortable living spaces with reduced energy costs year-round.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Our window specifications account for Allen's specific solar exposure patterns and weather patterns. Whether your home faces prevailing winds or direct afternoon sun, we recommend solutions that optimize comfort, energy efficiency, and long-term performance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light text-charcoal-900 mb-4">Quality & Durability</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Premium window brands like Andersen, Pella, and Jeld-Wen offer superior construction and materials that withstand Texas weather. Our factory-trained installers ensure proper installation for maximum performance and longevity.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Comprehensive warranties back every installation. We stand behind our work and the quality of the products we install, giving Allen homeowners peace of mind for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal-500">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-white font-light mb-8">
            Allen's trusted window replacement experts
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you're updating an established Allen home or outfitting a new construction project, we bring the specialized expertise your project demands. Factory-trained installers, transparent pricing, and unwavering commitment to quality define every installation we complete in Allen.
          </p>
        </div>
      </section>

      <section className="py-24 bg-stone-100">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">
            Transform your Allen home with premium windows
          </h2>
          <p className="text-charcoal-600 mb-10">
            Schedule your complimentary consultation. We'll evaluate your Allen property, recommend optimal window solutions, and provide detailed pricing with no sales pressure.
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