import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { SocialBar, ContactSection } from '@/components/footer'
import { brandsData } from '@/data'
import styles from './brands.module.css'

export const metadata: Metadata = {
  title: 'Premium Window & Door Brands Plano TX | Andersen, Pella, JELD-WEN, Marvin',
  description: 'Authorized dealer for premium window and door brands in Plano, TX. Andersen, Pella, JELD-WEN, and Marvin. Professional installation. Call 945-207-3988.',
  keywords: 'window brands Plano TX, Andersen, Pella, JELD-WEN, Marvin, premium windows, premium doors',
}

export default function BrandsPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1>Window Replacement Brands in Plano, TX</h1>
            <p className={styles.heroSubtitle}>
              We partner with the industry&apos;s leading manufacturers to bring Plano homeowners
              the finest quality windows and doors available. Each brand offers unique benefits
              tailored to different needs and preferences.
            </p>
          </div>
        </section>

        {/* Prominent Brand Logos */}
        <section className="py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-light text-gray-800 mb-4">
                Trusted Premium Brands
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We proudly partner with industry-leading manufacturers to provide Plano homeowners with the finest quality windows and doors
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              <Link href="/brands/andersen-windows-doors" className="group">
                <div className="bg-white rounded-xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <img
                    src="/andersen-windows-and-doors-logo.png"
                    alt="Andersen Windows & Doors"
                    className="h-12 lg:h-16 w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </Link>

              <Link href="/brands/pella-windows-doors" className="group">
                <div className="bg-white rounded-xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <img
                    src="/Pella-Corp-Windows-Doors-Logo-2x1-1.png"
                    alt="Pella Windows & Doors"
                    className="h-12 lg:h-16 w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </Link>

              <Link href="/brands/jeld-wen-windows-doors" className="group">
                <div className="bg-white rounded-xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <img
                    src="/jeld-wen-windows-and-doors-logo.png"
                    alt="Jeld-Wen Windows & Doors"
                    className="h-12 lg:h-16 w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </Link>

              <Link href="/brands/marvin-windows-doors" className="group">
                <div className="bg-white rounded-xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <img
                    src="/Marvin-LOCKUP-CMYK-898x301.png"
                    alt="Marvin Windows & Doors"
                    className="h-12 lg:h-16 w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </Link>
            </div>

            <div className="text-center mt-12">
              <p className="text-sm text-gray-500 mb-4">Click any logo to learn more about each brand</p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.brandsSection}>
          <div className={styles.container}>
            <div className={styles.brandsGrid}>
              {brandsData.map((brand) => (
                <Link
                  key={brand.slug}
                  href={brand.route}
                  className={styles.brandCard}
                >
                  <h2 className={styles.brandName}>{brand.name}</h2>
                  <p className={styles.brandDescription}>{brand.description}</p>
                  <span className={styles.learnMore}>Learn More</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.whySection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Why Choose Premium Brands</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3>Superior Energy Efficiency</h3>
                <p>
                  Premium brands use advanced glass coatings and insulation technology
                  to significantly reduce your energy bills.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Comprehensive Warranties</h3>
                <p>
                  Top manufacturers stand behind their products with extensive warranty
                  coverage for peace of mind.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Texas-Tested Durability</h3>
                <p>
                  These products are designed to withstand extreme heat, UV exposure,
                  and the occasional severe weather Texas brings.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <h2>Ready to Explore Your Options?</h2>
              <p>Get a free consultation to discuss which brand is right for your Plano home.</p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.btnPrimary}>Get Free Estimate</Link>
                <a href="tel:945-207-3988" className={styles.btnSecondary}>Call 945-207-3988</a>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
        <SocialBar />
      </main>
      <Footer />
    </>
  )
}
