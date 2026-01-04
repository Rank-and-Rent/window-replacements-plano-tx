import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { SocialBar, ContactSection } from '@/components/footer'
import { brandsData } from '@/data'
import styles from './brands.module.css'

export const metadata: Metadata = {
  title: 'Premium Window & Door Brands Plano TX | Andersen, Pella, JELD-WEN, Marvin',
  description: 'Premium window and door brands in Plano, TX. Andersen, Pella, JELD-WEN, and Marvin. Professional installation. Call 945-207-3988.',
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

        {/* Brand Partners Banner */}
        <section className={styles.brandBanner}>
          <div className={styles.brandBannerContainer}>
            <div className={styles.brandLogosWrapper}>
              <Link href="/brands/andersen-windows-doors" className={styles.brandLogoLink}>
                <img
                  src="/andersen-windows-and-doors-plano-tx-logo.png"
                  alt="Andersen Windows & Doors"
                  className={styles.brandLogo}
                />
              </Link>
              <Link href="/brands/pella-windows-doors" className={styles.brandLogoLink}>
                <img
                  src="/pella-windows-and-doors-plano-tx-logo.png"
                  alt="Pella Windows & Doors"
                  className={styles.brandLogo}
                />
              </Link>
              <Link href="/brands/jeld-wen-windows-doors" className={styles.brandLogoLink}>
                <img
                  src="/jeld-wen-windows-and-doors-plano-tx-logo.png"
                  alt="Jeld-Wen Windows & Doors"
                  className={styles.brandLogo}
                />
              </Link>
              <Link href="/brands/marvin-windows-doors" className={styles.brandLogoLink}>
                <img
                  src="/marvin-windows-and-doors-plano-tx-logo.png"
                  alt="Marvin Windows & Doors"
                  className={styles.brandLogo}
                />
              </Link>
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
